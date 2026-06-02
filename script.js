const I18N = {
  en: {
    meta: {
      lang: "en",
      dir: "ltr",
      title: "ACE Coaching Team"
    },
    ui: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      chooseLanguageTitle: "Choose your language",
      chooseLanguageText: "Please select your preferred language to enter the ACE experience.",
      englishLabel: "English language",
      persianLabel: "زبان فارسی",
      goToTeamMember: (n) => `Go to team member ${n}`,
      storyDetailAlt: (title) => `${title} detail`
    },
    text: {
      brand: "ACE",
      navAbout: "About Us",
      navTeam: "Our Team",
      navStories: "Success Stories",
      navContact: "Contact Us",

      heroTitle: `Grow With <em>Clarity.</em>`,
      heroDesc:
        "Scale your business with professional coaching and leadership development built for ambitious teams.",
      heroCtaPrimary: "Book a Session",
      heroCtaSecondary: "View Our Work",

      aboutEyebrow: "Who we are",
      aboutTitle: "About Us",
      aboutText:
        "We partner with ambitious leaders to drive growth, clarity, and exceptional performance — turning complex challenges into clear, confident decisions.",
      tag1: "Growth Strategy",
      tag2: "Leadership Coaching",
      tag3: "Team Development",

      stat1: "Leaders Coached",
      stat2: "Client Satisfaction",
      stat3: "Years Experience",

      teamEyebrow: "The people",
      teamTitle: "Meet Our Team",

      storiesEyebrow: "Real results",
      storiesTitle: "Success Stories",

      footerText: "Coaching & leadership development for ambitious teams.",
      footerHeading: "Let's Connect",
      footerButton: "Start Today"
    },
    stats: {
      leaders: { count: 240, suffix: "" },
      satisfaction: { count: 98, suffix: "%" },
      experience: { count: 12, suffix: "+" }
    },
    team: [
      {
        name: "Eleanor Vance",
        role: "Founder & Lead Coach",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
        desc: "Guides leaders through high-stakes growth with clarity and conviction.",
        tags: ["Strategy", "Leadership"]
      },
      {
        name: "Marcus Hale",
        role: "Executive Advisor",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        desc: "Helps executives sharpen decisions and scale with confidence.",
        tags: ["Executive", "Scale"]
      },
      {
        name: "Sophia Reyes",
        role: "Leadership Strategist",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
        desc: "Builds resilient leaders and aligned, high-trust teams.",
        tags: ["Leadership", "Culture"]
      }
    ],
    stories: [
      {
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
        cat: "Scale / Workshop",
        title: "Scaling a founder-led team without burning out",
        result: "+40% Productivity",
        detailImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
        text: "Through structured coaching and workshop sprints, the team rebuilt their operating rhythm — cutting noise, clarifying ownership, and lifting productivity by 40% in a single quarter."
      },
      {
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",
        cat: "Leadership / Development",
        title: "Turning managers into confident leaders",
        result: "+25% Revenue",
        detailImg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80",
        text: "A focused leadership development track gave new managers the frameworks and confidence to lead — translating directly into a 25% revenue lift over two quarters."
      },
      {
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
        cat: "Team / Workshop",
        title: "Rebuilding trust across a distributed team",
        result: "+65% Team Synergy",
        detailImg: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80",
        text: "Targeted team workshops dissolved silos and rebuilt trust across time zones, raising measured team synergy by 65% and shortening decision cycles dramatically."
      }
    ]
  },

  fa: {
    meta: {
      lang: "fa",
      dir: "rtl",
      title: "تیم کوچینگ ACE"
    },
    ui: {
      openMenu: "باز کردن منو",
      closeMenu: "بستن منو",
      chooseLanguageTitle: "زبان سایت را انتخاب کنید",
      chooseLanguageText: "لطفاً زبان موردنظر خود را انتخاب کنید تا وارد تجربه ACE شوید.",
      englishLabel: "English language",
      persianLabel: "زبان فارسی",
      goToTeamMember: (n) => `رفتن به عضو تیم ${toPersianNumber(n)}`,
      storyDetailAlt: (title) => `جزئیات ${title}`
    },
    text: {
      brand: "ACE",
      navAbout: "درباره ما",
      navTeam: "تیم ما",
      navStories: "داستان‌های موفقیت",
      navContact: "تماس با ما",

      heroTitle: `با <em>شفافیت</em> رشد کنید.`,
      heroDesc:
        "کسب‌وکار خود را با کوچینگ حرفه‌ای و توسعه رهبری، متناسب با تیم‌های بلندپرواز، مقیاس‌پذیر کنید.",
      heroCtaPrimary: "رزرو جلسه",
      heroCtaSecondary: "مشاهده نمونه‌کارها",

      aboutEyebrow: "ما که هستیم",
      aboutTitle: "درباره ما",
      aboutText:
        "ما در کنار رهبران بلندپرواز قرار می‌گیریم تا رشد، شفافیت و عملکردی ممتاز ایجاد کنیم و چالش‌های پیچیده را به تصمیم‌هایی روشن و مطمئن تبدیل کنیم.",
      tag1: "استراتژی رشد",
      tag2: "کوچینگ رهبری",
      tag3: "توسعه تیم",

      stat1: "رهبران آموزش‌دیده",
      stat2: "رضایت مشتریان",
      stat3: "سال تجربه",

      teamEyebrow: "آدم‌های پشت صحنه",
      teamTitle: "با تیم ما آشنا شوید",

      storiesEyebrow: "نتایج واقعی",
      storiesTitle: "داستان‌های موفقیت",

      footerText: "کوچینگ و توسعه رهبری برای تیم‌های بلندپرواز.",
      footerHeading: "بیایید گفتگو کنیم",
      footerButton: "شروع کنید"
    },
    stats: {
      leaders: { count: 240, suffix: "" },
      satisfaction: { count: 98, suffix: "%" },
      experience: { count: 12, suffix: "+" }
    },
    team: [
      {
        name: "النور ونس",
        role: "بنیان‌گذار و کوچ ارشد",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
        desc: "رهبران را در مسیر رشدهای حساس با شفافیت و اطمینان هدایت می‌کند.",
        tags: ["استراتژی", "رهبری"]
      },
      {
        name: "مارکِس هِیل",
        role: "مشاور اجرایی",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        desc: "به مدیران کمک می‌کند تصمیم‌های دقیق‌تر بگیرند و با اطمینان مقیاس پیدا کنند.",
        tags: ["اجرایی", "مقیاس‌پذیری"]
      },
      {
        name: "سوفیا رِیِس",
        role: "استراتژیست رهبری",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
        desc: "رهبرانی تاب‌آور و تیم‌هایی هم‌راستا با اعتماد بالا می‌سازد.",
        tags: ["رهبری", "فرهنگ"]
      }
    ],
    stories: [
      {
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
        cat: "مقیاس‌پذیری / کارگاه",
        title: "رشد یک تیم مؤسس‌محور بدون فرسودگی",
        result: "+۴۰٪ بهره‌وری",
        detailImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
        text: "با کوچینگ ساختاریافته و اسپرینت‌های کارگاهی، تیم ریتم عملیاتی خود را بازسازی کرد؛ نویزها کاهش یافت، مسئولیت‌ها شفاف شد و بهره‌وری تنها در یک فصل ۴۰٪ افزایش پیدا کرد."
      },
      {
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",
        cat: "رهبری / توسعه",
        title: "تبدیل مدیران به رهبرانی مطمئن",
        result: "+۲۵٪ درآمد",
        detailImg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80",
        text: "یک مسیر متمرکز توسعه رهبری، چارچوب‌ها و اعتمادبه‌نفس لازم را به مدیران تازه داد تا بهتر رهبری کنند؛ نتیجه آن افزایش مستقیم ۲۵٪ درآمد طی دو فصل بود."
      },
      {
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80",
        cat: "تیم / کارگاه",
        title: "بازسازی اعتماد در یک تیم توزیع‌شده",
        result: "+۶۵٪ هم‌افزایی تیمی",
        detailImg: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80",
        text: "کارگاه‌های هدفمند تیمی، سیلوها را از بین برد و اعتماد را میان مناطق زمانی مختلف بازسازی کرد؛ در نتیجه هم‌افزایی تیمی ۶۵٪ افزایش یافت و چرخه‌های تصمیم‌گیری به‌طور محسوسی کوتاه‌تر شد."
      }
    ]
  }
};

