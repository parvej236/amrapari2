const tutorials = [
  // ICT Tutorials
  {
    id: 1,
    titleBn: 'পাইথন প্রোগ্রামিং - শুরু থেকে',
    titleEn: 'Python Programming - From Scratch',
    descriptionBn: 'পাইথন প্রোগ্রামিং এর মৌলিক ধারণা থেকে শুরু করে উন্নত বিষয়গুলি পর্যন্ত শিখুন। এই টিউটোরিয়ালে ভেরিয়েবল, লুপ, ফাংশন এবং অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং এর বিস্তারিত আলোচনা করা হয়েছে।',
    descriptionEn: 'Learn Python programming from basic concepts to advanced topics. This tutorial covers variables, loops, functions, and object-oriented programming in detail.',
    category: 'ict',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/kqtD5dpn9C8',
    difficulty: 'beginner',
    duration: '45',
    instructor: {
      bn: 'মোঃ রাকিবুল ইসলাম',
      en: 'Md. Rakibul Islam'
    },
    date: '2024-01-15',
    views: 1250,
    tags: ['Python', 'Programming', 'Beginner']
  },
  {
    id: 2,
    titleBn: 'ওয়েব ডেভেলপমেন্ট - HTML & CSS',
    titleEn: 'Web Development - HTML & CSS',
    descriptionBn: 'HTML এবং CSS ব্যবহার করে আকর্ষণীয় ওয়েবসাইট তৈরি করুন। এই টিউটোরিয়ালে রেসপন্সিভ ডিজাইন, ফ্লেক্সবক্স এবং CSS গ্রিড শেখানো হয়েছে।',
    descriptionEn: 'Create attractive websites using HTML and CSS. This tutorial covers responsive design, flexbox, and CSS grid.',
    category: 'ict',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/UB1O30fR-EE',
    difficulty: 'beginner',
    duration: '60',
    instructor: {
      bn: 'তাসনিম আহমেদ',
      en: 'Tasnim Ahmed'
    },
    date: '2024-01-20',
    views: 2100,
    tags: ['HTML', 'CSS', 'Web Design']
  },
  {
    id: 3,
    titleBn: 'ম��বাইল অ্যাপ ডেভেলপমেন্ট - React Native',
    titleEn: 'Mobile App Development - React Native',
    descriptionBn: 'React Native ব্যবহার করে Android এবং iOS এর জন্য মোবাইল অ্যাপ তৈরি করুন। এই উন্নত টিউটোরিয়ালে স্টেট ম্যানেজমেন্ট এবং API ইন্টিগ্রেশন শেখানো হয়েছে।',
    descriptionEn: 'Build mobile apps for Android and iOS using React Native. This advanced tutorial covers state management and API integration.',
    category: 'ict',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/0-S5a0eXPoc',
    difficulty: 'advanced',
    duration: '90',
    instructor: {
      bn: 'সাদিয়া আফরিন',
      en: 'Sadia Afrin'
    },
    date: '2024-02-01',
    views: 890,
    tags: ['React Native', 'Mobile', 'Advanced']
  },
  {
    id: 4,
    titleBn: 'ডেটা সায়েন্স ও মেশিন লার্নিং',
    titleEn: 'Data Science & Machine Learning',
    descriptionBn: 'Python এবং popular libraries ব্যবহার করে ডেটা সায়েন্স এবং মেশিন লার্নিং শিখুন। এই টিউটোরিয়ালে pandas, numpy, এবং scikit-learn এর ব্যবহার দেখানো হয়েছে।',
    descriptionEn: 'Learn data science and machine learning using Python and popular libraries. This tutorial demonstrates the use of pandas, numpy, and scikit-learn.',
    category: 'ict',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/ua-CiDNNj30',
    difficulty: 'intermediate',
    duration: '75',
    instructor: {
      bn: 'ড. ফারহান হাসান',
      en: 'Dr. Farhan Hasan'
    },
    date: '2024-02-10',
    views: 1560,
    tags: ['Data Science', 'ML', 'Python']
  },

  // Science Tutorials
  {
    id: 5,
    titleBn: 'পদার্থবিজ্ঞান - নিউটনের গতিসূত্র',
    titleEn: 'Physics - Newton\'s Laws of Motion',
    descriptionBn: 'নিউটনের তিনটি গতিসূত্র সম্পর্কে বিস্তারিত আলোচনা। বাস্তব জীবনের উদাহরণ এবং পরীক্ষার মাধ্যমে ধারণা স্পষ্ট করা হয়েছে।',
    descriptionEn: 'Detailed discussion on Newton\'s three laws of motion. Concepts clarified through real-life examples and experiments.',
    category: 'science',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/kKKM8Y-u7ds',
    difficulty: 'beginner',
    duration: '40',
    instructor: {
      bn: 'প্রফেসর আব্দুল কাদের',
      en: 'Professor Abdul Kader'
    },
    date: '2024-01-18',
    views: 1890,
    tags: ['Physics', 'Mechanics', 'Science']
  },
  {
    id: 6,
    titleBn: 'রসায়ন - জৈব রসায়নের মূল ধারণা',
    titleEn: 'Chemistry - Organic Chemistry Basics',
    descriptionBn: 'জৈব রসায়নের মৌলিক বিষয়গুলি শিখুন। কার্বন যৌগ, নামকরণ এবং বিক্রিয়া সম্পর্কে বিস্তারিত জানুন।',
    descriptionEn: 'Learn the fundamentals of organic chemistry. Detailed information about carbon compounds, nomenclature, and reactions.',
    category: 'science',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/GOBu-BEXbUM',
    difficulty: 'intermediate',
    duration: '55',
    instructor: {
      bn: 'ডঃ নাজমা বেগম',
      en: 'Dr. Nazma Begum'
    },
    date: '2024-01-25',
    views: 1340,
    tags: ['Chemistry', 'Organic', 'Science']
  },
  {
    id: 7,
    titleBn: 'জীববিজ্ঞান - কোষ বিভাজন',
    titleEn: 'Biology - Cell Division',
    descriptionBn: 'মাইটোসিস এবং মিয়োসিস কোষ বিভাজন প্রক্রিয়া সম্পর্কে বিস্তারিত শিখুন। চিত্র এবং অ্যানিমেশনের মাধ্যমে ধারণা স্পষ্ট করা হয়েছে।',
    descriptionEn: 'Learn in detail about mitosis and meiosis cell division processes. Concepts clarified through diagrams and animations.',
    category: 'science',
    thumbnail: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/f-ldPgEfAHI',
    difficulty: 'intermediate',
    duration: '50',
    instructor: {
      bn: 'প্রফেসর সাইদুল ইসলাম',
      en: 'Professor Saidul Islam'
    },
    date: '2024-02-05',
    views: 1120,
    tags: ['Biology', 'Cell', 'Science']
  },

  // Creativity Tutorials
  {
    id: 8,
    titleBn: 'গ্রাফিক ডিজাইন - ফটোশপ বেসিক',
    titleEn: 'Graphic Design - Photoshop Basics',
    descriptionBn: 'Adobe Photoshop এর মৌলিক টুলস এবং টেকনিক শিখুন। ছবি এডিটিং, লেয়ার ম্যানেজমেন্ট এবং ইফেক্ট তৈরি করুন।',
    descriptionEn: 'Learn basic tools and techniques of Adobe Photoshop. Photo editing, layer management, and creating effects.',
    category: 'creativity',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/IyR_uYsRdPs',
    difficulty: 'beginner',
    duration: '65',
    instructor: {
      bn: 'রিফাত জাহান',
      en: 'Rifat Jahan'
    },
    date: '2024-01-22',
    views: 1780,
    tags: ['Design', 'Photoshop', 'Creative']
  },
  {
    id: 9,
    titleBn: 'ভিডিও এডিটিং - প্রিমিয়ার প্রো',
    titleEn: 'Video Editing - Premiere Pro',
    descriptionBn: 'Adobe Premiere Pro ব্যবহার করে পেশাদার ভিডিও এডিটিং শিখুন। ট্রানজিশন, ইফেক্ট এবং কালার গ্রেডিং সম্পর্কে জানুন।',
    descriptionEn: 'Learn professional video editing using Adobe Premiere Pro. Learn about transitions, effects, and color grading.',
    category: 'creativity',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/Hls3Tp7JS8E',
    difficulty: 'intermediate',
    duration: '80',
    instructor: {
      bn: 'শাহরিয়ার কবির',
      en: 'Shahriar Kabir'
    },
    date: '2024-02-08',
    views: 1450,
    tags: ['Video', 'Editing', 'Creative']
  },
  {
    id: 10,
    titleBn: 'ক্রিয়েটিভ রাইটিং - গল্প লেখার কৌশল',
    titleEn: 'Creative Writing - Story Writing Techniques',
    descriptionBn: 'আকর্ষণীয় গল্প লেখার টেকনিক শিখুন। চরিত্র গঠন, প্লট ডেভেলপমেন্ট এবং ডায়ালগ লেখার কৌশল জানুন।',
    descriptionEn: 'Learn techniques for writing engaging stories. Character development, plot development, and dialogue writing techniques.',
    category: 'creativity',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/I5QQQha6fgk',
    difficulty: 'beginner',
    duration: '45',
    instructor: {
      bn: 'তানিয়া সুলতানা',
      en: 'Tania Sultana'
    },
    date: '2024-02-12',
    views: 980,
    tags: ['Writing', 'Creative', 'Literature']
  },

  // Sports Tutorials
  {
    id: 11,
    titleBn: 'ব্যাডমিন্টন - মৌলিক কৌশল',
    titleEn: 'Badminton - Basic Techniques',
    descriptionBn: 'ব্যাডমিন্টনের মৌলিক স্ট্রোক, ফুটওয়ার্ক এবং কৌশল শিখুন। সার্ভ এবং স্ম্যাশ টেকনিক বিস্তারিত দেখানো হয়েছে।',
    descriptionEn: 'Learn basic strokes, footwork, and strategies of badminton. Serve and smash techniques shown in detail.',
    category: 'sports',
    thumbnail: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/LzQklcY7CYE',
    difficulty: 'beginner',
    duration: '35',
    instructor: {
      bn: 'কোচ সাকিব আল হাসান',
      en: 'Coach Sakib Al Hasan'
    },
    date: '2024-01-28',
    views: 1620,
    tags: ['Badminton', 'Sports', 'Fitness']
  },
  {
    id: 12,
    titleBn: 'ফুটবল - ড্রিবলিং মাস্টারক্লাস',
    titleEn: 'Football - Dribbling Masterclass',
    descriptionBn: 'ফুটবলের উন্নত ড্রিবলিং টেকনিক শিখুন। বল কন্ট্রোল, স্পিড ড্রিবলিং এবং ডিফেন্ডার পাস করার কৌশল।',
    descriptionEn: 'Learn advanced dribbling techniques in football. Ball control, speed dribbling, and techniques to pass defenders.',
    category: 'sports',
    thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/Hfzi7C5Q1FI',
    difficulty: 'intermediate',
    duration: '50',
    instructor: {
      bn: 'কোচ মাহমুদুল হক',
      en: 'Coach Mahmudul Haque'
    },
    date: '2024-02-03',
    views: 2340,
    tags: ['Football', 'Sports', 'Training']
  },
  {
    id: 13,
    titleBn: 'যোগব্যায়াম - শুরুর পর্যায়',
    titleEn: 'Yoga - Beginner Level',
    descriptionBn: 'যোগব্যায়ামের মৌলিক আসন এবং শ্বাস প্রশ্বাসের কৌশল শিখুন। শরীর ও মনের শান্তির জন্য দৈনিক যোগব্যায়াম।',
    descriptionEn: 'Learn basic yoga poses and breathing techniques. Daily yoga for body and mind peace.',
    category: 'sports',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/v7AYKMP6rOE',
    difficulty: 'beginner',
    duration: '40',
    instructor: {
      bn: 'ইন্সট্রাক্টর রিনা দাস',
      en: 'Instructor Rina Das'
    },
    date: '2024-02-07',
    views: 1890,
    tags: ['Yoga', 'Fitness', 'Health']
  },

  // Band/Music Tutorials
  {
    id: 14,
    titleBn: 'গিটার - শুরু থেকে',
    titleEn: 'Guitar - From Beginning',
    descriptionBn: 'গিটার বাজানো শিখুন শুরু থেকে। কর্ড, স্ট্রামিং প্যাটার্ন এবং মৌলিক গান বাজানোর কৌশল।',
    descriptionEn: 'Learn to play guitar from scratch. Chords, strumming patterns, and basic song playing techniques.',
    category: 'band',
    thumbnail: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/FdJLQyX2PZc',
    difficulty: 'beginner',
    duration: '55',
    instructor: {
      bn: 'শিল্পী তানভীর হাসান',
      en: 'Artist Tanvir Hasan'
    },
    date: '2024-01-30',
    views: 2120,
    tags: ['Guitar', 'Music', 'Instrument']
  },
  {
    id: 15,
    titleBn: 'কীবোর্ড - বেসিক থিওরি',
    titleEn: 'Keyboard - Basic Theory',
    descriptionBn: 'কীবোর্ডের মৌলিক থিওরি এবং প্রাকটিস। স্কেল, কর্ড প্রগ্রেশন এবং মেলোডি তৈরি করুন।',
    descriptionEn: 'Basic theory and practice of keyboard. Scales, chord progressions, and creating melodies.',
    category: 'band',
    thumbnail: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/u8Wq5M6AqoY',
    difficulty: 'beginner',
    duration: '60',
    instructor: {
      bn: 'সঙ্গীতশিল্পী নাদিয়া আক্তার',
      en: 'Musician Nadia Akter'
    },
    date: '2024-02-04',
    views: 1670,
    tags: ['Keyboard', 'Piano', 'Music']
  },
  {
    id: 16,
    titleBn: 'ভোকাল ট্রেনিং - গান গাওয়ার কৌশল',
    titleEn: 'Vocal Training - Singing Techniques',
    descriptionBn: 'গান গাওয়ার সঠিক কৌশল শিখুন। ভয়েস মডুলেশন, ব্রিদিং টেকনিক এবং রেঞ্জ বৃদ্ধি করুন।',
    descriptionEn: 'Learn proper singing techniques. Voice modulation, breathing techniques, and range expansion.',
    category: 'band',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/yKV58VVGV9o',
    difficulty: 'intermediate',
    duration: '45',
    instructor: {
      bn: 'ভোকাল কোচ সানজিদ��� খান',
      en: 'Vocal Coach Sanjida Khan'
    },
    date: '2024-02-09',
    views: 1430,
    tags: ['Singing', 'Vocal', 'Music']
  },

  // Education Tutorials
  {
    id: 17,
    titleBn: 'ইংরেজি - গ্রামার মাস্টারি',
    titleEn: 'English - Grammar Mastery',
    descriptionBn: 'ইংরেজি গ্রামারের সম্পূর্ণ গাইড। Tense, parts of speech এবং sentence structure সম্পর্কে বিস্তারিত।',
    descriptionEn: 'Complete guide to English grammar. Details about tense, parts of speech, and sentence structure.',
    category: 'education',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/pNQ7rBwD7ck',
    difficulty: 'intermediate',
    duration: '70',
    instructor: {
      bn: 'শিক্ষক মাহবুব রহমান',
      en: 'Teacher Mahbub Rahman'
    },
    date: '2024-01-26',
    views: 2450,
    tags: ['English', 'Grammar', 'Language']
  },
  {
    id: 18,
    titleBn: 'গণিত - ক্যালকুলাস বেসিক',
    titleEn: 'Mathematics - Calculus Basics',
    descriptionBn: 'ক্যালকুলাসের মৌলিক ধারণা। Limit, derivative এবং integration সম্পর্কে স্পষ্ট ব্যাখ্যা।',
    descriptionEn: 'Basic concepts of calculus. Clear explanation about limit, derivative, and integration.',
    category: 'education',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/WsQQvHm4lSw',
    difficulty: 'advanced',
    duration: '85',
    instructor: {
      bn: 'প্রফেসর কামরুল হাসান',
      en: 'Professor Kamrul Hasan'
    },
    date: '2024-02-06',
    views: 1760,
    tags: ['Math', 'Calculus', 'Advanced']
  },
  {
    id: 19,
    titleBn: 'বাংলা - রচনা লেখার কৌশল',
    titleEn: 'Bangla - Essay Writing Techniques',
    descriptionBn: 'বাংলায় ভালো রচনা লেখার কৌশল। ভূমিকা, মূল অংশ এবং উপসংহার লেখার নিয়ম।',
    descriptionEn: 'Techniques for writing good essays in Bangla. Rules for writing introduction, main body, and conclusion.',
    category: 'education',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/j3Z1GVN5L6Y',
    difficulty: 'beginner',
    duration: '40',
    instructor: {
      bn: 'শিক্ষিকা সুমাইয়া আক্তার',
      en: 'Teacher Sumaiya Akter'
    },
    date: '2024-02-11',
    views: 1290,
    tags: ['Bangla', 'Writing', 'Literature']
  },
  {
    id: 20,
    titleBn: 'পরীক্ষার প্রস্তুতি - কার্যকর স্টাডি টেকনিক',
    titleEn: 'Exam Preparation - Effective Study Techniques',
    descriptionBn: 'পরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেন, পরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনপরীক্ষায় ভালো ফলাফল অর্জনের জন্য প্রয়োজন সঠিক স্টাডি টেকনিক। এই গাইডে আপনি জানতে পারবেন কীভাবে সময় ব্যবস্থাপনা করবেনকার্যকরভাবে নোট নিবেন, এবং স্মার্ট রিভিশন স্ট্রাটেজি ব্যবহার করে আত্মবিশ্বাসের সঙ্গে পরীক্ষার প্রস্তুতি সম্পন্ন করবেন। মনোযোগ ধরে রাখা, পড়ার পরিকল্পনা তৈরি এবং চাপমুক্তভাবে পড়াশোনা করার কৌশলও এখানে আলোচনা করা হয়েছে।',
    descriptionEn: 'To achieve great results in exams, you need the right study techniques.great results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniquesgreat results in exams, you need the right study techniques This guide covers how to manage your time effectively, take organized notes, and apply smart revision strategies to prepare confidently. You’ll also learn how to stay focused, plan your studies efficiently, and reduce exam stress for better performance.',
    category: 'education',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/5MgBikgcWnY',
    difficulty: 'beginner',
    duration: '50',
    instructor: {
      bn: 'মোটিভেশনাল স্পিকার রাকিব হোসেন',
      en: 'Motivational Speaker Rakib Hossain'
    },
    date: '2024-02-13',
    views: 3120,
    tags: ['Study', 'Exam', 'Tips']
  }
];

export default tutorials;