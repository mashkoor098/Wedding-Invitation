<?php
/**
 * Islamic / Royal Muslim Wedding Invitation — Master Configuration
 * Refined, elegant, focused only on required details (Nikah & Walima)
 */

return [
    // Bismillah & Quranic Verse
    'bismillah_ar' => 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    'quran_ayah_ar' => 'وَخَلَقْنَاكُمْ أَزْوَاجًا',
    'quran_ayah_en' => '“And We created you in pairs” (Surah An-Naba 78:8)',
    'quran_ayah_ur' => '”اور ہم نے تمہیں جوڑوں میں پیدا کیا“ (سورۃ النباء)',

    // Couple Details
    'groom' => [
        'first_name' => 'Faizan',
        'last_name' => 'Patel',
        'full_name' => 'Faizan Patel',
        'title' => 'The Groom',
        'parents' => 'Son of Mrs. Khaleda A. & Mr. Abdulrahim G. Patel',
        'image' => 'assets/images/groom.jpg',
    ],
    
    'bride' => [
        'first_name' => 'Ariba',
        'last_name' => 'Deshmukh',
        'full_name' => 'Ariba Deshmukh',
        'title' => 'The Bride',
        'parents' => 'Daughter of Mrs. Shabana A. & Mr. Abdul Hadi H. Deshmukh',
        'image' => 'assets/images/bride.jpg',
    ],

    // Monogram & Theme
    'monogram' => 'F & A',
    'hashtag' => '#FaizanWedsAriba',

    // Dates & Times
    'wedding_date' => '2027-10-30',
    'wedding_time' => '19:00',
    'display_date' => '30 October 2027',
    'display_city' => 'Patel Medical, Fatema Nagar, MIDC, Jalgaon',

    // Main Venue
    'venue' => [
        'name' => 'Patel Medical Complex',
        'city_state' => 'Fatema Nagar, MIDC, Jalgaon, Maharashtra, India',
        'address' => 'Patel Medical, Fatema Nagar, MIDC, Jalgaon, Maharashtra 425003',
        'google_maps_url' => 'https://maps.google.com/?q=Patel+Medical,+Fatema+Nagar,+MIDC,+Jalgaon,+Maharashtra+425003',
        'google_maps_embed' => 'https://www.google.com/maps?q=Patel+Medical,+Fatema+Nagar,+MIDC,+Jalgaon,+Maharashtra+425003&output=embed',
    ],

    'qr_url' => 'http://localhost:8080/index.html',

    // Two-Side Contacts
    'bride_contact' => [
        'name' => 'Mr. Abdul Hadi H. Deshmukh',
        'relation' => "Bride's Father",
        'phone' => '+91 98765 43210',
        'whatsapp' => '919876543210'
    ],

    'groom_contact' => [
        'name' => 'Mr. Abdulrahim G. Patel',
        'relation' => "Groom's Father",
        'phone' => '+91 98765 43211',
        'whatsapp' => '919876543211'
    ],

    // Focused Events (Nikah Ceremony & Grand Walima Reception)
    'events' => [
        [
            'id' => 'nikah',
            'title_key' => 'event_nikah_title',
            'default_title' => 'Auspicious Nikah Ceremony & Feast',
            'date' => '2027-10-30',
            'display_date' => 'Saturday, 30 Oct 2027',
            'time' => '06:30 PM (Nikah Khawan) | 08:00 PM (Dawat-e-Nikah)',
            'venue' => 'Patel Medical Complex, Fatema Nagar, MIDC, Jalgaon',
            'dress_code' => 'Traditional Festive / Formal Elegance',
            'description_key' => 'event_nikah_desc',
            'default_desc' => 'With the blessings of Allah (SWT) and our elders, the sacred Nikah solemnization followed by a royal feast.',
            'maps_url' => 'https://maps.google.com/?q=Patel+Medical,+Fatema+Nagar,+MIDC,+Jalgaon,+Maharashtra+425003'
        ],
        [
            'id' => 'walima',
            'title_key' => 'event_walima_title',
            'default_title' => 'Grand Walima Reception (Dawat-e-Walima)',
            'date' => '2027-10-31',
            'display_date' => 'Sunday, 31 Oct 2027',
            'time' => '07:30 PM Onwards',
            'venue' => 'The Grand Imperial Lawn, Jalgaon',
            'dress_code' => 'Evening Formal / Royal Attire',
            'description_key' => 'event_walima_desc',
            'default_desc' => 'A joyous evening celebrating the union of two families with warm felicitations and a celebratory banquet.',
            'maps_url' => 'https://maps.google.com/?q=Patel+Medical,+Fatema+Nagar,+MIDC,+Jalgaon,+Maharashtra+425003'
        ]
    ],

    // Families
    'families' => [
        'bride_side' => [
            'name' => 'Mr. Abdul Hadi H. & Mrs. Shabana A. Deshmukh',
            'quote_en' => '“We solicit your gracious presence and heartfelt prayers as our daughter Ariba embarks on this blessed journey.”',
            'quote_ur' => '”ہم آپ کو اپنی بیٹی عریبہ کے عقدِ مسنون کے پرمسرت موقع پر شرکت اور دعاؤں کی مخلصانہ دعوت دیتے ہیں۔“',
        ],
        'groom_side' => [
            'name' => 'Mr. Abdulrahim G. & Mrs. Khaleda A. Patel',
            'quote_en' => '“With immense joy and gratitude to Allah (SWT), we invite you to bless Faizan & Ariba on their Nikah.”',
            'quote_ur' => '”اللہ تعالیٰ کے فضل و کرم سے ہم آپ کو فیضان اور عریبہ کے نکاح میں شرکت کی دعوت دیتے ہیں۔“',
        ]
    ],

    // Credits
    'credits' => [
        'crafted_for' => 'Crafted with Love & Duas for Faizan & Ariba • 2027',
        'rights_reserved' => 'All Rights Reserved by Mashkoor Patel'
    ],

    // Audio Track
    'audio' => [
        'src' => 'assets/music.mp3',
        'title' => 'Islamic Royal Wedding Symphony',
    ]
];
