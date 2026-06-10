/** Owner inbox for contact form (FormSubmit — change to your real email) */
const OWNER_EMAIL = "contact@artione.com";

/** Leave empty to use built-in FAQ; set to your chat API URL when ready */
const CHAT_API_URL = "";

const I18N = {
  en: {
    meta: {
      lang: "en",
      dir: "ltr",
      title: "ArtiOne — Professional Counselors"
    },
    ui: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      chooseLanguageTitle: "Choose your language",
      chooseLanguageText: "Please select your preferred language to enter the ArtiOne experience.",
      englishLabel: "English language",
      persianLabel: "زبان فارسی",
      goToTeamMember: (n) => `Go to counselor ${n}`,
      storyDetailAlt: (title) => `${title} detail`,
      closeModal: "Close",
      openChat: "Open chat assistant",
      closeChat: "Close chat"
    },
    text: {
      brand: "ArtiOne",
      navTeam: "Our Counselors",
      navStories: "Client Stories",
      navContact: "Contact Us",
      heroBadge: "Professional Counseling",
      heroCtaPrimary: "Book a Session",
      heroCtaSecondary: "Client Stories",
      scrollHint: "Explore",
      teamEyebrow: "Compassionate experts",
      teamTitle: "Meet Our Counselors",
      storiesEyebrow: "Lives changed",
      storiesTitle: "Client Stories",
      contactLabel: "Your email or phone",
      contactPlaceholder: "Your email or phone number",
      contactSubmit: "Send",
      contactSuccess: "Thank you! We received your details and will reach out soon.",
      contactError: "Could not send. Please check your details or try again.",
      contactInvalid: "Please enter a valid email or phone number.",
      chatFab: "Ask ArtiOne",
      chatTitle: "ArtiOne Assistant",
      chatSubtitle: "Questions about counseling",
      chatInputLabel: "Your question",
      chatPlaceholder: "Ask about counselors, sessions…",
      chatSend: "Send",
      chatWelcome:
        "Hi! I can answer questions about ArtiOne counseling, our counselors, client stories, and how to book a session.",
      chatThinking: "Thinking…",
      chatFallback:
        "I'm not sure about that yet. Try asking about our counselors, counseling services, booking, or client stories — or use Contact Us to reach us directly."
    },
    chatFaq: [
      {
        keys: ["team", "counselor", "therapist", "who", "member", "people"],
        answer:
          "Meet Our Counselors introduces our licensed professionals. Click any profile to read their bio, specialties, and approach."
      },
      {
        keys: ["book", "session", "appointment", "schedule", "reserve"],
        answer:
          'Use "Book a Session" in the hero or send your email or phone in Contact Us — we will follow up to schedule counseling.'
      },
      {
        keys: ["story", "success", "result", "client", "case"],
        answer:
          "Client Stories share real journeys — reduced anxiety, stronger relationships, and clearer direction after counseling with ArtiOne."
      },
      {
        keys: ["service", "offer", "counseling", "therapy", "help", "what do you", "anxiety", "stress"],
        answer:
          "ArtiOne offers individual counseling, couples and family therapy, career guidance, anxiety and stress support, and ongoing emotional wellness sessions."
      },
      {
        keys: ["contact", "email", "phone", "reach", "talk"],
        answer:
          "Scroll to Contact Us, enter your email or phone, and tap Send — your message goes straight to our counselors."
      },
      {
        keys: ["language", "persian", "farsi", "english", "فارسی"],
        answer: "Switch language anytime from the menu (EN / FA) or the welcome language picker."
      }
    ],
    heroSlides: [
      {
        title: `Heal With <em>Compassion.</em>`,
        desc: "Confidential counseling with experienced professionals who listen deeply and guide you toward lasting emotional well-being."
      },
      {
        title: `Find Your <em>Balance.</em>`,
        desc: "Work through anxiety, stress, and life transitions with personalized support tailored to your story and goals."
      },
      {
        title: `Move Forward <em>Together.</em>`,
        desc: "Individual, couples, and family sessions at ArtiOne — a safe space to grow, heal, and reconnect."
      }
    ],
    team: [
      {
        name: "Eleanor Vance",
        role: "Founder & Lead Counselor",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
        desc: "Supports clients through anxiety, burnout, and major life changes with warmth and clarity.",
        bio: "Eleanor founded ArtiOne to make quality counseling accessible. She specializes in anxiety, stress management, and helping clients rebuild confidence during difficult transitions.",
        tags: ["Anxiety", "Wellness"]
      },
      {
        name: "Marcus Hale",
        role: "Couples & Family Counselor",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        desc: "Helps partners and families communicate honestly and rebuild trust.",
        bio: "Marcus works with couples and families navigating conflict, parenting challenges, and separation. His approach blends empathy with practical tools for healthier relationships.",
        tags: ["Couples", "Family"]
      },
      {
        name: "Sophia Reyes",
        role: "Career & Life Counselor",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
        desc: "Guides clients through career crossroads, self-doubt, and finding purposeful direction.",
        bio: "Sophia supports young professionals and mid-career changers with decision-making, workplace stress, and identity. She helps clients align daily life with their values.",
        tags: ["Career", "Growth"]
      }
    ],
    stories: [
      {
        img: "https://images.unsplash.com/photo-1499203537929-0f4e1e0b0b1a?w=400&q=80",
        cat: "Anxiety / Individual",
        title: "From daily panic to steady calm",
        result: "8 weeks to relief",
        detailImg: "https://images.unsplash.com/photo-1499203537929-0f4e1e0b0b1a?w=900&q=80",
        text: "After eight weeks of weekly sessions, a client reported fewer panic episodes, better sleep, and tools they still use daily — including breathing practices and thought reframing learned with their counselor."
      },
      {
        img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&q=80",
        cat: "Couples / Relationship",
        title: "Rebuilding trust after a difficult year",
        result: "Stronger communication",
        detailImg: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=900&q=80",
        text: "A couple on the edge of separation learned to listen without blame, set boundaries, and repair trust through structured couples counseling — and chose to continue their relationship with renewed commitment."
      },
      {
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
        cat: "Career / Life direction",
        title: "Clarity after years of feeling stuck",
        result: "New path forward",
        detailImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
        text: "A client facing burnout and career confusion mapped their values, explored options without pressure, and within three months made a confident career change aligned with their mental health needs."
      }
    ]
  },

  fa: {
    meta: {
      lang: "fa",
      dir: "rtl",
      title: "ArtiOne — مشاوران حرفه‌ای"
    },
    ui: {
      openMenu: "باز کردن منو",
      closeMenu: "بستن منو",
      chooseLanguageTitle: "زبان سایت را انتخاب کنید",
      chooseLanguageText: "لطفاً زبان موردنظر خود را انتخاب کنید تا وارد تجربه ArtiOne شوید.",
      englishLabel: "English language",
      persianLabel: "زبان فارسی",
      goToTeamMember: (n) => `رفتن به مشاور ${toPersianNumber(n)}`,
      storyDetailAlt: (title) => `جزئیات ${title}`,
      closeModal: "بستن",
      openChat: "باز کردن دستیار گفتگو",
      closeChat: "بستن گفتگو"
    },
    text: {
      brand: "ArtiOne",
      navTeam: "مشاوران ما",
      navStories: "داستان مراجعین",
      navContact: "تماس با ما",
      heroBadge: "مشاوره حرفه‌ای",
      heroCtaPrimary: "رزرو جلسه",
      heroCtaSecondary: "داستان مراجعین",
      scrollHint: "کاوش",
      teamEyebrow: "متخصصان دلسوز",
      teamTitle: "با مشاوران ما آشنا شوید",
      storiesEyebrow: "زندگی‌هایی که تغییر کرد",
      storiesTitle: "داستان مراجعین",
      contactLabel: "ایمیل یا شماره تماس شما",
      contactPlaceholder: "ایمیل یا شماره موبایل خود را وارد کنید",
      contactSubmit: "ارسال",
      contactSuccess: "متشکریم! اطلاعات شما دریافت شد و به‌زودی با شما تماس می‌گیریم.",
      contactError: "ارسال انجام نشد. لطفاً اطلاعات را بررسی کرده و دوباره تلاش کنید.",
      contactInvalid: "لطفاً یک ایمیل یا شماره تماس معتبر وارد کنید.",
      chatFab: "از ArtiOne بپرسید",
      chatTitle: "دستیار ArtiOne",
      chatSubtitle: "سوالات درباره مشاوره",
      chatInputLabel: "سوال شما",
      chatPlaceholder: "درباره مشاوران، جلسات…",
      chatSend: "ارسال",
      chatWelcome:
        "سلام! می‌توانم درباره مشاوره ArtiOne، مشاوران ما، داستان مراجعین و نحوه رزرو جلسه پاسخ دهم.",
      chatThinking: "در حال پاسخ…",
      chatFallback:
        "فعلاً پاسخ دقیقی ندارم. درباره مشاوران، خدمات مشاوره، رزرو جلسه یا داستان مراجعین بپرسید — یا از بخش تماس با ما استفاده کنید."
    },
    chatFaq: [
      {
        keys: ["تیم", "مشاور", "تراپی", "چه کس", "اعضا", "روان"],
        answer:
          "در بخش «با مشاوران ما آشنا شوید» پروفایل مشاوران مجرب ما را می‌بینید. روی هر کارت بزنید تا بیوگرافی و تخصص را بخوانید."
      },
      {
        keys: ["رزرو", "جلسه", "وقت", "قرار", "ملاقات"],
        answer:
          "از دکمه «رزرو جلسه» در صفحه اصلی استفاده کنید یا در «تماس با ما» ایمیل یا شماره خود را بفرستید تا هماهنگ کنیم."
      },
      {
        keys: ["داستان", "موفقیت", "نتیجه", "مراجع", "کیس"],
        answer:
          "داستان مراجعین مسیرهای واقعی را نشان می‌دهد — کاهش اضطراب، روابط سالم‌تر و مسیر روشن‌تر پس از مشاوره با ArtiOne."
      },
      {
        keys: ["خدمات", "مشاوره", "درمان", "اضطراب", "استرس", "چه کار", "چی کار"],
        answer:
          "ArtiOne مشاوره فردی، زوج‌درمانی و خانواده، راهنمایی شغلی، مدیریت اضطراب و استرس و جلسات مراقبت از سلامت روان ارائه می‌دهد."
      },
      {
        keys: ["تماس", "ایمیل", "تلفن", "شماره", "ارتباط"],
        answer:
          "به بخش تماس با ما بروید، ایمیل یا شماره را وارد کنید و «ارسال» را بزنید — پیام مستقیم به مشاوران ما می‌رسد."
      },
      {
        keys: ["زبان", "انگلیسی", "فارسی", "english"],
        answer: "هر زمان از منو (EN / FA) یا پنجره انتخاب زبان، زبان سایت را عوض کنید."
      }
    ],
    heroSlides: [
      {
        title: `با <em>مهربانی</em> التیام بگیرید.`,
        desc: "مشاوره محرمانه با متخصصان باتجربه که عمیق گوش می‌دهند و شما را به سمت آرامش پایدار هدایت می‌کنند."
      },
      {
        title: `<em>تعادل</em> خود را بیابید.`,
        desc: "با حمایت شخصی‌سازی‌شده، اضطراب، استرس و گذارهای زندگی را مدیریت کنید."
      },
      {
        title: `با هم <em>پیش</em> بروید.`,
        desc: "جلسات فردی، زوج و خانواده در ArtiOne — فضایی امن برای رشد، التیام و ارتباط دوباره."
      }
    ],
    team: [
      {
        name: "النور ونس",
        role: "بنیان‌گذار و مشاور ارشد",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
        desc: "در مسیر اضطراب، فرسودگی و تغییرات بزرگ زندگی، با گرمی و شفافیت همراه مراجعان است.",
        bio: "النور ArtiOne را برای دسترس‌پذیر کردن مشاوره باکیفیت تأسیس کرد. تخصص او اضطراب، مدیریت استرس و بازسازی اعتمادبه‌نفس در دوران‌های دشوار است.",
        tags: ["اضطراب", "سلامت روان"]
      },
      {
        name: "مارکِس هِیل",
        role: "مشاور زوج و خانواده",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        desc: "به زوج‌ها و خانواده‌ها کمک می‌کند صادقانه گفتگو کنند و اعتماد را بازسازی کنند.",
        bio: "مارکِس با زوج‌ها و خانواده‌هایی که با تعارض، فرزندپروری یا جدایی روبه‌روند کار می‌کند. رویکرد او همدلی را با ابزارهای عملی برای روابط سالم‌تر ترکیب می‌کند.",
        tags: ["زوج", "خانواده"]
      },
      {
        name: "سوفیا رِیِس",
        role: "مشاور شغلی و زندگی",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
        desc: "مراجعان را در دوراهی شغلی، تردید به خود و یافتن مسیر معنادار همراهی می‌کند.",
        bio: "سوفیا به جوانان حرفه‌ای و میانسالان در تصمیم‌گیری شغلی، استرس محیط کار و هویت کمک می‌کند تا زندگی روزمره را با ارزش‌هایشان هم‌راستا کنند.",
        tags: ["شغل", "رشد"]
      }
    ],
    stories: [
      {
        img: "https://images.unsplash.com/photo-1499203537929-0f4e1e0b0b1a?w=400&q=80",
        cat: "اضطراب / فردی",
        title: "از وحشت روزانه تا آرامش پایدار",
        result: "۸ هفته تا بهبود",
        detailImg: "https://images.unsplash.com/photo-1499203537929-0f4e1e0b0b1a?w=900&q=80",
        text: "پس از هشت هفته جلسات هفتگی، مراجع گزارش داد حملات اضطراب کمتر، خواب بهتر و ابزارهایی دارد که هنوز استفاده می‌کند — از جمله تنفس و بازنگری در افکار."
      },
      {
        img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&q=80",
        cat: "زوج / رابطه",
        title: "بازسازی اعتماد پس از سالی دشوار",
        result: "ارتباط قوی‌تر",
        detailImg: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=900&q=80",
        text: "زوجی در آستانه جدایی یاد گرفتند بدون سرزنش گوش دهند، مرز بگذارند و اعتماد را با مشاوره ساختاریافته ترمیم کنند — و با تعهد تازه رابطه را ادامه دادند."
      },
      {
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
        cat: "شغل / مسیر زندگی",
        title: "وضوح پس از سال‌ها احساس بن‌بست",
        result: "مسیر تازه",
        detailImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
        text: "مراجعی با فرسودگی و سردرگمی شغلی، ارزش‌هایش را ترسیم کرد، گزینه‌ها را بدون فشار بررسی کرد و ظرف سه ماه تغییر شغلی مطمئنی متناسب با سلامت روانش انجام داد."
      }
    ]
  }
};

