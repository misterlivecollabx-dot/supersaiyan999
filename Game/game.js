// SUPER SAIYAN 999 V1 - Developed by maanop
const GAME_DATA = {
  // ============================================================
  //  BACKGROUND IMAGES — LEVEL 1 / 2 / 3
  //  Yahan pe aap har level ka base background image change kar
  //  sakte hain. File ko
  //    Game/public/assets/backgrounds/
  //  folder mein rakhein aur neeche path update karein.
  //
  //  Supported formats: .webp  .jpg  .png
  //
  //  LEVEL 1  →  key: 1  →  currently: level-1.webp
  //  LEVEL 2  →  key: 2  →  currently: level-2.webp   (clean Namek — idle state)
  //  LEVEL 3  →  key: 3  →  currently: level-3.webp
  // ============================================================
  backgrounds: {
    1: "./public/assets/backgrounds/level-1.webp",   // ← LEVEL 1 background yahan badlein
    2: "./public/assets/backgrounds/level-2.webp",   // ← LEVEL 2 idle background (tap karne pe neeche wala crater overlay aata hai)
    3: "./public/assets/backgrounds/level-3.webp",   // ← LEVEL 3 background yahan badlein
  },
  audio: {
    1: {
      aura: "./public/assets/audio/level-1-aura.mp3",
      charge: "./public/assets/audio/level-1-charge.mp3",
      transform: "./public/assets/audio/level-1-transform.mp3",
    },
    2: {
      aura: "./public/assets/audio/level-2-aura.mp3",
      charge: "./public/assets/audio/level-2-charge.mp3",
      transform: "./public/assets/audio/level-2-transform.mp3",
    },
    3: {
      aura: "./public/assets/audio/level-3-aura.mp3",
      charge: "./public/assets/audio/level-3-charge.mp3",
      transform: "./public/assets/audio/level-3-transform.mp3",
    },
  },
  forms: [
    {
      key: "base",
      name: "Base",
      level: 1,
      threshold: 100,
      auraColor: "#6ac9ff",
      accentColor: "#8cf0ff",
      thumbCrop: { x: 50, y: 0.1, scale: 2.08 },
      poseAdjust: {
        stand: { x: 0.05, y: 0 },
      },
    },
    { key: "kaioken", name: "Kaioken", level: 1, threshold: 200, auraColor: "#ff4f7b", accentColor: "#ff9459", thumbCrop: { x: 50, y: 5, scale: 2.08 } },
    {
      key: "false-ssj",
      name: "False SSJ",
      level: 1,
      threshold: 300,
      auraColor: "#ffd74e",
      accentColor: "#ff8d2f",
      thumbCrop: { x: 50, y: 0.1, scale: 2.08 },
      poseAdjust: {
        power: { x: 0, y: 0 },
      },
    },
    {
      key: "ssj1",
      name: "Super Saiyan 1",
      level: 1,
      threshold: 400,
      auraColor: "#fff36c",
      accentColor: "#ffbb42",
      thumbCrop: { x: 50, y: 0.1, scale: 2.08 },
      poseAdjust: {
        stand: { x: -0.35, y: 0 },
        power: { x: -0.59, y: 0 },
      },
    },
    { key: "ssj2", name: "Super Saiyan 2", level: 1, threshold: 500, auraColor: "#fff9a2", accentColor: "#e0b8ff", thumbCrop: { x: 50, y: 0.1, scale: 2.08 } },
    { key: "ssj3", name: "Super Saiyan 3", level: 2, threshold: 600, auraColor: "#ffd36a", accentColor: "#ff6f3c", thumbCrop: { x: 50, y: 0.1, scale: 2.08 } },
    { key: "ssj-god", name: "Super Saiyan God", level: 2, threshold: 650, auraColor: "#ff4d78", accentColor: "#ffb06a", thumbCrop: { x: 35, y: 5, scale: 2.6 } },
    { key: "ssj-blue", name: "Super Saiyan Blue", level: 2, threshold: 700, auraColor: "#52bcff", accentColor: "#a4f7ff", thumbCrop: { x: 50, y: 5, scale: 2.08 } },
    { key: "ssj-blue-kaioken", name: "SSJ Blue Kaioken", level: 2, threshold: 750, auraColor: "#8ee6ff", accentColor: "#ff5782", thumbCrop: { x: 50, y: 5, scale: 2.08 } },
    {
      key: "ssj4",
      name: "Super Saiyan 4",
      level: 2,
      threshold: 800,
      auraColor: "#ff3e5b",
      accentColor: "#ffdc72",
      thumbCrop: { x: 30, y: 0.2, scale: 2.08 },
      poseAdjust: {
        power: { x: -0.59, y: 0 },
      },
    },
    {
      key: "ultra-instinct",
      name: "Ultra Instinct",
      level: 3,
      threshold: 850,
      auraColor: "#eaf7ff",
      accentColor: "#7fd1ff",
      thumbCrop: { x: 50, y: 6, scale: 2.08 },
      poseAdjust: {
        power: { x: -0.08, y: 0 },
      },
    },
    { key: "super-ultra-instinct", name: "Super Ultra Instinct", level: 3, threshold: 900, auraColor: "#c4ebff", accentColor: "#ffffff", thumbCrop: { x: 50, y: 6, scale: 2.08 } },
    {
      key: "ssj5",
      name: "Super Saiyan 5",
      level: 3,
      threshold: 950,
      auraColor: "#f8f2ff",
      accentColor: "#ff7de9",
      thumbCrop: { x: 30, y: 5, scale: 2.08 },
      poseAdjust: {
        power: { x: -2.4, y: 0 },
      },
    },
    { key: "beast", name: "Super Saiyan Beast", level: 3, threshold: 1000, auraColor: "#ff6ecf", accentColor: "#7ec8ff", thumbCrop: { x: 35, y: 6, scale: 2.8 } },
    {
      key: "elite",
      name: "Super Saiyan Elite",
      level: 3,
      threshold: 0,
      auraColor: "#ffe27d",
      accentColor: "#ffffff",
      thumbCrop: { x: 30, y: 6, scale: 2.8 },
      poseAdjust: {
        stand: { x: 2.6, y: 0 },
        power: { x: 2.4, y: 0 },
      },
    },
  ],
};

const DEBUG_MODE = new URLSearchParams(window.location.search).has("debug");
const MOBILE_VIDEO_OVERRIDES = {
  "./public/assets/false_ssj.mp4": "./public/assets/false_ssj-mobile.mp4",
  "./public/assets/kaioken.mp4": "./public/assets/kaioken-mobile.mp4",
  "./public/assets/km_20260716_1440p_60f_20260716_135312.mp4": "./public/assets/km_20260716_1440p_60f_20260716_135312-mobile.mp4",
  "./public/assets/level_1_1.mp4": "./public/assets/level_1_1-mobile.mp4",
  "./public/assets/ssj123_lightning.mp4": "./public/assets/ssj123_lightning-mobile.mp4",
  "./public/assets/super_saiyan_beast.mp4": "./public/assets/super_saiyan_beast-mobile.mp4",
  "./public/assets/super_ultra.mp4": "./public/assets/super_ultra-mobile.mp4",
  "./public/assets/transformation_transition.mp4": "./public/assets/transformation_transition-mobile.mp4",
};

for (const form of GAME_DATA.forms) {
  form.stand = `./public/assets/forms/${form.key}-stand.webp`;
  form.power = `./public/assets/forms/${form.key}-power.webp`;
  form.aura = `./public/assets/forms/${form.key}-aura.webp`;
}

const elements = {
  shell: document.getElementById("gameShell"),
  arena: document.getElementById("arena"),
  topHud: document.querySelector(".top-hud"),
  bottomHud: document.querySelector(".bottom-hud"),
  background: document.getElementById("backgroundLayer"),
  formStrip: document.getElementById("formStrip"),
  levelPill: document.getElementById("levelPill"),
  formName: document.getElementById("formName"),
  statusLine: document.getElementById("statusLine"),
  auraLayer: document.getElementById("auraLayer"),
  spriteLayer: document.getElementById("spriteLayer"),
  characterStack: document.getElementById("characterStack"),
  energyFill: document.getElementById("energyFill"),
  energyGlow: document.getElementById("energyGlow"),
  energyState: document.getElementById("energyState"),
  tapCallout: document.getElementById("tapCallout"),
  introOverlay: document.getElementById("introOverlay"),
  unlockToast: document.getElementById("unlockToast"),
  flash: document.getElementById("screenFlash"),
  impactRing: document.getElementById("impactRing"),
  tapBloom: document.getElementById("tapBloom"),
  canvas: document.getElementById("fxCanvas"),
  rockField: document.getElementById("rockField"),
  backgroundCrater: document.getElementById("backgroundCraterLayer"),
};

const ctx = elements.canvas.getContext("2d", { alpha: true });
const state = {
  currentIndex: 0,
  highestUnlocked: 0,
  visibleLevel: 1,
  chargeAmount: 0,
  displayedRatio: 0,
  lastTapAt: 0,
  introDismissed: false,
  transforming: false,
  transformUntil: 0,
  toastTimeout: null,
  particles: [],
  arcs: [],
  waves: [],
  recentTaps: [],
  flashStrength: 0,
  shake: 0,
  bloomStrength: 0,
  lastFrame: performance.now(),
  audioReady: false,
  audioContext: null,
  audioCache: new Map(),
  currentAuraLevel: null,
  currentChargeLevel: null,
  wasCharging: false,
  transformTimerIds: [],
  bgmStarted: false,
  bgmInterval: null,
  finalLoopTarget: 0,
  rocks: [],
  spriteFloat: 0,
  spriteLift: 0,
  spriteShakeX: 0,
  spriteShakeY: 0,
  craterActive: false,
  craterTimer: 0,
  landingTime: 0,
  jumpTimer: 0,
  jumpElapsed: 0,
  impactVideo: null,
  videoActive: false,
  offscreenCanvas: null,
  offscreenCtx: null,
  lightningVideo1: null,
  lightningVideo2: null,
  baseLightningVideo: null,
  beastLightningVideo: null,
  ssj123LightningVideo: null,
  superUltraVideo: null,
  falseSsjVideo: null,
  kaiokenVideo: null,
  transitionVideo: null,
  activeLightningVideo: null,
  lightningActive: false,
  lightningTimer: 0,
  offscreenLightningCanvas: null,
  offscreenLightningCtx: null,
  chargeStartTime: 0,
  currentBgSrc: null,
  performanceMode: "full",
};

