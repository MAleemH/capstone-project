// for mobile menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
// for speakers
const speakersCards = document.querySelector('.instructors-list');
// speakers end
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('active');
});
document.querySelectorAll('.nav-options').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('active');
}));
// mobile menu end
// for speakers
const SpeakersList = [
  {
    speakername: 'Satya Nadella',
    imagelink: 'yochai.jpg',
    desc1: 'Microsoft CEO ',
    desc2: 'Satya Nadella knows a thing or two about success in business. The technology executive reportedly earned over $16 million in pay last year',
  },
  {
    speakername: 'Bill Gates',
    imagelink: 'sohyoeng.jpg',
    desc1: 'Co-founder of Microsoft',
    desc2: 'William Henry Gates III is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft',
  },
  {
    speakername: 'Linus Torvalds',
    imagelink: 'sohyoeng.jpg',
    desc1: 'Founder of Linux',
    desc2: 'Linus Benedict Torvalds is a Finnish-American software engineer who is the creator and the lead developer of the Linux kernel. He also created the distributed version control system Git.',
  },
  {
    speakername: 'Mark Zuckerberg',
    imagelink: 'yochai.jpg',
    desc1: 'CEO of FaceBook',
    desc2: 'Mark Elliot Zuckerberg is an American business magnate, internet entrepreneur, and philanthropist. He is known for co-founding the social media website Facebook',
  },
  {
    speakername: 'Brian Chesky',
    imagelink: 'yochai.jpg',
    desc1: 'CEO of airbnb',
    desc2: 'Brian Joseph Chesky is an American businessman and industrial designer. He is the co-founder and CEO of the peer-to-peer lodging service Airbnb.',
  },
  {
    speakername: 'Sundar Pichai',
    imagelink: 'sohyoeng.jpg',
    desc1: 'CEO of Google',
    desc2: 'Pichai Sundararajan, better known as Sundar Pichai, is an Indian-American business executive..',
  },
];

for (let i = 0; i < SpeakersList.length; i += 1) {
  speakersCards.innerHTML += `
  <div class="instructor d-flex flex-row align-items-start my-2">
      <div class="p-2 mt-1">
          <img class="rounded" src="images/${SpeakersList[i].imagelink}" alt="Instructor-Image" height="110px" width="110px">
      </div>
      <div class="d-flex flex-column p-2 instructor-detail">
          <p class="flex-item-i fw-bold">${SpeakersList[i].speakername}</p>
          <p class="flex-item-ii"><i>${SpeakersList[i].desc1}</i></p>
          <p class="flex-item-iii">${SpeakersList[i].desc2}</p>
      </div>
  </div>
  `;
}
// speakers end