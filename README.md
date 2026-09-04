# 🎀 Happy Birthday, Ridu ♡

A handmade digital scrapbook birthday website for **Rida Fatema Babul (Ridu)** — September 5.

Kawaii scrapbook style: love-letter paper, polaroid collage, memory timeline,
the **love-story chat** (august 18 → the 5:12 am novel, in her own words 💌),
her videos (COFFEE101 · LIPSTICK101 · NAMAZ101), a 68-photo album in 3 chapters,
her favourite things, flip-cards, a hidden secret, a music box, and floating hearts.

No build tools. No frameworks. Plain HTML + CSS + JS — perfect for GitHub Pages.

---

## 🚀 Put it on GitHub Pages (2 easy ways)

### Way 1 — the website way (easiest, no installs)

1. Go to **github.com** and sign in.
2. Click the **+** (top right) → **New repository**.
3. Name it anything, e.g. `ridu-birthday` → select **“Public”** → **Create repository**.
   ⚠️ **Public is required** — a Private repo will NEVER show the site
   (free GitHub Pages only works for public repos). This is the #1 cause
   of “404 not found”.
   (If you already made it private: Settings → General → Danger Zone →
   Change visibility → Public.)
4. On the new empty repo page, click **“uploading an existing file”**.
5. Drag **ALL the files and folders from this project** into the upload box:
   `index.html`, `css/`, `js/`, `assets/`, `README.md`, `.gitignore`.
   ⚠️ Upload them all in one go so the folder structure stays intact.
6. Commit with any message → **Commit changes**.
7. In the repo, go to **Settings → Pages** (left sidebar).
8. Under “Build and deployment”: **Source** = `Deploy from a branch`,
   **Branch** = `main` (or `master`) + `/ (root)` → **Save**.
9. Wait 1–2 minutes. Refresh the Pages screen — your link appears at the top:
   **`https://YOUR-USERNAME.github.io/ridu-birthday/`** 🎉

### Way 2 — the git way (if you have git installed)

Unzip this project, open a terminal in the folder, then:

```bash
git init
git add .
git commit -m "Happy birthday Ridu ♡"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ridu-birthday.git
git push -u origin main
```

Then do steps 7–9 from Way 1 (Settings → Pages → main → root → Save).

> Prefer Way 1 if git asks you for logins/tokens you don’t have —
> the website way needs zero installs and zero passwords beyond github.com.

---

## 🩹 “It’s not working” — quick fixes

| What you see | What it means | The fix |
|---|---|---|
| **404 — page not found** | repo is **Private**, or the build is still running, or `index.html` isn’t at the top level | make repo Public (Settings → General → Danger Zone → Change visibility) · wait 5 min · check `index.html` sits at repo root |
| Site opens but **no photos/videos** | the `assets` folder didn’t upload | repo → “Add file” → “Upload files” → drag the **assets folder** → Commit |
| **No “Pages” in Settings** | repo is Private | make it Public, then Settings → Pages appears |
| Link shows but **looks unstyled/white** | `css/` or `js/` didn’t upload | re-upload `css` and `js` folders the same way |
| Want to start over | — | delete files in the repo (click file → 🗑️) and re-upload |

The full beginner walkthrough (with every click) is in **`HOW-TO-PUT-ONLINE.txt`** —
open it with Notepad / TextEdit, no technical knowledge needed.

---

## ✏️ How to edit things

Everything editable lives in **`js/data.js`** — change any text between
quotes, save, commit. That's it.

| What | Where in `js/data.js` |
|---|---|
| The birthday letter | `LETTER` |
| **Our love story — the chat messages, in order** | `STORY` (pink bubble = her, blue = me) |
| Her favourite things (food, songs, the “car”…) | `FAVOURITES` |
| Timeline moments (Aug 11, Karbala, 11:40…) | `TIMELINE` |
| Videos & captions | `VIDEOS` |
| Album chapters & captions | `ALBUM` |
| Love cards | `LOVE_CARDS` |
| Secret message (the bunny) | `SECRET` |
| Final message + motto | `FINAL` |

### Add a new photo later
1. Drop `myphoto.jpg` into `assets/photos/`
2. In `js/data.js`, copy any line like
   `{ src: "assets/photos/photo_001.jpg", cap: "a caption" },`
3. Change the file name + caption → save → commit. Done ♡

### Add a new video later
1. Convert it to `.mp4` (any online converter works), drop it in `assets/videos/`
2. Add a matching poster image in `assets/posters/`
3. Copy one entry in `VIDEOS` and change the paths.

You can edit `js/data.js` directly on github.com — click the file → ✏️ pencil
icon → edit → **Commit changes**. The site updates in ~1 minute.

---

## 💡 Notes

- The music box (bottom-right button) plays a soft “Happy Birthday” tune —
  it never autoplays, she taps it herself.
- Videos never autoplay with sound either. Tapping a poster starts them.
- Everything works on phones (tested down to 320px), tablets and desktop.
- If Google Fonts can’t load (offline), the site still works with cute
  fallback fonts.

made with patience, stickers and too much love · september 5 ♡
