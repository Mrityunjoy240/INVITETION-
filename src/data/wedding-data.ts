export interface EventItem {
  id: string;
  bengaliTitle: string;
  englishTitle: string;
  timeDisplayBn: string;
  timeDisplayEn: string;
  startTime: string; // ISO
  endTime: string; // ISO
  descriptionBn: string;
  descriptionEn: string;
  image: string;
  icsFile: string;
  googleCalendarUrl: string;
}

export interface FamilyMember {
  relationBn: string;
  relationEn: string;
  nameBn: string;
  nameEn: string;
}

export interface FamilySide {
  sideBn: string;
  sideEn: string;
  memberTypeBn: string;
  memberTypeEn: string;
  personNameBn: string;
  personNameEn: string;
  members: FamilyMember[];
  ancestralHomeBn?: string;
  ancestralHomeEn?: string;
  presentHomeBn: string;
  presentHomeEn: string;
}

export const WEDDING_DATA = {
  couple: {
    bride: {
      firstName: "Anamika",
      bengaliName: "অনামিকা",
      fullNameEn: "Anamika Kapat",
      fullNameBn: "অনামিকা কপাট",
    },
    groom: {
      firstName: "Subhadip",
      bengaliName: "শুভদীপ",
      fullNameEn: "Subhadip Bhunya",
      fullNameBn: "শুভদীপ ভূঞ্যা",
    },
  },
  date: {
    isoDate: "2026-12-13T16:50:00+05:30",
    fullDateEn: "Sunday, 13 December 2026",
    fullDateBn: "রবিবার, ২৬শে অগ্রহায়ণ ১৪৩৩",
    gregorianBn: "১৩ই ডিসেম্বর ২০২৬",
    bengaliYear: "২৬শে অগ্রহায়ণ ১৪৩৩",
  },
  venue: {
    nameEn: "Kumudini Guest House",
    nameBn: "কুমুদিনী গেস্ট হাউস",
    addressEn: "Jogalbari, Garhmoyna, Moyna, Purba Medinipur, West Bengal, India",
    addressBn: "যোগলবাড়ি, গড়ময়না, ময়না, পূর্ব মেদিনীপুর, পশ্চিমবঙ্গ, ভারত",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Kumudini+Guest+House+Garhmoyna+Moyna+Purba+Medinipur",
    googleMapsEmbedQuery: "Kumudini+Guest+House+Garhmoyna+Moyna",
    landmarkEn: "Near Historic Garh of Moyna",
    landmarkBn: "ঐতিহাসিক গড়ময়নার সান্নিধ্যে",
  },
  invitationMessage: {
    sanskritMotto: "শ্রী শ্রী প্রজাপতয়ে নমঃ",
    sanskritSub: "শুভ বিবাহ",
    englishIntro: "Together with our families, we joyfully invite you to celebrate our union.",
    bengaliIntro: "পরম করুণাময়ের ইঙ্গিতে মানব জীবনের শাশ্বত সামাজিক নিবন্ধ — শুভ বিবাহ বন্ধনে আমরা আবদ্ধ হতে চলেছি। এই আনন্দঘন মুহূর্তে আপনাদের সপরিবারে আন্তরিক আমন্ত্রণ জানাই।",
    blessingBn: "আপনাদের উপস্থিতি ও আশীর্বাদ একান্ত কাম্য।",
    blessingEn: "Your warm presence, love, and heartfelt blessings are sincerely requested.",
  },
  events: [
    {
      id: "haldi",
      bengaliTitle: "গায়ে হলুদ",
      englishTitle: "Turmeric Ceremony (Gaye Holud)",
      timeDisplayBn: "দুপুর ১২:০৩ — দুপুর ২:৫৪",
      timeDisplayEn: "12:03 PM – 02:54 PM",
      startTime: "20261213T063300Z", // 12:03 PM IST is 06:33 UTC
      endTime: "20261213T092400Z",   // 02:54 PM IST is 09:24 UTC
      descriptionBn: "হলুদ ও সুগন্ধি চন্দনে রাঙিয়ে তোলার আনন্দমুখর লগ্ন। আত্মীয়-স্বজনদের শুভকামনায় পবিত্র অভিষেক।",
      descriptionEn: "The auspicious pre-wedding ritual where the bride and groom are anointed with turmeric paste, surrounded by songs and celebration.",
      image: "/assets/turmeric.webp",
      icsFile: "/calendars/haldi.ics",
      googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Gaye+Holud+%C2%B7+Anamika+%26+Subhadip&dates=20261213T063300Z/20261213T092400Z&location=Kumudini+Guest+House%2C+Garhmoyna%2C+Moyna&details=Gaye+Holud+ceremony+of+Anamika+and+Subhadip.+Time%3A+12%3A03+PM+to+2%3A54+PM.",
    },
    {
      id: "lagna",
      bengaliTitle: "বিবাহ লগ্ন",
      englishTitle: "Wedding Ceremony (Bibaho Lagna)",
      timeDisplayBn: "অপরাহ্ন ৪:৫০ হইতে শুভ সূচনা (মধ্যরাত পর্যন্ত)",
      timeDisplayEn: "04:50 PM onwards (until Midnight)",
      startTime: "20261213T112000Z", // 04:50 PM IST is 11:20 UTC
      endTime: "20261213T183000Z",   // Midnight IST is 18:30 UTC
      descriptionBn: "সাতপাক, শুভদৃষ্টি, মালাবদল এবং হোম-যজ্ঞের মাধ্যমে বৈদিক রীতিতে দুটি পবিত্র প্রাণের একাত্ম হওয়া।",
      descriptionEn: "The sacred Vedic wedding ritual including Saat Paak (seven circumambulations), Shubhodrishti (the auspicious first glance), and Mala Bodol.",
      image: "/assets/topor.webp",
      icsFile: "/calendars/lagna.ics",
      googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Bibaho+Lagna+%C2%B7+Wedding+Ceremony+%E2%80%94+Anamika+%26+Subhadip&dates=20261213T112000Z/20261213T183000Z&location=Kumudini+Guest+House%2C+Jogalbari%2C+Garhmoyna%2C+Moyna&details=Wedding+ceremony+of+Anamika+and+Subhadip.+Lagna+starts+at+4%3A50+PM.",
    },
    {
      id: "bhoj",
      bengaliTitle: "প্রীতিভোজ",
      englishTitle: "Grand Wedding Feast (Pritibhoj)",
      timeDisplayBn: "সন্ধ্যা ৭:০০ ঘটিকা হইতে",
      timeDisplayEn: "07:00 PM onwards",
      startTime: "20261213T133000Z", // 07:00 PM IST is 13:30 UTC
      endTime: "20261213T173000Z",   // 11:00 PM IST is 17:30 UTC
      descriptionBn: "রসনা তৃপ্তির রাজকীয় আয়োজন। ঐতিহ্যবাহী সুস্বাদু বাঙালি ব্যঞ্জন ও মিষ্টির মেলবন্ধনে এক আনন্দময় নৈশভোজ।",
      descriptionEn: "A sumptuous celebratory banquet featuring authentic Bengali delicacies and time-honored hospitality for all our esteemed guests.",
      image: "/assets/thali.webp",
      icsFile: "/calendars/bhoj.ics",
      googleCalendarUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pritibhoj+%C2%B7+Wedding+Feast+%E2%80%94+Anamika+%26+Subhadip&dates=20261213T133000Z/20261213T173000Z&location=Kumudini+Guest+House%2C+Garhmoyna%2C+Moyna&details=Grand+Wedding+Feast+celebration+of+Anamika+and+Subhadip+from+7%3A00+PM.",
    },
  ] as EventItem[],
  family: {
    brideSide: {
      sideBn: "কন্যা পক্ষ",
      sideEn: "Bride's Family",
      memberTypeBn: "কন্যা",
      memberTypeEn: "Bride",
      personNameBn: "অনামিকা",
      personNameEn: "Anamika",
      members: [
        {
          relationBn: "পিতা",
          relationEn: "Father",
          nameBn: "শ্রীযুক্ত গোপাল চন্দ্র কপাট",
          nameEn: "Sri Gopal Chandra Kapat",
        },
        {
          relationBn: "মাতা",
          relationEn: "Mother",
          nameBn: "শ্রীমতী তনুশ্যামা কপাট",
          nameEn: "Smt. Tanushyama Kapat",
        },
        {
          relationBn: "ভ্রাতা",
          relationEn: "Brother",
          nameBn: "শ্রী মৃত্যুঞ্জয় কপাট",
          nameEn: "Sri Mrityunjoy Kapat",
        },
        {
          relationBn: "ভগিনী ও ভগ্নীপতি",
          relationEn: "Sister & Brother-in-law",
          nameBn: "শ্রীমতী অন্তরা কপাট সামন্ত ও শ্রী প্রসেনজিৎ সামন্ত",
          nameEn: "Smt. Antara Kapat Samanta & Sri Prasenjit Samanta",
        },
      ],
      ancestralHomeBn: "শ্যামপুর, পশ্চিম নৈছনপুর, ময়না, পূর্ব মেদিনীপুর",
      ancestralHomeEn: "Shyampur, Paschim Naichhanpur, Moyna, Purba Medinipur",
      presentHomeBn: "গড়ময়না, ময়না, পূর্ব মেদিনীপুর",
      presentHomeEn: "Garhmoyna, Moyna, Purba Medinipur",
    } as FamilySide,
    groomSide: {
      sideBn: "বর পক্ষ",
      sideEn: "Groom's Family",
      memberTypeBn: "পাত্র",
      memberTypeEn: "Groom",
      personNameBn: "শুভদীপ",
      personNameEn: "Subhadip",
      members: [
        {
          relationBn: "পিতা",
          relationEn: "Father",
          nameBn: "শ্রীযুক্ত রামনারায়ণ ভূঞ্যা",
          nameEn: "Sri Ramnarayan Bhunya",
        },
        {
          relationBn: "মাতা",
          relationEn: "Mother",
          nameBn: "শ্রীমতী তুলসী রাণী ভূঞ্যা",
          nameEn: "Smt. Tulsi Rani Bhunya",
        },
        {
          relationBn: "ভগিনী ও ভগ্নীপতি",
          relationEn: "Sister & Brother-in-law",
          nameBn: "ডাঃ ইলাঞ্জলী রায় ও ডাঃ সৌরভ রায়",
          nameEn: "Dr. Ilanjali Roy & Dr. Saurav Roy",
        },
      ],
      presentHomeBn: "ভোগপুর, বালিচক, ডেবরা, পশ্চিম মেদিনীপুর",
      presentHomeEn: "Bhogpur, Balichak, Debra, Paschim Medinipur",
    } as FamilySide,
  },
  gallery: [
    {
      id: "couple-portrait",
      titleEn: "Anamika & Subhadip",
      titleBn: "অনামিকা ও শুভদীপ",
      captionEn: "Authentic portrait capturing warm smiles and shared journeys.",
      captionBn: "একসাথে কাটানো অবিস্মরণীয় মুহূর্ত ও ভালোবাসার স্মৃতিকথা।",
      src: "/assets/couple-photo.jpeg",
      category: "couple",
      width: 1200,
      height: 900,
    },
    {
      id: "invitation-original",
      titleEn: "Traditional Wedding Invitation",
      titleBn: "ঐতিহ্যবাহী নিমন্ত্রণ পত্র",
      captionEn: "The original print invitation crafted with sacred Bengali wedding verses.",
      captionBn: "হাতে আঁকা আলপনা ও পবিত্র শ্লোকে খোদাই করা আদি নিমন্ত্রণ পত্র।",
      src: "/assets/invitation-card-original.png",
      category: "invitation",
      width: 1080,
      height: 1440,
    },
    {
      id: "venue-setting",
      titleEn: "Kumudini Manor & Courtyard",
      titleBn: "কুমুদিনী গেস্ট হাউস প্রাঙ্গণ",
      captionEn: "Atmospheric evening illumination prepared for the ceremonies in Garhmoyna.",
      captionBn: "গড়ময়নার শ্যামলিমায় সজ্জিত উৎসবের মিলনক্ষেত্র।",
      src: "/assets/venue-portrait.png",
      category: "venue",
      width: 1200,
      height: 800,
    },
    {
      id: "silk-brocade",
      titleEn: "Brocade Silk & Zari Weave",
      titleBn: "বেনারসি ও জরি শিল্প",
      captionEn: "Antique-gold leaf motifs handwoven into folds of traditional crimson silk.",
      captionBn: "পরম্পরাগত লাল বেনারসি ও স্বর্ণালী সুতোর বয়নকলা।",
      src: "/assets/silk.webp",
      category: "tradition",
      width: 800,
      height: 600,
    },
    {
      id: "lotus-purity",
      titleEn: "Sacred Lotus in Bloom",
      titleBn: "পদ্ম ও শুভ সূচনা",
      captionEn: "The divine bloom symbolizing peace, purity, and spiritual devotion.",
      captionBn: "নির্মল পবিত্রতার প্রতীক প্রস্ফুটিত পদ্ম।",
      src: "/assets/lotus.webp",
      category: "tradition",
      width: 800,
      height: 600,
    },
    {
      id: "conch-auspicious",
      titleEn: "The Auspicious Shankha",
      titleBn: "পবিত্র শঙ্খধ্বনি",
      captionEn: "Natural carved conch resting on temple sandstone with sacred vermilion.",
      captionBn: "মাঙ্গলিক শঙ্খ ও চন্দনের পবিত্র স্পর্শ।",
      src: "/assets/conch.webp",
      category: "tradition",
      width: 800,
      height: 600,
    },
  ],
};
