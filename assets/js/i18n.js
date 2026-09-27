/**
 * Islamic Royal Wedding Invitation — 100% Comprehensive Multi-Language Translation Engine
 * Translates EVERY text, name, date, time, venue, dress code, quote, and label dynamically.
 * 
 * Languages:
 * 1. Hinglish (Default)
 * 2. Urdu (Jameel Noori Nastaleeq / Noto Nastaliq Urdu) - RTL
 * 3. English (Cormorant Garamond)
 * 4. Marathi (Tiro Devanagari Marathi)
 * 5. Hindi (Tiro Devanagari Hindi)
 * 6. Gujarati (Noto Serif Gujarati)
 * 7. Arabic (Amiri / Scheherazade) - RTL
 */

const LOCALES_DATA = {
  hinglish: {
    lang_code: 'hi-Latn',
    direction: 'ltr',
    name: 'Hinglish',
    flag: '✨',
    font: "'Cormorant Garamond', Georgia, serif",
    dict: {
      nav_home: 'Home',
      nav_couple: 'Dulha-Dulhan',
      nav_events: 'Nikah & Walima',
      nav_family: 'Dua & Family',
      nav_gallery: 'Moments',
      nav_venue: 'Venue & Map',
      nav_rsvp: 'RSVP',
      nav_contact: 'Contact',
      nav_show_qr: 'Show QR',
      music_playing: 'Music Playing',
      music_muted: 'Music On',
      entrance_badge: 'Dawat-e-Nikah Nimantran',
      entrance_names: 'Ariba & Faizan',
      entrance_date: '30 October 2027 • Jalgaon, Maharashtra',
      entrance_btn: 'Click to Open / Dawat Kholo',
      entrance_poem: 'Ek nayi daastan ne dar pe dastak di hai, shayad mohabbat ne aaj phir koi shakal li hai ✨',
      door_open_toast: 'Parda utha to maloom hua, intezaar bhi kitna haseen hota hai ❤️',
      hero_couple_names: 'Ariba & Faizan',
      hero_quran_verse: '“Aur Humne Tumhein Jodon Mein Paida Kiya” (Surah An-Naba 78:8)',
      hero_getting_married: 'Yeh khushi hamari sahi, magar iski raunaq aap se hai',
      hero_date_location: '30 October 2027 • Patel Medical, Fatema Nagar, MIDC, Jalgaon',
      hero_btn_rsvp: 'RSVP Bhejein',
      hero_btn_events: 'Functions Dekhein',
      
      // Couple Card Names & Lineage with Poetry
      scratch_names_title: 'Shubh Nikah Ke Dulha & Dulhan',
      scratch_names_subtitle: 'Nazar mili to yun laga jaise barson se jaante the, shayad kuch rishtey waqt se pehle likhe jaate hain',
      scratch_names_poetry: 'Kuch naam sirf pukaare nahi jaate, dil mein mohabbat se basaaye jaate hain',
      scratch_bride_label: 'The Bride (Ariba)',
      scratch_groom_label: 'The Groom (Faizan)',
      scratch_bride_name: 'Ariba',
      scratch_groom_name: 'Faizan',
      groom_name: 'Faizan Deshmukh',
      groom_parents: 'Son of Mrs. Shabana A. & Mr. Abdul Hadi H. Deshmukh',
      bride_name: 'Ariba Patel',
      bride_parents: 'Daughter of Mrs. Khaleda A. & Mr. Abdulrahim G. Patel',
      scratch_card_instruction: 'Ungli ya mouse se gold foil scratch karein ✨',
      scratch_revealed_toast: 'Kuch naam sirf pukaare nahi jaate, dil mein mohabbat se basaaye jaate hain ❤️',
      scratch_tap_fallback: 'Tap karke reveal karein',
      
      // Date Card with Poetry
      scratch_date_title: 'Save The Auspicious Date',
      scratch_date_subtitle: 'Kuch tareekhein calendar mein nahi hoteen, woh seedha dil mein likhi jaati hain',
      scratch_date_hint: 'Scratch Karein & Tareekh Dekhein',
      scratch_date_revealed_heading: '30 October 2027',
      scratch_date_revealed_sub: 'Nikah & Walima Ceremony • Jalgaon',
      
      // Countdown
      countdown_title: 'Nikah Countdown',
      countdown_subtitle: 'Mubarak rasoomat shuru hone mein baaki hain:',
      days: 'Dinn',
      hours: 'Ghante',
      minutes: 'Minutes',
      seconds: 'Seconds',
      
      // Events Section with Poetry
      events_section_title: 'Nikah & Walima Schedule',
      events_section_subtitle: 'Duaon ne jis lamhe ko muddaton sanwaara, aaj woh lamha hamare saamne hai',
      timing_label: 'Time:',
      venue_label: 'Venue:',
      dress_code_label: 'Dress Code:',
      add_to_calendar: 'Calendar Mein Save Karein',
      view_on_maps: 'Maps Par Dekhein',
      
      event_nikah_date: 'Saturday, 30 Oct 2027',
      event_nikah_title: 'Mubarak Nikah Ceremony & Dawat',
      event_nikah_time: '06:30 PM (Nikah Khawan) | 08:00 PM (Dawat-e-Nikah)',
      event_nikah_venue: 'Patel Medical Complex, Fatema Nagar, MIDC, Jalgaon',
      event_nikah_dress: 'Traditional Festive / Formal Elegance',
      event_nikah_desc: 'Buzurgon ki duaon aur Allah ki rehmat ke saath Aqd-e-Nikah aur shaandar dawat.',
      
      event_walima_date: 'Sunday, 31 Oct 2027',
      event_walima_title: 'Grand Walima Reception (Dawat-e-Walima)',
      event_walima_time: '07:30 PM Onwards',
      event_walima_venue: 'The Grand Imperial Lawn, Jalgaon',
      event_walima_dress: 'Evening Formal / Royal Attire',
      event_walima_desc: 'Aaj mehfil mein rang kuch aur hai, har dhadkan mein khushi ka shor hai.',
      
      // Family Section with Poetry
      family_section_title: 'Dua & Family Blessings',
      family_section_subtitle: 'Jin haathon ne duaon mein humein maanga, aaj unhi duaon ne yeh din dikhaya hai',
      bride_side_title: "Dulhan Ki Taraf Se (Patel Khandaan)",
      groom_side_title: "Dulha Ki Taraf Se (Deshmukh Khandaan)",
      bride_family_quote: '“Hum aapko apni beti Ariba ke Nikah par duaon aur shirkat ke liye dil se dawat dete hain.”',
      groom_family_quote: '“Allah (SWT) ke shukr ke saath, hum aapko Ariba & Faizan ke Nikah mein dawat dete hain.”',
      
      gallery_section_title: 'Khoobsurat Yaadein',
      gallery_section_subtitle: 'Hamare safar ke kuch yaadgaar lamhe',
      
      // Aesthetic Carousel with Poetry
      carousel_badge: 'Royal Glimpses',
      carousel_title: 'Ariba & Faizan — Mubarak Lamhe',
      carousel_subtitle: 'Kuch lamhe tasveer nahi bante, woh umr bhar ki yaad ban jaate hain',
      slide_bride_tag: 'The Bride',
      slide_groom_tag: 'The Groom',
      slide_bride_sub: 'Grace, Elegance & Purity',
      slide_groom_sub: 'Dignity, Chivalry & Honor',
      slide_moment_tag: 'Sacred Union',
      slide_moment_3_title: 'Eternal Grace',
      slide_moment_3_sub: 'Two Souls Bound in Faith',
      slide_nikah_tag: 'Auspicious Nikah',
      slide_moment_4_title: 'Royal Heritage',
      slide_moment_4_sub: 'A Legacy of Love & Respect',
      slide_celebration_tag: 'Celebration',
      slide_moment_5_title: 'Timeless Bonds',
      slide_moment_5_sub: 'Joyous Smiles & Celebrations',
      slide_forever_tag: 'Together Forever',
      slide_moment_6_title: 'InshaAllah Khair',
      slide_moment_6_sub: 'Stepping into Tomorrow with Duas',
      
      // Dedicated Video Section with Poetry
      video_section_badge: 'Cinematic Film',
      video_section_title: 'Ariba & Faizan — Invitation Film',
      video_section_subtitle: 'Kuch mulaqaatein waqt ke saath guzar jaati hain, aur kuch poori zindagi ka hissa ban jaati hain',
      video_play_prompt: 'Play Wedding Film / Video Dekhein',
      video_quote: '“Duaon Ne Jis Lamhe Ko Muddaton Sanwaara, Aaj Woh Lamha Hamare Saamne Hai”',
      video_quote_author: 'Ariba & Faizan • 30 Oct 2027',
      
      venue_section_title: 'Venue & Reaching There',
      venue_section_subtitle: 'Fatema Nagar, MIDC, Jalgaon mein aapka dil se swagat hai',
      venue_name: 'Patel Medical Complex',
      venue_address: 'Patel Medical, Fatema Nagar, MIDC, Jalgaon, Maharashtra 425003',
      get_directions_btn: 'Google Maps Par Rasta Dekhein',
      
      // RSVP with Poetry
      rsvp_section_title: 'RSVP / Apni Shirkat Confirm Karein',
      rsvp_section_subtitle: 'Khushi mukammal kahan hoti hai apnon ke baghair, so aaiye, yeh shaam aapke naam bhi ho',
      rsvp_name: 'Aapka Pura Naam *',
      rsvp_phone: 'WhatsApp / Mobile Number *',
      rsvp_email: 'Email Address (Optional)',
      rsvp_attending: 'Kya aap shaamil ho rahe hain? *',
      rsvp_choice_yes: 'InshaAllah, Zaroor Shamil Honge! 🎉',
      rsvp_choice_maybe: 'Koshish Poori Hai (Maybe)',
      rsvp_choice_no: 'Maafi Chaahenge, Shirkat Se Qasir Hain',
      rsvp_guests_count: 'Kitne Mehman Aayenge (Including You)?',
      rsvp_meal_pref: 'Khaane Ki Preference',
      rsvp_meal_veg: 'Pure Vegetarian / Jain Available',
      rsvp_meal_nonveg: 'Halal Gourmet & Continental',
      rsvp_message: 'Dulha-Dulhan Ke Liye Koi Dua Ya Paigaam?',
      rsvp_submit_btn: 'RSVP Bhejein',
      rsvp_sending: 'RSVP Save Ho Raha Hai...',
      rsvp_success_title: 'Shukriya! Aapka RSVP Receive Ho Gaya Hai! ❤️',
      rsvp_success_msg: 'Hum aapka Jalgaon mein swagat karne ke liye behad excited hain!',
      
      // Contacts & Footer with Poetry
      contact_section_title: 'Sampark Karein / Hospitality',
      contact_section_subtitle: 'Kisi bhi travel, stay ya help ke liye humse be-jhijhak sampark karein',
      bride_contact_relation: "Bride's Father",
      groom_contact_relation: "Groom's Father",
      btn_call: 'Call Karein',
      btn_whatsapp: 'WhatsApp Message',
      share_section_title: 'Invitation Share Karein',
      share_whatsapp_btn: 'WhatsApp Par Bhejein',
      share_copy_btn: 'Link Copy Karein',
      share_native_btn: 'Share Invitation',
      link_copied_toast: 'Invitation Link Copy Ho Gaya! ✨',
      qr_section_title: 'Mobile Par Invitation Kholein',
      qr_section_subtitle: 'Apne phone ke camera se neeche diya gaya QR code scan karein aur kisi ke sath bhi share karein',
      qr_scan_instruction: 'Scan with Phone Camera to Open Card',
      final_blessing: '“Kuch khushiyan lafzon mein kahan aati hain, bas apnon ki duaon mein muskura jaati hain”',
      with_love: 'With Boundless Love & Duas',
      the_families: 'Patel & Deshmukh Khandaan',
      footer_copyright: 'Crafted with Love & Duas for Ariba & Faizan • 2027',
      footer_rights: 'All Rights Reserved by Mashkoor Patel'
    }
  },

  urdu: {
    lang_code: 'ur',
    direction: 'rtl',
    name: 'اردو',
    flag: '🌙',
    font: "'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', 'Amiri', serif",
    dict: {
      nav_home: 'سرورق',
      nav_couple: 'دلہا اور دلہن',
      nav_events: 'نکاح و ولیمہ',
      nav_family: 'دعائیں و خاندان',
      nav_gallery: 'تصاویر',
      nav_venue: 'مقام و راستہ',
      nav_rsvp: 'اطلاعِ شرکت',
      nav_contact: 'رابطہ',
      nav_show_qr: 'کیو آر',
      music_playing: 'موسیقی جاری ہے',
      music_muted: 'موسیقی سنیں',
      entrance_badge: 'دعوت نامۂ عقدِ مسنون',
      entrance_names: 'عریبہ اور فیضان',
      entrance_date: '30 اکتوبر 2027 • جلگاؤں، مہاراشٹر',
      entrance_btn: 'کھولیے / Click to Open',
      entrance_poem: 'ایک نئی داستان نے در پہ دستک دی ہے، شاید محبت نے آج پھر کوئی شکل لی ہے ✨',
      door_open_toast: 'پردہ اٹھا تو معلوم ہوا، انتظار بھی کتنا حسین ہوتا ہے ❤️',
      hero_couple_names: 'عریبہ اور فیضان',
      hero_quran_verse: '”اور ہم نے تمہیں جوڑوں میں پیدا کیا“ (سورۃ النباء)',
      hero_getting_married: 'یہ خوشی ہماری سہی، مگر اس کی رونق آپ سے ہے',
      hero_date_location: '30 اکتوبر 2027 • پٹیل میڈیکل، فاطمہ نگر، ایم آئی ڈی سی، جلگاؤں',
      hero_btn_rsvp: 'اطلاعِ شرکت بھیجیں',
      hero_btn_events: 'تقاریب کا شیڈول',
      
      // Couple Card in Urdu with Poetry
      scratch_names_title: 'اسمائے گرامی دلہا و دلہن',
      scratch_names_subtitle: 'نظر ملی تو یوں لگا جیسے برسوں سے جانتے تھے، شاید کچھ رشتے وقت سے پہلے لکھے جاتے ہیں',
      scratch_names_poetry: 'کچھ نام صرف پکارے نہیں جاتے، دل میں محبت سے بسائے جاتے ہیں',
      scratch_bride_label: 'دلہن (عریبہ)',
      scratch_groom_label: 'دلہا (فیضان)',
      scratch_bride_name: 'عریبہ',
      scratch_groom_name: 'فیضان',
      groom_name: 'فیضان دیشمکھ',
      groom_parents: 'فرزند محترمہ شبانہ اے و محترم عبد الہادی ایچ دیشمکھ',
      bride_name: 'عریبہ پٹیل',
      bride_parents: 'دختر محترمہ خالدہ اے و محترم عبدالرحیم جی پٹیل',
      scratch_card_instruction: 'سونے کے ورق کو کھرچ کر نام دیکھیں ✨',
      scratch_revealed_toast: 'کچھ نام صرف پکارے نہیں جاتے، دل میں محبت سے بسائے جاتے ہیں ❤️',
      scratch_tap_fallback: 'دیکھنے کے لیے کلک کریں',
      
      // Date Card in Urdu with Poetry
      scratch_date_title: 'مبارک تاریخ کی نقاب کشائی',
      scratch_date_subtitle: 'کچھ تاریخیں کیلنڈر میں نہیں ہوتیں، وہ سیدھا دل میں لکھی جاتی ہیں',
      scratch_date_hint: 'کھرچیں اور تاریخ دیکھیں',
      scratch_date_revealed_heading: '30 اکتوبر 2027',
      scratch_date_revealed_sub: 'تقریبِ نکاح و ولیمہ • جلگاؤں',
      
      countdown_title: 'نکاح کا انتظار',
      countdown_subtitle: 'تقاریب کے آغاز میں باقی وقت:',
      days: 'دن',
      hours: 'گھنٹے',
      minutes: 'منٹ',
      seconds: 'سیکنڈ',
      
      // Events Section Fully in Urdu with Poetry
      events_section_title: 'تقاریبِ نکاح و ولیمہ',
      events_section_subtitle: 'دعاؤں نے جس لمحے کو مدتوں سنوارا، آج وہ لمحہ ہمارے سامنے ہے',
      timing_label: 'وقت:',
      venue_label: 'مقام:',
      dress_code_label: 'لباس:',
      add_to_calendar: 'کیلنڈر میں محفوظ کریں',
      view_on_maps: 'نقشے پر راستہ دیکھیں',
      
      event_nikah_date: 'ہفتہ، 30 اکتوبر 2027',
      event_nikah_title: 'عقدِ مسنون و دعوتِ نکاح',
      event_nikah_time: 'شام 06:30 بجے (نکاح خواں) | رات 08:00 بجے (دعوتِ نکاح)',
      event_nikah_venue: 'پٹیل میڈیکل کمپلیکس، فاطمہ نگر، ایم آئی ڈی سی، جلگاؤں',
      event_nikah_dress: 'روایتی پروقار ملبوسات',
      event_nikah_desc: 'اللہ کی رحمت اور بزرگوں کی دعاؤں کے سائے میں نکاح اور پروقار عشائیہ۔',
      
      event_walima_date: 'اتوار، 31 اکتوبر 2027',
      event_walima_title: 'شاندار دعوتِ ولیمہ',
      event_walima_time: 'شام 07:30 بجے سے',
      event_walima_venue: 'دی گرینڈ امپیریل لان، جلگاؤں',
      event_walima_dress: 'پروقار رسمی ملبوسات',
      event_walima_desc: 'آج محفل میں رنگ کچھ اور ہے، ہر دھڑکن میں خوشی کا شور ہے۔',
      
      // Family Section in Urdu with Poetry
      family_section_title: 'بزرگوں کی دعائیں',
      family_section_subtitle: 'جن ہاتھوں نے دعاؤں میں ہمیں مانگا، آج انہی دعاؤں نے یہ دن دکھایا ہے',
      bride_side_title: 'اہلِ خانہ دلہن (پٹیل خاندان)',
      groom_side_title: 'اہلِ خانہ دلہا (دیشمکھ خاندان)',
      bride_family_quote: '”ہم آپ کو اپنی بیٹی عریبہ کے عقدِ مسنون کے پرمسرت موقع پر شرکت اور دعاؤں کی مخلصانہ دعوت دیتے ہیں۔“',
      groom_family_quote: '”اللہ تعالیٰ کے فضل و کرم سے ہم آپ کو عریبہ اور فیضان کے نکاح میں شرکت کی دعوت دیتے ہیں۔“',
      
      gallery_section_title: 'یادگار لمحات',
      gallery_section_subtitle: 'ہماری یادوں کے خوبصورت نقوش',
      
      // Aesthetic Carousel in Urdu with Poetry
      carousel_badge: 'شاہی جھلکیاں',
      carousel_title: 'عریبہ اور فیضان — مبارک لمحات',
      carousel_subtitle: 'کچھ لمحے تصویر نہیں بنتے، وہ عمر بھر کی یاد بن جاتے ہیں',
      slide_bride_tag: 'دلہن',
      slide_groom_tag: 'دلہا',
      slide_bride_sub: 'حیا، وقار اور نزاکت',
      slide_groom_sub: 'عزت، شجاعت اور وقار',
      slide_moment_tag: 'مقدس رشتہ',
      slide_moment_3_title: 'ابدی رحمت',
      slide_moment_3_sub: 'دو دلوں کا پرنور اتحاد',
      slide_nikah_tag: 'عقدِ مسنون',
      slide_moment_4_title: 'شاہی روایات',
      slide_moment_4_sub: 'محبت اور احترام کی تاریخ',
      slide_celebration_tag: 'جشنِ مسرت',
      slide_moment_5_title: 'خوشیوں کے رنگ',
      slide_moment_5_sub: 'مسکراہٹوں اور یادوں کا سنگم',
      slide_forever_tag: 'ہم سفر تا حیات',
      slide_moment_6_title: 'انشاء اللہ خیر',
      slide_moment_6_sub: 'دعاؤں کے سائے میں نیا سفر',
      
      // Dedicated Video Section in Urdu with Poetry
      video_section_badge: 'شاہی فلم',
      video_section_title: 'عریبہ اور فیضان — دعوت نامہ فلم',
      video_section_subtitle: 'کچھ ملاقاتیں وقت کے ساتھ گزر جاتی ہیں، اور کچھ پوری زندگی کا حصہ بن جاتی ہیں',
      video_play_prompt: 'ویڈیو دیکھیں / چلائیں',
      video_quote: '”دعاؤں نے جس لمحے کو مدتوں سنوارا، آج وہ لمحہ ہمارے سامنے ہے“',
      video_quote_author: 'عریبہ اور فیضان • 30 اکتوبر 2027',
      
      venue_section_title: 'مقامِ تقریب اور رہنمائی',
      venue_section_subtitle: 'تشریف لا کر ہماری محفل کو رونق بخشیں',
      venue_name: 'پٹیل میڈیکل کمپلیکس',
      venue_address: 'پٹیل میڈیکل، فاطمہ نگر، ایم آئی ڈی سی، جلگاؤں، مہاراشٹر 425003',
      get_directions_btn: 'گوگل میپس پر راستہ دیکھیں',
      
      // RSVP in Urdu with Poetry
      rsvp_section_title: 'اطلاعِ شرکت (RSVP)',
      rsvp_section_subtitle: 'خوشی مکمل کہاں ہوتی ہے اپنوں کے بغیر، سو آئیے، یہ شام آپ کے نام بھی ہو',
      rsvp_name: 'آپ کا مکمل نام *',
      rsvp_phone: 'واٹس ایپ / موبائل نمبر *',
      rsvp_email: 'ای میل ایڈریس (اختیاری)',
      rsvp_attending: 'کیا آپ تقریب میں تشریف لا رہے ہیں؟ *',
      rsvp_choice_yes: 'انشاءاللہ، ضرور شرکت کریں گے! 🎉',
      rsvp_choice_maybe: 'پوری کوشش کریں گے (غالباً)',
      rsvp_choice_no: 'معذرت، شرکت سے قاصر ہیں',
      rsvp_guests_count: 'کتنے معزز مہمان تشریف لائیں گے؟',
      rsvp_meal_pref: 'طعام کی ترجیح',
      rsvp_meal_veg: 'خالص سبزی خور / جین طعام',
      rsvp_meal_nonveg: 'حلال گوشت و متفرق پکوان',
      rsvp_message: 'نوبیاہتا جوڑے کے لیے کوئی نیک دعا یا پیغام؟',
      rsvp_submit_btn: 'اطلاع ارسال کریں',
      rsvp_sending: 'ارسال کیا جا رہا ہے...',
      rsvp_success_title: 'شکریہ! آپ کی اطلاع موصول ہو گئی ہے! ❤️',
      rsvp_success_msg: 'ہم جلگاؤں میں آپ کا استقبال کرنے کے لیے بے تاب ہیں۔',
      
      contact_section_title: 'رابطہ فرمائیں',
      contact_section_subtitle: 'کسی بھی رہنمائی یا مدد کے لیے بلا جھجھک رابطہ کریں',
      bride_contact_relation: 'والدِ دلہن',
      groom_contact_relation: 'والدِ دلہا',
      btn_call: 'فون کال کریں',
      btn_whatsapp: 'واٹس ایپ میسج',
      share_section_title: 'دعوت نامہ شیئر کریں',
      share_whatsapp_btn: 'واٹس ایپ پر بھیجیں',
      share_copy_btn: 'لنک کاپی کریں',
      share_native_btn: 'شیئر کریں',
      link_copied_toast: 'دعوت نامے کا لنک کاپی ہو گیا! ✨',
      qr_section_title: 'موبائل پر دعوت نامہ کھولیں',
      qr_section_subtitle: 'اپنے فون کے کیمرے سے کیو آر کوڈ اسکین کریں',
      qr_scan_instruction: 'فون کے کیمرے سے اسکین کریں',
      final_blessing: '”کچھ خوشیاں لفظوں میں کہاں آتی ہیں، بس اپنوں کی دعاؤں میں مسکرا جاتی ہیں“',
      with_love: 'پُرخلوص محبت و دعاؤں کے ساتھ',
      the_families: 'پٹیل اور دیشمکھ خاندان',
      footer_copyright: 'محبت اور دعاؤں کے ساتھ تیار کیا گیا برائے عریبہ و فیضان • 2027',
      footer_rights: 'All Rights Reserved by Mashkoor Patel'
    }
  },

  english: {
    lang_code: 'en',
    direction: 'ltr',
    name: 'English',
    flag: '👑',
    font: "'Cormorant Garamond', Georgia, serif",
    dict: {
      nav_home: 'Home',
      nav_couple: 'The Couple',
      nav_events: 'Nikah & Walima',
      nav_family: 'Families & Duas',
      nav_gallery: 'Moments',
      nav_venue: 'Venue',
      nav_rsvp: 'RSVP',
      nav_contact: 'Contact',
      nav_show_qr: 'Show QR',
      music_playing: 'Music Playing',
      music_muted: 'Play Music',
      entrance_badge: 'Royal Nikah Invitation',
      entrance_names: 'Ariba & Faizan',
      entrance_date: '30 October 2027 • Jalgaon, Maharashtra',
      entrance_btn: 'Click to Open',
      entrance_poem: 'A timeless story gently knocks upon the door, where love awakens forevermore ✨',
      door_open_toast: 'As the veil rises, we discover how beautiful the waiting was for one another ❤️',
      hero_couple_names: 'Ariba & Faizan',
      hero_quran_verse: '“And We created you in pairs” (Surah An-Naba 78:8)',
      hero_getting_married: 'The joy is ours to celebrate, yet your gracious presence makes it truly great',
      hero_date_location: '30 October 2027 • Patel Medical, Fatema Nagar, MIDC, Jalgaon',
      hero_btn_rsvp: 'Send RSVP',
      hero_btn_events: 'View Schedule',
      
      scratch_names_title: 'The Bride & Groom',
      scratch_names_subtitle: 'A destined glance that felt like lifetimes known, some sacred bonds are written before time has flown',
      scratch_names_poetry: 'Some cherished names are more than spoken art, they are lovingly engraved deep within the heart',
      scratch_bride_label: 'The Bride (Ariba)',
      scratch_groom_label: 'The Groom (Faizan)',
      scratch_bride_name: 'Ariba',
      scratch_groom_name: 'Faizan',
      groom_name: 'Faizan Deshmukh',
      groom_parents: 'Son of Mrs. Shabana A. & Mr. Abdul Hadi H. Deshmukh',
      bride_name: 'Ariba Patel',
      bride_parents: 'Daughter of Mrs. Khaleda A. & Mr. Abdulrahim G. Patel',
      scratch_card_instruction: 'Scratch the gold foil with finger or mouse ✨',
      scratch_revealed_toast: 'Some cherished names are more than spoken art, they are lovingly engraved deep within the heart ❤️',
      scratch_tap_fallback: 'Tap to reveal names',
      
      scratch_date_title: 'Save The Auspicious Date',
      scratch_date_subtitle: 'Some dates are never merely marked on pages, they are written upon the heart for ages',
      scratch_date_hint: 'Scratch to Reveal Nikah Date',
      scratch_date_revealed_heading: '30 October 2027',
      scratch_date_revealed_sub: 'Nikah & Walima Ceremony • Jalgaon',
      
      countdown_title: 'Counting Down to the Nikah',
      countdown_subtitle: 'Time remaining until the blessed celebrations begin:',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      
      events_section_title: 'Nikah & Walima Itinerary',
      events_section_subtitle: 'The sacred moment crafted by countless prayers and grace now unfolds before our eyes',
      timing_label: 'Time:',
      venue_label: 'Venue:',
      dress_code_label: 'Dress Code:',
      add_to_calendar: 'Save to Calendar',
      view_on_maps: 'View on Google Maps',
      
      event_nikah_date: 'Saturday, 30 Oct 2027',
      event_nikah_title: 'Auspicious Nikah Ceremony & Feast',
      event_nikah_time: '06:30 PM (Nikah Khawan) | 08:00 PM (Dawat-e-Nikah)',
      event_nikah_venue: 'Patel Medical Complex, Fatema Nagar, MIDC, Jalgaon',
      event_nikah_dress: 'Traditional Festive / Formal Elegance',
      event_nikah_desc: 'With the blessings of Allah (SWT) and our elders, the sacred Nikah solemnization followed by a royal feast.',
      
      event_walima_date: 'Sunday, 31 Oct 2027',
      event_walima_title: 'Grand Walima Reception (Dawat-e-Walima)',
      event_walima_time: '07:30 PM Onwards',
      event_walima_venue: 'The Grand Imperial Lawn, Jalgaon',
      event_walima_dress: 'Evening Formal / Royal Attire',
      event_walima_desc: 'A joyous evening celebrating the union of two families with warm felicitations and a celebratory banquet.',
      
      family_section_title: 'With Family Blessings & Duas',
      family_section_subtitle: 'The loving hands that prayed for us each night have brought this joyous day into radiant light',
      bride_side_title: "Bride's Family (The Patel Family)",
      groom_side_title: "Groom's Family (The Deshmukh Family)",
      bride_family_quote: '“We solicit your gracious presence and heartfelt prayers as our daughter Ariba embarks on this blessed journey.”',
      groom_family_quote: '“With immense joy and gratitude to Allah (SWT), we invite you to bless Ariba & Faizan on their Nikah.”',
      
      gallery_section_title: 'Cherished Moments',
      gallery_section_subtitle: 'A glimpse into our blessed journey',
      
      // Aesthetic Carousel
      carousel_badge: 'Royal Glimpses',
      carousel_title: 'Ariba & Faizan — Cherished Moments',
      carousel_subtitle: 'Some fleeting moments are never mere snapshots cast, they become eternal memories that forever last',
      slide_bride_tag: 'The Bride',
      slide_groom_tag: 'The Groom',
      slide_bride_sub: 'Grace, Elegance & Purity',
      slide_groom_sub: 'Dignity, Chivalry & Honor',
      slide_moment_tag: 'Sacred Union',
      slide_moment_3_title: 'Eternal Grace',
      slide_moment_3_sub: 'Two Souls Bound in Faith',
      slide_nikah_tag: 'Auspicious Nikah',
      slide_moment_4_title: 'Royal Heritage',
      slide_moment_4_sub: 'A Legacy of Love & Respect',
      slide_celebration_tag: 'Celebration',
      slide_moment_5_title: 'Timeless Bonds',
      slide_moment_5_sub: 'Joyous Smiles & Celebrations',
      slide_forever_tag: 'Together Forever',
      slide_moment_6_title: 'InshaAllah Khair',
      slide_moment_6_sub: 'Stepping into Tomorrow with Duas',
      
      // Dedicated Video Section
      video_section_badge: 'Cinematic Film',
      video_section_title: 'Ariba & Faizan — The Wedding Film',
      video_section_subtitle: 'Some brief encounters may gently fade with rhyme, while others become our companion for all time',
      video_play_prompt: 'Play Wedding Film',
      video_quote: '“The Sacred Moment Crafted by Countless Prayers and Grace, Now Unfolds Before Our Eyes”',
      video_quote_author: 'Ariba & Faizan • 30 October 2027',
      
      venue_section_title: 'The Royal Venue',
      venue_section_subtitle: 'We look forward to welcoming you to Fatema Nagar, MIDC, Jalgaon',
      venue_name: 'Patel Medical Complex',
      venue_address: 'Patel Medical, Fatema Nagar, MIDC, Jalgaon, Maharashtra 425003',
      get_directions_btn: 'Get Directions on Google Maps',
      
      rsvp_section_title: 'Kindly RSVP',
      rsvp_section_subtitle: 'Joy is never truly complete without those we hold dear, come grace our evening with your blessings',
      rsvp_name: 'Full Name *',
      rsvp_phone: 'WhatsApp / Mobile Number *',
      rsvp_email: 'Email Address (Optional)',
      rsvp_attending: 'Will you be attending? *',
      rsvp_choice_yes: 'InshaAllah, Joyfully Accept! 🎉',
      rsvp_choice_maybe: 'Hoping to Attend (Maybe)',
      rsvp_choice_no: 'Regretfully Decline',
      rsvp_guests_count: 'Number of Guests (Including Yourself)',
      rsvp_meal_pref: 'Dining Preference',
      rsvp_meal_veg: 'Pure Vegetarian / Jain Cuisine',
      rsvp_meal_nonveg: 'Halal Gourmet & Continental',
      rsvp_message: 'Duas / Note for the Couple',
      rsvp_submit_btn: 'Submit RSVP',
      
      contact_section_title: 'Contact & Hospitality',
      contact_section_subtitle: 'For any travel assistance, please feel free to reach out to us',
      bride_contact_relation: "Bride's Father",
      groom_contact_relation: "Groom's Father",
      btn_call: 'Call Directly',
      btn_whatsapp: 'WhatsApp Message',
      share_section_title: 'Share This Invitation',
      share_whatsapp_btn: 'Share via WhatsApp',
      share_copy_btn: 'Copy Invitation Link',
      share_native_btn: 'Share Invitation',
      link_copied_toast: 'Invitation link copied to clipboard! ✨',
      qr_section_title: 'Open on Mobile Device',
      qr_section_subtitle: 'Point your smartphone camera at the code below to open and share this digital card',
      qr_scan_instruction: 'Scan with Phone Camera to Open Card',
      final_blessing: '“Some profound joys words can scarcely frame, they gently smile in the heartfelt prayers you claim”',
      with_love: 'With Boundless Love & Duas',
      the_families: 'The Patel & Deshmukh Families',
      footer_copyright: 'Crafted with Love & Duas for Ariba & Faizan • 2027',
      footer_rights: 'All Rights Reserved by Mashkoor Patel'
    }
  },

  marathi: {
    lang_code: 'mr',
    direction: 'ltr',
    name: 'मराठी',
    flag: '🌸',
    font: "'Tiro Devanagari Marathi', serif",
    dict: {
      nav_home: 'मुख्य पान',
      nav_couple: 'वर-वधू',
      nav_events: 'निकाह व वलिमा',
      nav_family: 'कुटुंब व आशीर्वाद',
      nav_gallery: 'क्षणचित्रे',
      nav_venue: 'स्थान व मार्ग',
      nav_rsvp: 'उपस्थिती नोंद',
      nav_contact: 'संपर्क',
      nav_show_qr: 'क्यूआर पहा',
      music_playing: 'संगीत चालू आहे',
      music_muted: 'संगीत ऐका',
      entrance_badge: 'दावत-ए-निकाह मंगल निमंत्रण',
      entrance_names: 'अरिबा आणि फैझान',
      entrance_date: '३० ऑक्टोबर २०२७ • जळगाव, महाराष्ट्र',
      entrance_btn: 'उघडा / Click to Open',
      entrance_poem: 'एका नव्या सुंदर कथेने दारावर दिली आहे साद, प्रेमाने आज घेतला आहे नवा आशीर्वाद ✨',
      door_open_toast: 'पडदा उघडला अन् उमगले सारे, प्रतीक्षेचे क्षणही किती सुंदर होते सारे ❤️',
      hero_couple_names: 'अरिबा आणि फैझान',
      hero_quran_verse: '“आणि आम्ही तुम्हास जोड्यांमध्ये निर्माण केले” (कुराण ७८:८)',
      hero_getting_married: 'हा आनंद आमचा असला तरी, याची खरी शोभा आपल्या उपस्थितीने आहे',
      hero_date_location: '३० ऑक्टोबर २०२७ • पटेल मेडिकल, फातिमा नगर, एमआयडीसी, जळगाव',
      hero_btn_rsvp: 'उपस्थिती नोंदवा',
      hero_btn_events: 'सोहळ्याची रूपरेषा',
      
      scratch_names_title: 'वर-वधूंची शुभ नावे',
      scratch_names_subtitle: 'नजर मिळताच वाटले ओळखीचे सारे, काही बंध वेळेआधीच जुळलेले असतात सारे',
      scratch_names_poetry: 'काही नावे केवळ उच्चारली जात नाहीत, ती मनात प्रेमाने जपली जातात',
      scratch_bride_label: 'वधू (अरिबा)',
      scratch_groom_label: 'वर (फैझान)',
      scratch_bride_name: 'अरिबा',
      scratch_groom_name: 'फैझान',
      groom_name: 'फैझान देशमुख',
      groom_parents: 'सौ. शबाना ए. व श्री. अब्दुल हादी एच. देशमुख यांचे चिरंजीव',
      bride_name: 'अरिबा पटेल',
      bride_parents: 'सौ. खलिदा ए. व श्री. अब्दुल रहीम जी. पटेल यांची सुकन्या',
      scratch_card_instruction: 'सोनेरी थर स्क्रॅच करा ✨',
      scratch_revealed_toast: 'काही नावे केवळ उच्चारली जात नाहीत, ती मनात प्रेमाने जपली जातात ❤️',
      scratch_tap_fallback: 'नाव पाहण्यासाठी स्पर्श करा',
      
      scratch_date_title: 'शुभ निकाहची मंगल तारीख',
      scratch_date_subtitle: 'काही तारखा कॅलेंडरवर नसतात, त्या थेट हृदयात कोरल्या जातात',
      scratch_date_hint: 'स्क्रॅच करा आणि तारीख पहा',
      scratch_date_revealed_heading: '३० ऑक्टोबर २०२७',
      scratch_date_revealed_sub: 'निकाह व वलिमा सोहळा • जळगाव',
      
      countdown_title: 'शुभ निकाहची प्रतीक्षा',
      countdown_subtitle: 'सोहळा सुरू होण्यासाठी उरलेला वेळ:',
      days: 'दिवस',
      hours: 'तास',
      minutes: 'मिनिटे',
      seconds: 'सेकंद',
      
      events_section_title: 'निकाह व वलिमा कार्यक्रम',
      events_section_subtitle: 'प्रार्थनांनी ज्या क्षणाला वर्षानुवर्षे सजवले, आज तो मंगल क्षण आपल्या साक्षीने उजळला',
      timing_label: 'वेळ:',
      venue_label: 'स्थळ:',
      dress_code_label: 'पोशाख:',
      add_to_calendar: 'कॅलेंडरमध्ये सेव्ह करा',
      view_on_maps: 'नकाशावर मार्ग पहा',
      
      event_nikah_date: 'शनिवार, ३० ऑक्टोबर २०२७',
      event_nikah_title: 'पवित्र निकाह विधी व दावत',
      event_nikah_time: 'संध्याकाळी ०६:३० वाजता (निकाह) | रात्री ०८:०० वाजता (दावत)',
      event_nikah_venue: 'पटेल मेडिकल कॉम्प्लेक्स, फातिमा नगर, एमआयडीसी, जळगाव',
      event_nikah_dress: 'पारंपरिक औपचारिक व राजेशाही पोशाख',
      event_nikah_desc: 'अल्लाहच्या कृपेने आणि वडीलधाऱ्यांच्या आशीर्वादाने निकाह व शाही भोजन.',
      
      event_walima_date: 'रविवार, ३१ ऑक्टोबर २०२७',
      event_walima_title: 'भव्य वलिमा रिसेप्शन (दावत-ए-वलिमा)',
      event_walima_time: 'संध्याकाळी ०७:३० वाजता',
      event_walima_venue: 'द ग्रँड इम्पेरियल लॉन, जळगाव',
      event_walima_dress: 'शाही औपचारिक पोशाख',
      event_walima_desc: 'दोन कुटुंबांच्या स्नेहाची सुंदर संध्याकाळ आणि मेजवानी.',
      
      family_section_title: 'कुटुंबाचे शुभाशीर्वाद',
      family_section_subtitle: 'ज्या हातांनी प्रार्थनेत आम्हाला मागितले, त्याच आशीर्वादाने आज हा सुवर्ण दिन दाखवला',
      bride_side_title: 'वधू पक्षाकडील कुटुंब (पटेल परिवार)',
      groom_side_title: 'वर पक्षाकडील कुटुंब (देशमुख परिवार)',
      bride_family_quote: '“आमची कन्या अरिबा हिच्या निकाह प्रसंगी आपली उपस्थिती आणि शुभाशीर्वाद प्रार्थनीय आहेत.”',
      groom_family_quote: '“अल्लाहच्या कृपेने अरिबा आणि फैझान यांच्या निकाह सोहळ्यात आम्ही आपले सहर्ष स्वागत करतो.”',
      
      gallery_section_title: 'गोड आठवणी',
      gallery_section_subtitle: 'आमच्या प्रवासातील काही अविस्मरणीय क्षण',
      
      // Aesthetic Carousel in Marathi
      carousel_badge: 'शाही क्षणचित्रे',
      carousel_title: 'अरिबा आणि फैझान — सुवर्ण आठवणी',
      carousel_subtitle: 'काही क्षण केवळ छायाचित्रे नसतात, ती आयुष्यभराची सुंदर आठवण बनतात',
      slide_bride_tag: 'वधू',
      slide_groom_tag: 'वर',
      slide_bride_sub: 'सौंदर्य, शालीनता आणि पावित्र्य',
      slide_groom_sub: 'प्रतिष्ठा आणि आदर',
      slide_moment_tag: 'पवित्र बंधन',
      slide_moment_3_title: 'शाश्वत कृपा',
      slide_moment_3_sub: 'विश्वासाच्या धाग्यात गुंफलेली दोन मने',
      slide_nikah_tag: 'शुभ निकाह',
      slide_moment_4_title: 'शाही वारसा',
      slide_moment_4_sub: 'प्रेम आणि आदराचा वारसा',
      slide_celebration_tag: 'आनंदोत्सव',
      slide_moment_5_title: 'अतूट बंध',
      slide_moment_5_sub: 'आनंदी हास्य आणि उत्सवाचे क्षण',
      slide_forever_tag: 'जन्मोजन्मीचे सोबती',
      slide_moment_6_title: 'प्रार्थना आणि शुभाशीर्वाद',
      slide_moment_6_sub: 'आशीर्वादांच्या साक्षीने नवी सुरुवात',
      
      // Dedicated Video Section in Marathi
      video_section_badge: 'सिनेमॅटिक व्हिडिओ',
      video_section_title: 'अरिबा आणि फैझान — शाही लग्न व्हिडिओ',
      video_section_subtitle: 'काही भेटी वेळेसोबत सरून जातात, पण काही संपूर्ण आयुष्याचा अविभाज्य भाग बनतात',
      video_play_prompt: 'व्हिडिओ पहा',
      video_quote: '“प्रार्थनांनी ज्या क्षणाला वर्षानुवर्षे सजवले, आज तो मंगल क्षण आपल्या साक्षीने उजळला”',
      video_quote_author: 'अरिबा आणि फैझान • ३० ऑक्टोबर २०२७',
      
      venue_section_title: 'समारंभ स्थळ व रस्ता',
      venue_section_subtitle: 'जळगावच्या पावन भूमीवर आपले सहर्ष स्वागत',
      venue_name: 'पटेल मेडिकल कॉम्प्लेक्स',
      venue_address: 'पटेल मेडिकल, फातिमा नगर, एमआयडीसी, जळगाव, महाराष्ट्र ४२५००३',
      get_directions_btn: 'गुगल मॅप्सवर दिशा पहा',
      
      rsvp_section_title: 'आपली उपस्थिती नोंदवा',
      rsvp_section_subtitle: 'आपल्या प्रियजनांशिवाय आनंद कसा पूर्ण होणार? चला या, ही संध्याकाळ आपल्या नावे करूया',
      rsvp_name: 'आपले पूर्ण नाव *',
      rsvp_phone: 'व्हॉट्सअॅप / मोबाइल नंबर *',
      rsvp_email: 'ईमेल पत्ता (ऐच्छिक)',
      rsvp_attending: 'आपण उपस्थित राहणार आहात का? *',
      rsvp_choice_yes: 'नक्कीच, आनंदानं उपस्थित राहू! 🎉',
      rsvp_choice_maybe: 'प्रयत्न नक्की करू (कदाचित)',
      rsvp_choice_no: 'क्षमस्व, उपस्थित राहता येणार नाही',
      rsvp_guests_count: 'एकूण उपस्थित राहणाऱ्यांची संख्या',
      rsvp_meal_pref: 'भोजन पसंती',
      rsvp_meal_veg: 'शुद्ध शाकाहारी / जैन जेवण',
      rsvp_meal_nonveg: 'हलाल मांसाहारी व विशेष जेवण',
      rsvp_message: 'वधू-वरांसाठी शुभेच्छा संदेश',
      rsvp_submit_btn: 'नोंद पाठवा',
      
      contact_section_title: 'संपर्क व आतिथ्य सेवा',
      contact_section_subtitle: 'प्रवास किंवा इतर कोणत्याही मदतीसाठी अवश्य संपर्क साधा',
      bride_contact_relation: 'वधूचे वडील',
      groom_contact_relation: 'वराचे वडील',
      btn_call: 'कॉल करा',
      btn_whatsapp: 'व्हॉट्सअॅप मेसेज',
      share_section_title: 'निमंत्रण पत्रिका शेअर करा',
      share_whatsapp_btn: 'व्हॉट्सअॅपवर पाठवा',
      share_copy_btn: 'लिंक कॉपी करा',
      share_native_btn: 'शेअर करा',
      link_copied_toast: 'निमंत्रण लिंक कॉपी झाली आहे! ✨',
      qr_section_title: 'मोबाईलवर निमंत्रण उघडा',
      qr_section_subtitle: 'आपल्या मोबाईल कॅमेऱ्याने खालील क्यूआर कोड स्कॅन करा',
      qr_scan_instruction: 'कॅमेऱ्याने स्कॅन करा व निमंत्रण पहा',
      final_blessing: '“काही आनंद शब्दांत मांडता येत नाहीत, ते फक्त आपुलकीच्या आशीर्वादात हसतात”',
      with_love: 'स्नेह आणि कृतज्ञतेसह',
      the_families: 'पटेल आणि देशमुख परिवार',
      footer_copyright: 'अरिबा आणि फैझान यांच्या निकाहसाठी सस्नेह निर्मित • २०२७',
      footer_rights: 'All Rights Reserved by Mashkoor Patel'
    }
  },

  hindi: {
    lang_code: 'hi',
    direction: 'ltr',
    name: 'हिन्दी',
    flag: '🪔',
    font: "'Tiro Devanagari Hindi', serif",
    dict: {
      nav_home: 'मुख्य पृष्ठ',
      nav_couple: 'वर-वधू',
      nav_events: 'निकाह व वलीमा',
      nav_family: 'परिवार व दुआएं',
      nav_gallery: 'स्मृतियां',
      nav_venue: 'स्थान व मार्ग',
      nav_rsvp: 'उपस्थिति पुष्टि',
      nav_contact: 'संपर्क',
      nav_show_qr: 'QR देखें',
      music_playing: 'मंगल ध्वनि चालू है',
      music_muted: 'संगीत सुनें',
      entrance_badge: 'दावत-ए-निकाह निमंत्रण पत्र',
      entrance_names: 'अरीबा एवं फ़ैज़ान',
      entrance_date: '३० अक्टूबर २०२७ • जलगांव, महाराष्ट्र',
      entrance_btn: 'खोलें / Click to Open',
      entrance_poem: 'एक नई दास्तान ने दर पे दस्तक दी है, शायद मोहब्बत ने आज फिर कोई शक्ल ली है ✨',
      door_open_toast: 'पर्दा उठा तो मालूम हुआ, इंतज़ार भी कितना हसीन होता है ❤️',
      hero_couple_names: 'अरीबा एवं फ़ैज़ान',
      hero_quran_verse: '“और हमने तुम्हें जोड़ों में पैदा किया” (कुरआन ७८:८)',
      hero_getting_married: 'यह ख़ुशी हमारी सही, मगर इसकी रौनक़ आप से है',
      hero_date_location: '३० अक्टूबर २०२७ • पटेल मेडिकल, फ़ातिमा नगर, एमआईडीसी, जलगांव',
      hero_btn_rsvp: 'उपस्थिति दर्ज करें',
      hero_btn_events: 'कार्यक्रम विवरण',
      
      scratch_names_title: 'वर-वधू के शुभ नाम',
      scratch_names_subtitle: 'नज़र मिली तो यूँ लगा जैसे बरसों से जानते थे, शायद कुछ रिश्ते वक़्त से पहले लिखे जाते हैं',
      scratch_names_poetry: 'कुछ नाम सिर्फ़ पुकारे नहीं जाते, दिल में मोहब्बत से बसाए जाते हैं',
      scratch_bride_label: 'वधू (अरीबा)',
      scratch_groom_label: 'वर (फ़ैज़ान)',
      scratch_bride_name: 'अरीबा',
      scratch_groom_name: 'फ़ैज़ान',
      groom_name: 'फ़ैज़ान देशमुख',
      groom_parents: 'सुपुत्र श्रीमती शबाना ए. एवं श्री अब्दुल हादी एच. देशमुख',
      bride_name: 'अरीबा पटेल',
      bride_parents: 'सुपुत्री श्रीमती ख़ालिदा ए. एवं श्री अब्दुल रहीम जी. पटेल',
      scratch_card_instruction: 'स्वर्ण परत को स्क्रैच करें ✨',
      scratch_revealed_toast: 'कुछ नाम सिर्फ़ पुकारे नहीं जाते, दिल में मोहब्बत से बसाए जाते हैं ❤️',
      scratch_tap_fallback: 'नाम देखने हेतु स्पर्श करें',
      
      scratch_date_title: 'शुभ निकाह तिथि प्रकटीकरण',
      scratch_date_subtitle: 'कुछ तारीख़ें कैलेंडर में नहीं होतीं, वो सीधा दिल में लिखी जाती हैं',
      scratch_date_hint: 'स्क्रैच करें व तिथि जानें',
      scratch_date_revealed_heading: '३० अक्टूबर २०२७',
      scratch_date_revealed_sub: 'निकाह व वलीमा समारोह • जलगांव',
      
      countdown_title: 'शुभ निकाह की प्रतीक्षा',
      countdown_subtitle: 'समारोह आरंभ होने में शेष समय:',
      days: 'दिन',
      hours: 'घंटे',
      minutes: 'मिनट',
      seconds: 'सेकंड',
      
      events_section_title: 'निकाह व वलीमा कार्यक्रम रूपरेखा',
      events_section_subtitle: 'दुआओं ने जिस लम्हे को मुद्दतों संवारा, आज वो लम्हा हमारे सामने है',
      timing_label: 'समय:',
      venue_label: 'स्थान:',
      dress_code_label: 'परिधान (ड्रेस कोड):',
      add_to_calendar: 'कैलेंडर में सहेजें',
      view_on_maps: 'गूगल मानचित्र पर मार्ग देखें',
      
      event_nikah_date: 'शनिवार, ३० अक्टूबर २०२७',
      event_nikah_title: 'शुभ निकाह एवं दावत-ए-निकाह',
      event_nikah_time: 'सायं ०६:३० बजे (निकाह) | रात्रि ०८:०० बजे (दावत-ए-निकाह)',
      event_nikah_venue: 'पटेल मेडिकल कॉम्प्लेक्स, फ़ातिमा नगर, एमआईडीसी, जलगांव',
      event_nikah_dress: 'पारंपरिक उत्सव परिधान',
      event_nikah_desc: 'अल्लाह की रहमत व बुजुर्गों की दुआओं के साथ अक़्द-ए-निकाह एवं शाही भोज।',
      
      event_walima_date: 'रविवार, ३१ अक्टूबर २०२७',
      event_walima_title: 'भव्य वलीमा प्रीतिभोज (दावत-ए-वलीमा)',
      event_walima_time: 'सायं ०७:३० बजे से',
      event_walima_venue: 'द ग्रैंड इंपीरियल लॉन, जलगांव',
      event_walima_dress: 'शाही औपचारिक परिधान',
      event_walima_desc: 'आज महफ़िल में रंग कुछ और है, हर धड़कन में ख़ुशी का शोर है।',
      
      family_section_title: 'परिवार का स्नेह एवं दुआएं',
      family_section_subtitle: 'जिन हाथों ने दुआओं में हमें मांगा, आज उन्हीं दुआओं ने यह दिन दिखाया है',
      bride_side_title: 'वधू पक्ष की ओर से (पटेल परिवार)',
      groom_side_title: 'वर पक्ष की ओर से (देशमुख परिवार)',
      bride_family_quote: '“हमारी सुपुत्री अरीबा के निकाह के पावन अवसर पर आपकी गरिमामयी उपस्थिति व दुआएं प्रार्थनीय हैं।”',
      groom_family_quote: '“अल्लाह के शुक्र के साथ अरीबा एवं फ़ैज़ान के निकाह में हम आपका सहर्ष स्वागत करते हैं।”',
      
      gallery_section_title: 'मधुर स्मृतियां',
      gallery_section_subtitle: 'जीवन के कुछ अत्यंत सुंदर व यादगार क्षण',
      
      // Aesthetic Carousel in Hindi
      carousel_badge: 'शाही झलकियां',
      carousel_title: 'अरीबा और फ़ैज़ान — मुबारक लम्हे',
      carousel_subtitle: 'कुछ लम्हे तस्वीर नहीं बनते, वो उम्र भर की याद बन जाते हैं',
      slide_bride_tag: 'दुल्हन',
      slide_groom_tag: 'दूल्हा',
      slide_bride_sub: 'सादगी, गरिमा और नज़ाकत',
      slide_groom_sub: 'प्रतिष्ठा और गौरव',
      slide_moment_tag: 'पवित्र बंधन',
      slide_moment_3_title: 'सदाबहार गरिमा',
      slide_moment_3_sub: 'विश्वास और दुआओं में बंधे दो दिल',
      slide_nikah_tag: 'शुभ निकाह',
      slide_moment_4_title: 'शाही विरासत',
      slide_moment_4_sub: 'प्यार और इज़्ज़त की दास्तान',
      slide_celebration_tag: 'जश्न-ए-मसर्रत',
      slide_moment_5_title: 'अनमोल लम्हे',
      slide_moment_5_sub: 'मुस्कुराहटों और खुशियों का संगम',
      slide_forever_tag: 'हमसफ़र',
      slide_moment_6_title: 'इंशाअल्लाह खैर',
      slide_moment_6_sub: 'दुआओं के साए में नया सफ़र',
      
      // Dedicated Video Section in Hindi
      video_section_badge: 'सिनेमैटिक फिल्म',
      video_section_title: 'अरीबा और फ़ैज़ान — निमंत्रण फिल्म',
      video_section_subtitle: 'कुछ मुलाक़ातें वक़्त के साथ गुज़र जाती हैं, और कुछ पूरी ज़िंदगी का हिस्सा बन जाती हैं',
      video_play_prompt: 'वीडियो देखें',
      video_quote: '“दुआओं ने जिस लम्हे को मुद्दतों संवारा, आज वो लम्हा हमारे सामने है”',
      video_quote_author: 'अरीबा और फ़ैज़ान • ३० अक्टूबर २०२७',
      
      venue_section_title: 'समारोह स्थल एवं मार्ग',
      venue_section_subtitle: 'जलगांव की पावन धरा पर आपका सहर्ष स्वागत है',
      venue_name: 'पटेल मेडिकल कॉम्प्लेक्स',
      venue_address: 'पटेल मेडिकल, फ़ातिमा नगर, एमआईडीसी, जलगांव, महाराष्ट्र ४२५००३',
      get_directions_btn: 'गूगल मैप्स पर रास्ता देखें',
      
      rsvp_section_title: 'कृपया अपनी उपस्थिति दर्ज करें',
      rsvp_section_subtitle: 'ख़ुशी मुकम्मल कहाँ होती है अपनों के बग़ैर, सो आइए, यह शाम आपके नाम भी हो',
      rsvp_name: 'आपका शुभ नाम *',
      rsvp_phone: 'व्हाट्सएप / मोबाइल नंबर *',
      rsvp_email: 'ईमेल पता (वैकल्पिक)',
      rsvp_attending: 'क्या आप समारोह में पधार रहे हैं? *',
      rsvp_choice_yes: 'सहर्ष स्वीकार, अवश्य पधारेंगे! 🎉',
      rsvp_choice_maybe: 'पूर्ण प्रयास रहेगा (संभवतः)',
      rsvp_choice_no: 'असमर्थता हेतु क्षमाप्रार्थी हैं',
      rsvp_guests_count: 'सपरिवार कुल सदस्यों की संख्या',
      rsvp_meal_pref: 'भोजन प्राथमिकता',
      rsvp_meal_veg: 'शुद्ध शाकाहारी / जैन भोजन',
      rsvp_meal_nonveg: 'हलाल मांसाहारी व विशेष व्यंजन',
      rsvp_message: 'वर-वधू के लिए शुभकामना संदेश व दुआएं',
      rsvp_submit_btn: 'उपस्थिति पुष्टि भेजें',
      
      contact_section_title: 'संपर्क एवं आतिथ्य सेवा',
      contact_section_subtitle: 'यात्रा, आवास अथवा किसी भी सुविधा हेतु निःसंकोच संपर्क करें',
      bride_contact_relation: 'वधू के पिता',
      groom_contact_relation: 'वर के पिता',
      btn_call: 'कॉल करें',
      btn_whatsapp: 'व्हाट्सएप संदेश',
      share_section_title: 'निमंत्रण पत्र साझा करें',
      share_whatsapp_btn: 'व्हाट्सएप पर भेजें',
      share_copy_btn: 'लिंक कॉपी करें',
      share_native_btn: 'निमंत्रण साझा करें',
      link_copied_toast: 'निमंत्रण लिंक कॉपी कर लिया गया है! ✨',
      qr_section_title: 'मोबाइल पर निमंत्रण खोलें',
      qr_section_subtitle: 'नीचे दिए गए क्यूआर कोड को अपने फोन के कैमरे से स्कैन करें',
      qr_scan_instruction: 'फोन के कैमरे से स्कैन कर निमंत्रण खोलें',
      final_blessing: '“कुछ ख़ुशियाँ लफ़्ज़ों में कहाँ आती हैं, बस अपनों की दुआओं में मुस्कुरा जाती हैं”',
      with_love: 'स्नेह एवं कृतज्ञता सहित',
      the_families: 'पटेल एवं देशमुख परिवार',
      footer_copyright: 'अरीबा एवं फ़ैज़ान के निकाह हेतु सस्नेह निर्मित • २०२७',
      footer_rights: 'All Rights Reserved by Mashkoor Patel'
    }
  },

  gujarati: {
    lang_code: 'gu',
    direction: 'ltr',
    name: 'ગુજરાતી',
    flag: '🏵️',
    font: "'Noto Serif Gujarati', serif",
    dict: {
      nav_home: 'મુખ્ય પૃષ્ઠ',
      nav_couple: 'વર-વધૂ',
      nav_events: 'નિકાહ અને વલીમા',
      nav_family: 'પરિવાર અને દુઆ',
      nav_gallery: 'સ્મૃતિઓ',
      nav_venue: 'સ્થળ અને માર્ગ',
      nav_rsvp: 'ઉપસ્થિતિ નોંધ',
      nav_contact: 'સંપર્ક',
      nav_show_qr: 'QR જુઓ',
      music_playing: 'સંગીત ચાલુ છે',
      music_muted: 'સંગીત સાંભળો',
      entrance_badge: 'દાવત-એ-નિકાહ મંગલ નિમંત્રણ',
      entrance_names: 'અરીબા અને ફૈઝાન',
      entrance_date: '૩૦ ઓક્ટોબર ૨૦૨૭ • જળગાંવ, મહારાષ્ટ્ર',
      entrance_btn: 'ખોલો / Click to Open',
      entrance_poem: 'એક નવી વાર્તાએ દરવાજે ટકોરા દીધા છે, પ્રેમે આજે ફરી નવું રૂપ લીધું છે ✨',
      door_open_toast: 'પડદો ઊંચકાયો ને સમજાયું, પ્રતીક્ષા પણ કેટલી સુંદર હોય છે ❤️',
      hero_couple_names: 'અરીબા અને ફૈઝાન',
      hero_quran_verse: '“અને અમે તમને જોડીઓમાં બનાવ્યા છે” (કુરાન ૭૮:૮)',
      hero_getting_married: 'આ ખુશી ભલે અમારી હોય, પણ એની ખરી શોભા તમારા આગમનથી છે',
      hero_date_location: '૩૦ ઓક્ટોબર ૨૦૨૭ • પટેલ મેડિકલ, ફાતેમા નગર, MIDC, જળગાંવ',
      hero_btn_rsvp: 'ઉપસ્થિતિ નોંધવો',
      hero_btn_events: 'કાર્યક્રમ વિગત',
      
      // Couple Card in Gujarati with Poetry
      scratch_names_title: 'વર-વધૂના શુભ નામ',
      scratch_names_subtitle: 'નજર મળી ત્યારે લાગ્યું જાણે વર્ષોથી ઓળખીએ છીએ, અમુક સંબંધો સમય પહેલાં જ લખાયેલા હોય છે',
      scratch_names_poetry: 'કેટલાક નામ માત્ર બોલાતા નથી, દિલમાં પ્રેમથી સચવાય છે',
      scratch_bride_label: 'વધૂ (અરીબા)',
      scratch_groom_label: 'વર (ફૈઝાન)',
      scratch_bride_name: 'અરીબા',
      scratch_groom_name: 'ફૈઝાન',
      groom_name: 'ફૈઝાન દેશમુખ',
      groom_parents: 'શ્રીમતી શબાના એ. અને શ્રી અબ્દુલ હાદી એચ. દેશમુખના સુપુત્ર',
      bride_name: 'અરીબા પટેલ',
      bride_parents: 'શ્રીમતી ખાલિદા એ. અને શ્રી અબ્દુલ રહીમ જી. પટેલની સુપુત્રી',
      scratch_card_instruction: 'સોનેરી પડ પર સ્ક્રેચ કરો ✨',
      scratch_revealed_toast: 'કેટલાક નામ માત્ર બોલાતા નથી, દિલમાં પ્રેમથી સચવાય છે ❤️',
      scratch_tap_fallback: 'નામ જોવા માટે સ્પર્શ કરો',
      
      // Date Card in Gujarati with Poetry
      scratch_date_title: 'શુભ નિકાહ તારીખ દર્શન',
      scratch_date_subtitle: 'કેટલીક તારીખો કેલેન્ડરમાં નથી હોતી, એ સીધી દિલમાં અંકિત થાય છે',
      scratch_date_hint: 'સ્ક્રેચ કરો અને તારીખ જુઓ',
      scratch_date_revealed_heading: '૩૦ ઓક્ટોબર ૨૦૨૭',
      scratch_date_revealed_sub: 'નિકાહ અને વલીમા મહોત્સવ • જળગાંવ',
      
      countdown_title: 'શુભ નિકાહની પ્રતીક્ષા',
      countdown_subtitle: 'મંગલ વિધિ શરૂ થવામાં બાકી સમય:',
      days: 'દિવસ',
      hours: 'કલાક',
      minutes: 'મિનિટ',
      seconds: 'સેકન્ડ',
      
      // Events Section in Gujarati with Poetry
      events_section_title: 'નિકાહ અને વલીમા કાર્યક્રમ',
      events_section_subtitle: 'દુઆઓએ જે ક્ષણને વર્ષોથી શણગારી, આજે એ ક્ષણ આપણી સમક્ષ સાકાર થઈ છે',
      timing_label: 'સમય:',
      venue_label: 'સ્થળ:',
      dress_code_label: 'પોશાક (ડ્રેસ કોડ):',
      add_to_calendar: 'કેલેન્ડરમાં સેવ કરો',
      view_on_maps: 'નકશા પર માર્ગ જુઓ',
      
      event_nikah_date: 'શનિવાર, ૩૦ ઓક્ટોબર ૨૦૨૭',
      event_nikah_title: 'પવિત્ર નિકાહ વિધિ અને દાવત',
      event_nikah_time: 'સાંજે ૦૬:૩૦ વાગ્યે (નિકાહ) | રાત્રે ૦૮:૦૦ વાગ્યે (દાવત-એ-નિકાહ)',
      event_nikah_venue: 'પટેલ મેડિકલ કોમ્પ્લેક્સ, ફાતેમા નગર, MIDC, જળગાંવ',
      event_nikah_dress: 'પરંપરાગત ઉત્સવ પોશાક',
      event_nikah_desc: 'અલ્લાહની રહમત અને વડીલોના આશીર્વાદ સાથે અક્દ-એ-નિકાહ અને શાહી ભોજન સમારંભ.',
      
      event_walima_date: 'રવિવાર, ૩૧ ઓક્ટોબર ૨૦૨૭',
      event_walima_title: 'ભવ્ય વલીમા રિસેપ્શન (દાવત-એ-વલીમા)',
      event_walima_time: 'સાંજે ૦૭:૩૦ વાગ્યાથી',
      event_walima_venue: 'ધ ગ્રાન્ડ ઇમ્પીરીયલ લોન, જળગાંવ',
      event_walima_dress: 'શાહી ઔપચારિક પોશાક',
      event_walima_desc: 'આજે મહેફિલમાં રંગ અનોખો છે, દરેક ધબકારામાં ખુશીઓનો ઉત્સાહ છે.',
      
      // Family Section in Gujarati with Poetry
      family_section_title: 'પરિવારના આશીર્વાદ અને દુઆઓ',
      family_section_subtitle: 'જે હાથોએ દુઆઓમાં અમને માંગ્યા, આજે એ જ દુઆઓએ આ સોનેરી દિવસ બતાવ્યો છે',
      bride_side_title: 'વધૂ પક્ષ તરફથી (પટેલ પરિવાર)',
      groom_side_title: 'વર પક્ષ તરફથી (દેશમુખ પરિવાર)',
      bride_family_quote: '“અમારી વહાલી દીકરી અરીબાના નિકાહ પ્રસંગે આપની ઉપસ્થિતિ અને દુઆઓની હૃદયપૂર્વક કામના કરીએ છીએ.”',
      groom_family_quote: '“અલ્લાહના શુક્ર સાથે અરીબા અને ફૈઝાનના નિકાહમાં અમે આપનું સહર્ષ સ્વાગત કરીએ છીએ.”',
      
      gallery_section_title: 'મીઠી સ્મૃતિઓ',
      gallery_section_subtitle: 'અમારા જીવનની સફરના કેટલાક યાદગાર પળો',
      
      // Aesthetic Carousel in Gujarati
      carousel_badge: 'શાહી ઝલક',
      carousel_title: 'અરીબા અને ફૈઝાન — મુબારક પળો',
      carousel_subtitle: 'કેટલીક પળો માત્ર તસવીર નથી બનતી, એ આખી જિંદગીની યાદ બની જાય છે',
      slide_bride_tag: 'વધૂ',
      slide_groom_tag: 'વર',
      slide_bride_sub: 'સાદગી, ગરિમા અને શાલિનતા',
      slide_groom_sub: 'પ્રતિષ્ઠા, ગૌરવ અને સન્માન',
      slide_moment_tag: 'પવિત્ર બંધન',
      slide_moment_3_title: 'શાશ્વત કૃપા',
      slide_moment_3_sub: 'વિશ્વાસ અને દુઆમાં જોડાયેલા બે દિલ',
      slide_nikah_tag: 'શુભ નિકાહ',
      slide_moment_4_title: 'શાહી વારસો',
      slide_moment_4_sub: 'પ્રેમ અને આદરની અનોખી સફર',
      slide_celebration_tag: 'આનંદોત્સવ',
      slide_moment_5_title: 'અમૂલ્ય ક્ષણો',
      slide_moment_5_sub: 'ખુશીઓ અને સ્મિતનો સંગમ',
      slide_forever_tag: 'જીવનસાથી',
      slide_moment_6_title: 'ઇન્શાઅલ્લાહ ખૈર',
      slide_moment_6_sub: 'દુઆઓના સાનિધ્યમાં નવી શરૂઆત',
      
      // Dedicated Video Section in Gujarati
      video_section_badge: 'સિનેમેટિક ફિલ્મ',
      video_section_title: 'અરીબા અને ફૈઝાન — નિમંત્રણ ફિલ્મ',
      video_section_subtitle: 'કેટલીક મુલાકાતો સમય સાથે વીતી જાય છે, અને કેટલીક આખી જિંદગીનો ભાગ બની જાય છે',
      video_play_prompt: 'વીડિયો જુઓ',
      video_quote: '“દુઆઓએ જે ક્ષણને વર્ષોથી શણગારી, આજે એ ક્ષણ આપણી સમક્ષ સાકાર થઈ છે”',
      video_quote_author: 'અરીબા અને ફૈઝાન • ૩૦ ઓક્ટોબર ૨૦૨૭',
      
      venue_section_title: 'સમારંભ સ્થળ અને માર્ગદર્શન',
      venue_section_subtitle: 'જળગાંવની પવિત્ર ભૂમિ પર આપનું સહર્ષ સ્વાગત છે',
      venue_name: 'પટેલ મેડિકલ કોમ્પ્લેક્સ',
      venue_address: 'પટેલ મેડિકલ, ફાતેમા નગર, MIDC, જળગાંવ, મહારાષ્ટ્ર ૪૨૫૦૦૩',
      get_directions_btn: 'ગુગલ મેપ્સ પર રસ્તો જુઓ',
      
      // RSVP in Gujarati
      rsvp_section_title: 'કૃપા કરી આપની ઉપસ્થિતિ નોંધવો',
      rsvp_section_subtitle: 'આપણા સ્વજનો વિના ખુશી ક્યાં પૂર્ણ થાય છે, તો પધારો, આ સાંજ આપના નામે કરીએ',
      rsvp_name: 'આપનું શુભ નામ *',
      rsvp_phone: 'વોટ્સએપ / મોબાઈલ નંબર *',
      rsvp_email: 'ઈમેલ એડ્રેસ (વૈકલ્પિક)',
      rsvp_attending: 'શું આપ સમારંભમાં પધારી રહ્યા છો? *',
      rsvp_choice_yes: 'સહર્ષ સ્વીકાર, ચોક્કસ પધારીશું! 🎉',
      rsvp_choice_maybe: 'પૂરો પ્રયાસ કરીશું (કદાચ)',
      rsvp_choice_no: 'અસમર્થતા બદલ ક્ષમા માંગીએ છીએ',
      rsvp_guests_count: 'પરિવાર સાથે કુલ સભ્યોની સંખ્યા',
      rsvp_meal_pref: 'ભોજન પસંદગી',
      rsvp_meal_veg: 'શુદ્ધ શાકાહારી / જૈન ભોજન',
      rsvp_meal_nonveg: 'હલાલ માંસાહારી અને ખાસ વાનગીઓ',
      rsvp_message: 'વર-વધૂ માટે શુભકામના સંદેશ અને દુઆઓ',
      rsvp_submit_btn: 'ઉપસ્થિતિ મોકલો',
      
      // Contacts & Footer in Gujarati
      contact_section_title: 'સંપર્ક અને આતિથ્ય સેવા',
      contact_section_subtitle: 'પ્રવાસ, આવાસ અથવા કોઈપણ સહાય માટે નિઃસંકોચ સંપર્ક કરો',
      bride_contact_relation: 'વધૂના પિતા',
      groom_contact_relation: 'વરના પિતા',
      btn_call: 'કોલ કરો',
      btn_whatsapp: 'વોટ્સએપ મેસેજ',
      share_section_title: 'નિમંત્રણ પત્રિકા શેર કરો',
      share_whatsapp_btn: 'વોટ્સએપ પર મોકલો',
      share_copy_btn: 'લિંક કોપી કરો',
      share_native_btn: 'શેર કરો',
      link_copied_toast: 'નિમંત્રણ લિંક કોપી થઈ ગઈ છે! ✨',
      qr_section_title: 'મોબાઈલ પર નિમંત્રણ ખોલો',
      qr_section_subtitle: 'નીચે આપેલ ક્યુઆર કોડ આપના ફોનના કેમેરાથી સ્કેન કરો',
      qr_scan_instruction: 'કેમેરાથી સ્કેન કરી નિમંત્રણ ખોલો',
      final_blessing: '“કેટલીક ખુશીઓ શબ્દોમાં ક્યાં સમાય છે, એ તો બસ આપના આશીર્વાદમાં હસી ઊઠે છે”',
      with_love: 'સ્નેહ અને કૃતજ્ઞતા સાથે',
      the_families: 'પટેલ અને દેશમુખ પરિવાર',
      footer_copyright: 'અરીબા અને ફૈઝાનના નિકાહ માટે પ્રેમપૂર્વક નિર્મિત • ૨૦૨૭',
      footer_rights: 'All Rights Reserved by Mashkoor Patel'
    }
  },

  arabic: {
    lang_code: 'ar',
    direction: 'rtl',
    name: 'العربية',
    flag: '⚜️',
    font: "'Amiri', 'Noto Nastaliq Urdu', serif",
    dict: {
      nav_home: 'الرئيسية',
      nav_couple: 'العروسان',
      nav_events: 'عقد القران والوليمة',
      nav_family: 'العائلة والدعوات',
      nav_gallery: 'الصور',
      nav_venue: 'الموقع والمسار',
      nav_rsvp: 'تأكيد الحضور',
      nav_contact: 'الاتصال',
      nav_show_qr: 'رمز QR',
      music_playing: 'الموسيقى تعمل',
      music_muted: 'تشغيل الموسيقى',
      entrance_badge: 'بطاقة دعوة زفاف وعقد قران',
      entrance_names: 'عريبة & فيضان',
      entrance_date: '30 أكتوبر 2027 • جالغاون، الهند',
      entrance_btn: 'افتح الدعوة / Click to Open',
      entrance_poem: 'طرقت قصة حب جديدة أبواب القلوب، لتشرق بمحبة وسلام على كل الدروب ✨',
      door_open_toast: 'حين رُفع الحجاب بان الجمال، وما أجمل الانتظار في حسن الوصال ❤️',
      hero_couple_names: 'عريبة & فيضان',
      hero_quran_verse: '﴿ وَخَلَقْنَاكُمْ أَزْوَاجًا ﴾ (سورة النبأ: ٨)',
      hero_getting_married: 'الفرحة فرحتنا، لكن بهجتها تكتمل بجميل حضوركم ودعواتكم',
      hero_date_location: '30 أكتوبر 2027 • مجمع باتيل الطبي، فاطمة نجر، جالغاون',
      hero_btn_rsvp: 'تأكيد الحضور',
      hero_btn_events: 'جدول المناسبات',
      
      scratch_names_title: 'أسماء العروسين المباركين',
      scratch_names_subtitle: 'تلاقت الأعين كأننا تعارفنا من قديم الزمان، فبعض الأقدار كُتبت برحمة المنان',
      scratch_names_poetry: 'بعض الأسماء لا تُنطق باللسان، بل تسكن في أعماق الجنان',
      scratch_bride_label: 'العروس (عريبة)',
      scratch_groom_label: 'العريس (فيضان)',
      scratch_bride_name: 'عريبة',
      scratch_groom_name: 'فيضان',
      groom_name: 'فيضان ديشموخ',
      groom_parents: 'ابن السيدة شبانة أ. والسيد عبد الهادي هـ. ديشموخ',
      bride_name: 'عريبة باتيل',
      bride_parents: 'ابنة السيدة خالدة أ. والسيد عبد الرحيم ج. باتيل',
      scratch_card_instruction: 'امسح الطبقة الذهبية اللامعة ✨',
      scratch_revealed_toast: 'ما شاء الله! تم الكشف عن أسماء العروسين ❤️',
      scratch_tap_fallback: 'انقر للكشف عن الأسماء',
      
      scratch_date_title: 'موعد عقد القران المبارك',
      scratch_date_subtitle: 'امسح الرمز الذهبي لمعرفة الموعد',
      scratch_date_hint: 'امسح لمعرفة الموعد',
      scratch_date_revealed_heading: '30 أكتوبر 2027',
      scratch_date_revealed_sub: 'مراسم عقد القران والوليمة • جالغاون',
      
      countdown_title: 'العد التنازلي ليوم الفرح',
      countdown_subtitle: 'الوقت المتبقي حتى انطلاق المراسم المباركة:',
      days: 'أيام',
      hours: 'ساعات',
      minutes: 'دقائق',
      seconds: 'ثوانٍ',
      
      events_section_title: 'جدول مراسم النكاح والوليمة',
      events_section_subtitle: 'حضوركم ودعواتكم الصادقة هي أجمل هدية لزفافنا',
      timing_label: 'التوقيت:',
      venue_label: 'المكان:',
      dress_code_label: 'الزي المطلوب:',
      add_to_calendar: 'حفظ في التقويم',
      view_on_maps: 'عرض الموقع على الخريطة',
      
      event_nikah_date: 'السبت، 30 أكتوبر 2027',
      event_nikah_title: 'مراسم عقد القران الميمون والمأدبة',
      event_nikah_time: 'الساعة 06:30 مساءً (عقد القران) | 08:00 مساءً (مأدبة العشاء)',
      event_nikah_venue: 'مجمع باتيل الطبي، فاطمة نجر، MIDC، جالغاون',
      event_nikah_dress: 'الزي التراثي الفاخر / الرسمي',
      event_nikah_desc: 'ببركة الله عز وجل ودعوات الأهل والأحباب، يتم عقد القران تليه مأدبة عشاء ملكية.',
      
      event_walima_date: 'الأحد، 31 أكتوبر 2027',
      event_walima_title: 'حفل الاستقبال والوليمة الكبرى',
      event_walima_time: 'الساعة 07:30 مساءً',
      event_walima_venue: 'حديقة إمبريال الكبرى، جالغاون',
      event_walima_dress: 'الزي الرسمي الفاخر',
      event_walima_desc: 'أمسية احتفالية مباركة بمناسبة اقتران العائلتين مع أطيب التهاني.',
      
      family_section_title: 'بركات ورعاية العائلة',
      family_section_subtitle: 'بمحبة ودعوات الآباء والأجداد الأعزاء',
      bride_side_title: 'عائلة العروس (عائلة باتيل)',
      groom_side_title: 'عائلة العريس (عائلة ديشموخ)',
      bride_family_quote: '”يسرنا ويسعدنا دعوتكم لمشاركتنا فرحة العمر بمناسبة عقد قران ابنتنا عريبة وسؤالكم الدعاء لها بالتوفيق.“',
      groom_family_quote: '”بحمد الله وشكره، نتشرف بدعوتكم لحضور حفل زفاف وعقد قران عريبة وفيضان متمنين حضوركم الكريم.“',
      
      gallery_section_title: 'ذكريات لا تُنسى',
      gallery_section_subtitle: 'لحظات مصورة تخلد رحلتنا المباركة',
      
      // Aesthetic Carousel in Arabic
      carousel_badge: 'لمحات ملكية',
      carousel_title: 'عريبة وفيضان — لحظات مباركة',
      carousel_subtitle: 'قصة مفعمة بالمودة والسكينة والوقار',
      slide_bride_tag: 'العروس',
      slide_groom_tag: 'العريس',
      slide_bride_sub: 'عفاف ووقار ونقاء',
      slide_groom_sub: 'شرف ومروءة وأصالة',
      slide_moment_tag: 'ميثاق غليظ',
      slide_moment_3_title: 'سكينة ومودة',
      slide_moment_3_sub: 'قلبان اجتمعا على طاعة الله',
      slide_nikah_tag: 'عقد قران مبارك',
      slide_moment_4_title: 'أصالة وتراث',
      slide_moment_4_sub: 'مسيرة مباركة مفعمة بالبركة',
      slide_celebration_tag: 'فرحة وسرور',
      slide_moment_5_title: 'بهجة اللقاء',
      slide_moment_5_sub: 'ابتسامات ومسرات عامرة',
      slide_forever_tag: 'معاً في طاعة الله',
      slide_moment_6_title: 'إن شاء الله خير',
      slide_moment_6_sub: 'بداية رحلة جديدة بالدعاء والبركة',
      
      // Dedicated Video Section in Arabic
      video_section_badge: 'فيلم سينمائي',
      video_section_title: 'عريبة وفيضان — فيلم الدعوة الملكي',
      video_section_subtitle: 'مشاهد مفعمة بالبركة والأصالة والجمال الملكي',
      video_play_prompt: 'تشغيل الفيديو',
      video_quote: '”رباط وثيق يجمع القلوب على الطاعة والمحبة والبركة“',
      video_quote_author: 'عريبة وفيضان • 30 أكتوبر 2027',
      
      venue_section_title: 'مكان الحفل والوصول',
      venue_section_subtitle: 'نتشرف باستقبالكم في فاطمة نجر، جالغاون',
      venue_name: 'مجمع باتيل الطبي',
      venue_address: 'مجمع باتيل الطبي، فاطمة نجر، MIDC، جالغاون، ماهاراشترا 425003',
      get_directions_btn: 'الحصول على الاتجاهات عبر خرائط جوجل',
      
      rsvp_section_title: 'تأكيد الحضور الكريم',
      rsvp_section_subtitle: 'يرجى التكرم بتأكيد الحضور ومشاركتنا هذه الفرحة',
      rsvp_name: 'الاسم الكامل *',
      rsvp_phone: 'رقم الواتساب / الجوال *',
      rsvp_email: 'البريد الإلكتروني (اختياري)',
      rsvp_attending: 'هل ستشرفنا بالحضور؟ *',
      rsvp_choice_yes: 'إن شاء الله، سنحضر بكل سرور! 🎉',
      rsvp_choice_maybe: 'سنحاول الحضور إن شاء الله',
      rsvp_choice_no: 'نعتذر لعدم التمكن من الحضور',
      rsvp_guests_count: 'عدد الضيوف الكرام (معكم)',
      rsvp_meal_pref: 'تفضيلات الطعام',
      rsvp_meal_veg: 'نباتي بالكامل',
      rsvp_meal_nonveg: 'أطباق حلال وعالمية منوعة',
      rsvp_message: 'دعوة مباركة أو كلمة للعروسين',
      rsvp_submit_btn: 'إرسال تأكيد الحضور',
      
      contact_section_title: 'التواصل والضيافة',
      contact_section_subtitle: 'لأي استفسار يرجى الاتصال بنا بكل سرور',
      bride_contact_relation: 'والد العروس',
      groom_contact_relation: 'والد العريس',
      btn_call: 'اتصال هاتفي',
      btn_whatsapp: 'مراسلة عبر واتساب',
      share_section_title: 'مشاركة بطاقة الدعوة',
      share_whatsapp_btn: 'إرسال عبر واتساب',
      share_copy_btn: 'نسخ رابط الدعوة',
      share_native_btn: 'مشاركة الدعوة',
      link_copied_toast: 'تم نسخ رابط الدعوة بنجاح! ✨',
      qr_section_title: 'فتح الدعوة على الجوال',
      qr_section_subtitle: 'وجّه كاميرا هاتفك نحو الرمز أدناه لفتح بطاقة الدعوة الرقمية ومشاركتها',
      qr_scan_instruction: 'امسح بكاميرا الجوال لفتح الدعوة',
      final_blessing: '”حضوركم ودعواتكم الصادقة هي أجمل هدية لزفافنا“',
      with_love: 'بكل محبة وتقدير وامتنان',
      the_families: 'عائلتا باتيل وديشموخ',
      footer_copyright: 'صُنعت بحب ودعوات طيبة لزفاف عريبة وفيضان • 2027',
      footer_rights: 'All Rights Reserved by Mashkoor Patel'
    }
  }
};