const STORAGE_KEY = "artione-language";
const DEFAULT_LANG = "en";

let currentLang = DEFAULT_LANG;
let topbar = null;

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;
const swipeThreshold = 40;
const verticalThreshold = 60;

let teamSliderState = {
  track: null,
  viewport: null,
  dotsWrap: null,
  cards: [],
  dots: [],
  totalMembers: 0,
  index: 0,
  auto: null
};

let heroRotatorState = {
  track: null,
  rotator: null,
  slides: [],
  total: 0,
  index: 0,
  auto: null
};

function toPersianNumber(value) {
  return String(value).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}

function formatNumber(value) {
  return currentLang === "fa" ? toPersianNumber(value) : String(value);
}

function getLangPack(lang = currentLang) {
  return I18N[lang] || I18N[DEFAULT_LANG];
}

function saveLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}

function loadLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function setDocumentLanguage(lang) {
  const pack = getLangPack(lang);
  document.documentElement.lang = pack.meta.lang;
  document.documentElement.dir = pack.meta.dir;
  document.title = pack.meta.title;
}

function resolveI18nKey(pack, key) {
  return key.split(".").reduce((acc, part) => acc && acc[part], pack);
}

function updateStaticTexts() {
  const pack = getLangPack();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = resolveI18nKey(pack, el.dataset.i18n);
    if (typeof value === "string") el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const value = resolveI18nKey(pack, el.dataset.i18nHtml);
    if (typeof value === "string") el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = resolveI18nKey(pack, el.dataset.i18nPlaceholder);
    if (typeof value === "string") el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const value = resolveI18nKey(pack, el.dataset.i18nAria);
    if (typeof value === "string") el.setAttribute("aria-label", value);
  });

  const menuBtn = document.getElementById("menuBtn");
  const menuPanel = document.getElementById("menuPanel");
  const isOpen = menuPanel && menuPanel.classList.contains("open");

  if (menuBtn) {
    menuBtn.setAttribute("aria-label", isOpen ? pack.ui.closeMenu : pack.ui.openMenu);
  }

  const langModalTitle = document.querySelector("[data-lang-modal-title]");
  const langModalText = document.querySelector("[data-lang-modal-text]");
  if (langModalTitle) langModalTitle.textContent = pack.ui.chooseLanguageTitle;
  if (langModalText) langModalText.textContent = pack.ui.chooseLanguageText;

  document.querySelectorAll("[data-lang-label='fa']").forEach((el) => {
    el.textContent = pack.ui.persianLabel;
  });

  document.querySelectorAll("[data-lang-label='en']").forEach((el) => {
    el.textContent = pack.ui.englishLabel;
  });
}