function detectPerformanceMode() {
  const params = new URLSearchParams(window.location.search);
  const requestedMode = params.get("performance");
  if (requestedMode === "lite" || requestedMode === "mobile-lite") {
    return "mobile-lite";
  }
  if (requestedMode === "full") {
    return "full";
  }

  const userAgent = navigator.userAgent || "";
  const touchCapable = navigator.maxTouchPoints > 0 || "ontouchstart" in window;
  const isMobileOS = /Android|iPhone|iPad|iPod|Mobile|Silk|Kindle/i.test(userAgent);
  const smallViewport = Math.min(window.innerWidth, window.innerHeight) <= 900;
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || isMobileOS || touchCapable || smallViewport) {
    return "mobile-lite";
  }

  return "full";
}

function isLiteMode() {
  return state.performanceMode === "mobile-lite";
}

function applyPerformanceMode() {
  state.performanceMode = detectPerformanceMode();
  elements.shell.classList.toggle("performance-lite", isLiteMode());
}

function resolveVideoSource(src) {
  if (isLiteMode() && MOBILE_VIDEO_OVERRIDES[src]) {
    return MOBILE_VIDEO_OVERRIDES[src];
  }
  return src;
}

function getForm(index = state.currentIndex) {
  return GAME_DATA.forms[index];
}

function getLevelRange(level = state.visibleLevel) {
  const start = (level - 1) * 5;
  return { start, end: start + 4 };
}

function isLevelComplete(level) {
  return state.highestUnlocked >= getLevelRange(level).end;
}

function highestSwipeableLevel() {
  if (isLevelComplete(2)) {
    return 3;
  }
  if (isLevelComplete(1)) {
    return 2;
  }
  return 1;
}

function maxUnlockedLevel() {
  return getForm(state.highestUnlocked).level;
}

function currentTarget() {
  const form = getForm();
  return form.threshold || 1000;
}

function isFinalForm() {
  return state.currentIndex >= GAME_DATA.forms.length - 1;
}

function isCharging(now = performance.now()) {
  return state.transforming || (now - state.lastTapAt <= 800 && state.lastTapAt > 0);
}

function chargeRatio() {
  return Math.max(0, Math.min(1, state.chargeAmount / currentTarget()));
}

function updateTheme() {
  const form = getForm();
  const charging = isCharging();
  const poseKey = charging ? "power" : "stand";
  const poseAdjust = form.poseAdjust?.[poseKey] ?? { x: 0, y: 0 };
  elements.shell.style.setProperty("--aura-color", form.auraColor);
  elements.shell.style.setProperty("--accent-color", form.accentColor);
  elements.shell.style.setProperty("--sprite-offset-x", `${poseAdjust.x ?? 0}%`);
  elements.shell.style.setProperty("--sprite-offset-y", `${poseAdjust.y ?? 0}%`);
  const CLEAN_BG = {
    1: "./public/assets/backgrounds/level-1.webp",
    2: "./public/assets/backgrounds/level-2.webp",
    3: "./public/assets/backgrounds/level-3.webp"
  };
  const CRATER_BG = {
    1: "./public/assets/backgrounds/level-1-crater.webp",
    2: "./public/assets/backgrounds/level-2-crater.jpg",
    3: "./public/assets/backgrounds/level-3-crater.jpg"
  };

  const bgSrc = charging ? (CRATER_BG[form.level] || CLEAN_BG[form.level]) : CLEAN_BG[form.level];
  state.currentBgSrc = bgSrc;
  if (state.lastAppliedBgSrc !== bgSrc) {
    state.lastAppliedBgSrc = bgSrc;
    elements.background.src = bgSrc;
  }
  elements.levelPill.textContent = `LEVEL ${state.visibleLevel}`;
  const targetSpriteSrc = charging ? form.power : form.stand;
  state.lastAppliedSpriteSrc = targetSpriteSrc;
  elements.spriteLayer.src = targetSpriteSrc;
  state.lastAppliedAuraSrc = form.aura;
  elements.auraLayer.src = form.aura;
  syncAudio(true);
}

function visualAuraCharge(now = performance.now()) {
  if (state.transforming || isCharging(now)) {
    return Math.max(0, Math.min(1, state.displayedRatio));
  }
  return 0;
}

function createDebugPanel() {
  const panel = document.createElement("div");
  panel.className = "debug-panel";
  panel.innerHTML = `
    <button id="debug-force-next" type="button">Next Form</button>
    <button id="debug-charge-mid" type="button">Charge 40%</button>
    <button id="debug-age-tap" type="button">Age Tap</button>
    <button id="debug-base" type="button">Select Base</button>
  `;

  panel.querySelector("#debug-force-next").addEventListener("click", () => {
    state.chargeAmount = currentTarget();
    tryTransform();
  });
  panel.querySelector("#debug-charge-mid").addEventListener("click", () => {
    state.chargeAmount = currentTarget() * 0.4;
    state.lastTapAt = performance.now();
    updateStatus();
  });
  panel.querySelector("#debug-age-tap").addEventListener("click", () => {
    state.lastTapAt = performance.now() - 2500;
  });
  panel.querySelector("#debug-base").addEventListener("click", () => {
    handleManualSwitch(0);
  });

  elements.shell.append(panel);
}

function snapshotState() {
  return {
    currentIndex: state.currentIndex,
    highestUnlocked: state.highestUnlocked,
    formName: getForm().name,
    unlockedCount: state.highestUnlocked + 1,
    chargeAmount: state.chargeAmount,
    chargeRatio: chargeRatio(),
    isCharging: isCharging(),
  };
}

function getVisibleFormIndices() {
  const { start } = getLevelRange(state.visibleLevel);
  return GAME_DATA.forms.slice(start, start + 5).map((_, offset) => start + offset);
}

function renderFormStrip() {
  const visibleIndices = getVisibleFormIndices();
  
  let chips = elements.formStrip.querySelectorAll(".form-chip");
  if (chips.length !== 5) {
    elements.formStrip.innerHTML = visibleIndices.map((realIndex) => {
      const formData = GAME_DATA.forms[realIndex];
      const slotNumber = (realIndex % 5) + 1;
      const thumbCrop = formData.thumbCrop ?? { x: 50, y: 20, scale: 2.56 };
      return `
        <button class="form-chip" data-form-index="${realIndex}">
          <div class="chip-thumb">
            <img src="${formData.stand}" alt="" style="--thumb-x:${thumbCrop.x}%; --thumb-y:${thumbCrop.y}%; --thumb-scale:${thumbCrop.scale};" />
            <div class="chip-lock" aria-hidden="true">🔒</div>
          </div>
          <div class="chip-number">${slotNumber}</div>
          <div class="chip-label">${formData.name}</div>
        </button>
      `;
    }).join("");
    chips = elements.formStrip.querySelectorAll(".form-chip");
  }

  visibleIndices.forEach((realIndex, idx) => {
    const chip = chips[idx];
    if (!chip) return;

    const formData = GAME_DATA.forms[realIndex];
    const unlocked = realIndex <= state.highestUnlocked;
    const active = realIndex === state.currentIndex;
    const slotNumber = (realIndex % 5) + 1;
    const thumbCrop = formData.thumbCrop ?? { x: 50, y: 20, scale: 2.56 };

    chip.dataset.formIndex = realIndex;
    chip.setAttribute("aria-label", formData.name);
    chip.classList.toggle("is-locked", !unlocked);
    chip.classList.toggle("is-active", active);

    const img = chip.querySelector(".chip-thumb img");
    if (img && img.getAttribute("src") !== formData.stand) {
      img.src = formData.stand;
      img.style.setProperty("--thumb-x", `${thumbCrop.x}%`);
      img.style.setProperty("--thumb-y", `${thumbCrop.y}%`);
      img.style.setProperty("--thumb-scale", `${thumbCrop.scale}`);
    }

    const lock = chip.querySelector(".chip-lock");
    if (lock) {
      lock.style.display = unlocked ? "none" : "block";
    }

    const num = chip.querySelector(".chip-number");
    if (num && num.textContent !== `${slotNumber}`) {
      num.textContent = `${slotNumber}`;
    }

    const label = chip.querySelector(".chip-label");
    if (label && label.textContent !== formData.name) {
      label.textContent = formData.name;
    }
  });

  const leftArrow = document.getElementById("levelLeftArrow");
  if (leftArrow) {
    const showLeftArrow =
      (state.currentIndex === 5 && state.visibleLevel === 2) ||
      (state.currentIndex === 10 && state.visibleLevel === 3);
    leftArrow.classList.toggle("is-visible", showLeftArrow);
    elements.formStrip.classList.toggle("has-left-arrow", showLeftArrow);
  }

  const rightArrow = document.getElementById("levelRightArrow");
  if (rightArrow) {
    const showRightArrow =
      (state.currentIndex === 4 && state.visibleLevel === 1) ||
      (state.currentIndex === 9 && state.visibleLevel === 2);
    rightArrow.classList.toggle("is-visible", showRightArrow);
    elements.formStrip.classList.toggle("has-right-arrow", showRightArrow);
  }
}

function setCurrentForm(index, { resetCharge = true } = {}) {
  state.currentIndex = Math.max(0, Math.min(index, state.highestUnlocked));
  state.visibleLevel = getForm().level;
  if (resetCharge) {
    state.chargeAmount = 0;
  }
  updateTheme();
  renderFormStrip();
}

function setVisibleLevel(level) {
  const safeLevel = Math.max(1, Math.min(highestSwipeableLevel(), level));
  if (safeLevel === state.visibleLevel) {
    return;
  }
  state.visibleLevel = safeLevel;
  renderFormStrip();
  updateTheme();
  updateStatus();
}

function setTextContent(el, text) {
  if (el && el.textContent !== text) {
    el.textContent = text;
  }
}

function updateStatus(now = performance.now()) {
  const form = getForm();
  const active = isCharging(now) || state.chargeAmount > 0;

  // Always keep formName as the actual Form Name (e.g. "Base", "Super Saiyan 1")
  setTextContent(elements.formName, form.name);

  if (state.transforming) {
    setTextContent(elements.statusLine, `TRANSFORMATION SURGE`);
    setTextContent(elements.energyState, `BREAKING LIMIT`);
    setTextContent(elements.tapCallout, `TRANSFORMING TO ${GAME_DATA.forms[Math.min(state.currentIndex + 1, GAME_DATA.forms.length - 1)].name.toUpperCase()}`);
    return;
  }

  if (isFinalForm()) {
    setTextContent(elements.statusLine, `FINAL ASCENSION`);
    setTextContent(elements.energyState, active ? `MAX AURA` : `FINAL FORM`);
    setTextContent(elements.tapCallout, active ? `ULTIMATE AURA ACTIVE` : `TAP TO ASCEND ULTIMATE FORM`);
    return;
  }

  if (active) {
    setTextContent(elements.statusLine, `POWERING ${form.name.toUpperCase()}`);
    setTextContent(elements.energyState, `SURGING`);
    setTextContent(elements.tapCallout, `TAP TO POWER UP & TRANSFORM`);
    return;
  }

  setTextContent(elements.statusLine, `FORM READY`);
  setTextContent(elements.energyState, `READY`);
  setTextContent(elements.tapCallout, `TAP ANYWHERE TO POWER UP`);
}