const STORAGE_KEY = "ace-language";
const DEFAULT_LANG = "en";

let currentLang = DEFAULT_LANG;
let topbar = null;

let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50;

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
  return;
}

function loadLanguage() {
  return null;
}

function setDocumentLanguage(lang) {
  const pack = getLangPack(lang);
  document.documentElement.lang = pack.meta.lang;
  document.documentElement.dir = pack.meta.dir;
  document.title = pack.meta.title;
}

function updateStaticTexts() {
  const pack = getLangPack();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = key.split(".").reduce((acc, part) => acc && acc[part], pack);
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    const value = key.split(".").reduce((acc, part) => acc && acc[part], pack);
    if (typeof value === "string") {
      el.innerHTML = value;
    }
  });

  const menuBtn = document.getElementById("menuBtn");
  const menuPanel = document.getElementById("menuPanel");
  const isOpen = menuPanel && menuPanel.classList.contains("open");

  if (menuBtn) {
    menuBtn.setAttribute(
      "aria-label",
      isOpen ? pack.ui.closeMenu : pack.ui.openMenu
    );
  }

  const langModalTitle = document.querySelector("[data-lang-modal-title]");
  const langModalText = document.querySelector("[data-lang-modal-text]");
  if (langModalTitle) langModalTitle.textContent = "";
  if (langModalText) langModalText.textContent = "";

  const langFaText = document.querySelectorAll("[data-lang-label='fa']");
  const langEnText = document.querySelectorAll("[data-lang-label='en']");
  langFaText.forEach((el) => (el.textContent = pack.ui.persianLabel));
  langEnText.forEach((el) => (el.textContent = pack.ui.englishLabel));
}