function buildHeroSlide(slide) {
  return `
    <div class="hero-slide">
      <h1>${slide.title}</h1>
      <p>${slide.desc}</p>
    </div>
  `;
}

function renderHeroRotator() {
  const pack = getLangPack();
  const track = document.getElementById("heroSlideTrack");
  const rotator = document.getElementById("heroRotator");

  if (!track || !rotator || !pack.heroSlides?.length) return;

  if (heroRotatorState.auto) clearInterval(heroRotatorState.auto);

  const slides = pack.heroSlides;
  track.innerHTML =
    slides.map(buildHeroSlide).join("") +
    slides.map(buildHeroSlide).join("") +
    slides.map(buildHeroSlide).join("");

  heroRotatorState = {
    track,
    rotator,
    slides: [...track.children],
    total: slides.length,
    index: slides.length,
    auto: null
  };

  requestAnimationFrame(() => {
    renderHeroSlide(false);
    startHeroAuto();
  });
}

function renderHeroSlide(animate = true) {
  const { track, slides, total } = heroRotatorState;
  if (!track || !slides.length) return;

  if (heroRotatorState.index < 0 || heroRotatorState.index >= slides.length) {
    heroRotatorState.index =
      total +
      (((heroRotatorState.index - total) % total) + total) % total;
  }

  if (!animate) track.classList.add("snap");
  track.style.transform = `translateX(-${heroRotatorState.index * 100}%)`;
  updateHeroDots();

  if (!animate) {
    void track.offsetWidth;
    track.classList.remove("snap");
  }
}