function ensureAudioContext() {
  if (!state.audioContext) {
    state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (state.audioContext.state === "suspended") {
    state.audioContext.resume().catch(() => { });
  }
}

function getLevelAudio(level) {
  if (!state.audioCache.has(level)) {
    const channels = GAME_DATA.audio[level];
    state.audioCache.set(level, {
      aura: Object.assign(new Audio(channels.aura), { loop: true, preload: "auto", volume: 0.12 }),
      charge: Object.assign(new Audio(channels.charge), { loop: true, preload: "auto", volume: 0 }),
      transform: Object.assign(new Audio(channels.transform), { preload: "auto", volume: 0.75 }),
    });
  }
  return state.audioCache.get(level);
}

function startLoop(audio, volume) {
  audio.volume = volume;
  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => { });
  }
}

function stopLoop(audio) {
  audio.pause();
  audio.currentTime = 0;
}

function syncAudio(force = false) {
  if (!state.audioReady) {
    return;
  }

  const level = getForm().level;
  const charging = isCharging();
  const intensity = tapIntensity();

  for (const [cachedLevel, channels] of state.audioCache.entries()) {
    if (cachedLevel !== level || force || !charging) {
      channels.aura.pause();
      channels.charge.pause();
    }
  }

  const channels = getLevelAudio(level);
  if (charging) {
    if (state.currentAuraLevel !== level || force || channels.aura.paused) {
      startLoop(channels.aura, 0.2);
      state.currentAuraLevel = level;
    } else {
      channels.aura.volume = 0.2;
    }
  } else {
    channels.aura.pause();
    state.currentAuraLevel = null;
  }

  if (charging && !state.transforming) {
    startLoop(channels.charge, 0.12 + intensity * 0.22);
    state.currentChargeLevel = level;
  } else if (state.currentChargeLevel !== null) {
    const existing = getLevelAudio(state.currentChargeLevel);
    existing.charge.pause();
    existing.charge.currentTime = 0;
    state.currentChargeLevel = null;
  }
}

function playTransformSound() {
  if (!state.audioReady) {
    return;
  }
  const channels = getLevelAudio(getForm().level);
  channels.transform.currentTime = 0;
  channels.transform.play().catch(() => { });
}

function pulseTone({ frequency, duration, gain, type = "triangle", glideTo }) {
  if (!state.audioReady || !state.audioContext) {
    return;
  }

  const now = state.audioContext.currentTime;
  const oscillator = state.audioContext.createOscillator();
  const volume = state.audioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  if (glideTo) {
    oscillator.frequency.exponentialRampToValueAtTime(glideTo, now + duration);
  }

  volume.gain.setValueAtTime(0.0001, now);
  volume.gain.exponentialRampToValueAtTime(gain, now + 0.02);
  volume.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  oscillator.connect(volume).connect(state.audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.02);
}

function noiseBurst({ duration = 0.18, gain = 0.03, filterType = "bandpass", frequency = 1200, q = 1.5, fadeOut = 1.8 } = {}) {
  if (!state.audioReady || !state.audioContext) {
    return;
  }

  const sampleRate = state.audioContext.sampleRate;
  const frameCount = Math.max(1, Math.floor(sampleRate * duration));
  const buffer = state.audioContext.createBuffer(1, frameCount, sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < frameCount; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / frameCount);
  }

  const source = state.audioContext.createBufferSource();
  const filter = state.audioContext.createBiquadFilter();
  const volume = state.audioContext.createGain();
  const now = state.audioContext.currentTime;

  source.buffer = buffer;
  filter.type = filterType;
  filter.frequency.setValueAtTime(frequency, now);
  filter.Q.value = q;
  volume.gain.setValueAtTime(gain, now);
  volume.gain.exponentialRampToValueAtTime(0.0001, now + duration * fadeOut);

  source.connect(filter).connect(volume).connect(state.audioContext.destination);
  source.start(now);
  source.stop(now + duration + 0.05);
}

function playTapTone() {
  pulseTone({ frequency: 230, glideTo: 390, duration: 0.08, gain: 0.035, type: "square" });
  noiseBurst({ duration: 0.04, gain: 0.01, frequency: 1800, q: 2.6 });
}

function playUnlockTone() {
  pulseTone({ frequency: 520, glideTo: 920, duration: 0.18, gain: 0.06, type: "sawtooth" });
  setTimeout(() => pulseTone({ frequency: 760, glideTo: 1120, duration: 0.14, gain: 0.045, type: "triangle" }), 90);
}

function playLightningSound() {
  pulseTone({ frequency: 1180, glideTo: 280, duration: 0.16, gain: 0.022, type: "sawtooth" });
  noiseBurst({ duration: 0.12, gain: 0.022, frequency: 2200, q: 0.8 });
}

function playRockLiftSound() {
  pulseTone({ frequency: 96, glideTo: 132, duration: 0.28, gain: 0.028, type: "triangle" });
  noiseBurst({ duration: 0.18, gain: 0.02, frequency: 340, q: 0.7, fadeOut: 1.2 });
}

function playRockFallSound() {
  pulseTone({ frequency: 140, glideTo: 72, duration: 0.22, gain: 0.03, type: "triangle" });
  noiseBurst({ duration: 0.22, gain: 0.028, frequency: 240, q: 0.6, fadeOut: 1.4 });
}

function playEnergyExplosionSound() {
  pulseTone({ frequency: 118, glideTo: 40, duration: 0.55, gain: 0.08, type: "sawtooth" });
  pulseTone({ frequency: 640, glideTo: 180, duration: 0.4, gain: 0.03, type: "triangle" });
  noiseBurst({ duration: 0.42, gain: 0.055, frequency: 880, q: 0.9, fadeOut: 1.8 });
}

function playLevelCompleteSound() {
  pulseTone({ frequency: 490, glideTo: 740, duration: 0.2, gain: 0.04, type: "triangle" });
  setTimeout(() => pulseTone({ frequency: 660, glideTo: 990, duration: 0.22, gain: 0.05, type: "triangle" }), 120);
  setTimeout(() => pulseTone({ frequency: 880, glideTo: 1320, duration: 0.26, gain: 0.055, type: "triangle" }), 240);
}

function startBackgroundMusic() {
  if (!state.audioReady || state.bgmStarted) {
    return;
  }
  state.bgmStarted = true;

  const pattern = [110, 165, 147, 196, 165, 220, 196, 147];
  let step = 0;
  state.bgmInterval = window.setInterval(() => {
    if (document.hidden) {
      return;
    }
    const note = pattern[step % pattern.length];
    pulseTone({ frequency: note, glideTo: note * 1.01, duration: 0.28, gain: 0.012, type: "triangle" });
    pulseTone({ frequency: note * 2, glideTo: note * 2.02, duration: 0.12, gain: 0.005, type: "sine" });
    step += 1;
  }, 340);
}

function initializeAudio() {
  if (state.audioReady) {
    ensureAudioContext();
    return;
  }
  ensureAudioContext();
  state.audioReady = true;
  syncAudio(true);
  startBackgroundMusic();
}