function updateStats() {
  const pack = getLangPack();

  const leaders = document.querySelector("[data-stat='leaders']");
  const satisfaction = document.querySelector("[data-stat='satisfaction']");
  const experience = document.querySelector("[data-stat='experience']");

  if (leaders) {
    leaders.dataset.count = pack.stats.leaders.count;
    leaders.dataset.suffix = pack.stats.leaders.suffix;
    leaders.textContent = "0";
  }

  if (satisfaction) {
    satisfaction.dataset.count = pack.stats.satisfaction.count;
    satisfaction.dataset.suffix = pack.stats.satisfaction.suffix;
    satisfaction.textContent = "0";
  }

  if (experience) {
    experience.dataset.count = pack.stats.experience.count;
    experience.dataset.suffix = pack.stats.experience.suffix;
    experience.textContent = "0";
  }

  initStatCounters();
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

function buildTeamCard(member) {
  return `
    <article class="team-card" aria-label="${member.name}, ${member.role}">
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

  if (teamSliderState.auto) {
    clearInterval(teamSliderState.auto);
  }

  dotsWrap.innerHTML = "";
  track.innerHTML =
    pack.team.map(buildTeamCard).join("") +
    pack.team.map(buildTeamCard).join("") +
    pack.team.map(buildTeamCard).join("");

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

  renderTeam(false);
  startAuto();
}

function renderTeam(animate = true) {
  const { track, viewport, cards, dots, totalMembers } = teamSliderState;
  if (!track || !viewport || !cards.length) return;

  if (teamSliderState.index < 0 || teamSliderState.index >= cards.length) {
    teamSliderState.index =
      totalMembers +
      (((teamSliderState.index - totalMembers) % totalMembers) + totalMembers) %
        totalMembers;
  }

  if (!animate) {
    track.classList.add("snap");
  }

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

  const realIndex =
    ((teamSliderState.index % totalMembers) + totalMembers) % totalMembers;

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
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) < swipeThreshold) return;

  if (diff > 0) {
    next();
  } else {
    prev();
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
    if (isOpen) {
      closeMenu(true);
    } else {
      openMenu();
    }
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

let statObserver = null;

function initStatCounters() {
  const statEls = document.querySelectorAll(".stat-num");

  if (statObserver) {
    statObserver.disconnect();
    statObserver = null;
  }

  if ("IntersectionObserver" in window) {
    statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          const target = Number(el.dataset.count || 0);
          const suffix = el.dataset.suffix || "";
          let current = 0;
          const step = Math.max(1, Math.ceil(target / 60));

          const tick = () => {
            current = Math.min(target, current + step);
            const displayValue = formatNumber(current) + suffix;
            el.textContent = displayValue;
            if (current < target) {
              requestAnimationFrame(tick);
            }
          };

          tick();
          statObserver.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );

    statEls.forEach((el) => statObserver.observe(el));
  } else {
    statEls.forEach((el) => {
      const target = Number(el.dataset.count || 0);
      const suffix = el.dataset.suffix || "";
      el.textContent = formatNumber(target) + suffix;
    });
  }
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
    faBtn.addEventListener("click", () => {
      applyLanguage("fa", true);
    });
  }

  if (enBtn) {
    enBtn.addEventListener("click", () => {
      applyLanguage("en", true);
    });
  }
}

function applyLanguage(lang, persist = true) {
  if (!I18N[lang]) lang = DEFAULT_LANG;

  currentLang = lang;
  if (persist) saveLanguage(lang);

  setDocumentLanguage(lang);
  updateStaticTexts();
  updateStats();
  renderStories();
  renderTeamSlider();
  updateLanguageButtons();
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
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    viewport.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
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

function initApp() {
  initMenu();
  initReveal();
  bindLanguageControls();
  initTeamEvents();

  applyLanguage(DEFAULT_LANG, false);
  openLangModal();
}

document.addEventListener("DOMContentLoaded", initApp);