function updateHeroDots() {
  const dotsWrap = document.getElementById("heroDots");
  const { total, index } = heroRotatorState;
  if (!dotsWrap || !total) return;

  const realIndex = ((index - total) % total + total) % total;

  if (dotsWrap.children.length !== total) {
    dotsWrap.innerHTML = Array.from(
      { length: total },
      (_, i) => `<span class="hero-dot${i === realIndex ? " active" : ""}"></span>`
    ).join("");
    return;
  }

  [...dotsWrap.children].forEach((dot, i) => {
    dot.classList.toggle("active", i === realIndex);
  });
}

function normalizeHero() {
  const { total } = heroRotatorState;
  if (!total) return;

  if (heroRotatorState.index >= 2 * total) {
    heroRotatorState.index -= total;
    renderHeroSlide(false);
  } else if (heroRotatorState.index < total) {
    heroRotatorState.index += total;
    renderHeroSlide(false);
  }
}

function nextHeroSlide() {
  heroRotatorState.index += 1;
  renderHeroSlide(true);
}

function startHeroAuto() {
  clearInterval(heroRotatorState.auto);
  heroRotatorState.auto = setInterval(nextHeroSlide, 3000);
}

function initHeroRotator() {
  const track = document.getElementById("heroSlideTrack");
  if (!track) return;

  track.addEventListener("transitionend", (e) => {
    if (e.target === track && e.propertyName === "transform") {
      normalizeHero();
    }
  });

  window.addEventListener("resize", () => renderHeroSlide(false));

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearInterval(heroRotatorState.auto);
      return;
    }
    normalizeHero();
    renderHeroSlide(false);
    startHeroAuto();
  });
}