/**
 * Apply selected language dynamically across all DOM elements
 */
function applyLanguage(langKey) {
  const data = LOCALES_DATA[langKey];
  if (!data) return;

  const dict = data.dict;
  window.i18nDict = dict;
  window.currentLocale = langKey;
  window.currentDirection = data.direction;

  // 1. Set HTML Lang & Dir
  document.documentElement.lang = data.lang_code;
  document.documentElement.dir = data.direction;

  // 2. Set Font Family
  document.body.style.fontFamily = data.font;

  // 3. Update Navbar Dropdown Display
  const navLangName = document.getElementById('nav-current-lang-name');
  if (navLangName) navLangName.textContent = data.name;

  // 4. Update Entrance Lang Pills Active State
  document.querySelectorAll('.entrance-lang-pill').forEach(pill => {
    if (pill.getAttribute('data-lang') === langKey) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  // 5. Update Navbar Lang Menu Active State
  document.querySelectorAll('.lang-menu-item').forEach(item => {
    const link = item.querySelector('a');
    if (link && link.getAttribute('data-lang') === langKey) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // 6. Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // 7. Update elements with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // 8. Redraw Scratch Cards Canvas if needed (retaining revealed state if revealed)
  if (window.scratchCards) {
    Object.values(window.scratchCards).forEach(card => {
      if (card && typeof card.redraw === 'function' && !card.isRevealed) {
        card.redraw();
      }
    });
  }

  // 9. Save preference in localStorage & Cookie
  try {
    localStorage.setItem('wedding_lang', langKey);
    document.cookie = `wedding_lang=${langKey}; path=/; max-age=2592000`;
  } catch(e){}

  showRoyalToast(`Language: ${data.name} ${data.flag}`);
}

document.addEventListener('DOMContentLoaded', () => {
  // Bind Entrance Lang Pills
  document.querySelectorAll('.entrance-lang-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = pill.getAttribute('data-lang');
      if (lang) {
        applyLanguage(lang);
      }
    });
  });

  // Bind Navbar Lang Dropdown
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langDropdownWrapper = document.getElementById('lang-dropdown-wrapper');
  const langLinks = document.querySelectorAll('.lang-menu-item a');

  if (langToggleBtn && langDropdownWrapper) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdownWrapper.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      langDropdownWrapper.classList.remove('open');
    });
  }

  langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = link.getAttribute('data-lang');
      if (lang) {
        if (langDropdownWrapper) langDropdownWrapper.classList.remove('open');
        applyLanguage(lang);
      }
    });
  });

  // Restore saved preference
  try {
    const saved = localStorage.getItem('wedding_lang') || 'hinglish';
    if (LOCALES_DATA[saved]) {
      applyLanguage(saved);
    }
  } catch(e){}
});
