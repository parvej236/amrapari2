const testimonials = [
  {
    id: 1,
    name: {
      bn: 'মো: পারভেজ আলম',
      en: 'M Parvej Alam'
    },
    institution: {
      bn: 'কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং বিভাগ, চট্টগ্রাম প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়',
      en: 'Chittagong University of Engineering and Technology'
    },
    year: {
      bn: '২য় বর্ষ',
      en: '2nd Year'
    },
    quote: {
      bn: 'স্বর্গভূমি বাংলাদেশ আমরাই নির্মাণ করব।',
      en: 'We ourselves will build a paradise called Bangladesh.'
    },
    session: {
      bn: 'সেশন: ২০০৯',
      en: 'Session: 2009'
    },
    quantaId: 'Q-0236',
    image: 'https://files.quantummethod.org.bd/crop/300/300/media/image/feelings/feelings_shob_shombhob_quanta_parvez_alam_20250116.png'
  },
  {
    id: 2,
    name: {
      bn: 'মো. হায়দার আলী',
      en: 'Ariful Islam'
    },
    institution: {
      bn: 'রাষ্ট্রবিজ্ঞান বিভাগ, বেগম রোকেয়া বিশ্ববিদ্যালয়, রংপুর।',
      en: 'BUET, Computer Science & Engineering'
    },
    year: {
      bn: '৩য় বর্ষ',
      en: '3rd Year'
    },
    quote: {
      bn: 'আমি পৃথিবীর বুকে চিহ্ন রেখে যেতে চাই।',
      en: 'The programming skills I gained at Quantum built my foundation for success.'
    },
    session: {
      bn: 'সেশন: ২০১৯–২০',
      en: 'Session: 2019–20'
    },
    quantaId: 'Q-0186',
    image: 'https://files.quantummethod.org.bd/crop/300/300/media/image/feelings/feelings_shob_shombhob_quanta_aungchuthing_marma_20241130.png'
  },
  {
    id: 3,
    name: {
      bn: 'উচিনচো রাখাইন',
      en: 'Sharmin Akter'
    },
    institution: {
      bn: 'ব্যাংকিং এন্ড ইনস্যুরেন্স বিভাগ, চট্টগ্রাম বিশ্ববিদ্যালয়',
      en: 'Chittagong Medical College'
    },
    year: {
      bn: '১ম বর্ষ',
      en: '1st Year'
    },
    quote: {
      bn: 'দেশের মানুষের জন্যে কাজ করতে চাই।',
      en: 'Quantum gave me peace of mind and the strength to move forward with purpose.'
    },
    session: {
      bn: 'সেশন: ২০২১–২২',
      en: 'Session: 2021–22'
    },
    quantaId: 'Q-0567',
    image: 'https://files.quantummethod.org.bd/crop/300/300/media/image/feelings/feelings_shob_shombhob_quanta_kysain_u_marman_20241222.png'
  },
  {
    id: 4,
    name: {
      bn: 'তপ্ত বিকাশ ত্রিপুরা',
      en: 'Nahid Hasan'
    },
    institution: {
      bn: 'ইলেকট্রিক্যাল টেকনোলজি, চট্টগ্রাম পলিটেকনিক ইনস্টিটিউট',
      en: 'University of Dhaka, Physics'
    },
    year: {
      bn: '৪র্থ বর্ষ',
      en: '4th Year'
    },
    quote: {
      bn: 'প্রতিটি মানুষেরই পারার ক্ষমতা আছে',
      en: 'The science club at Quantum ignited my passion for research.'
    },
    session: {
      bn: 'সেশন: ২০১৮–১৯',
      en: 'Session: 2018–19'
    },
    quantaId: 'Q-0123',
    image: 'https://files.quantummethod.org.bd/crop/300/300/media/image/feelings/feelings_shob_shombhob_quanta_topto_bikash_tripura_20250106.png'
  },
  {
    id: 5,
    name: {
      bn: 'শাহনেওয়াজ হৃদয়',
      en: 'Farhana Tasnim'
    },
    institution: {
      bn: 'রোবটিক্স এন্ড মেকাট্রনিক্স ইঞ্জিনিয়ারিং বিভাগ, ঢাকা বিশ্ববিদ্যালয়',
      en: 'Jahangirnagar University, English'
    },
    year: {
      bn: '৩য় বর্ষ',
      en: '3rd Year'
    },
    quote: {
      bn: 'আনন্দটা যেন স্বাধীনতার।',
      en: 'The English club made me confident and opened new opportunities for me.'
    },
    session: {
      bn: 'সেশন: ২০২০–২১',
      en: 'Session: 2020–21'
    },
    quantaId: 'Q-0392',
    image: 'https://files.quantummethod.org.bd/crop/300/300/media/image/feelings/feelings_shob_shombhob_quanta_shahnewaz_hridoy_20250115.png'
  },
  {
    id: 6,
    name: {
      bn: 'খয়লন ম্রো',
      en: 'Mahmudul Hasan'
    },
    institution: {
      bn: 'ডেন্টাল ইউনিট, শের-ই-বাংলা মেডিকেল কলেজ, বরিশাল',
      en: 'Rajshahi Medical College'
    },
    year: {
      bn: '৩য় বর্ষ',
      en: '3rd Year'
    },
    quote: {
      bn: 'আমার সম্প্রদায়ে আমি প্রথম সরকারি ডেন্টাল ইউনিটে পড়ছি।',
      en: 'Quantum environment taught me to dream big and achieve them.'
    },
    session: {
      bn: 'সেশন: ২০১৯–২০',
      en: 'Session: 2019–20'
    },
    quantaId: 'Q-0278',
    image: 'https://files.quantummethod.org.bd/crop/300/300/media/image/feelings/feelings_shob_shombhob_quanta_khoilon_mro_20250118.png'
  },
  {
    id: 7,
    name: {
      bn: 'উক্যচিং মার্মা',
      en: 'Sadia Afrin'
    },
    institution: {
      bn: 'বি.এ. শিক্ষার্থী, লামা সরকারি মাতামুহুরী কলেজ',
      en: 'BUET, Electrical Engineering'
    },
    year: {
      bn: '২য় বর্ষ',
      en: '2nd Year'
    },
    quote: {
      bn: 'কঠিন যুদ্ধেও আমি পরাজয় মানতে শিখি নি।',
      en: 'The robotics project laid the foundation for my engineering career.'
    },
    session: {
      bn: 'সেশন: ২০২১–২২',
      en: 'Session: 2021–22'
    },
    quantaId: 'Q-0621',
    image: 'https://files.quantummethod.org.bd/crop/300/300/media/image/feelings/feelings_shob_shombhob_quanta_aungsainu_marma_20241217.png'
  },
  {
    id: 8,
    name: {
      bn: 'জিয়াবুল হক',
      en: 'Rakibul Islam'
    },
    institution: {
      bn: 'লোক-প্রশাসন বিভাগ, চট্টগ্রাম বিশ্ববিদ্যালয়',
      en: 'Khulna University, Mathematics'
    },
    year: {
      bn: '৪র্থ বর্ষ',
      en: '4th Year'
    },
    quote: {
      bn: 'কীভাবে পেরোতে হয় স্বপ্নের সীমানা—তা জেনেছি।',
      en: 'Math Olympiad preparation at Quantum shaped my future.'
    },
    session: {
      bn: 'সেশন: ২০১৮–১৯',
      en: 'Session: 2018–19'
    },
    quantaId: 'Q-0145',
    image: 'https://files.quantummethod.org.bd/crop/300/300/media/image/feelings/feelings_shob_shombhob_quanta_omar_faruk_20250103.png'
  },
  {
    id: 9,
    name: {
      bn: 'আব্দুর রাব্বি তোতা',
      en: 'Nusrat Jahan'
    },
    institution: {
      bn: 'কম্পিউটার সায়েন্স এন্ড ইঞ্জিনিয়ারিং বিভাগ, রাঙ্গামাটি বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়',
      en: 'Sylhet Medical College'
    },
    year: {
      bn: '২য় বর্ষ',
      en: '2nd Year'
    },
    quote: {
      bn: 'আর্টিফিশিয়াল ইন্টেলিজেন্সকে মানবকল্যাণে কাজে লাগাতে চাই।',
      en: 'Science fair at Quantum taught me creative thinking.'
    },
    session: {
      bn: 'সেশন: ২০২০–২১',
      en: 'Session: 2020–21'
    },
    quantaId: 'Q-0501',
    image: 'https://files.quantummethod.org.bd/crop/300/300/media/image/feelings/feelings_shob_shombhob_quanta_sujan_tripura_20241025.png'
  }
];

export default testimonials;
