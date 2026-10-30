/* ==========================================================
   CONFIG: sab kuch jo tumhe badalna hai, yahin hai.
   ========================================================== */
const CONFIG = {

  // --- 1. THE LOCK ---------------------------------------
  // Security question that appears above the input box.
  QUESTION: "Saad apko kin kin naamon se bulata hai? (Koi ek likh do)",

  // Sahi jawab (list). Case aur extra spaces ignore hote hain.
  // Naye naam/spelling add karne hon to yahin comma laga ke daal do.
  PASSWORD: [
    "madam prime minister", "madam pm", "prime minister", "madam",
    "zulaikan massi", "zulaikha massi", "zulaikan", "zulaikha", "massi",
    "aunty",
    // ADD MORE ACCEPTED ANSWERS HERE
  ],

  // Spelling ka masla khatam: agar jawab ke ANDAR in mein se koi bhi
  // tukda aa jaye (jaise "zulaikan masi", "Madam PM ji") to sahi maana jayega.
  MATCH_KEYWORDS: [
    "zulai", "zulei", "zulek", "zulik", "zulaika", "zulaikan",
    "massi", "masi", "mausi", "mashi",
    "madam", "prime", "minister", "aunty", "aunt",
    // ADD MORE KEYWORDS HERE
  ],
  // Chhote lafz (poore lafz ki tarah match honge)
  MATCH_WORDS: ["pm"],

  // true  = galat jawab par bhi lock khul jayega (funny message ke baad).
  // false = galat jawab par lock band rahega.
  ALLOW_ANY_ANSWER: true,

  // Galat jawab par ye messages aate hain (random). Add as many as you like.
  ERROR_MESSAGES: [
    "Galat jawab! Par chalo, aaj tumhara din hai, maaf kiya.",
    "Hmm, ye to nahi tha. Lekin Madam hain, to andar aane ki ijazat hai.",
    "Nahi yaar! Aliens bhi behtar jawab dete. Phir bhi, chalo andar.",
    // ADD MORE ERROR MESSAGES HERE
  ],

  // --- 2. THE ROAST BOT ----------------------------------
  // Bot ka pehla message (chat khulte hi dikhega).
  BOT_GREETING: "Salam Madam Prime Minister. Poochho jo poochna hai. Jawab milega, izzat nahi.",

  // Randomly picked roasts (English / Roman Urdu).
  // Ye tab aate hain jab sawal FACTS mein se kisi se match na kare.
  // ADD YOUR OWN JOKES: bas nayi line comma ke saath neeche daal do.
  ROASTS: [
    "Itna gehra sawal? Afsos, mere paas aap jaisa free time nahi. Ok boss.",
    "Aapke sawal par cabinet ka emergency session hua. Natija: sab confuse hain, aur ghalti aapki hai.",
    "Aap insaan nahi, alien hain. Isi liye sawal bhi doosre sayyare ka lagta hai.",
    "Jawab dene laga tha, phir socha pehle thodi der 'hmm' ho jaun. Aap ka favourite lafz hai na?",
    "Reels ka quota poora ho gaya ya ab sawal poochne aayi hain? Pehle woh khatam karo.",
    "Aunty, aapka sawal mil gaya. Jawab processing mein hai. Taqreeban 2031 tak.",
    "Zulaikan Massi ka sawal hai? Pehle chai laao, phir jawab sochenge.",
    // ADD MORE ROASTS HERE
    // "Tumhara custom roast...",
  ],

  // --- Q&A: bot in sawalon ka asli jawab dega ------------
  // keys = wo lafz jin se bot samjhe ke kis baare mein baat ho rahi hai.
  // Spelling ghalat ho tab bhi chalega (4+ harf wale lafzon mein).
  // "______" wali jagah asli jawab khud bhar lo.
  // Naya sawal add karna ho to ek aur { keys: [...], answer: "..." } daal do.
  FACTS: [
    { keys: ["dob", "dobb", "d o b", "date of birth", "birthday", "bday", "born", "paida", "paidaish", "tareekh", "janam", "salgira"],
      answer: "Madam ki DOB: 02 November 2007. Mujhay kisi ka birthday yaad nii rehta siwai apkay!" },
    { keys: ["age", "umar", "umr", "saal", "kitni", "bari", "old"],
      answer: "Umar: 19 saal ki ho gai app. but baat karoon Dil ki tu abhi bhi 10 saal ki hifza jaisa hai or maturity 40 saal ki aunty wali." },
    { keys: ["name", "naam", "full name", "poora naam", "whole name", "complete name", "full naam", "poora naam kya hai", "poora naam kya hai madam"],
      answer: "Poora naam: Hifza Arif. Daughter of Arif uncle." },
    { keys: ["father", "papa", "abbu", "baap", "arif", "uncle", "walid", "parents"],
      answer: "Arif uncle ki princess, aur ye hi sab se bari pehchaan hai." },
    { keys: ["city", "shehr", "sheher", "rehti", "rahti", "ghar", "address", "kahan", "Where", "kahan rehti hain", "kahan rehti ho"],
      answer: "Shehr: Faisalabad. jisko loyalpur bhi kehtay (I know lyallpur hai)" },
    { keys: ["study", "padhai", "class", "university", "college", "degree", "parhti", "school"],
      answer: "Padhai: BSSE (3rd semester)" },
    { keys: ["color", "colour", "rang", "pasand rang","favorite color", "favourite colour", "favourite rang", "pasandida rang","my favourite color", "my favourite rang", "my favourite colour"],
      answer: "Favourite rang: black" },
    { keys: ["food", "khana", "khaana", "biryani", "pasand khana", "dish", "favourite food", "favourite khana", "favourite dish", "pasandida khana", "pasandida dish"],
      answer: "Favourite khana: Biryani." },
    { keys: ["chai", "tea", "coffee", "drink", "pani", "peeti","favourite drink", "pasandida drink", "pasandida chai", "pasandida coffee", "fvrt drink", "fvrt coffee", "fvrt chai"],
      answer: "Coffee ke baghair Madam ki cabinet meeting shuru hi nahi hoti." },
    { keys: ["hobby", "hobbies", "shauq", "shoq", "reels", "mobile", "hobbies", "myhobbies", "favourite hobby", "fvrt hobby", "fvrt shauq", "fvrt shoq", "fvrt shauq"],
      answer: "Shauq: reels (tiktok wali), aur doosron ko tang karna." },
    { keys: ["friend", "dost", "saheli", "best friend", "dosti", "friendship", "bestfriend", "bestfriendship", "bestfrienddosti", "bestfrienddosti","Freiends forever", "bestfriendforever", "bestfriendforeverdosti", "bestfriendforeverdosti"],
      answer: "Best friend: Arwish sister. (Saad bhi list mein hai but bohat neeche)." },
    { keys: ["saad", "muhammad", "banda", "healer", "dukh sunnany wala", "sahela", "Male best friend", "male bestfriend", "male bestfriendship", "male bestfrienddosti", "male bestfriendforever", "male bestfriendforeverdosti"],
      answer: "Saad wohi hai jo tang bhi karta hai aur ye website bhi usi ne banayi hai. son of sajid mehmood, student of AUST 3rd semester" },
    { keys: ["nickname", "pyar", "pukar", "bulata", "kehta", "kehte", "my nickname", "my nickname", "my pyar", "my pukar", "my bulata", "my kehta", "my kehte" ],
      answer: "Saad apko Madam Prime Minister, Madam PM aur Zulaikan Massi kehta hai." },
    { keys: ["movie", "film", "drama", "actor", "show", "series", "favourite movie", "favourite film", "favourite drama", "fvrt movie", "fvrt film", "fvrt drama", "My favourite movie", "My favourite film", "My favourite drama"],
      answer: "Favourite drama/film: waisay haniya say peechlay dinoon ju baat ho rahi thi woh hai (Zanjeerain), baqi abhi ka nii pata " },
    { keys: ["song", "gana", "gaana", "singer", "music", "my favourite song", "my fvrt song", "my fvrt gana", "my fvrt gaana", "my favourite gana", "my favourite gaana"   ],
      answer: "Favourite gaana: Alfaaz " },
    { keys: ["dream", "khwab", "khawab", "future", "banna", "goal", "ambition", "aspiration", "my dream", "my khwab", "my khawab", "my future", "my banna", "my goal", "my ambition", "my aspiration", "mera khwab", "mera khawab", "mera future", "mera banna", "mera goal", "mera ambition", "mera aspiration"],
      answer: "Khwab: Apna software house kholna, ama baba ko haj or ummrah par behjana inshallah you will do it. man hoon na. Aur waisay bhi Prime Minister to ban hi chuki hain." },
    { keys: ["gift", "tohfa", "tohfah", "present", "treat", "party", "celebration", "my gift", "my tohfa", "my tohfah", "my present", "my treat", "my party", "my celebration", "my gift for madam", "my tohfa for madam", "my tohfah for madam", "my present for madam", "my treat for madam", "my party for madam", "my celebration for madam"],
      answer: "Treat aur gift Madam g ka haq hai. Saad ki jeb ka koi zikar nahi." },
    { keys: ["birthday wish", "wish", "mubarak", "dua", "congrats", "happy", "birthday", "bday", "happy birthday", "hb", "hb madam", "hb hifza", "hb hifza arif", "hb madam g", "hb madam prime minister", "hb madam pm", "hb zulaikan massi", "hb zulaikha massi", "hb zulaikan", "hb zulaikha", "hb massi", "hb aunty", "hb aunty g", "hb aunty madam", "hb aunty madam g", "hb aunty madam prime minister", "hb aunty madam pm", "hb aunty zulaikan massi", "hb aunty zulaikha massi"],
      answer: "Happy Birthday Madam! Agla page dekhne ke liye Next dabao." },
{ keys: ["boss", "leader", "queen", "malika", "rani", "princess", "hifza", "arif", "hifza arif", "madam g", "madam prime minister", "madam pm", "zulaikan massi", "zulaikha massi", "zulaikan", "zulaikha", "massi", "aunty", "arif uncle ki princess", "arif uncle ki beti", "arif uncle ki beti hifza", "arif uncle ki beti hifza arif", "arif uncle ki beti madam g", "arif uncle ki beti madam prime minister", "arif uncle ki beti madam pm", "arif uncle ki beti zulaikan massi", "arif uncle ki beti zulaikha massi"],
      answer: "Boss, leader aur queen: Hifza Arif, arif uncle ki princess." },
  ],

  // How many questions before the "Next" button appears.
  INTERACTIONS_BEFORE_NEXT: 3,

  // Fake typing delay in milliseconds (1.5 seconds).
  TYPING_DELAY: 1500,

  // --- 3. THE WISH ---------------------------------------
  WISH_TITLE: "Happy Birthday, Hifza!",

  // Paragraph shown above the video. Edit freely.
  WISH_TEXT: "Hifza mana, man bohat bura hoon, but apko hamesha tang karta rahoon ga aisay hi, jab man koi ulti harqat karoon na tu maan jayein karain madam g please, you know i am pagal woh bhi extreme wala, mana dosti man kuch nii hota,but your are my most, fvrt person in this world. or mujhay pata hai kay yeah dekhanay kay baad app khush bhi ho gay tang bhi but madam g happy birthday. Saad ki taraf say, baqi ma hoon ya nii app importnt hi rahayein gi maaaadam g ",

  // Short sign-off under the video.
  WISH_SIGN: "muhammad Saad and it is only only for madam Hifza Arif, my boss, ledaer and queeeeeeeeeeeeeeeen (woh wali nii, balkay arif uncle ki princess. ) ",

  // The part after "watch?v=" in your unlisted YouTube link.
  // Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  "dQw4w9WgXcQ"
  YOUTUBE_ID: "YOUR_VIDEO_ID",
};

