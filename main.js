const titles = document.querySelectorAll('[data-split]');
titles.forEach((title) => {
  const lines = title.querySelectorAll('span');
  lines.forEach((line) => {
    const text = line.textContent.trim();
    line.innerHTML = '';
    text.split('').forEach((char) => {
      const letter = document.createElement('span');
      letter.classList.add('letter');
      letter.textContent = char;
      line.appendChild(letter);
    });
  });
});
const masters = document.querySelector('.masters');
if (masters) {
  const fingers = document.querySelectorAll('.finger');
  const card = document.querySelector('.master-card');
  const closeBtn = document.querySelector('.card-close');
  const resetStar = document.querySelector('.reset-star');
  const cardBg = document.querySelector('.card-bg');
  const masterPhoto = document.querySelector('.master-photo');
  const masterName = document.querySelector('.master-info h2');
  const masterText = document.querySelector('.master-info p');
  let currentIndex = 0;
  let openedIndex = null;
  const mastersData = [
    {
      bg: 'images/fingerup.svg',
      photo: 'images/eltigr.png',
      name: 'ЭЛЬ ТИГР',
      text: 'ИСПАНСКИЙ МАСТЕР<br>ПО КРУПНОЙ РОСПИСИ'
    },
    {
      bg: 'images/fingerup2.svg',
      photo: 'images/leemeow.png',
      name: 'ЛИ МЯО',
      text: 'ИЗЯЩНЫЕ ЛИНИИ<br>И ИНДИВИДУАЛЬНЫЙ<br>ПОДХОД'
    },
    {
      bg: 'images/fingerup3.svg',
      photo: 'images/serrikin.svg',
      name: 'СЭР РЫКИН',
      text: 'МАСТЕР<br>ЭКСПЕРИМЕНТАЛЬНОЙ<br>РОСПИСИ'
    }
  ];

  function updateFingers() {
    fingers.forEach((finger, index) => {
      finger.classList.remove('active');

      if (index === currentIndex && openedIndex === null) {
        finger.classList.add('active');
      }
    });
  }
  function openCard(index) {
    const data = mastersData[index];
    openedIndex = index;
    cardBg.src = data.bg;
    masterPhoto.src = data.photo;
    masterName.innerHTML = data.name;
    masterText.innerHTML = data.text;
    const fingerRect = fingers[index].getBoundingClientRect();
    const mastersRect = masters.getBoundingClientRect();
    card.style.left = fingerRect.left - mastersRect.left + 'px';
    fingers[index].classList.remove('active');
    fingers[index].classList.add('is-opened');
    card.classList.add('open');
  }
  function closeCard() {
    card.classList.remove('open');
    if (openedIndex !== null) {
      fingers[openedIndex].classList.remove('is-opened');
    }
    currentIndex++;
    openedIndex = null;
    masters.classList.toggle('state-2');
    if (currentIndex < fingers.length) {
      updateFingers();
    } else {
      fingers.forEach((finger) => {
        finger.classList.remove('active');
      });
      resetStar.classList.add('visible');
    }
  }
  updateFingers();
  fingers.forEach((finger, index) => {
    finger.addEventListener('click', () => {
      if (finger.classList.contains('active')) {
        openCard(index);
      }
    });
  });
  closeBtn.addEventListener('click', closeCard);
  resetStar.addEventListener('click', () => {
    location.reload();
  });
}
const popupOverlay = document.querySelector('.popup-overlay');
const eventButtons = document.querySelectorAll('.event-btn');
const sessionButtons = document.querySelectorAll('.session-btn');
const popupClose = document.querySelector('.popup-close');
const popupForm = document.querySelector('.popup-form');

if (popupOverlay) {
  const popupTitle = document.querySelector('.event-popup h2');

  eventButtons.forEach((button) => {
    button.addEventListener('click', () => {
      popupTitle.textContent = 'ЗАПИСЬ НА EVENT';
      popupOverlay.classList.add('open');
    });
  });

  sessionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      popupTitle.textContent = 'ЗАПИСЬ НА СЕАНС';
      popupOverlay.classList.add('open');
    });
  });

  popupClose.addEventListener('click', () => {
    popupOverlay.classList.remove('open');
  });

  popupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    popupOverlay.classList.remove('open');
    popupForm.reset();
  });

  popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
      popupOverlay.classList.remove('open');
    }
  });
}

const infoPopupOverlay = document.querySelector('.info-popup-overlay');

