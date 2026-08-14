# Pitch Detective

An ear-training game about hearing a single note go wrong. Students listen to a melody, hear it again with one note bent sharp or flat, then circle the culprit on a real staff and say which way it moved.

Pitch Detective is part of **Dato Music Lab** (https://datomusiclab.dpdns.org), a working elementary music teacher's studio in Taipei.

## What it is

Pitch discrimination is usually drilled as isolated intervals — two tones, higher or lower, next. That trains a narrow skill and bores children within a minute.

This game hides the same skill inside a case file. Something in the music room sounds wrong, and the player has to find it. Because the altered note sits inside a melody the student has just heard clean, the comparison is musical rather than abstract: they are not judging two beeps, they are noticing that a tune they know has been tampered with.

## Features

**Hear it right, then hear it wrong.** Every case plays the correct melody first, so the student builds a reference before the altered version arrives.

**Answer on a real staff.** Suspects are circled on actual notation, not on buttons, so reading and listening train together.

**Sharp or flat.** Finding the note is only half the answer; the student also decides which direction it moved.

**Six cases per round.** The first is always *Twinkle, Twinkle, Little Star* as a warm-up; the rest are drawn at random without repeats.

**Two attempts, with a hint.** A wrong first answer earns a clue and another listen instead of a red cross.

**A closing report.** Each round ends with an accuracy breakdown and a note on what needs more work.

**Collectible case cards.** Five or six correct answers unlock a card pack, dragged open from left to right, graded R, SR, SSR and a single SSSR two-detective card.

## How to use

Download the folder and open `index.html` in any browser. Nothing to install, no server, and no network access required.

The game suits both solo practice and whole-class play — with a projector, the class argues about which note sounded wrong before anyone is allowed to circle it.

## Tips for players

Listen to the shape of the melody the first time; don't rush to read the staff. On the second pass, notice which note suddenly sounds brighter or heavier than you remember. Headphones or a quiet room make the difference easier to hear.

## Tech

Vanilla HTML, CSS and JavaScript with the Web Audio API. No framework and no build step.

```
index.html      Page shell
app.js          Game logic, audio synthesis, staff rendering
styles.css      Styling
assets/         Character art, card images, background music
```

## License

Code is MIT — see [LICENSE](LICENSE).

Artwork and audio are original work by Yucheng Lin and are **not** covered by the MIT licence; see [NOTICE.md](NOTICE.md) for their terms.

## More from Dato Music Lab

If your students can now hear a note bend, the next step is hearing *what* is playing it — there is a whole-class instrument timbre game built around a lake goddess who asks the questions. Elsewhere in the studio: a sight-reading tug-of-war for two teams on one touchscreen, and a Morse code telegraph that trains long-versus-short listening under the cover of a spy mission. All of them, with field notes on why each was built, are at **https://datomusiclab.dpdns.org**.
