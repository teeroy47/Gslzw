export const companyProfile = {
  name: 'Geoscience Laboratory (Pvt) Ltd',
  shortName: 'Geosciencelab',
  motto: 'Maintaining a standard of quality and good workmanship since 2006',
  foundedYear: 2006,
  teamSize: 10,
  bases: ['Norton', 'Harare'],
  specialities: [
    'Soil testing',
    'Foundation and pavement design',
    'Binder distribution calibration',
    'Project management'
  ],
  phones: ['+263 775 988 807', '+263 733 778 119'],
  emails: [
    'geosciencelaboratory@gmail.com',
    'karingemaxwell@gmail.com'
  ],
  website: 'www.geosciencelab.co.zw',
  registeredOffice: [
    'Suite 18 Foundation Mutual House',
    'Kwame Nkrumah / Kaguvi Street',
    'Harare'
  ],
  laboratoryAddress: ['Stand No. 534', 'South Road', 'Norton'],
  postalAddress: ['P.O. Box 1116', 'Kopje', 'Harare'],
  vision:
    'To be a consistent and most preferred provider of soil testing laboratory services in Zimbabwe and beyond.',
  mission:
    'Drawing on years of civil engineering experience, our professional team strives to provide clients with dependable technical support and lasting satisfaction.',
  leadership: {
    managingDirector: 'Maxwell Changa Karinge',
    managingDirectorExperience: 35,
    administrator: 'P.K. Changachirere'
  },
  organisations: [
    'British Embassy',
    'Zimplats',
    'Unki',
    'Mimosa Mine',
    'Delta Beverages',
    'Shelter Zimbabwe',
    "Women's University",
    'Econet Wireless'
  ],
  projects: [
    'Nyabira Dam geotechnical investigation and DCP testing',
    'British Embassy cube tests and moisture sampling',
    'Zimplats road rehabilitation testing and shoulder widening',
    'Unki housing geotechnical testing and road supervision',
    'Women’s University access road site investigations',
    'Econet Wireless Nembudziya densities and cube tests',
    'Mimosa Mine quality control and dam rehabilitation',
    'Delta Beverages warehouse and workshop cube tests'
  ]
};

export const operatingYears = new Date().getFullYear() - companyProfile.foundedYear;
