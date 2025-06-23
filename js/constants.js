// js/constants.js
// Centralized constants for the trivia app

// API configuration
const API_BASE_URL = 'https://opentdb.com/api.php';
const DEFAULT_QUIZ_AMOUNT = 10;
const QUIZ_TYPE = {
    MULTIPLE: 'multiple'
};
const CATEGORY_IDS = {
  anime: 31,
  gk: 9,
  science: 17
};

// UI colors
const COLORS = {
  correct: '#b0ddcd',
  incorrect: '#fbe3e3'
};

// Loader timing
const LOADER_HIDE_DELAY = 3000;

// User-facing messages
const MESSAGES = {
  submit: 'Submit',
  congratulations: 'Congratulations, your score is',
};

// Quiz settings mapping for dynamic pages
const QUIZ_SETTINGS = {
  anime: {
    categoryId: CATEGORY_IDS.anime,
    headingId: 'an',
    title: 'Anime Trivia',
    bannerSrc: './images/anime_banner.png',
    bannerAlt: 'anime image',
    creditUrl: 'https://www.freepik.com/vectors/character',
    submitBtnClass: 'btn1'
  },
  gk: {
    categoryId: CATEGORY_IDS.gk,
    headingId: 'gk',
    title: 'General Knowledge',
    bannerSrc: './images/gk_banner.png',
    bannerAlt: 'gk image',
    creditUrl: 'https://www.freepik.com/vectors/background',
    submitBtnClass: 'btn2'
  },
  science: {
    categoryId: CATEGORY_IDS.science,
    headingId: 'sc',
    title: 'Science Trivia',
    bannerSrc: './images/science_banner.png',
    bannerAlt: 'science image',
    creditUrl: 'https://www.freepik.com/vectors/education',
    submitBtnClass: 'btn3'
  }
}; 