function renderStories() {
  const pack = getLangPack();
  const storiesList = document.getElementById("storiesList");
  if (!storiesList) return;

  storiesList.innerHTML = "";

  pack.stories.forEach((s, index) => {
    const card = document.createElement("article");
    card.className = "story-card";

    const panelId = `story-panel-${index + 1}`;
    const buttonId = `story-button-${index + 1}`;

    card.innerHTML = `
      <button
        class="story-button"
        id="${buttonId}"
        type="button"
        aria-expanded="false"
        aria-controls="${panelId}"
      >
        <div class="story-summary">
          <img class="story-img" src="${s.img}" alt="${s.title}" loading="lazy" />
          <div>
            <div class="story-category">${s.cat}</div>
            <div class="story-title">${s.title}</div>
            <div class="story-result">${s.result}</div>
          </div>
          <div class="story-toggle" aria-hidden="true">+</div>
        </div>
      </button>

      <div
        class="story-details"
        id="${panelId}"
        role="region"
        aria-labelledby="${buttonId}"
        hidden
      >
        <img
          class="story-details-img"
          src="${s.detailImg}"
          alt="${pack.ui.storyDetailAlt(s.title)}"
          loading="lazy"
        />
        <p>${s.text}</p>
      </div>
    `;

    const button = card.querySelector(".story-button");
    const panel = card.querySelector(".story-details");

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      card.classList.toggle("open", !isOpen);
      panel.hidden = isOpen;
    });

    storiesList.appendChild(card);
  });
}

function buildTeamCard(member, memberIndex) {
  return `
    <article
      class="team-card"
      tabindex="0"
      role="button"
      data-member-index="${memberIndex}"
      aria-label="${member.name}, ${member.role}"
    >
      <div class="team-photo-wrap">
        <img class="team-photo" src="${member.img}" alt="${member.name}" loading="lazy" />
      </div>
      <h3 class="team-name">${member.name}</h3>
      <p class="team-role">${member.role}</p>
      <p class="team-desc">${member.desc}</p>
      <div class="team-tags">${member.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    </article>
  `;
}

function renderTeamSlider() {
  const pack = getLangPack();
  const track = document.getElementById("teamTrack");
  const dotsWrap = document.getElementById("teamDots");
  const viewport = document.getElementById("teamViewport");

  if (!track || !dotsWrap || !viewport) return;

  if (teamSliderState.auto) clearInterval(teamSliderState.auto);

  dotsWrap.innerHTML = "";
  track.innerHTML =
    pack.team.map((m, i) => buildTeamCard(m, i)).join("") +
    pack.team.map((m, i) => buildTeamCard(m, i)).join("") +
    pack.team.map((m, i) => buildTeamCard(m, i)).join("");

  const cards = [...track.children];
  const totalMembers = pack.team.length;

  pack.team.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "dot-nav";
    dot.type = "button";
    dot.setAttribute("aria-label", pack.ui.goToTeamMember(i + 1));
    dot.addEventListener("click", () => {
      goTo(totalMembers + i);
      resetAuto();
    });
    dotsWrap.appendChild(dot);
  });

  teamSliderState = {
    track,
    viewport,
    dotsWrap,
    cards,
    dots: [...dotsWrap.children],
    totalMembers,
    index: totalMembers,
    auto: null
  };

  track.querySelectorAll(".team-photo").forEach((img) => {
    img.addEventListener("load", () => renderTeam(false));
  });

  bindTeamCardClicks(track);
  renderTeam(false);
  startAuto();
}

function bindTeamCardClicks(track) {
  track.querySelectorAll(".team-card[data-member-index]").forEach((card) => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.memberIndex);
      if (!Number.isNaN(index)) openTeamModal(index);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const index = Number(card.dataset.memberIndex);
        if (!Number.isNaN(index)) openTeamModal(index);
      }
    });
  });
}

