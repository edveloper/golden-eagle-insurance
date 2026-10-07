// Every third-party photo on the site, shown on /credits. Add an entry whenever a photo is added.
// Sources: Pexels (Pexels License: free use, credit given anyway) and Wikimedia Commons (Creative Commons).
// CC BY-SA images are adapted (resized, navy colour treatment in heroes); adaptations are shared under the same licence.

export type ImageCredit = {
  file: string
  title: string
  author: string
  license: "Pexels License" | "CC BY 2.0" | "CC BY-SA 3.0" | "CC BY-SA 4.0"
  source: string
  usedOn: string
}

export const LICENSE_URLS: Record<ImageCredit["license"], string> = {
  "Pexels License": "https://www.pexels.com/license/",
  "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/",
  "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/",
  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
}

export const IMAGE_CREDITS: ImageCredit[] = [
  {
    file: "/images/hero-home-skyline.jpg",
    title: "Explore the vibrant skyline of Nairobi with its modern skyscrapers under an overcast sky.",
    author: "Mukula Igavinchi",
    license: "Pexels License",
    source: "https://www.pexels.com/photo/clouds-over-city-15496531/",
    usedOn: "Home",
  },
  {
    file: "/images/hero-about-golden-hour.jpg",
    title: "Aerial view of the Nairobi skyline from the KICC rooftop at golden hour",
    author: "Lebu Ayiga",
    license: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_the_Nairobi_skyline_from_the_KICC_rooftop_at_golden_hour.jpg",
    usedOn: "About",
  },
  {
    file: "/images/hero-insurance-kicc-trees.jpg",
    title: "Nairobi skyline P1000020",
    author: "Lmwangi",
    license: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Nairobi_skyline_P1000020.jpg",
    usedOn: "Insurance",
  },
  {
    file: "/images/hero-advisory-blue-hour.jpg",
    title: "Breathtaking view of Nairobi's skyline during twilight, showcasing vibrant city lights.",
    author: "Ken Mwaura",
    license: "Pexels License",
    source: "https://www.pexels.com/photo/stunning-nairobi-skyline-at-dusk-29069329/",
    usedOn: "Advisory",
  },
  {
    file: "/images/cover-professional-indemnity.jpg",
    title: "Black male doctor in a lab coat writing notes at a wooden desk in a medical office.",
    author: "Tima Miroshnichenko",
    license: "Pexels License",
    source: "https://www.pexels.com/photo/a-man-in-white-coat-writing-at-the-table-5452222/",
    usedOn: "Home, Insurance",
  },
  {
    file: "/images/cover-medical.jpg",
    title: "Doctors and nurse discussing medical charts in hospital setting.",
    author: "RDNE Stock project",
    license: "Pexels License",
    source: "https://www.pexels.com/photo/doctor-reading-a-medical-chart-held-by-a-nurse-6129154/",
    usedOn: "Home, Insurance",
  },
  {
    file: "/images/cover-life-pension.jpg",
    title: "Full body of cheerful African American parents with children looking at camera while\u2026",
    author: "Monstera Production",
    license: "Pexels License",
    source: "https://www.pexels.com/photo/smiling-black-family-resting-on-couch-7114420/",
    usedOn: "Home, Insurance",
  },
  {
    file: "/images/cover-home-mombasa.jpg",
    title: "A serene beachfront house in Mombasa, Kenya, surrounded by palm trees and lush greenery.",
    author: "Royal Wave ENT",
    license: "Pexels License",
    source: "https://www.pexels.com/photo/house-among-palm-trees-20693413/",
    usedOn: "Home, Insurance",
  },
  {
    file: "/images/cover-business-nairobi.jpg",
    title: "African woman sitting confidently in a Nairobi market, wearing sunglasses and an apron.",
    author: "David Iloba",
    license: "Pexels License",
    source: "https://www.pexels.com/photo/a-woman-wearing-sunglasses-pointing-at-her-cheek-7132912/",
    usedOn: "Home, Insurance",
  },
  {
    file: "/images/cover-travel.jpg",
    title: "Full length of happy African American male in stylish classy gray clothes with\u2026",
    author: "Gustavo Fring",
    license: "Pexels License",
    source: "https://www.pexels.com/photo/stylish-man-with-suitcase-and-passport-walking-along-airport-corridor-4173219/",
    usedOn: "Home, Insurance",
  },
  {
    file: "/images/cover-cyber.jpg",
    title: "Security officer seated in a dimly lit control room, analyzing multiple surveillance\u2026",
    author: "AMORIE SAM",
    license: "Pexels License",
    source: "https://www.pexels.com/photo/security-officer-in-dark-control-room-with-monitors-30692441/",
    usedOn: "Home, Insurance",
  },
  {
    file: "/images/goal-education.jpg",
    title: "Joyful graduate wearing cap and gown at an outdoor ceremony.",
    author: "Kiptoo Addi",
    license: "Pexels License",
    source: "https://www.pexels.com/photo/smiling-woman-wearing-a-graduation-gown-14723869/",
    usedOn: "Advisory",
  },
  {
    file: "/images/goal-retirement-couple.jpg",
    title: "Elegant indoor scene of a couple enjoying a morning, reading and drinking coffee.",
    author: "cottonbro studio",
    license: "Pexels License",
    source: "https://www.pexels.com/photo/elegant-couple-sitting-in-a-living-room-6269977/",
    usedOn: "Advisory",
  },
  {
    file: "/images/goal-wealth-upper-hill.jpg",
    title: "Aerial view of Nairobi's modern skyline and expressway under cloudy skies.",
    author: "Mukula Igavinchi",
    license: "Pexels License",
    source: "https://www.pexels.com/photo/clouds-over-highway-in-city-15496542/",
    usedOn: "Advisory",
  },
]
