/* ═══════════════════════════════════════════════════════════════
   RIDU'S BIRTHDAY SCRAPBOOK — all editable content lives here ♡
   ----------------------------------------------------------------
   HOW TO EDIT THIS FILE:
   - Change any text between the "quotes" and save. That's it.
   - Photos live in  assets/photos/   (photo_001.jpg … photo_067.jpg)
   - Videos live in  assets/videos/   (COFFEE101.mp4 …)
   - To add a photo: drop the file in assets/photos/,
     then copy one { src, cap } line below and change it.
   ═══════════════════════════════════════════════════════════════ */

const SITE = {

  her: {
    name: "Rida Fatema Babul",
    nickname: "Ridu",
    birthday: "September 5",
  },

  /* ───────────────────────────────────────────────
     THE BIRTHDAY LETTER
     ─────────────────────────────────────────────── */
  LETTER: {
    salutation: "My dearest Ridu,",
    paragraphs: [
      "Happy birthday, my love. Today the whole world should slow down a little, because the softest heart in it was born today.",

      "I kept trying to write you one big paragraph — but every time I started, it grew into a whole scrapbook. So here it is instead: a page with our coffee, our calls, your namaz mornings, your lipstick era, and every version of you since the very first photo.",

      "You once told me I'm the best thing that has ever happened to you — and I don't think I'll ever forget that. But honestly, Ridu? It's the other way around. You make my loudest days quiet.",

      "so heres my wish for you every year ziyarats more sucessful more baynulharamain meetups and more coffee but ill pay ha heheh ridao shafi ridao kafi lets gooo",
    ],
    sign: "— yours, always ♡ Zamaan",
  },

  /* ───────────────────────────────────────────────
     HERO POLAROID COLLAGE — the 12 favourites
     ─────────────────────────────────────────────── */
  COLLAGE: [
    { src: "assets/photos/photo_022.jpg", cap: "sunny hearts ♡",           tilt: -3,   tape: "tl" },
    { src: "assets/photos/photo_033.jpg", cap: "elegant as ever",           tilt: 2.5,  tape: "tr" },
    { src: "assets/photos/photo_023.jpg", cap: "the strawberry day",        tilt: 1.5,  tape: "tc" },
    { src: "assets/photos/photo_041.jpg", cap: "that big smile",            tilt: -2,   tape: "tr" },
    { src: "assets/photos/photo_018.jpg", cap: "little Ridu ♡",             tilt: 4,    tape: "tl" },
    { src: "assets/photos/photo_021.jpg", cap: "your gret friend kema",     tilt: -1.5, tape: "tc" },
    { src: "assets/photos/photo_060.jpg", cap: "just glowing",              tilt: 2,    tape: "tr" },
    { src: "assets/photos/photo_044.jpg", cap: "golden girl",               tilt: -3.5, tape: "tl" },
    { src: "assets/photos/photo_065.jpg", cap: "soft light, soft heart",    tilt: 1,    tape: "tc" },
    { src: "assets/photos/photo_039.jpg", cap: "grace, honestly",           tilt: -2.5, tape: "tr" },
    { src: "assets/photos/photo_067.jpg", cap: "the pose ♡",               tilt: 3,    tape: "tl" },
    { src: "assets/photos/photo_038.jpg", cap: "the smile that gets me",    tilt: -1,   tape: "tc" },
  ],

  /* ───────────────────────────────────────────────
     LITTLE MOMENTS TIMELINE — our story
     ─────────────────────────────────────────────── */
  TIMELINE: [
    {
      icon: "🌸",
      when: "august 11 · karbala",
      title: "the day we first met",
      text: "Thanks to Insiya, the ice finally broke — and just like that, quietly, the best chapter of my life began.",
      media: null,
    },
    {
      icon: "☕",
      when: "11:40 · coffee ke saath",
      title: "our first picture",
      text: "One coffee, one photo, one exact minute I've never stopped thinking about. Watch it move below ♡",
      media: { src: "assets/posters/COFFEE101.jpg", cap: "COFFEE101 — the coffee day", video: "assets/videos/COFFEE101.mp4" },
    },
    {
      icon: "📞",
      when: "the in-between days",
      title: "screens full of smiles",
      text: "Every call, every little chat, every screenshot I kept — distance never stood a chance.",
      media: { src: "assets/photos/photo_053.jpg", cap: "our video calls ♡", video: null },
    },
    {
      icon: "👗",
      when: "the first traditional",
      title: "soft pink & unforgettable",
      text: "That pretty traditional look — I still think about it. Absolutely, completely beautiful.",
      media: { src: "assets/photos/first_trad101.jpg", cap: "FIRST TRAD101 ♡", video: null },
    },
    {
      icon: "💍",
      when: "the promise",
      title: "your butteryfly wala ringggggg hehehe",
      text: "",
      media: { src: "assets/photos/photo_062.jpg", cap: "the promise ♡", video: null },
    },
    {
      icon: "🎂",
      when: "september 5 · today",
      title: "your day, Ridu",
      text: "And this whole page is just one of a thousand ways to say it: happy birthday, my love. Scroll on ♡",
      media: null,
    },
  ],

  /* ───────────────────────────────────────────────
     OUR LOVE STORY — the messages, in order
     (who: "her" = pink bubble · "him" = blue bubble)
     ⭐ To add another memory: copy one { ... } block,
     keep the dates in order, change the text. ♡
     ─────────────────────────────────────────────── */
  STORY: [
    {
      when: "august 18 · 4:28 am",
      title: "small message, big everything",
      lines: [
        { who: "her", text: "thankyou zamaan ali 🥰🥰🥰🥰" },
      ],
      note: "I don't think she knows how much even these small messages meant to me.",
    },
    {
      when: "august 18 · 9:16 pm",
      title: "operation: 3 magical words",
      lines: [
        { who: "him", text: "say those 3 magical words rida just say it 😭😭😭😭" },
        { who: "her", text: "Tu baahar mil 😭😭😭" },
      ],
      note: "During ziyarat, you used to say this sentence more than anything, with that little cute head shake that I love so much. ❤️",
    },
    {
      when: "august 20",
      title: "three tiny confessions",
      lines: [
        { who: "her", text: "you on my mind too" },
        { who: "her", text: "my melting point" },
        { who: "her", text: "i love when people squish my gaal" },
      ],
      note: "and on the same day, I found out she likes sunflowers and white roses — and pink flowers even more. 🌻🤍🌸",
    },
    {
      when: "august 21",
      title: "the first “baby”",
      lines: [],
      note: "She called me baby for the first time. And I had gone nuts heheh. 😭❤️",
    },
    {
      when: "august 24",
      title: "the day she said i love you",
      lines: [],
      note: "The first “I love you” she said. The day she believed me. The day she told me I'm her jaanu. I never felt love until I found her. 😭❤️",
      quote: {
        big: "Ridao Shafi. Ridao Kafi.",
        sub: "Rida is Rida. Rida is enough. She is my healer.",
      },
    },
    {
      when: "august 25 · 1:05 am",
      title: "jaan, officially",
      lines: [
        { who: "her", text: "Aap bhi meri jaan ban chuke hai." },
        { who: "her", text: "you are the best thing that has ever happened to me 😭❤️" },
      ],
      note: "I don't think I'll ever forget that.",
    },
    {
      when: "august 26",
      title: "the baal promise",
      lines: [
        { who: "her", text: "Mai tere baal theek karungi." },
      ],
      note: "And finally I found a girl jo mere zakhm saaf karen jab mai zanjeer karke aaun hehe. 😭❤️ I love you Ridu.",
    },
    {
      when: "august 30",
      title: "the cortisol report",
      lines: [
        { who: "her", text: "Aunty iim high cortisol but he (zamaan ali) makes me low cortisol." },
      ],
      note: "😭😭😭😭❤️ and then, there was this message ↓",
    },
    {
      when: "saturday · 5:12 am",
      title: "the 5:12 am novel",
      big: true,
      lines: [
        {
          who: "her",
          text: "hello my baby i know you are sleeping meri baat sunke 😛😛 my good boy i love you so much ❤️ i love yoi for everything you do for me, to make me happy, jabse ive started talking to you i feel so much more better about myself and calmer with usual. i love jabhi you say ki we will figure it out together 🥹 i love everything about you, every single thing. even the things jisse maybe you feel ashamed to discuss, i love you and all the things that come along with you meri jaan. ok enough emo baatein abhi mei bhi chali sone kal college jaaungi byebye",
        },
      ],
      note: "And honestly… I think this is where I understood that I didn't just find a girl I love. I found my Rida.\nMy jaan. My Ridu. My healer.",
    },
  ],

  /* ───────────────────────────────────────────────
     MOVING MEMORIES — the videos
     ─────────────────────────────────────────────── */
  VIDEOS: [
    {
      src: "assets/videos/COFFEE101.mp4",
      poster: "assets/posters/COFFEE101.jpg",
      title: "COFFEE101",
      cap: "11:40, coffee ke saath — where it all began ♡",
      tilt: -1.6,
    },
    {
      src: "assets/videos/LIPSTICK101.mp4",
      poster: "assets/posters/LIPSTICK101.jpg",
      title: "LIPSTICK101",
      cap: "your latest lipstick video — my favourite kind of magic ✿",
      tilt: 1.2,
    },
    {
      src: "assets/videos/NAMAZ101.mp4",
      poster: "assets/posters/NAMAZ101.jpg",
      title: "NAMAZ101",
      cap: "you and your pretty chadar — serene and lovely, just like you ♡",
      tilt: -0.8,
    },
  ],

  /* ───────────────────────────────────────────────
     THE FULL ALBUM — all the photos, in 3 chapters
     ─────────────────────────────────────────────── */
  ALBUM: [
    {
      chapter: "Little Ridu ♡",
      badge: "chapter one",
      sub: "the girl in the old photos — adorable right from the start",
      photos: [
        { src: "assets/photos/photo_001.jpg", cap: "where it all began" },
        { src: "assets/photos/photo_002.jpg", cap: "tiny and already adorable" },
        { src: "assets/photos/photo_003.jpg", cap: "hello, world" },
        { src: "assets/photos/photo_004.jpg", cap: "sunshine, even then" },
        { src: "assets/photos/photo_005.jpg", cap: "dressed to impress, always" },
        { src: "assets/photos/photo_013.jpg", cap: "little party star" },
        { src: "assets/photos/photo_014.jpg", cap: "festive cutie" },
        { src: "assets/photos/photo_015.jpg", cap: "full of energy" },
        { src: "assets/photos/photo_016.jpg", cap: "cool since day one" },
        { src: "assets/photos/photo_017.jpg", cap: "playtime ♡" },
        { src: "assets/photos/photo_018.jpg", cap: "traditional and precious" },
        { src: "assets/photos/photo_019.jpg", cap: "those cheeks" },
        { src: "assets/photos/photo_020.jpg", cap: "family moments" },
        { src: "assets/photos/photo_025.jpg", cap: "memories on a screen" },
        { src: "assets/photos/photo_026.jpg", cap: "look at that pose" },
        { src: "assets/photos/photo_027.jpg", cap: "curious little explorer" },
        { src: "assets/photos/photo_029.jpg", cap: "colours and giggles" },
      ],
    },
    {
      chapter: "The growing-up years ♡",
      badge: "chapter two",
      sub: "school of laughter, friends, and finding her own light",
      photos: [
        { src: "assets/photos/photo_006.jpg", cap: "surrounded by love" },
        { src: "assets/photos/photo_007.jpg", cap: "silly moments" },
        { src: "assets/photos/photo_008.jpg", cap: "her people" },
        { src: "assets/photos/photo_009.jpg", cap: "the giggles" },
        { src: "assets/photos/photo_010.jpg", cap: "that gaze" },
        { src: "assets/photos/photo_011.jpg", cap: "soft moments" },
        { src: "assets/photos/photo_012.jpg", cap: "style file ♡" },
        { src: "assets/photos/photo_021.jpg", cap: "your gret friend kema" },
        { src: "assets/photos/photo_022.jpg", cap: "sunny hearts" },
        { src: "assets/photos/photo_023.jpg", cap: "the strawberry squad" },
        { src: "assets/photos/photo_024.jpg", cap: "henna hands, delicate heart" },
        { src: "assets/photos/photo_031.jpg", cap: "gatherings and grins" },
        { src: "assets/photos/photo_034.jpg", cap: "the look ♡" },
        { src: "assets/photos/photo_035.jpg", cap: "that smile" },
        { src: "assets/photos/photo_036.jpg", cap: "oops, finger in frame" },
        { src: "assets/photos/photo_037.jpg", cap: "just her, being lovely" },
        { src: "assets/photos/photo_042.jpg", cap: "party mode" },
        { src: "assets/photos/photo_043.jpg", cap: "mid-laugh" },
        { src: "assets/photos/photo_044.jpg", cap: "golden girl" },
        { src: "assets/photos/photo_045.jpg", cap: "birthday energy" },
        { src: "assets/photos/photo_047.jpg", cap: "quiet days" },
        { src: "assets/photos/photo_049.jpg", cap: "elevator style" },
        { src: "assets/photos/photo_051.jpg", cap: "hearts around her" },
        { src: "assets/photos/photo_056.jpg", cap: "cozy ♡" },
        { src: "assets/photos/photo_058.jpg", cap: "everyday lovely" },
      ],
    },
    {
      chapter: "You, now ♡",
      badge: "chapter three",
      sub: "the Ridu of today — the one who made this page necessary",
      photos: [
        { src: "assets/photos/photo_030.jpg", cap: "the butterfly ring" },
        { src: "assets/photos/photo_032.jpg", cap: "our little chats" },
        { src: "assets/photos/photo_033.jpg", cap: "elegant as ever" },
        { src: "assets/photos/photo_038.jpg", cap: "the smile that gets me" },
        { src: "assets/photos/photo_039.jpg", cap: "grace, honestly" },
        { src: "assets/photos/photo_040.jpg", cap: "window light & her" },
        { src: "assets/photos/photo_041.jpg", cap: "that big smile" },
        { src: "assets/photos/photo_046.jpg", cap: "playful heart" },
        { src: "assets/photos/photo_048.jpg", cap: "happy girl ♡" },
        { src: "assets/photos/photo_050.jpg", cap: "art from the heart" },
        { src: "assets/photos/photo_052.jpg", cap: "sweetest" },
        { src: "assets/photos/photo_054.jpg", cap: "home and happy" },
        { src: "assets/photos/photo_055.jpg", cap: "silly and cute" },
        { src: "assets/photos/photo_057.jpg", cap: "the ring ♡" },
        { src: "assets/photos/photo_059.jpg", cap: "calm and beautiful" },
        { src: "assets/photos/photo_060.jpg", cap: "just glowing" },
        { src: "assets/photos/photo_061.jpg", cap: "the promise (blurry, but real)" },
        { src: "assets/photos/photo_062.jpg", cap: "showing off ♡" },
        { src: "assets/photos/photo_063.jpg", cap: "evening light" },
        { src: "assets/photos/photo_064.jpg", cap: "her own style" },
        { src: "assets/photos/photo_065.jpg", cap: "soft light, soft heart" },
        { src: "assets/photos/photo_066.jpg", cap: "gentle soul" },
        { src: "assets/photos/photo_067.jpg", cap: "the pose ♡" },
        { src: "assets/photos/first_trad101.jpg", cap: "first traditional ♡" },
      ],
    },
  ],

  /* ───────────────────────────────────────────────
     HER FAVOURITE THINGS — the official research
     ─────────────────────────────────────────────── */
  FAVOURITES: [
    { emoji: "🍛", label: "fav food",      text: "chicken schezwan fried rice — and prawns, always" },
    { emoji: "🎧", label: "fav song",      text: "“aaj na” by Ritviz 🥰 — even Raatan Lambiyan" },
    { emoji: "💗", label: "fav colours",   text: "pink & black" },
    { emoji: "💬", label: "fav phrase",    text: "“mai to flat tire bangya tha aakhey dekh kar”" },
    { emoji: "📚", label: "fav character", text: "Hermione, from Harry Potter" },
    { emoji: "🔮", label: "fav movie",     text: "the entire Harry Potter series" },
    { emoji: "🚗", label: "fav animal",    text: "car. yes, really." },
    { emoji: "🚗", label: "fav pet",       text: "also car. she is very serious about this." },
    { emoji: "🌻", label: "fav flowers",   text: "sunflowers, white roses — and pink ones even more 🌻🤍🌸" },
    { emoji: "☕", label: "fav minute",    text: "11:40 — coffee ke saath, Karbala" },
    { emoji: "🎂", label: "fav day",       text: "September 5 — the day my favourite person was born" },
    { emoji: "🩺", label: "her calling",   text: "child doctor — the perfect combo 🥹" },
  ],

  /* ───────────────────────────────────────────────
     THINGS I LOVE ABOUT YOU — tap-to-flip cards
     ─────────────────────────────────────────────── */
  LOVE_CARDS: [
    { emoji: "🙈", label: "the head shake",   text: "“tu baahar mil” during ziyarat, with that little cute head shake — my favourite reflex in the whole world. ❤️" },
    { emoji: "😳", label: "squishy gaal",     text: "“i love when people squish my gaal” — permission granted. permanently. no take-backs." },
    { emoji: "🌡", label: "her superpower",   text: "“aunty, iim high cortisol — but he makes me low cortisol.” certified calm-bringer. 😭" },
    { emoji: "🥰", label: "my good boy era",  text: "“my good boy i love you so much ❤️” — sent at 5:12 am, unprompted, unforgettable." },
    { emoji: "🤝", label: "figure it out",    text: "she loves when I say “we will figure it out together.” honestly? with her, everything figures itself out. 🥹" },
    { emoji: "💇", label: "the baal promise", text: "“mai tere baal theek karungi” — she'll fix my hair, and jab mai zanjeer karke aaun, she'll clean my zakhm. my person. 😭❤️" },
    { emoji: "😄", label: "her laugh",        text: "my favourite sound in any room — I'd cross the city just to hear it once." },
    { emoji: "🌙", label: "her namaz",        text: "the way she holds her little world with faith — the most beautiful thing about her." },
    { emoji: "☕", label: "our coffee",       text: "one cup, one photo at 11:40 — and suddenly the rest of my life had a direction." },
    { emoji: "💋", label: "the lipstick era", text: "her latest video is proof: she doesn't need filters — she IS one. ✿" },
    { emoji: "🌸", label: "her calm",         text: "even on my loudest days, one message from her and everything goes quiet and soft." },
    { emoji: "📞", label: "her voice",        text: "the voice that ends my every day right — and starts the next one smiling." },
  ],

  /* ───────────────────────────────────────────────
     THE HIDDEN SECRET (click the shy bunny)
     ─────────────────────────────────────────────── */
  SECRET: {
    title: "you found the secret ♡",
    text: "Ridao Shafi.\nRidao Kafi.\nRida is Rida.\nRida is enough.\nShe is my healer. ♡",
    small: "(this whole website was really just wrapping paper for these three lines)",
  },

  /* ───────────────────────────────────────────────
     FINAL MESSAGE
     ─────────────────────────────────────────────── */
  FINAL: {
    text: "and honestly… I think this is where I understood that I didn't just find a girl I love.\nI found my Rida. My jaan. My Ridu. My healer.",
    motto: "Ridao Shafi. Ridao Kafi.",
    mottoSub: "Rida is Rida. Rida is enough. ❤️",
    ps: "happy 5th of September, meri jaan. I love you — yours forever, Zamaan ♡",
    footer: "made with patience, stickers and too much love · for Rida Fatema Babul · september 5",
  },
};