if (infoPopupOverlay) {
  const infoOpenButtons = document.querySelectorAll('.event-open');
  const infoClose = document.querySelector('.info-popup-close');
  const infoTitle = document.querySelector('.info-popup-title');
  const infoImg = document.querySelector('.info-popup-img');
  const infoText = document.querySelector('.info-popup-text');
  const infoSignupBtn = document.querySelector('.info-popup-btn');
  const infoEvents = [
    {
      title: 'ВОРКШОПЫ ОТ ПРИЕЗЖИХ МАСТЕРОВ',
      img: 'images/popup1.svg',
      text: 'ОСОБЫЙ ВОРКШОП ПРОЙДЁТ В СТУДИИ ПОЛОСОГРАФИИ 30 ИЮНЯ. ПРИЕЗЖИЕ МАСТЕРА С РАЗНЫХ УГОЛКОВ СВЕТА ГОТОВЫ РАССКАЗАТЬ О СТИЛЯХ, В КОТОРЫХ ОНИ РАБОТАЮТ, И ИХ ОСОБЕННОСТЯХ. А В КОНЦЕ ВСЕХ ПОСЕТИТЕЛЕЙ ЖДЁТ ВОЗМОЖНОСТЬ ПОД РУКОВОДСТВОМ ОДНОГО ИЗ МАСТЕРОВ СДЕЛАТЬ НЕБОЛЬШУЮ РОСПИСЬ ТРАДИЦИОННЫМИ МАТЕРИАЛАМИ И ПОЛУЧИТЬ АВТОГРАФ МАСТЕРА.'
    },
    {
      title: 'ИСТОРИЧЕСКАЯ ЛЕКЦИЯ ДЛЯ ТИГРЯТ',
      img: 'images/popup2.png',
      text: 'ВАШ ТИГРЁНОК ВСЕ ЕЩЁ ЗАДАЁТСЯ ВОПРОСОМ, ПОЧЕМУ У ЕГО СТАРШИХ ТОВАРИЩЕЙ УЖЕ ЕСТЬ СИНИЕ ПОЛОСЫ, А У НЕГО НЕТ? ТОГДА ПРИХОДИТЕ К НАМ НА ЛЕКЦИЮ ПО ТИГРИНОЙ ИСТОРИИ 26 ИЮНЯ! МЫ РАССКАЖЕМ И ПОКАЖЕМ ТО, КАК ПОСТЕПЕННО ПОЛОСОГРАФИЯ СТАНОВИЛАСЬ НЕ ПРОСТО СПОСОБОМ ХОРОШО ПОХОТИТЬСЯ, А НАСТОЯЩИМ ТВОРЧЕСКИМ ФЕНОМЕНОМ. ЗДЕСЬ ВАШ ТИГРЁНОК УЗНАЕТ ФАКТЫ, КОТОРЫМИ СМОЖЕТ УДИВЛЯТЬ СВОИХ ДРУЗЕЙ.'
    },
    {
      title: 'МАСТЕР-КЛАСС С РЕЗИДЕНТАМИ СТУДИИ',
      img: 'images/popup3.png',
      text: '21 ИЮНЯ В СТУДИЯ ПОЛОСОГРАФИИ ПОЛОСКИ ЖДЁТ ВСЕХ НА ОСОБОЕ МЕРОПРИЯТИЕ. ПОСЕТИТЕЛИ СМОГУТ В ФОРМАТЕ ОТКРЫТОГО ВОПРОСА ПООБЩАТЬСЯ С РЕЗИДЕНТАМИ СТУДИИ, А ПОСЛЕ ОНИ ПРОВЕДУТ МАСТЕР-КЛАСС ДЛЯ ВСЕХ: ОТ ТЕХ, КТО ХОЧЕТ РАЗВИТЬ СВОИ НАВЫКИ В СФЕРЕ РОСПИСИ, ДО НОВИЧКОВ, КОТОРЫЕ ХОТЯТ ПОПРОБОВАТЬ СЕБЯ В НОВОМ ДЕЛЕ.'
    }
  ];
  infoOpenButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.event);
      const event = infoEvents[index];

      infoTitle.textContent = event.title;
      infoImg.src = event.img;
      infoText.textContent = event.text;

      infoPopupOverlay.classList.add('open');
    });
  });
  infoClose.addEventListener('click', () => {
    infoPopupOverlay.classList.remove('open');
  });
  infoSignupBtn.addEventListener('click', () => {
    infoPopupOverlay.classList.remove('open');
    if (popupOverlay) {
      document.querySelector('.event-popup h2').textContent = 'ЗАПИСЬ НА EVENT';
      popupOverlay.classList.add('open');
    }
  });
}
const burgerBtn = document.querySelector('.burger-btn');
const mobileClose = document.querySelector('.mobile-close');
const nav = document.querySelector('.nav');
if (burgerBtn && mobileClose && nav) {
  burgerBtn.addEventListener('click', () => {
    nav.classList.add('is-open');
    document.body.classList.add('menu-open');
  });
  mobileClose.addEventListener('click', () => {
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });
}