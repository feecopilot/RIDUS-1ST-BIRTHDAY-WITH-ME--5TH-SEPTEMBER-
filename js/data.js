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
     ⭐ When you have your big paragraph ready, paste it
        between the quotes of LETTER.paragraphs — replace
        the placeholder entry marked below.
     ─────────────────────────────────────────────── */
  LETTER: {
    salutation: "My dearest Ridu,",
    paragraphs: [
      "Happy birthday, my love. Today the whole world should slow down a little, because the softest heart in it was born today.",

      // ⬇⬇⬇  THE BIG PARAGRAPH GOES HERE — replace this line ⬇⬇⬇
      { placeholder: "…and here lives the paragraph I'm still writing for you — the big one, with all the words I'm still finding. It's coming, promise. ♡" },
      // ⬆⬆⬆  THE BIG PARAGRAPH GOES HERE ⬆⬆⬆

      "I tried to wrap everything I feel into this little page — the photos, the videos, the silly stickers. But honestly? None of it comes close to the real thing. The real thing is you: your laugh, your calm, the way you make ordinary days feel like something worth remembering.",

      "So here's my wish for your new year: more coffee dates, more laughter that hurts your cheeks, more of your beautiful namaz mornings, and me — right there beside you for all of it.",
    ],
    sign: "— yours, always ♡",
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
    { src: "assets/photos/photo_021.jpg", cap: "golden days",               tilt: -1.5, tape: "tc" },
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
      title: "a tiny ring, a giant meaning",
      text: "A little sparkle on your hand that says everything we don't always say out loud.",
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
        { src: "assets/photos/photo_021.jpg", cap: "golden days" },
        { src: "assets/photos/photo_022.jpg", cap: "sunny hearts" },
        { src: "assets/photos/photo_023.jpg", cap: "the strawberry squad" },
        { src: "assets/photos/photo_024.jpg", cap: "henna hands, delicate heart" },
        { src: "assets/photos/photo_028.jpg", cap: "peaceful nights" },
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
        { src: "assets/photos/photo_053.jpg", cap: "our video calls ♡" },
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
     THINGS I LOVE ABOUT YOU — tap-to-flip cards
     ─────────────────────────────────────────────── */
  LOVE_CARDS: [
    { emoji: "😄", label: "your laugh",     text: "my favourite sound in any room — I'd cross the city just to hear it once." },
    { emoji: "🌙", label: "your namaz",     text: "the way you hold your little world with faith — the most beautiful thing about you." },
    { emoji: "☕", label: "our coffee",     text: "one cup, one minute at 11:40 — and suddenly the rest of my life had a direction." },
    { emoji: "🎀", label: "your style",     text: "traditional, cozy, or that perfect lipstick — you always look exactly like you." },
    { emoji: "✨", label: "your excitement", text: "the way you light up over little things — you make little things feel enormous." },
    { emoji: "🕊", label: "your calm",      text: "even on my loudest days, one message from you and everything goes quiet and soft." },
    { emoji: "💛", label: "your heart",     text: "gentle with everyone, always — the world is genuinely better because you're in it." },
    { emoji: "📞", label: "your voice",     text: "the voice that ends my every day right — and starts the next one smiling." },
  ],

  /* ───────────────────────────────────────────────
     THE HIDDEN SECRET (click the shy bunny)
     ─────────────────────────────────────────────── */
  SECRET: {
    title: "you found the secret ♡",
    text: "If I had one sticker for every time I thought of you, this page would run out of room — and so would the whole internet. You are so deeply, stubbornly loved, Ridu.",
    small: "(psst — check back every birthday. I plan to keep adding pages ♡)",
  },

  /* ───────────────────────────────────────────────
     FINAL MESSAGE
     ─────────────────────────────────────────────── */
  FINAL: {
    text: "I hope this little corner of the internet reminds you how loved you are — today, tomorrow, and every ordinary day in between.",
    ps: "happy birthday, my Ridu ♡ come back to this page whenever you need proof.",
    footer: "made with patience, stickers and too much love · september 5",
  },
};
