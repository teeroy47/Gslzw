import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Variants } from 'motion/react';
import {
  Bot,
  Brain,
  Calculator,
  ChevronDown,
  Code,
  MapPin,
  MessageSquare,
  PhoneCall,
  Send,
  Sparkles,
  X,
  Zap
} from 'lucide-react';
import { companyProfile } from '../companyProfile';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { cn } from './ui/utils';

type Agent = {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  status: 'online' | 'busy' | 'offline';
  icon: typeof Sparkles;
  gradient: string;
};

type ChatMessage = {
  role: 'assistant' | 'user';
  content: string;
};

const AI_AGENTS: Agent[] = [
  {
    id: 'gsl-assistant',
    name: 'GSL Assistant',
    role: 'Business and Quote Support',
    status: 'online',
    icon: Sparkles,
    gradient: 'from-[#8DBF44]/30 to-emerald-400/10'
  },
  {
    id: 'quote-builder',
    name: 'Quote Builder',
    role: 'Project Scope Guidance',
    status: 'online',
    icon: Calculator,
    gradient: 'from-[#8DBF44]/20 to-[#24336A]/20'
  },
  {
    id: 'technical-desk',
    name: 'Technical Desk',
    role: 'Testing and Standards',
    status: 'busy',
    icon: Brain,
    gradient: 'from-sky-500/20 to-cyan-400/10'
  },
  {
    id: 'field-support',
    name: 'Field Support',
    role: 'Site Operations',
    status: 'online',
    icon: Zap,
    gradient: 'from-amber-500/20 to-orange-400/10'
  }
];

const quickQuestions = [
  'What services do you offer?',
  'Where are you based?',
  'How do I request a quote?',
  'Which projects have you worked on?'
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 24,
      stiffness: 280,
      staggerChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
};

const messageVariants: Variants = {
  hidden: { opacity: 0, y: 10, x: -10 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type: 'spring', stiffness: 500, damping: 30 }
  }
};