function openTeamModal(memberIndex) {
  const pack = getLangPack();
  const member = pack.team[memberIndex];
  const modal = document.getElementById("teamModal");
  if (!member || !modal) return;

  const photo = document.getElementById("teamModalPhoto");
  const name = document.getElementById("teamModalName");
  const role = document.getElementById("teamModalRole");
  const bio = document.getElementById("teamModalBio");
  const tags = document.getElementById("teamModalTags");
  const closeBtn = document.getElementById("teamModalClose");

  if (photo) {
    photo.src = member.img;
    photo.alt = member.name;
  }
  if (name) name.textContent = member.name;
  if (role) role.textContent = member.role;
  if (bio) bio.textContent = member.bio || member.desc;
  if (tags) {
    tags.innerHTML = member.tags.map((tag) => `<span>${tag}</span>`).join("");
  }
  if (closeBtn) {
    closeBtn.setAttribute("aria-label", pack.ui.closeModal);
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("team-modal-open");
  if (closeBtn) closeBtn.focus();
}

function closeTeamModal() {
  const modal = document.getElementById("teamModal");
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("team-modal-open");
}

function initTeamModal() {
  const modal = document.getElementById("teamModal");
  const backdrop = document.getElementById("teamModalBackdrop");
  const closeBtn = document.getElementById("teamModalClose");

  if (closeBtn) closeBtn.addEventListener("click", closeTeamModal);
  if (backdrop) backdrop.addEventListener("click", closeTeamModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("open")) {
      closeTeamModal();
    }
  });
}

function renderTeam(animate = true) {
  const { track, viewport, cards, dots, totalMembers } = teamSliderState;
  if (!track || !viewport || !cards.length) return;

  if (teamSliderState.index < 0 || teamSliderState.index >= cards.length) {
    teamSliderState.index =
      totalMembers +
      (((teamSliderState.index - totalMembers) % totalMembers) + totalMembers) % totalMembers;
  }

  if (!animate) track.classList.add("snap");

  const activeCard = cards[teamSliderState.index];
  if (!activeCard) return;

  const offset =
    viewport.clientWidth / 2 -
    activeCard.offsetLeft -
    activeCard.offsetWidth / 2;

  track.style.transform = `translateX(${offset}px)`;

  cards.forEach((card, i) => {
    const distance = Math.abs(i - teamSliderState.index);
    let scale, opacity, zIndex;

    if (distance === 0) {
      scale = 1;
      opacity = 1;
      zIndex = 6;
    } else if (distance === 1) {
      scale = 0.84;
      opacity = 0.55;
      zIndex = 4;
    } else if (distance === 2) {
      scale = 0.74;
      opacity = 0.25;
      zIndex = 2;
    } else {
      scale = 0.68;
      opacity = 0;
      zIndex = 1;
    }

    card.style.transform = `scale(${scale})`;
    card.style.opacity = opacity;
    card.style.zIndex = zIndex;
    card.classList.toggle("active", i === teamSliderState.index);
    card.setAttribute("aria-hidden", i === teamSliderState.index ? "false" : "true");
  });

  const realIndex = ((teamSliderState.index % totalMembers) + totalMembers) % totalMembers;

  dots.forEach((dot, i) => {
    const active = i === realIndex;
    dot.classList.toggle("active", active);
    dot.setAttribute("aria-current", active ? "true" : "false");
  });

  if (!animate) {
    void track.offsetWidth;
    track.classList.remove("snap");
  }
}

function normalizeTeam() {
  const { totalMembers } = teamSliderState;
  if (!totalMembers) return;

  if (teamSliderState.index >= 2 * totalMembers) {
    teamSliderState.index -= totalMembers;
    renderTeam(false);
  } else if (teamSliderState.index < totalMembers) {
    teamSliderState.index += totalMembers;
    renderTeam(false);
  }
}

function goTo(i) {
  teamSliderState.index = i;
  renderTeam(true);
}

function next() {
  teamSliderState.index++;
  renderTeam(true);
}

function prev() {
  teamSliderState.index--;
  renderTeam(true);
}

function handleTeamSwipe() {
  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;

  if (Math.abs(diffY) > verticalThreshold) return;
  if (Math.abs(diffX) < swipeThreshold) return;

  const isRTL = document.documentElement.dir === "rtl";

  if (isRTL) {
    if (diffX < 0) {
      prev();
    } else {
      next();
    }
  } else {
    if (diffX < 0) {
      next();
    } else {
      prev();
    }
  }

  resetAuto();
}

function startAuto() {
  clearInterval(teamSliderState.auto);
  teamSliderState.auto = setInterval(next, 4200);
}

function stopAuto() {
  clearInterval(teamSliderState.auto);
}

function resetAuto() {
  startAuto();
}

function initMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const menuPanel = document.getElementById("menuPanel");
  topbar = document.querySelector(".topbar");

  if (!menuBtn || !menuPanel) return;

  function getMenuLinks() {
    return [...menuPanel.querySelectorAll("a")];
  }

  function syncTopbarScroll() {
    if (!topbar) return;
    topbar.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  function openMenu() {
    menuPanel.classList.add("open");
    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-label", getLangPack().ui.closeMenu);
    if (topbar) topbar.classList.add("is-active");
    document.body.classList.add("menu-open");
    const firstLink = getMenuLinks()[0];
    if (firstLink) firstLink.focus();
  }

  function closeMenu(returnFocus = false) {
    menuPanel.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", getLangPack().ui.openMenu);
    if (topbar) topbar.classList.remove("is-active");
    document.body.classList.remove("menu-open");
    if (returnFocus) menuBtn.focus();
  }

  syncTopbarScroll();
  window.addEventListener("scroll", syncTopbarScroll, { passive: true });

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = menuPanel.classList.contains("open");
    if (isOpen) closeMenu(true);
    else openMenu();
  });

  getMenuLinks().forEach((link) => {
    link.addEventListener("click", () => closeMenu(false));
  });

  document.addEventListener("click", (e) => {
    if (!menuPanel.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuPanel.classList.contains("open")) {
      closeMenu(true);
    }
  });
}

function initReveal() {
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }
}

function updateLanguageButtons() {
  const faBtn = document.getElementById("langSwitchFa");
  const enBtn = document.getElementById("langSwitchEn");

  if (faBtn) faBtn.classList.toggle("is-active", currentLang === "fa");
  if (enBtn) enBtn.classList.toggle("is-active", currentLang === "en");
}

function openLangModal() {
  const modal = document.getElementById("langModal");
  if (!modal) return;
  modal.classList.add("open");
  document.body.classList.add("lang-modal-open");
}

function closeLangModal() {
  const modal = document.getElementById("langModal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.classList.remove("lang-modal-open");
}

function bindLanguageControls() {
  document.querySelectorAll("[data-lang-choice]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.langChoice;
      applyLanguage(lang, true);
      closeLangModal();
    });
  });

  const faBtn = document.getElementById("langSwitchFa");
  const enBtn = document.getElementById("langSwitchEn");

  if (faBtn) {
    faBtn.addEventListener("click", () => applyLanguage("fa", true));
  }

  if (enBtn) {
    enBtn.addEventListener("click", () => applyLanguage("en", true));
  }
}

function applyLanguage(lang, persist = true) {
  if (!I18N[lang]) lang = DEFAULT_LANG;

  currentLang = lang;
  if (persist) saveLanguage(lang);

  setDocumentLanguage(lang);
  updateStaticTexts();
  renderHeroRotator();
  renderStories();
  renderTeamSlider();
  updateLanguageButtons();
  resetChatWelcome();
}

function isValidContact(value) {
  const trimmed = value.trim();
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const phone = /^[+]?[\d\s().-]{8,}$/;
  return email.test(trimmed) || phone.test(trimmed);
}

function setContactStatus(message, type) {
  const status = document.getElementById("contactStatus");
  if (!status) return;

  status.textContent = message;
  status.hidden = !message;
  status.classList.remove("is-success", "is-error");
  if (type) status.classList.add(type === "success" ? "is-success" : "is-error");
}

