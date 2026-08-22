const BIRTHDAY_MONTH = 4; // April (1-based)
const BIRTHDAY_DAY = 2;
const BIRTH_YEAR = 2004;
const IST_TZ = "Asia/Kolkata"; // technically-correct IANA id for Mumbai; label shown to users is "Mumbai"

const MS_SEC = 1000;
const MS_MIN = MS_SEC * 60;
const MS_HOUR = MS_MIN * 60;
const MS_DAY = MS_HOUR * 24;

function nextBirthday() {
  const now = new Date();
  const candidate = new Date(now.getFullYear(), BIRTHDAY_MONTH - 1, BIRTHDAY_DAY);
  if (candidate <= now) candidate.setFullYear(candidate.getFullYear() + 1);
  return candidate;
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function yearProgressPercent(now) {
  const start = new Date(now.getFullYear(), 0, 1);
  const end = new Date(now.getFullYear() + 1, 0, 1);
  return ((now - start) / (end - start) * 100).toFixed(1);
}

function formatConciseDate(date) {
  // "2 April 2027" style
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      utcDate: "",
      myDate: "",
      yourDate: "",
      yearProgress: 0,
      visitorTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  },

  computed: {
    target() {
      return nextBirthday();
    },
    turningAge() {
      return this.target.getFullYear() - BIRTH_YEAR;
    },
    birthdayLine() {
      return `Turning ${this.turningAge} · ${formatConciseDate(this.target)}`;
    },
    // Display-only: pads days to at least 2 digits so it also reads as
    // a clean pair of dials. Does not affect the underlying calculation.
    daysPadded() {
      return this.days.padStart(2, "0");
    },
    daysDigits() {
      return this.daysPadded.split("");
    },
    hoursDigits() {
      return this.hours.split("");
    },
    minutesDigits() {
      return this.minutes.split("");
    },
    secondsDigits() {
      return this.seconds.split("");
    },
  },

  mounted() {
    this.tick();
    this._timer = setInterval(() => this.tick(), 1000);
  },

  beforeUnmount() {
    clearInterval(this._timer);
  },

  methods: {
    tick() {
      const now = new Date();
      const distance = this.target - now;

      this.days = String(Math.floor(distance / MS_DAY));
      this.hours = pad(Math.floor((distance % MS_DAY) / MS_HOUR));
      this.minutes = pad(Math.floor((distance % MS_HOUR) / MS_MIN));
      this.seconds = pad(Math.floor((distance % MS_MIN) / MS_SEC));

      this.yearProgress = yearProgressPercent(now);

      this.utcDate = now.toLocaleString("en-US", { timeZone: "Etc/UTC" });
      this.myDate = now.toLocaleString("en-US", { timeZone: IST_TZ });
      this.yourDate = now.toLocaleString();
    },
  },
});

app.mount("#app");