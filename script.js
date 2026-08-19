/* =================================
   PAGE LOADER
================================= */

window.addEventListener("load", () => {

  setTimeout(() => {

    const loader =
      document.getElementById("loader");

    if (loader) {
      loader.classList.add("hide");
    }

    // Small birthday celebration
    confettiBurst();

  }, 2500);

});


/* =================================
   FLOATING STARS
================================= */

const stars =
  document.getElementById("stars");

if (stars) {

  for (let i = 0; i < 120; i++) {

    const star =
      document.createElement("div");

    star.classList.add("star");

    star.style.left =
      Math.random() * 100 + "%";

    star.style.top =
      Math.random() * 100 + "%";


    const size =
      Math.random() * 3 + 1;

    star.style.width =
      size + "px";

    star.style.height =
      size + "px";


    star.style.animationDuration =
      (Math.random() * 20 + 10) + "s";

    star.style.animationDelay =
      Math.random() * 5 + "s";


    stars.appendChild(star);

  }

}


/* =================================
   FLOATING EMOJIS
================================= */

const floaters =
  document.getElementById("floaters");

const floatingEmojis = [
  "🎀",
  "💗",
  "🧿",
  "🫶🏻",
  "🌷"
];

if (floaters) {

  for (let i = 0; i < 40; i++) {

    const emoji =
      document.createElement("div");

    emoji.classList.add("float");


    emoji.innerText =
      floatingEmojis[
        Math.floor(
          Math.random() *
          floatingEmojis.length
        )
      ];


    emoji.style.left =
      Math.random() * 100 + "%";


    const size =
      Math.random() * 28 + 18;

    emoji.style.fontSize =
      size + "px";


    emoji.style.animationDuration =
      (Math.random() * 15 + 10) + "s";


    emoji.style.animationDelay =
      Math.random() * 10 + "s";


    floaters.appendChild(emoji);

  }

}


/* =================================
   CONFETTI
================================= */

function confettiBurst() {

  const items = [
    "💗",
    "🎀",
    "🧿",
    "🫶🏻",
    "🌷",
    "✨",
    "💫",
    "💕"
  ];


  for (let i = 0; i < 120; i++) {

    const confetti =
      document.createElement("div");

    confetti.classList.add(
      "confetti"
    );


    confetti.innerText =
      items[
        Math.floor(
          Math.random() *
          items.length
        )
      ];


    confetti.style.left =
      Math.random() * 100 + "vw";


    confetti.style.fontSize =
      (Math.random() * 18 + 12) +
      "px";


    confetti.style.animationDuration =
      (Math.random() * 3 + 3) +
      "s";


    confetti.style.animationDelay =
      Math.random() * 0.8 + "s";


    document.body.appendChild(
      confetti
    );


    setTimeout(() => {

      confetti.remove();

    }, 7000);

  }

}


/* =================================
   CELEBRATE BUTTON
================================= */

const celebrate =
  document.getElementById(
    "celebrate"
  );


if (celebrate) {

  celebrate.addEventListener(
    "click",
    () => {

      confettiBurst();

    }
  );

}


/* =================================
   FUNNY EMOJI
================================= */

const funny =
  document.getElementById(
    "funny"
  );


const emojiCycle = [
  "😂",
  "🤣",
  "😹",
  "😆",
  "🥲"
];


let emojiIndex = 0;


if (funny) {

  funny.addEventListener(
    "click",
    () => {

      emojiIndex =
        (emojiIndex + 1) %
        emojiCycle.length;


      /*
        First text node contains
        the main emoji.
      */

      if (
        funny.childNodes.length > 0
      ) {

        funny.childNodes[0]
          .nodeValue =
          emojiCycle[emojiIndex] + " ";

      }


      funny.classList.add(
        "shake"
      );


      confettiBurst();


      setTimeout(() => {

        funny.classList.remove(
          "shake"
        );

      }, 500);

    }
  );

}


/* =================================
   BACKGROUND MUSIC
================================= */

const bgMusic =
  document.getElementById(
    "bgMusic"
  );


const musicBtn =
  document.getElementById(
    "musicBtn"
  );


if (bgMusic && musicBtn) {

  musicBtn.addEventListener(
    "click",
    async () => {

      try {

        if (bgMusic.paused) {

          await bgMusic.play();

          musicBtn.innerHTML =
            "🎵 Music Playing";

        }

        else {

          bgMusic.pause();

          musicBtn.innerHTML =
            "🔇 Music Paused";

        }

      }

      catch (error) {

        console.log(
          "Music could not start:",
          error
        );

      }

    }
  );


  /*
    If music ends, reset button.
    (Mostly useful if loop is removed.)
  */

  bgMusic.addEventListener(
    "ended",
    () => {

      musicBtn.innerHTML =
        "🎵 Tap to Start Music";

    }
  );

}


/* =================================
   OPTIONAL: START MUSIC ON FIRST
   USER INTERACTION
================================= */

/*
  Mobile browsers normally block
  autoplay with sound.

  So when the user touches/clicks
  anywhere on the page for the first
  time, we try to start the music.

  If browser blocks it, the music
  button will still work normally.
*/

let musicStarted = false;


document.addEventListener(
  "click",
  async () => {

    if (
      musicStarted ||
      !bgMusic
    ) {
      return;
    }


    try {

      await bgMusic.play();

      musicStarted = true;


      if (musicBtn) {

        musicBtn.innerHTML =
          "🎵 Music Playing";

      }

    }

    catch (error) {

      /*
        Browser blocked autoplay.
        User can press music button.
      */

      console.log(
        "Autoplay blocked. Use music button."
      );

    }

  },
  { once: true }
);