async function sendContactToOwner(contactValue) {
  const pack = getLangPack();

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(OWNER_EMAIL)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        contact: contactValue,
        _subject: "ArtiOne Website — New contact",
        _template: "table",
        _captcha: "false"
      })
    });

    if (response.ok) {
      setContactStatus(pack.text.contactSuccess, "success");
      return true;
    }
  } catch {
    /* fall through to mailto */
  }

  const subject = encodeURIComponent("ArtiOne Website Contact");
  const body = encodeURIComponent(`Contact: ${contactValue}`);
  window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
  setContactStatus(pack.text.contactSuccess, "success");
  return true;
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const input = document.getElementById("contactInput");
  if (!form || !input) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const pack = getLangPack();
    const value = input.value.trim();

    if (!isValidContact(value)) {
      setContactStatus(pack.text.contactInvalid, "error");
      input.focus();
      return;
    }

    setContactStatus("", null);
    const submitBtn = form.querySelector(".contact-submit");
    if (submitBtn) submitBtn.disabled = true;

    try {
      await sendContactToOwner(value);
      input.value = "";
    } catch {
      setContactStatus(pack.text.contactError, "error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

let chatWelcomeShown = false;

function appendChatBubble(text, role) {
  const box = document.getElementById("chatMessages");
  if (!box) return;

  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${role}`;
  bubble.textContent = text;
  box.appendChild(bubble);
  box.scrollTop = box.scrollHeight;
}

function resetChatWelcome() {
  const box = document.getElementById("chatMessages");
  if (!box) return;

  box.innerHTML = "";
  chatWelcomeShown = false;

  const panel = document.getElementById("chatPanel");
  if (panel?.classList.contains("open")) {
    showChatWelcome();
  }
}

function showChatWelcome() {
  if (chatWelcomeShown) return;
  const pack = getLangPack();
  appendChatBubble(pack.text.chatWelcome, "bot");
  chatWelcomeShown = true;
}

function findFaqAnswer(question) {
  const pack = getLangPack();
  const q = question.toLowerCase().trim();
  if (!q) return null;

  for (const item of pack.chatFaq || []) {
    if (item.keys.some((key) => q.includes(key.toLowerCase()))) {
      return item.answer;
    }
  }
  return null;
}

async function fetchChatApiAnswer(question) {
  if (!CHAT_API_URL) return null;

  const response = await fetch(CHAT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: question,
      lang: currentLang
    })
  });

  if (!response.ok) return null;
  const data = await response.json();
  return data.reply || data.answer || data.message || null;
}

async function answerChatQuestion(question) {
  const pack = getLangPack();
  const apiReply = await fetchChatApiAnswer(question);
  if (apiReply) return apiReply;

  return findFaqAnswer(question) || pack.text.chatFallback;
}

function setChatOpen(open) {
  const panel = document.getElementById("chatPanel");
  const fab = document.getElementById("chatFab");
  const pack = getLangPack();

  if (!panel || !fab) return;

  panel.classList.toggle("open", open);
  panel.setAttribute("aria-hidden", open ? "false" : "true");
  fab.setAttribute("aria-expanded", open ? "true" : "false");
  fab.setAttribute("aria-label", open ? pack.ui.closeChat : pack.ui.openChat);
  document.body.classList.toggle("chat-open", open);

  if (open) {
    showChatWelcome();
    document.getElementById("chatInput")?.focus();
  }
}

function initChatbot() {
  const fab = document.getElementById("chatFab");
  const closeBtn = document.getElementById("chatClose");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");

  fab?.addEventListener("click", () => {
    const panel = document.getElementById("chatPanel");
    setChatOpen(!panel?.classList.contains("open"));
  });

  closeBtn?.addEventListener("click", () => setChatOpen(false));

  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const pack = getLangPack();
    const question = input?.value.trim();
    if (!question) return;

    appendChatBubble(question, "user");
    if (input) input.value = "";

    const typing = document.createElement("div");
    typing.className = "chat-bubble bot is-typing";
    typing.textContent = pack.text.chatThinking;
    document.getElementById("chatMessages")?.appendChild(typing);

    const reply = await answerChatQuestion(question);
    typing.remove();
    appendChatBubble(reply, "bot");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.getElementById("chatPanel")?.classList.contains("open")) {
      setChatOpen(false);
    }
  });
}

function initTeamEvents() {
  const track = document.getElementById("teamTrack");
  const viewport = document.getElementById("teamViewport");
  const nextBtn = document.getElementById("nextTeam");
  const prevBtn = document.getElementById("prevTeam");

  if (track) {
    track.addEventListener("transitionend", (e) => {
      if (e.target === track && e.propertyName === "transform") {
        normalizeTeam();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      next();
      resetAuto();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prev();
      resetAuto();
    });
  }

  if (viewport) {
    viewport.addEventListener("mouseenter", stopAuto);
    viewport.addEventListener("mouseleave", resetAuto);
    viewport.addEventListener("focusin", stopAuto);
    viewport.addEventListener("focusout", resetAuto);

    viewport.addEventListener(
      "touchstart",
      (e) => {
        const touch = e.changedTouches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
      },
      { passive: true }
    );

    viewport.addEventListener(
      "touchend",
      (e) => {
        const touch = e.changedTouches[0];
        touchEndX = touch.clientX;
        touchEndY = touch.clientY;
        handleTeamSwipe();
      },
      { passive: true }
    );
  }

  document.addEventListener("visibilitychange", () => {
    stopAuto();
    if (!document.hidden) {
      normalizeTeam();
      renderTeam(false);
      startAuto();
    }
  });

  window.addEventListener("resize", () => renderTeam(false));
  window.addEventListener("load", () => renderTeam(false));
}

function initAmbientMotion() {
  const bg = document.querySelector(".bg-soft");
  if (!bg) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  window.addEventListener(
    "scroll",
    () => {
      bg.style.transform = `translate3d(0, ${window.scrollY * 0.04}px, 0)`;
    },
    { passive: true }
  );
}

function initApp() {
  initMenu();
  initReveal();
  bindLanguageControls();
  initHeroRotator();
  initTeamModal();
  initTeamEvents();
  initContactForm();
  initChatbot();
  initAmbientMotion();

  const saved = loadLanguage();
  const initialLang = saved && I18N[saved] ? saved : DEFAULT_LANG;
  applyLanguage(initialLang, false);

  if (!saved || !I18N[saved]) {
    openLangModal();
  }
}

document.addEventListener("DOMContentLoaded", initApp);