function resizeCanvas() {
  applyPerformanceMode();
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const realVh = vh * 0.01;
  document.documentElement.style.setProperty("--real-vh", `${realVh}px`);

  const shellWidth = Math.min(vw, Math.max(280, Math.min(640, vh * 0.65)));
  const hudScale = Math.max(0.55, Math.min(1.0, Math.min(shellWidth / 440, vh / 740)));

  document.documentElement.style.setProperty("--shell-width", `${shellWidth}px`);
  document.documentElement.style.setProperty("--hud-scale", `${hudScale.toFixed(3)}`);

  // Dynamically measure rendered HUD bounds to calculate exact arena space
  const topHudEl = elements.topHud || document.querySelector(".top-hud");
  const bottomHudEl = elements.bottomHud || document.querySelector(".bottom-hud");

  const topHudHeight = topHudEl ? topHudEl.getBoundingClientRect().height : 85;
  const bottomHudHeight = bottomHudEl ? bottomHudEl.getBoundingClientRect().height : 80;

  const availableArenaHeight = Math.max(160, vh - topHudHeight - bottomHudHeight);
  const characterHeight = Math.max(200, Math.min(840, Math.floor(availableArenaHeight * 0.95)));
  const characterWidth = Math.max(160, Math.min(580, Math.floor(Math.min(shellWidth * 0.94, characterHeight * 0.78))));

  document.documentElement.style.setProperty("--character-width", `${characterWidth}px`);
  document.documentElement.style.setProperty("--character-height", `${characterHeight}px`);

  const isMobileDevice = window.innerWidth <= 768 || ("ontouchstart" in window) || (navigator.maxTouchPoints > 0);
  const maxDpr = isLiteMode() ? 1.0 : (isMobileDevice ? 1.0 : 2.0);
  const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
  elements.canvas.width = Math.floor(shellWidth * dpr);
  elements.canvas.height = Math.floor(vh * dpr);
  elements.canvas.style.width = `${shellWidth}px`;
  elements.canvas.style.height = `${vh}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function tapIntensity() {
  const now = performance.now();
  state.recentTaps = state.recentTaps.filter((stamp) => now - stamp < 1000);
  return Math.min(1, state.recentTaps.length / 11);
}

// Object Pooling to eliminate Garbage Collection allocations during gameplay
const pools = {
  particles: [],
  waves: [],
};

function getParticleFromPool() {
  return pools.particles.pop() || { x: 0, y: 0, vx: 0, vy: 0, size: 0, color: "#fff", life: 0, maxLife: 0, type: "" };
}

function releaseParticleToPool(particle) {
  if (pools.particles.length < 120) {
    pools.particles.push(particle);
  }
}

function getWaveFromPool() {
  return pools.waves.pop() || { x: 0, y: 0, radius: 0, grow: 0, width: 0, color: "#fff", life: 0, maxLife: 0 };
}

function releaseWaveToPool(wave) {
  if (pools.waves.length < 30) {
    pools.waves.push(wave);
  }
}

function spawnParticles(count, options = {}) {
  if (isLiteMode()) {
    count = Math.max(4, Math.ceil(count * 0.45));
  }

  // Cap active particles for 60 FPS mobile performance
  const particleCap = isLiteMode() ? 22 : 40;
  const particleTrimTarget = isLiteMode() ? 14 : 30;
  if (state.particles.length > particleCap) {
    const trimmed = state.particles.splice(0, state.particles.length - particleTrimTarget);
    trimmed.forEach(releaseParticleToPool);
  }

  const rect = elements.characterStack.getBoundingClientRect();
  const canvasRect = elements.canvas.getBoundingClientRect();
  const rawX = options.x ?? (rect.left + rect.width / 2);
  const rawY = options.y ?? (rect.top + rect.height * 0.46);
  const baseX = rawX - canvasRect.left;
  const baseY = rawY - canvasRect.top;
  const palette = options.palette ?? [getForm().auraColor, getForm().accentColor, "#ffffff"];

  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const speed = options.speedMin + Math.random() * (options.speedMax - options.speedMin);
    const lifeVal = options.lifeMin + Math.random() * (options.lifeMax - options.lifeMin);
    const p = getParticleFromPool();
    p.x = baseX + (Math.random() - 0.5) * (options.scatterX ?? 40);
    p.y = baseY + (Math.random() - 0.5) * (options.scatterY ?? 120);
    p.vx = Math.cos(angle) * speed;
    p.vy = Math.sin(angle) * speed - (options.lift ?? 0);
    p.size = options.sizeMin + Math.random() * (options.sizeMax - options.sizeMin);
    p.color = palette[Math.floor(Math.random() * palette.length)];
    p.life = lifeVal;
    p.maxLife = lifeVal;
    p.type = "";
    state.particles.push(p);
  }
}

function spawnWave(options = {}) {
  const waveCap = isLiteMode() ? 6 : 12;
  const waveTrimTarget = isLiteMode() ? 4 : 8;
  if (state.waves.length > waveCap) {
    const trimmed = state.waves.splice(0, state.waves.length - waveTrimTarget);
    trimmed.forEach(releaseWaveToPool);
  }
  const rect = elements.characterStack.getBoundingClientRect();
  const canvasRect = elements.canvas.getBoundingClientRect();
  const rawX = options.x ?? (rect.left + rect.width / 2);
  const rawY = options.y ?? (rect.top + rect.height * 0.72);
  const lifeVal = options.life ?? 0.55;
  const w = getWaveFromPool();
  w.x = rawX - canvasRect.left;
  w.y = rawY - canvasRect.top;
  w.radius = options.radius ?? 24;
  w.grow = options.grow ?? 340;
  w.width = options.width ?? 3;
  w.color = options.color ?? getForm().accentColor;
  w.life = lifeVal;
  w.maxLife = lifeVal;
  state.waves.push(w);
}

function spawnArc(options = {}) {
  const arcCap = isLiteMode() ? 6 : 12;
  const arcTrimTarget = isLiteMode() ? 4 : 8;
  if (state.arcs.length > arcCap) {
    state.arcs.splice(0, state.arcs.length - arcTrimTarget);
  }
  const rect = elements.characterStack.getBoundingClientRect();
  const canvasRect = elements.canvas.getBoundingClientRect();
  const centerX = (rect.left + rect.width / 2) - canvasRect.left;
  const centerY = (rect.top + rect.height * 0.44) - canvasRect.top;
  const radius = options.radius ?? (70 + Math.random() * 90);
  const startAngle = options.startAngle ?? Math.random() * Math.PI * 2;
  const points = [];
  const segments = options.segments ?? 6;

  for (let index = 0; index <= segments; index += 1) {
    const progress = index / segments;
    const angle = startAngle + progress * (options.arcSpan ?? (0.8 + Math.random() * 0.7));
    const jitter = (Math.random() - 0.5) * (options.jitter ?? 22);
    points.push({
      x: centerX + Math.cos(angle) * (radius + jitter),
      y: centerY + Math.sin(angle) * (radius * 0.92 + jitter),
    });
  }

  state.arcs.push({
    points,
    color: options.color ?? (Math.random() > 0.5 ? getForm().accentColor : "#ffffff"),
    width: options.width ?? (1.5 + Math.random() * 2.2),
    life: options.life ?? 0.16,
    maxLife: options.life ?? 0.16,
  });
}

function spawnTapBurst(x, y) {
  spawnParticles(isLiteMode() ? 8 : 14, {
    x,
    y,
    speedMin: 18,
    speedMax: 48,
    sizeMin: 2.5,
    sizeMax: 6.5,
    lifeMin: 0.24,
    lifeMax: 0.52,
    scatterX: 20,
    scatterY: 20,
    lift: 28,
  });
  spawnWave({ x, y, radius: 8, grow: 140, life: 0.24, width: 2.5 });
  
  // Electric Lightning Bolts (Bijli Effect on Tap)
  const form = getForm();
  if (!isLiteMode()) {
    spawnArc({ radius: 55 + Math.random() * 55, life: 0.18, width: 2.6, jitter: 18, arcSpan: 0.85, color: form.accentColor });
    spawnArc({ radius: 38 + Math.random() * 40, life: 0.14, width: 2.0, jitter: 14, arcSpan: 0.65, color: "#ffffff" });
  }
}

function spawnAuraEmbers() {
  const charging = isCharging();
  const form = getForm();
  const intensity = charging ? 6 : 2;

  spawnParticles(intensity, {
    speedMin: 8,
    speedMax: 28,
    sizeMin: 1.8,
    sizeMax: 5.0,
    lifeMin: 0.5,
    lifeMax: 1.1,
    scatterX: 130,
    scatterY: 250,
    lift: 28,
  });

  // Continuous Electric Lightning Arcs (Bijli Effect)
  if (charging || form.level >= 1) {
    const chance = charging ? 0.95 : 0.45;
    if (Math.random() < chance) {
      spawnArc({
        radius: 65 + Math.random() * 85,
        life: 0.16 + Math.random() * 0.14,
        width: 2.2 + tapIntensity() * 3.0,
        jitter: 22,
        arcSpan: 0.9,
        color: Math.random() > 0.35 ? form.accentColor : "#ffffff",
      });
      if (Math.random() < 0.25) {
        playLightningSound();
      }
    }
  }

  // Spawns tight body-hugging sparks (animating body lines)
  if (Math.random() < (charging ? 0.85 : 0.45)) {
    let sparkColor;
    const formKey = getForm().key;
    if (formKey === "false-ssj") {
      const colors = ["#ff3b30", "#8b0000", "#ff8d2f", "#222222"];
      sparkColor = colors[Math.floor(Math.random() * colors.length)];
    } else {
      sparkColor = Math.random() > 0.3 ? getForm().accentColor : "#ffffff";
    }

    spawnArc({
      radius: 35 + Math.random() * 55, // tight around Goku's torso and waist
      life: 0.12 + Math.random() * 0.10, // fast flicker
      width: 1.8 + Math.random() * 2.2,
      jitter: 14 + Math.random() * 14,
      arcSpan: 0.4 + Math.random() * 0.4,
      color: sparkColor
    });
  }
}

function spawnTransformBurst() {
  spawnParticles(80, {
    speedMin: 45,
    speedMax: 130,
    sizeMin: 3,
    sizeMax: 8,
    lifeMin: 0.45,
    lifeMax: 1.2,
    scatterX: 60,
    scatterY: 60,
    lift: 46,
  });
  spawnWave({ radius: 30, grow: 760, life: 0.9, width: 5, color: "#ffffff" });
  for (let i = 0; i < 10; i += 1) {
    spawnArc({ radius: 62 + i * 10, life: 0.2 + Math.random() * 0.16, width: 2.4 + Math.random() * 2.2, jitter: 28, arcSpan: 1.1 + Math.random() * 0.7 });
  }
}

function animateImpactRing() {
  elements.impactRing.animate(
    [
      { opacity: 0.95, visibility: "visible", transform: "translate(-50%, 50%) scale(0.3)" },
      { opacity: 0.45, visibility: "visible", transform: "translate(-50%, 50%) scale(1.1)" },
      { opacity: 0, visibility: "hidden", transform: "translate(-50%, 50%) scale(1.55)" },
    ],
    { duration: 360, easing: "ease-out" },
  );
  state.bloomStrength = Math.min(1, state.bloomStrength + 0.8);
}

function flashScreen(strength = 1) {
  state.flashStrength = Math.min(1.2, state.flashStrength + strength);
}

function shakeScreen(amount = 10) {
  state.shake = 0;
}

function dismissIntro() {
  if (state.introDismissed) {
    return;
  }
  state.introDismissed = true;
  elements.introOverlay.classList.add("is-hidden");
}

function showToast(message) {
  elements.unlockToast.textContent = message;
  elements.unlockToast.classList.remove("is-visible");
  void elements.unlockToast.offsetWidth;
  elements.unlockToast.classList.add("is-visible");

  if (state.toastTimeout) {
    clearTimeout(state.toastTimeout);
  }
  state.toastTimeout = setTimeout(() => {
    elements.unlockToast.classList.remove("is-visible");
  }, 1200);
}

function clearTransformTimers() {
  state.transformTimerIds.forEach((timerId) => clearTimeout(timerId));
  state.transformTimerIds = [];
  if (state.transitionVideo && !state.transitionVideo.paused) {
    state.transitionVideo.pause();
  }
}

function queueTransformStep(callback, delay) {
  const timerId = window.setTimeout(callback, delay);
  state.transformTimerIds.push(timerId);
}

function tryTransform() {
  if (state.transforming || isFinalForm()) {
    return;
  }
  const nextIndex = state.currentIndex + 1;
  if (state.chargeAmount < currentTarget() || nextIndex >= GAME_DATA.forms.length) {
    return;
  }

  const unlocking = nextIndex > state.highestUnlocked;
  const nextForm = GAME_DATA.forms[nextIndex];
  const levelJump = nextForm.level > getForm().level;
  state.transforming = true;
  state.lastTapAt = performance.now();
  elements.shell.classList.add("is-transforming");

  clearTransformTimers();

  if (unlocking) {
    state.highestUnlocked = nextIndex;
  }
  setCurrentForm(nextIndex);
  flashScreen(0.3);
  spawnTransformBurst();
  playTransformSound();
  playEnergyExplosionSound();

  if (unlocking) {
    state.visibleLevel = nextForm.level;
    playUnlockTone();
    showToast(`${nextForm.name} UNLOCKED`);
  } else {
    state.visibleLevel = nextForm.level;
    showToast(`${nextForm.name}`);
  }
  renderFormStrip();

  queueTransformStep(() => {
    state.transforming = false;
    state.chargeAmount = 0;
    state.lastTapAt = performance.now();
    elements.shell.classList.remove("is-transforming", "is-vanishing", "is-reappearing");
    updateTheme();
    updateStatus();
    clearTransformTimers();
  }, 400);
}

function handleTap(clientX, clientY) {
  dismissIntro();
  initializeAudio();

  if (state.transforming) {
    return;
  }

  const now = performance.now();
  const wasIdle = !state.transforming && (now - state.lastTapAt > 2500);

  state.lastTapAt = now;
  state.recentTaps.push(state.lastTapAt);
  state.chargeAmount += 1;
  if (isFinalForm()) {
    state.chargeAmount = Math.min(currentTarget(), state.chargeAmount);
  }

  const targetPowerSrc = getForm().power;
  if (state.lastAppliedSpriteSrc !== targetPowerSrc) {
    state.lastAppliedSpriteSrc = targetPowerSrc;
    elements.spriteLayer.src = targetPowerSrc;
  }
  spawnTapBurst(clientX, clientY);
  playTapTone();
  tryTransform();
  updateStatus();
  syncAudio();
}

function handleManualSwitch(index) {
  if (index > state.highestUnlocked || state.transforming) {
    shakeScreen(8);
    flashScreen(0.08);
    return;
  }

  state.chargeAmount = 0;
  state.lastTapAt = 0;
  setCurrentForm(index);
  updateStatus();
}

function drawKeyedVideoFrame(video, destRect, compositeMode = "screen") {
  if (!video || video.paused || video.ended || (video.readyState ?? 0) < 2) {
    return;
  }

  const vWidth = video.videoWidth || 640;
  const vHeight = video.videoHeight || 360;
  if (vWidth <= 0 || vHeight <= 0) return;

  const procW = 256;
  const procH = 144;

  if (!state.procCanvas) {
    state.procCanvas = document.createElement("canvas");
    state.procCanvas.width = procW;
    state.procCanvas.height = procH;
    state.procCtx = state.procCanvas.getContext("2d", { willReadFrequently: true });
  }

  state.procCtx.drawImage(video, 0, 0, procW, procH);

  try {
    const imgData = state.procCtx.getImageData(0, 0, procW, procH);
    const data = imgData.data;
    const len = data.length;

    // Ultra-robust green screen keying (#00FF00 & all green hues) + dark background noise removal
    for (let i = 0; i < len; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const maxRGB = Math.max(r, g, b);
      const isGreenDominant = (g === maxRGB && g > 30 && (g > r * 1.02 || g > b * 1.02));
      const isPureGreen = (g > 35 && g > r * 0.95 && g > b * 0.95 && (g - r > 12 || g - b > 12));
      const isBlackOrDark = (r < 25 && g < 25 && b < 25);

      if (isGreenDominant || isPureGreen || isBlackOrDark) {
        data[i + 3] = 0; // 100% Transparent
      }
    }

    state.procCtx.putImageData(imgData, 0, 0);

    ctx.save();
    ctx.globalCompositeOperation = "source-over";
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(state.procCanvas, 0, 0, procW, procH, destRect.x, destRect.y, destRect.w, destRect.h);
    ctx.restore();
  } catch (e) {
    // If keying fails, do NOT draw the raw unkeyed video to prevent green screen
    return;
  }
}

function renderVideoOverlays() {
  const charging = isCharging();
  const formKey = getForm().key;
  const rect = elements.characterStack.getBoundingClientRect();
  const canvasRect = elements.canvas.getBoundingClientRect();

  if (rect.width <= 0 || rect.height <= 0) return;

  const destRect = {
    x: rect.left - canvasRect.left - rect.width * 0.25,
    y: rect.top - canvasRect.top - rect.height * 0.25,
    w: rect.width * 1.5,
    h: rect.height * 1.5
  };

  let targetVideo = null;

  if (charging || state.transforming) {
    if (formKey === "kaioken" && state.kaiokenVideo) {
      targetVideo = state.kaiokenVideo;
    } else if ((formKey === "ssj1" || formKey === "ssj2" || formKey === "ssj3" || formKey === "ssj-blue" || formKey === "ssj-blue-kaioken") && state.ssj123LightningVideo) {
      targetVideo = state.ssj123LightningVideo;
    } else if (formKey === "beast" && state.beastLightningVideo) {
      targetVideo = state.beastLightningVideo;
    } else if ((formKey === "ultra-instinct" || formKey === "super-ultra-instinct") && state.superUltraVideo) {
      targetVideo = state.superUltraVideo;
    } else if (formKey === "false-ssj" && state.falseSsjVideo) {
      targetVideo = state.falseSsjVideo;
    } else if (state.ssj123LightningVideo) {
      targetVideo = state.ssj123LightningVideo;
    }
  } else {
    if ((formKey === "ssj2" || formKey === "ssj3") && state.ssj123LightningVideo) {
      targetVideo = state.ssj123LightningVideo;
    }
  }

  const allVideos = [
    state.kaiokenVideo,
    state.ssj123LightningVideo,
    state.beastLightningVideo,
    state.superUltraVideo,
    state.falseSsjVideo,
    state.baseLightningVideo
  ];

  allVideos.forEach((v) => {
    if (v && v !== targetVideo) {
      if (!v.paused) {
        v.pause();
      }
    }
  });

  if (targetVideo) {
    if (targetVideo.paused) {
      targetVideo.play().catch(() => {});
    }
    drawKeyedVideoFrame(targetVideo, destRect, "screen");
  }
}

function renderParticles(deltaSeconds) {
  ctx.clearRect(0, 0, elements.canvas.width, elements.canvas.height);

  renderVideoOverlays();

  ctx.globalCompositeOperation = "screen";

  for (let index = state.waves.length - 1; index >= 0; index -= 1) {
    const wave = state.waves[index];
    wave.life -= deltaSeconds;
    if (wave.life <= 0) {
      const removed = state.waves.splice(index, 1)[0];
      if (removed) releaseWaveToPool(removed);
      continue;
    }
    wave.radius += wave.grow * deltaSeconds;
    const alpha = wave.life / wave.maxLife;
    ctx.beginPath();
    ctx.strokeStyle = `${wave.color}${Math.round(alpha * 180)
      .toString(16)
      .padStart(2, "0")}`;
    ctx.lineWidth = wave.width * alpha;
    ctx.ellipse(wave.x, wave.y, wave.radius, wave.radius * 0.24, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  for (let index = state.arcs.length - 1; index >= 0; index -= 1) {
    const arc = state.arcs[index];
    arc.life -= deltaSeconds;
    if (arc.life <= 0) {
      state.arcs.splice(index, 1);
      continue;
    }
    const alpha = arc.life / arc.maxLife;
    ctx.save();
    ctx.globalCompositeOperation = "source-over";
    ctx.shadowColor = arc.color || "#ffffff";
    ctx.shadowBlur = 14;
    ctx.beginPath();
    ctx.strokeStyle = arc.color || "#ffffff";
    ctx.globalAlpha = Math.min(1, alpha * 1.6);
    ctx.lineWidth = (arc.width || 2.5) * 1.6;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    arc.points.forEach((point, pointIndex) => {
      const driftX = (Math.random() - 0.5) * 12 * alpha;
      const driftY = (Math.random() - 0.5) * 12 * alpha;
      if (pointIndex === 0) {
        ctx.moveTo(point.x + driftX, point.y + driftY);
      } else {
        ctx.lineTo(point.x + driftX, point.y + driftY);
      }
    });
    ctx.stroke();
    ctx.restore();
  }

  const rect = elements.characterStack.getBoundingClientRect();
  const canvasRect = elements.canvas.getBoundingClientRect();
  const targetX = (rect.left + rect.width / 2) - canvasRect.left;
  const targetY = (rect.top + rect.height * 0.46) - canvasRect.top;

  for (let index = state.particles.length - 1; index >= 0; index -= 1) {
    const particle = state.particles[index];
    particle.life -= deltaSeconds;
    if (particle.life <= 0) {
      const removed = state.particles.splice(index, 1)[0];
      if (removed) releaseParticleToPool(removed);
      continue;
    }

    if (particle.type === "inflow") {
      const dx = targetX - particle.x;
      const dy = targetY - particle.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 15) {
        const removed = state.particles.splice(index, 1)[0];
        if (removed) releaseParticleToPool(removed);
        continue;
      }
      const speed = (280 + Math.random() * 120) * deltaSeconds;
      particle.x += (dx / dist) * speed;
      particle.y += (dy / dist) * speed;
    } else {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.986;
      particle.vy += 0.24;
    }

    const alpha = particle.life / particle.maxLife;
    ctx.fillStyle = `${particle.color}${Math.round(alpha * 255)
      .toString(16)
      .padStart(2, "0")}`;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size * alpha, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalCompositeOperation = "source-over";
}

function spawnInflowParticles(count) {
  const rect = elements.characterStack.getBoundingClientRect();
  const canvasRect = elements.canvas.getBoundingClientRect();
  const targetX = (rect.left + rect.width / 2) - canvasRect.left;
  const targetY = (rect.top + rect.height * 0.46) - canvasRect.top;
  const palette = [getForm().auraColor, getForm().accentColor, "#ffffff"];

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const dist = 240 + Math.random() * 140;
    const x = targetX + Math.cos(angle) * dist;
    const y = targetY + Math.sin(angle) * dist;

    const p = getParticleFromPool();
    p.x = x;
    p.y = y;
    p.vx = 0;
    p.vy = 0;
    p.size = 1.5 + Math.random() * 2.5;
    p.color = palette[Math.floor(Math.random() * palette.length)];
    p.life = 0.8 + Math.random() * 0.4;
    p.maxLife = 1.2;
    p.type = "inflow";
    state.particles.push(p);
  }
}

function updateVisualState(now) {
  const activePower = isCharging(now) || state.chargeAmount > 0;
  const form = getForm();
  const auraCharge = visualAuraCharge(now);
  elements.shell.classList.toggle("is-charging", activePower);
  elements.shell.classList.toggle("is-idle", !activePower && !state.transforming);

  // Guard spriteLayer.src changes so browser doesn't re-parse image texture on every frame
  const targetSpriteSrc = activePower ? form.power : form.stand;
  if (state.lastAppliedSpriteSrc !== targetSpriteSrc) {
    state.lastAppliedSpriteSrc = targetSpriteSrc;
    elements.spriteLayer.src = targetSpriteSrc;
  }

  if (elements.shell.classList.contains("is-vanishing")) {
    elements.auraLayer.style.opacity = "0";
    elements.auraLayer.style.visibility = "hidden";
  } else {
    elements.auraLayer.style.opacity = activePower ? "0.85" : "0";
    elements.auraLayer.style.visibility = activePower ? "visible" : "hidden";
  }

  if (form.aura && state.lastAppliedAuraSrc !== form.aura) {
    state.lastAppliedAuraSrc = form.aura;
    elements.auraLayer.src = form.aura;
  }

  elements.shell.style.setProperty("--charge", `${auraCharge.toFixed(3)}`);
  elements.shell.style.setProperty("--intensity", `${tapIntensity().toFixed(3)}`);
}

function animate(now) {
  const deltaSeconds = Math.min(0.04, (now - state.lastFrame) / 1000);
  state.lastFrame = now;

  const isIdle = !state.transforming && (now - state.lastTapAt > 800);

  if (isIdle && state.chargeAmount > 0) {
    state.chargeAmount = Math.max(0, state.chargeAmount - currentTarget() * deltaSeconds * 5.0);
  }

  if (isIdle && isFinalForm()) {
    state.chargeAmount = Math.max(0, state.chargeAmount - currentTarget() * deltaSeconds * 5.0);
  }

  const charging = isCharging(now);
  const ratio = chargeRatio();

  // Handle jump slam animation
  let jumpOffset = 0;
  if (state.jumpTimer > 0) {
    state.jumpElapsed += deltaSeconds;
    if (state.jumpElapsed >= state.jumpTimer) {
      // LANDED! Trigger landing slam effects
      state.jumpTimer = 0;
      state.craterActive = true;
      state.craterTimer = 2.5;
      state.landingTime = now;

      // Screen flash and heavy shake
      flashScreen(0.4);
      shakeScreen(15);

      // Low frequency sound burst for ground impact
      noiseBurst({ duration: 0.28, gain: 0.05, frequency: 110, q: 1.4 });

      // Ground shockwaves
      spawnWave({ radius: 8, grow: 460, life: 0.45, width: 5 });
      spawnWave({ radius: 24, grow: 320, life: 0.35, width: 3, color: "#ffffff" });

      // Exploding ground particles (dirt, gravel, shards)
      spawnParticles(35, {
        speedMin: 22,
        speedMax: 70,
        sizeMin: 3.5,
        sizeMax: 9,
        lifeMin: 0.45,
        lifeMax: 1.15,
        scatterX: 110,
        scatterY: 20,
        lift: 38,
        palette: ["#635144", "#4a3b30", "#8a7566", "#362a21"],
      });

      // Activate the rocks to shoot up!
      if (state.rocks && state.rocks.length > 0) {
        state.rocks.forEach((rock) => {
          rock.active = true;
          rock.opacity = 1.0;
          rock.currentY = rock.baseY;
          rock.currentRot = rock.baseRot;
          rock.velocity = -280 - Math.random() * 220;
          rock.targetRot = rock.baseRot + (Math.random() - 0.5) * 60;
        });
      }

      // Play reversed rock video once
      state.videoActive = true;
      if (state.impactVideo) {
        playLazyVideo(state.impactVideo);
      }

      // Play lightning video once (sequential sequence: video1 then video2)
      state.lightningActive = true;
      state.activeLightningVideo = state.lightningVideo1;
      state.lightningTimer = 8.0; // total budget for both videos
      if (state.lightningVideo1) {
        playLazyVideo(state.lightningVideo1);
      }
      if (state.lightningVideo2) {
        state.lightningVideo2.currentTime = 0;
        state.lightningVideo2.pause();
      }
    } else {
      const progress = state.jumpElapsed / state.jumpTimer;
      jumpOffset = -95 * Math.sin(progress * Math.PI);
    }
  }

  if (state.impactVideo) {
    if (!charging) {
      state.videoActive = false;
      if (!state.impactVideo.paused) {
        state.impactVideo.pause();
      }
    } else if (state.videoActive) {
      if (state.impactVideo.paused) {
        playLazyVideo(state.impactVideo);
      }
      if (state.impactVideo.ended || state.impactVideo.currentTime >= 5.0) {
        state.videoActive = false;
        if (!state.impactVideo.paused) {
          state.impactVideo.pause();
        }
      }
    }
  }

  // Handle crater active state
  state.craterActive = charging;

  if (!charging) {
    state.lightningActive = false;
    state.lightningTimer = 0;
    state.activeLightningVideo = null;
    if (state.lightningVideo1 && !state.lightningVideo1.paused) state.lightningVideo1.pause();
    if (state.lightningVideo2 && !state.lightningVideo2.paused) state.lightningVideo2.pause();
    if (state.baseLightningVideo && !state.baseLightningVideo.paused) state.baseLightningVideo.pause();
    if (state.beastLightningVideo && !state.beastLightningVideo.paused) state.beastLightningVideo.pause();
    if (state.ssj123LightningVideo && !state.ssj123LightningVideo.paused) state.ssj123LightningVideo.pause();
    if (state.superUltraVideo && !state.superUltraVideo.paused) state.superUltraVideo.pause();
    if (state.falseSsjVideo && !state.falseSsjVideo.paused) state.falseSsjVideo.pause();
    if (state.kaiokenVideo && !state.kaiokenVideo.paused) state.kaiokenVideo.pause();
  } else {
    const currentKey = getForm().key;
    if (currentKey === "base" || currentKey === "ssj-blue") {
      // Stop other custom videos if active
      if (state.beastLightningVideo && !state.beastLightningVideo.paused) state.beastLightningVideo.pause();
      if (state.ssj123LightningVideo && !state.ssj123LightningVideo.paused) state.ssj123LightningVideo.pause();
      if (state.superUltraVideo && !state.superUltraVideo.paused) state.superUltraVideo.pause();
      if (state.falseSsjVideo && !state.falseSsjVideo.paused) state.falseSsjVideo.pause();
      if (state.kaiokenVideo && !state.kaiokenVideo.paused) state.kaiokenVideo.pause();

      state.lightningActive = true;
      if (state.activeLightningVideo !== state.baseLightningVideo) {
        state.activeLightningVideo = state.baseLightningVideo;
        playLazyVideo(state.baseLightningVideo);
      } else if (state.baseLightningVideo && state.baseLightningVideo.paused) {
        playLazyVideo(state.baseLightningVideo);
      }
    } else if (currentKey === "beast") {
      if (state.baseLightningVideo && !state.baseLightningVideo.paused) state.baseLightningVideo.pause();
      if (state.ssj123LightningVideo && !state.ssj123LightningVideo.paused) state.ssj123LightningVideo.pause();
      if (state.superUltraVideo && !state.superUltraVideo.paused) state.superUltraVideo.pause();
      if (state.falseSsjVideo && !state.falseSsjVideo.paused) state.falseSsjVideo.pause();
      if (state.kaiokenVideo && !state.kaiokenVideo.paused) state.kaiokenVideo.pause();

      state.lightningActive = true;
      if (state.activeLightningVideo !== state.beastLightningVideo) {
        state.activeLightningVideo = state.beastLightningVideo;
        playLazyVideo(state.beastLightningVideo);
      } else if (state.beastLightningVideo && state.beastLightningVideo.paused) {
        playLazyVideo(state.beastLightningVideo);
      }
    } else if (currentKey === "ssj1" || currentKey === "ssj2" || currentKey === "ssj3") {
      if (state.baseLightningVideo && !state.baseLightningVideo.paused) state.baseLightningVideo.pause();
      if (state.beastLightningVideo && !state.beastLightningVideo.paused) state.beastLightningVideo.pause();
      if (state.superUltraVideo && !state.superUltraVideo.paused) state.superUltraVideo.pause();
      if (state.falseSsjVideo && !state.falseSsjVideo.paused) state.falseSsjVideo.pause();
      if (state.kaiokenVideo && !state.kaiokenVideo.paused) state.kaiokenVideo.pause();

      state.lightningActive = true;
      if (state.activeLightningVideo !== state.ssj123LightningVideo) {
        state.activeLightningVideo = state.ssj123LightningVideo;
        playLazyVideo(state.ssj123LightningVideo);
      } else if (state.ssj123LightningVideo && state.ssj123LightningVideo.paused) {
        playLazyVideo(state.ssj123LightningVideo);
      }
    } else if (currentKey === "ultra-instinct" || currentKey === "super-ultra-instinct" || currentKey === "ssj5") {
      if (state.baseLightningVideo && !state.baseLightningVideo.paused) state.baseLightningVideo.pause();
      if (state.beastLightningVideo && !state.beastLightningVideo.paused) state.beastLightningVideo.pause();
      if (state.ssj123LightningVideo && !state.ssj123LightningVideo.paused) state.ssj123LightningVideo.pause();
      if (state.falseSsjVideo && !state.falseSsjVideo.paused) state.falseSsjVideo.pause();
      if (state.kaiokenVideo && !state.kaiokenVideo.paused) state.kaiokenVideo.pause();

      state.lightningActive = true;
      if (state.activeLightningVideo !== state.superUltraVideo) {
        state.activeLightningVideo = state.superUltraVideo;
        playLazyVideo(state.superUltraVideo);
      } else if (state.superUltraVideo && state.superUltraVideo.paused) {
        playLazyVideo(state.superUltraVideo);
      }
    } else if (currentKey === "false-ssj") {
      if (state.baseLightningVideo && !state.baseLightningVideo.paused) state.baseLightningVideo.pause();
      if (state.beastLightningVideo && !state.beastLightningVideo.paused) state.beastLightningVideo.pause();
      if (state.ssj123LightningVideo && !state.ssj123LightningVideo.paused) state.ssj123LightningVideo.pause();
      if (state.superUltraVideo && !state.superUltraVideo.paused) state.superUltraVideo.pause();
      if (state.kaiokenVideo && !state.kaiokenVideo.paused) state.kaiokenVideo.pause();

      state.lightningActive = true;
      if (state.activeLightningVideo !== state.falseSsjVideo) {
        state.activeLightningVideo = state.falseSsjVideo;
        playLazyVideo(state.falseSsjVideo);
      } else if (state.falseSsjVideo && state.falseSsjVideo.paused) {
        playLazyVideo(state.falseSsjVideo);
      }
    } else if (currentKey === "kaioken" || currentKey === "ssj-blue-kaioken" || currentKey === "ssj-god" || currentKey === "elite" || currentKey === "ssj4") {
      if (state.baseLightningVideo && !state.baseLightningVideo.paused) state.baseLightningVideo.pause();
      if (state.beastLightningVideo && !state.beastLightningVideo.paused) state.beastLightningVideo.pause();
      if (state.ssj123LightningVideo && !state.ssj123LightningVideo.paused) state.ssj123LightningVideo.pause();
      if (state.superUltraVideo && !state.superUltraVideo.paused) state.superUltraVideo.pause();
      if (state.falseSsjVideo && !state.falseSsjVideo.paused) state.falseSsjVideo.pause();

      state.lightningActive = true;
      if (state.activeLightningVideo !== state.kaiokenVideo) {
        state.activeLightningVideo = state.kaiokenVideo;
        playLazyVideo(state.kaiokenVideo);
      } else if (state.kaiokenVideo && state.kaiokenVideo.paused) {
        playLazyVideo(state.kaiokenVideo);
      }
    } else {
      if (state.baseLightningVideo && !state.baseLightningVideo.paused) {
        state.baseLightningVideo.pause();
        if (state.activeLightningVideo === state.baseLightningVideo) {
          state.activeLightningVideo = null;
          state.lightningActive = false;
        }
      }
      if (state.beastLightningVideo && !state.beastLightningVideo.paused) {
        state.beastLightningVideo.pause();
        if (state.activeLightningVideo === state.beastLightningVideo) {
          state.activeLightningVideo = null;
          state.lightningActive = false;
        }
      }
      if (state.ssj123LightningVideo && !state.ssj123LightningVideo.paused) {
        state.ssj123LightningVideo.pause();
        if (state.activeLightningVideo === state.ssj123LightningVideo) {
          state.activeLightningVideo = null;
          state.lightningActive = false;
        }
      }
      if (state.superUltraVideo && !state.superUltraVideo.paused) {
        state.superUltraVideo.pause();
        if (state.activeLightningVideo === state.superUltraVideo) {
          state.activeLightningVideo = null;
          state.lightningActive = false;
        }
      }
      if (state.falseSsjVideo && !state.falseSsjVideo.paused) {
        state.falseSsjVideo.pause();
        if (state.activeLightningVideo === state.falseSsjVideo) {
          state.activeLightningVideo = null;
          state.lightningActive = false;
        }
      }
      if (state.kaiokenVideo && !state.kaiokenVideo.paused) {
        state.kaiokenVideo.pause();
        if (state.activeLightningVideo === state.kaiokenVideo) {
          state.activeLightningVideo = null;
          state.lightningActive = false;
        }
      }
      if (state.lightningActive && state.lightningVideo1 && state.lightningVideo2) {
        state.lightningTimer -= deltaSeconds;

        if (state.activeLightningVideo === state.lightningVideo1) {
          if (state.lightningVideo1.ended || state.lightningVideo1.currentTime >= state.lightningVideo1.duration - 0.1) {
            state.activeLightningVideo = state.lightningVideo2;
            playLazyVideo(state.lightningVideo2);
          }
        }

        const currentEnded = state.activeLightningVideo ? state.activeLightningVideo.ended : true;
        if (state.lightningTimer <= 0 || (state.activeLightningVideo === state.lightningVideo2 && currentEnded)) {
          state.lightningActive = false;
          state.activeLightningVideo = null;
          if (!state.lightningVideo1.paused) state.lightningVideo1.pause();
          if (!state.lightningVideo2.paused) state.lightningVideo2.pause();
        }
      }
    }
  }

  // Track when charging started (for Level 2 progressive ground crack)
  if (charging && !state.wasCharging) {
    state.chargeStartTime = now;
  } else if (!charging) {
    state.chargeStartTime = 0;
  }

  // ==============================================================
  //  CRATER / GROUND-CRACK OVERLAY — TAP pe background change
  //
  //  LEVEL 2:  click/tap karo → crater dikhta hai
  //            chod do       → wapas clean Namek
  //
  //  ✏️  Background image badlni ho to:
  //      Game/public/assets/backgrounds/  folder mein file daalo
  //      aur neeche wala LEVEL_2_CRATER_IMAGE path update karo.
  //
  //  LEVEL 1:  jump-slam ke baad crater dikhta hai  (level-1-crater.webp)
  //  LEVEL 3:  abhi koi crater overlay nahi hai.
  // ==============================================================

  // ← LEVEL 2: tap pe yahi image overlay hogi — path yahan badlein
  const form = getForm();
  const CLEAN_BG = {
    1: "./public/assets/backgrounds/level-1.webp",
    2: "./public/assets/backgrounds/level-2.webp",
    3: "./public/assets/backgrounds/level-3.webp"
  };
  const CRATER_BG = {
    1: "./public/assets/backgrounds/level-1-crater.webp",
    2: "./public/assets/backgrounds/level-2-crater.jpg",
    3: "./public/assets/backgrounds/level-3-crater.jpg"
  };

  const targetBgSrc = charging ? (CRATER_BG[form.level] || CLEAN_BG[form.level]) : CLEAN_BG[form.level];
  if (state.lastAppliedBgSrc !== targetBgSrc) {
    state.lastAppliedBgSrc = targetBgSrc;
    elements.background.src = targetBgSrc;
  }

  const emberChance = isLiteMode() ? (charging ? 0.2 : 0.06) : (charging ? 0.54 : 0.18);
  if (Math.random() < emberChance) {
    spawnAuraEmbers();
  }

  if (charging && Math.random() < (isLiteMode() ? 0.14 : 0.45)) {
    spawnInflowParticles(2);
  }

  if (charging && !state.wasCharging) {
    playRockLiftSound();
    noiseBurst({ duration: 0.18, gain: 0.016, frequency: 520, q: 0.8 });
  } else if (!charging && state.wasCharging && !state.transforming) {
    playRockFallSound();
    spawnParticles(24, {
      speedMin: 12,
      speedMax: 46,
      sizeMin: 2,
      sizeMax: 6,
      lifeMin: 0.24,
      lifeMax: 0.72,
      scatterX: 180,
      scatterY: 24,
      lift: 10,
      palette: ["#d8b98e", "#b18f66", "#ffffff"],
    });
  }
  state.wasCharging = charging;

  // Sprite Lift: smooth lerp to target
  const targetLift = charging ? -22 * ratio : 0;
  state.spriteLift += (targetLift - state.spriteLift) * Math.min(1, deltaSeconds * 8);
  const totalSpriteLift = state.spriteLift + jumpOffset;

  // Sprite Float: gentle hover
  const floatSpeed = charging ? 150 : 320;
  const floatAmplitude = charging ? 10 * (1 + ratio * 0.8) : 6;
  state.spriteFloat = Math.sin(now / floatSpeed) * floatAmplitude;

  // Sprite Shake (disabled per user request)
  state.spriteShakeX = 0;
  state.spriteShakeY = 0;

  // Apply custom properties to spriteLayer
  elements.spriteLayer.style.setProperty("--sprite-lift", `${totalSpriteLift}px`);
  elements.spriteLayer.style.setProperty("--sprite-float", `${state.spriteFloat}px`);
  elements.spriteLayer.style.setProperty("--sprite-shake-x", `${state.spriteShakeX}px`);
  elements.spriteLayer.style.setProperty("--sprite-shake-y", `${state.spriteShakeY}px`);

  // Aura pulse
  const auraPulse = charging ? Math.sin(now / 80) * 0.04 * ratio : 0;
  elements.auraLayer.style.setProperty("--aura-pulse", `${auraPulse}`);

  // Animate rocks (physical launch on ground smash, then vanish)
  if (state.rocks && state.rocks.length > 0) {
    state.rocks.forEach((rock) => {
      if (rock.active) {
        // Move with velocity & gravity
        rock.currentY += rock.velocity * deltaSeconds;
        rock.velocity += 650 * deltaSeconds; // gravity pull
        rock.currentRot += (rock.targetRot - rock.currentRot) * Math.min(1, deltaSeconds * 6);

        // Fade out
        rock.opacity = Math.max(0, rock.opacity - deltaSeconds * 1.6);
        if (rock.opacity <= 0) {
          rock.active = false;
        }
      } else {
        rock.opacity = 0;
      }

      rock.element.style.setProperty("--rock-y", `${rock.currentY}px`);
      rock.element.style.setProperty("--rock-r", `${rock.currentRot}deg`);
      rock.element.style.opacity = `${rock.opacity}`;
    });
  }

  const targetRatio = state.transforming ? 1 : ratio;
  state.displayedRatio += (targetRatio - state.displayedRatio) * Math.min(1, deltaSeconds * 10);
  const percent = `${(state.displayedRatio * 100).toFixed(2)}%`;
  elements.energyFill.style.width = percent;
  elements.energyGlow.style.width = percent;

  state.flashStrength = Math.max(0, state.flashStrength - deltaSeconds * 1.8);
  const targetFlashOpacity = state.flashStrength > 0.001 ? `${state.flashStrength.toFixed(3)}` : "0";
  if (elements.flash.style.opacity !== targetFlashOpacity) {
    elements.flash.style.opacity = targetFlashOpacity;
  }
  state.bloomStrength = Math.max(0, state.bloomStrength - deltaSeconds * 2.4);
  if (elements.tapBloom) {
    elements.tapBloom.style.opacity = `${Math.min(0.9, state.bloomStrength * 0.9)}`;
    elements.tapBloom.style.transform = `translateX(-50%) scale(${0.65 + state.bloomStrength * 0.85})`;
  }

  // Camera zoom / scale (fixed 1.0 to eliminate black edge exposure on high energy)
  state.shake = 0;
  elements.shell.style.transform = "none";

  updateVisualState(now);
  updateStatus(now);
  renderParticles(deltaSeconds);
  syncAudio();
  requestAnimationFrame(animate);
}

function bindEvents() {
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("orientationchange", () => setTimeout(resizeCanvas, 80));

  // Prevent default browser image drag preview behavior globally
  document.addEventListener("dragstart", (event) => {
    if (event.target.tagName === "IMG") {
      event.preventDefault();
    }
  }, { passive: false });

  let blockChipClick = false;
  let swipeStartX = 0;
  let swipeStartY = 0;
  let swipeLastX = 0;
  let swipeTracking = false;
  let swipeTriggered = false;

  const beginStripSwipe = (clientX, clientY) => {
    swipeStartX = clientX;
    swipeStartY = clientY;
    swipeLastX = clientX;
    swipeTracking = true;
    swipeTriggered = false;
  };

  const moveStripSwipe = (clientX, clientY) => {
    if (!swipeTracking) {
      return;
    }
    swipeLastX = clientX;
    const deltaX = clientX - swipeStartX;
    const deltaY = clientY - swipeStartY;
    if (swipeTriggered || Math.abs(deltaX) < 24 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }
    swipeTriggered = true;
    blockChipClick = true;
    setVisibleLevel(deltaX < 0 ? state.visibleLevel + 1 : state.visibleLevel - 1);
  };

  const endStripSwipe = (clientX, clientY) => {
    if (!swipeTracking) {
      return;
    }
    const deltaX = (swipeTriggered ? swipeLastX : clientX) - swipeStartX;
    const deltaY = clientY - swipeStartY;
    if (!swipeTriggered && Math.abs(deltaX) >= 36 && Math.abs(deltaX) > Math.abs(deltaY)) {
      blockChipClick = true;
      setVisibleLevel(deltaX < 0 ? state.visibleLevel + 1 : state.visibleLevel - 1);
    }
    swipeTracking = false;
    swipeTriggered = false;
  };

  elements.formStrip.addEventListener("click", (event) => {
    if (blockChipClick) {
      blockChipClick = false;
      return;
    }

    // Intercept clicks on the level transition arrow to switch level/character
    if (event.target.closest("#levelRightArrow")) {
      event.stopPropagation();
      event.preventDefault();
      if (state.highestUnlocked >= 5) {
        setCurrentForm(5);
      } else {
        setVisibleLevel(2);
      }
      return;
    }

    const chip = event.target.closest("[data-form-index]");
    if (!chip) {
      return;
    }
    handleManualSwitch(Number(chip.dataset.formIndex));
  });

  elements.formStrip.addEventListener("pointerdown", (event) => {
    beginStripSwipe(event.clientX, event.clientY);
  });

  elements.formStrip.addEventListener("pointermove", (event) => {
    moveStripSwipe(event.clientX, event.clientY);
  });

  elements.formStrip.addEventListener("pointerup", (event) => {
    endStripSwipe(event.clientX, event.clientY);
  });

  elements.formStrip.addEventListener("pointercancel", () => {
    swipeTracking = false;
    swipeTriggered = false;
  });

  elements.formStrip.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    if (!touch) {
      return;
    }
    beginStripSwipe(touch.clientX, touch.clientY);
  }, { passive: true });

  elements.formStrip.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    if (!touch) {
      return;
    }
    moveStripSwipe(touch.clientX, touch.clientY);
  }, { passive: true });

  elements.formStrip.addEventListener("touchend", () => {
    endStripSwipe(swipeLastX, swipeStartY);
  });

  let lastTapTime = 0;
  const handlePointerOrTouch = (event) => {
    if (event.target.closest("[data-form-index]") || event.target.closest("button") || event.target.closest(".level-left-arrow") || event.target.closest(".level-right-arrow")) {
      return;
    }

    const now = performance.now();
    if (now - lastTapTime < 40) {
      return;
    }
    lastTapTime = now;

    let clientX = 0;
    let clientY = 0;
    if (event.touches && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else if (event.changedTouches && event.changedTouches.length > 0) {
      clientX = event.changedTouches[0].clientX;
      clientY = event.changedTouches[0].clientY;
    } else {
      clientX = event.clientX || 0;
      clientY = event.clientY || 0;
    }

    handleTap(clientX, clientY);
  };

  elements.arena.addEventListener("pointerdown", handlePointerOrTouch);
  elements.arena.addEventListener("touchstart", handlePointerOrTouch, { passive: true });
  elements.tapCallout.addEventListener("pointerdown", handlePointerOrTouch);
  elements.introOverlay.addEventListener("pointerdown", handlePointerOrTouch);

  elements.arena.addEventListener("keydown", (event) => {
    if (event.repeat) {
      return;
    }
    if (event.code === "Space" || event.code === "Enter") {
      event.preventDefault();
      const rect = elements.arena.getBoundingClientRect();
      handleTap(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      for (const channels of state.audioCache.values()) {
        channels.aura.pause();
        channels.charge.pause();
      }
    } else {
      syncAudio(true);
    }
  });



  const leftArrow = document.getElementById("levelLeftArrow");
  if (leftArrow) {
    leftArrow.addEventListener("click", (e) => {
      e.stopPropagation();
      if (state.currentIndex === 5) {
        setCurrentForm(4); // Switch back to SSJ2 (last character of Level 1)
      } else if (state.currentIndex === 10) {
        setCurrentForm(9); // Switch back to Super Saiyan Elite (last character of Level 2)
      }
    });
  }

  const rightArrow = document.getElementById("levelRightArrow");
  if (rightArrow) {
    rightArrow.addEventListener("click", (e) => {
      e.stopPropagation();
      if (state.currentIndex === 4) {
        if (state.highestUnlocked >= 5) {
          setCurrentForm(5); // Switch to Level 2
        } else {
          setVisibleLevel(2);
        }
      } else if (state.currentIndex === 9) {
        if (state.highestUnlocked >= 10) {
          setCurrentForm(10); // Switch to Level 3
        } else {
          setVisibleLevel(3);
        }
      }
    });
  }
}

function initRocks() {
  const rockElements = elements.rockField.children;
  const baseLifts = [18, 28, 14, 32, 10, 28, 22];
  const baseRots = [-10, 14, -16, 4, -8, 12, -14];

  state.rocks = Array.from(rockElements).map((element, idx) => {
    element.style.opacity = "0";
    return {
      element,
      baseY: baseLifts[idx] ?? 18,
      baseRot: baseRots[idx] ?? 0,
      currentY: baseLifts[idx] ?? 18,
      currentRot: baseRots[idx] ?? 0,
      velocity: 0,
      opacity: 0,
      active: false,
    };
  });
}

function playLazyVideo(video) {
  if (!video) return;
  if (isLiteMode() && video !== state.transitionVideo) {
    return;
  }
  if (video.preload === "none") {
    video.preload = "auto";
    video.load();
  }
  video.currentTime = 0;
  video.play().catch(() => {});
}

function initVideo() {
  const createVideo = (src, loop = true) => {
    const v = document.createElement("video");
    v.src = resolveVideoSource(src);
    v.muted = true;
    v.playsInline = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    v.autoplay = false;
    v.loop = loop;
    v.preload = "auto";
    v.style.display = "none";
    v.style.visibility = "hidden";
    v.style.pointerEvents = "none";
    return v;
  };

  state.transitionVideo = createVideo("./public/assets/transformation_transition.mp4", false);
  state.impactVideo = createVideo("./public/assets/istockphoto-1144855437-640_adpp_is.mp4", false);
  state.lightningVideo1 = createVideo("./public/assets/istockphoto-1610125395-640_adpp_is.mp4", false);
  state.lightningVideo2 = createVideo("./public/assets/km_20260716_1440p_60f_20260716_135312.mp4", false);
  state.baseLightningVideo = createVideo("./public/assets/level_1_1.mp4", true);
  state.beastLightningVideo = createVideo("./public/assets/super_saiyan_beast.mp4", true);
  state.ssj123LightningVideo = createVideo("./public/assets/ssj123_lightning.mp4", true);
  state.superUltraVideo = createVideo("./public/assets/super_ultra.mp4", true);
  state.falseSsjVideo = createVideo("./public/assets/false_ssj.mp4", true);
  state.kaiokenVideo = createVideo("./public/assets/kaioken.mp4", true);

  const hiddenVideoContainer = document.createElement("div");
  hiddenVideoContainer.id = "hiddenVideoContainer";
  hiddenVideoContainer.style.position = "fixed";
  hiddenVideoContainer.style.top = "-9999px";
  hiddenVideoContainer.style.left = "-9999px";
  hiddenVideoContainer.style.width = "1px";
  hiddenVideoContainer.style.height = "1px";
  hiddenVideoContainer.style.opacity = "0";
  hiddenVideoContainer.style.pointerEvents = "none";
  hiddenVideoContainer.style.zIndex = "-9999";
  hiddenVideoContainer.style.display = "none";
  hiddenVideoContainer.style.overflow = "hidden";
  document.body.appendChild(hiddenVideoContainer);

  hiddenVideoContainer.appendChild(state.transitionVideo);
  hiddenVideoContainer.appendChild(state.impactVideo);
  hiddenVideoContainer.appendChild(state.lightningVideo1);
  hiddenVideoContainer.appendChild(state.lightningVideo2);
  hiddenVideoContainer.appendChild(state.baseLightningVideo);
  hiddenVideoContainer.appendChild(state.beastLightningVideo);
  hiddenVideoContainer.appendChild(state.ssj123LightningVideo);
  hiddenVideoContainer.appendChild(state.superUltraVideo);
  hiddenVideoContainer.appendChild(state.falseSsjVideo);
  hiddenVideoContainer.appendChild(state.kaiokenVideo);
}

function preloadAllAssets() {
  state.imageCache = {};
  const initialUrls = [
    "./public/assets/backgrounds/level-1.webp",
    "./public/assets/backgrounds/level-2.webp",
    "./public/assets/backgrounds/level-3.webp",
    "./public/assets/backgrounds/level-1-crater.webp",
    "./public/assets/backgrounds/level-2-crater.jpg",
    "./public/assets/backgrounds/level-3-crater.jpg"
  ];

  GAME_DATA.forms.forEach((form) => {
    if (form.stand) initialUrls.push(form.stand);
    if (form.power) initialUrls.push(form.power);
    if (form.aura) initialUrls.push(form.aura);
  });

  initialUrls.forEach((url) => {
    if (!state.imageCache[url]) {
      const img = new Image();
      img.src = url;
      state.imageCache[url] = img;
      if (img.decode) {
        img.decode().catch(() => {});
      }
    }
  });
}

function bootstrap() {
  applyPerformanceMode();
  preloadAllAssets();
  resizeCanvas();
  renderFormStrip();
  updateTheme();
  updateStatus();
  bindEvents();
  initRocks();
  initVideo();

  // Auto-dismiss intro overlay so character & background are 100% visible on load
  state.introDismissed = true;
  if (elements.introOverlay) {
    elements.introOverlay.classList.add("is-hidden");
    elements.introOverlay.style.display = "none";
  }

  // Fallback handlers for images to guarantee visibility
  if (elements.background) {
    elements.background.addEventListener("error", () => {
      if (!elements.background.src.endsWith("level-1.webp")) {
        elements.background.src = "./public/assets/backgrounds/level-1.webp";
      }
    });
  }
  if (elements.spriteLayer) {
    elements.spriteLayer.addEventListener("error", () => {
      if (!elements.spriteLayer.src.endsWith("base-stand.webp")) {
        elements.spriteLayer.src = "./public/assets/forms/base-stand.webp";
      }
    });
  }

  requestAnimationFrame(animate);
}

bootstrap();