function getAssistantReply(question: string) {
  const normalized = question.toLowerCase();

  if (normalized.includes('service')) {
    return `We support ${companyProfile.specialities.join(', ')}. We also handle quality control testing for active civil engineering projects.`;
  }

  if (normalized.includes('based') || normalized.includes('where')) {
    return `We operate from ${companyProfile.bases.join(' and ')}. Our laboratory address is ${companyProfile.laboratoryAddress.join(', ')}.`;
  }

  if (normalized.includes('quote')) {
    return 'To prepare a quote, share your project location, service required, expected testing scope, target start date, and your contact details. You can also jump to the contact section and send those details directly.';
  }

  if (normalized.includes('project') || normalized.includes('worked')) {
    return `We have supported organisations including ${companyProfile.organisations.slice(0, 5).join(', ')} and other infrastructure, housing and mining projects across Zimbabwe.`;
  }

  return 'I can help with services, project scope, locations, and quote preparation. Ask a question or use the quick prompts below.';
}

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(AI_AGENTS[0].id);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        'Hello. I can answer Geosciencelab business questions and help you prepare a project quote.'
    }
  ]);

  const currentAgent = AI_AGENTS.find((agent) => agent.id === selectedAgent) ?? AI_AGENTS[0];
  const AgentIcon = currentAgent.icon;

  const quoteChecklist = useMemo(
    () => [
      'Project location',
      'Service required',
      'Estimated testing scope',
      'Expected start date',
      'Your contact details'
    ],
    []
  );

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: 'user', content: trimmed },
      { role: 'assistant', content: getAssistantReply(trimmed) }
    ]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-4">
      <AnimatePresence>
        {open && (
          <motion.div
            key="gsl-chat-window"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-[380px] overflow-hidden rounded-2xl border border-white/10 bg-[#0f1733]/82 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl ring-1 ring-white/10"
          >
            <div className="relative overflow-hidden border-b border-white/10 bg-white/5 p-4">
              <div className={cn('absolute inset-0 bg-gradient-to-br opacity-70', currentAgent.gradient)} />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10 border-2 border-white/15 shadow-sm">
                      <AvatarImage src={currentAgent.avatar} alt={currentAgent.name} />
                      <AvatarFallback className="bg-[#8DBF44] font-semibold text-[#24336A]">
                        GSL
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className={cn(
                        'absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#0f1733]',
                        currentAgent.status === 'online'
                          ? 'bg-emerald-500'
                          : currentAgent.status === 'busy'
                            ? 'bg-amber-500'
                            : 'bg-slate-400'
                      )}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{currentAgent.name}</h3>
                    <p className="text-xs text-white/65">{currentAgent.role}</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full text-white hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="border-b border-white/10 p-3">
              <div className="relative">
                <select
                  value={selectedAgent}
                  onChange={(event) => setSelectedAgent(event.target.value)}
                  className="h-12 w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 pr-10 text-sm font-medium text-white outline-none transition focus:border-[#8DBF44]/50"
                >
                  {AI_AGENTS.map((agent) => (
                    <option key={agent.id} value={agent.id} className="bg-[#101936] text-white">
                      {agent.name} - {agent.role}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/55" />
              </div>
            </div>

            <div className="flex h-[320px] flex-col gap-4 overflow-y-auto bg-gradient-to-b from-white/[0.03] to-transparent p-4">
              <motion.div variants={messageVariants} className="flex gap-3">
                <Avatar className="h-8 w-8 border border-white/10 shadow-sm">
                  <AvatarImage src={currentAgent.avatar} alt={currentAgent.name} />
                  <AvatarFallback className="bg-[#8DBF44]/15 text-[#8DBF44]">AI</AvatarFallback>
                </Avatar>
                <div className="flex max-w-[85%] flex-col gap-1">
                  <span className="text-xs font-medium text-white/55">{currentAgent.name}</span>
                  <div className="rounded-2xl rounded-tl-none border border-white/10 bg-white/6 px-4 py-2.5 text-sm text-white/85 shadow-sm backdrop-blur-sm">
                    <p>{messages[0]?.content}</p>
                  </div>
                </div>
              </motion.div>

              {messages.slice(1).map((message, index) =>
                message.role === 'assistant' ? (
                  <motion.div
                    key={`assistant-${index}`}
                    variants={messageVariants}
                    className="flex gap-3"
                  >
                    <Avatar className="h-8 w-8 border border-white/10 shadow-sm">
                      <AvatarFallback className="bg-[#8DBF44]/15 text-[#8DBF44]">AI</AvatarFallback>
                    </Avatar>
                    <div className="flex max-w-[85%] flex-col gap-1">
                      <span className="text-xs font-medium text-white/55">{currentAgent.name}</span>
                      <div className="rounded-2xl rounded-tl-none border border-white/10 bg-white/6 px-4 py-2.5 text-sm text-white/85 shadow-sm">
                        <p>{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`user-${index}`}
                    variants={messageVariants}
                    className="flex flex-row-reverse gap-3 self-end"
                  >
                    <Avatar className="h-8 w-8 border border-white/10 shadow-sm">
                      <AvatarFallback className="bg-[#8DBF44] font-semibold text-[#24336A]">
                        ME
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex max-w-[85%] flex-col items-end gap-1">
                      <div className="rounded-2xl rounded-tr-none bg-[#8DBF44] px-4 py-2.5 text-sm text-[#24336A] shadow-md">
                        <p>{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              )}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="mb-3 flex items-center gap-2">
                  <AgentIcon className="h-4 w-4 text-[#8DBF44]" />
                  <p className="text-sm font-semibold text-white">Quote helper</p>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  {quoteChecklist.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => sendMessage(question)}
                      className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/78 transition hover:border-[#8DBF44]/40 hover:text-white"
                    >
                      {question}
                    </button>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#8DBF44] px-4 py-2 text-sm font-semibold text-[#24336A]"
                  >
                    <Send className="h-4 w-4" />
                    Build quote
                  </a>
                  <a
                    href={`tel:${companyProfile.phones[0].replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/78"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Call
                  </a>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/78">
                    <MapPin className="h-4 w-4" />
                    {companyProfile.bases.join(' / ')}
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="border-t border-white/10 bg-white/[0.03] p-3 backdrop-blur-md">
              <form
                className="flex items-center gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage(input);
                }}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={`Message ${currentAgent.name}...`}
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#8DBF44]/50 focus:bg-white/[0.08]"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-[#8DBF44] text-[#24336A] shadow-lg transition-transform hover:scale-105 hover:bg-[#99ca50]"
                  disabled={!input.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 1, duration: 0.4 }}
        onClick={() => setOpen((current) => !current)}
        className={cn(
          'assistant-pulse relative flex h-16 w-16 items-center justify-center rounded-full bg-[#8DBF44] text-white shadow-[0_18px_40px_rgba(36,51,106,0.35)] transition-all duration-300 hover:bg-[#7aac3a]',
          open && 'bg-[#7aac3a]'
        )}
        aria-label="Open GSL assistant"
      >
        {open ? <X className="h-7 w-7" /> : <Bot className="h-7 w-7" />}
      </motion.button>

      <style>{`
        @keyframes assistant-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(141, 191, 68, 0.7);
          }
          70% {
            box-shadow: 0 0 0 16px rgba(141, 191, 68, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(141, 191, 68, 0);
          }
        }

        .assistant-pulse {
          animation: assistant-ring 2.5s infinite;
        }
      `}</style>
    </div>
  );
}