/* ==========================================================
   Code. Neeche kuch badalne ki zaroorat nahi.
   ========================================================== */
(function () {
  const $ = (id) => document.getElementById(id);

  const lock = $("lock"), bot = $("bot"), wish = $("wish");
  const padlock = $("padlock");
  const lockForm = $("lock-form"), lockInput = $("lock-input"), lockMsg = $("lock-msg");
  const chat = $("chat"), chatForm = $("chat-form"), chatInput = $("chat-input"), sendBtn = $("send-btn");
  const nextBtn = $("next-btn");

  const normalize = (s) => s.trim().replace(/\s+/g, " ").toLowerCase();

  /* ---- Fill text from CONFIG ---- */
  $("lock-question").textContent = CONFIG.QUESTION;
  $("wish-title").textContent = CONFIG.WISH_TITLE;
  $("wish-text").textContent = CONFIG.WISH_TEXT;
  $("wish-sign").textContent = CONFIG.WISH_SIGN;

  /* ---- Screen switching ---- */
  function switchScreen(from, to, done) {
    from.classList.add("is-leaving");
    setTimeout(() => {
      from.hidden = true;
      from.classList.remove("is-leaving");
      to.hidden = false;
      to.classList.add("is-entering");
      window.scrollTo(0, 0);
      setTimeout(() => to.classList.remove("is-entering"), 600);
      if (done) done();
    }, 450);
  }

  /* ---- 1. THE LOCK ---- */
  lockForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const guess = normalize(lockInput.value);
    if (!guess) { lockInput.focus(); return; }

    const accepted = isAccepted(guess);

    if (accepted) {
      unlock(0);
    } else {
      const list = CONFIG.ERROR_MESSAGES;
      lockMsg.textContent = list[Math.floor(Math.random() * list.length)];
      const wrap = lock.querySelector(".lock-wrap");
      wrap.classList.remove("is-shaking");
      void wrap.offsetWidth; // restart the animation
      wrap.classList.add("is-shaking");

      if (CONFIG.ALLOW_ANY_ANSWER) {
        lockInput.disabled = true;
        unlock(2200); // message padhne ka time, phir khul jao
      } else {
        lockInput.select();
      }
    }
  });

  function isAccepted(guess) {
    const exact = [].concat(CONFIG.PASSWORD).some((p) => guess === normalize(p));
    const part = CONFIG.MATCH_KEYWORDS.some((k) => guess.includes(k));
    const words = guess.split(/[^a-z0-9]+/);
    const word = CONFIG.MATCH_WORDS.some((w) => words.includes(w));
    return exact || part || word;
  }

  function unlock(wait) {
    setTimeout(() => {
      if (!wait) lockMsg.textContent = "";
      padlock.classList.add("is-open");
      lockInput.disabled = true;
      setTimeout(() => switchScreen(lock, bot, startBot), 900);
    }, wait);
  }

  /* ---- 2. THE ROAST BOT ---- */
  let interactions = 0;
  let busy = false;
  let bag = [];

  // Shuffled bag: no roast repeats until all have been used.
  function nextRoast() {
    if (bag.length === 0) {
      bag = CONFIG.ROASTS.slice();
      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
    }
    return bag.pop();
  }

  // Edit distance: chhoti spelling ghalti pakadne ke liye
  function lev(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        d[i][j] = Math.min(
          d[i - 1][j] + 1,
          d[i][j - 1] + 1,
          d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
        );
      }
    }
    return d[a.length][b.length];
  }

  // Kya sawal ke lafzon mein ye key (thodi ghalti ke saath bhi) maujood hai?
  function fuzzyHas(words, text, key) {
    if (key.includes(" ")) return text.includes(key);
    return words.some((w) => {
      if (w === key) return true;
      if (w.length < 4 || key.length < 4) return false;
      return lev(w, key) <= (key.length >= 7 ? 2 : 1);
    });
  }

  // Sawal samjho: sab se zyada match wali entry ka jawab, warna roast.
  function getReply(q) {
    const text = normalize(q).replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
    const words = text.split(" ");
    let best = null, top = 0;
    CONFIG.FACTS.forEach((f) => {
      const score = f.keys.filter((k) => fuzzyHas(words, text, k)).length;
      if (score > top) { top = score; best = f; }
    });
    return best ? best.answer : nextRoast();
  }

  function addBubble(text, who) {
    const el = document.createElement("div");
    el.className = "bubble " + who;
    el.textContent = text;
    chat.appendChild(el);
    chat.scrollTop = chat.scrollHeight;
    return el;
  }

  function showTyping() {
    const el = document.createElement("div");
    el.className = "bubble bot";
    el.innerHTML = '<span class="typing">typing<i></i><i></i><i></i></span>';
    chat.appendChild(el);
    chat.scrollTop = chat.scrollHeight;
    return el;
  }

  function startBot() {
    addBubble(CONFIG.BOT_GREETING, "bot");
    chatInput.focus();
  }

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text || busy) return;

    busy = true;
    sendBtn.disabled = true;
    addBubble(text, "me");
    chatInput.value = "";

    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      addBubble(getReply(text), "bot");
      interactions++;
      busy = false;
      sendBtn.disabled = false;

      if (interactions >= CONFIG.INTERACTIONS_BEFORE_NEXT) {
        nextBtn.hidden = false;
      }
      chatInput.focus();
    }, CONFIG.TYPING_DELAY);
  });

  /* ---- 3. THE WISH ---- */
  nextBtn.addEventListener("click", () => {
    switchScreen(bot, wish, loadVideo);
  });

  function loadVideo() {
    const frame = $("video-frame");
    const iframe = $("video");
    if (!CONFIG.YOUTUBE_ID || CONFIG.YOUTUBE_ID === "YOUR_VIDEO_ID") {
      frame.classList.add("is-empty");
      iframe.removeAttribute("src");
      return;
    }
    iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(CONFIG.YOUTUBE_ID) + "?rel=0&modestbranding=1";
  }
})();