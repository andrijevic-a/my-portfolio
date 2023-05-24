// const moreOne = document.getElementById('more-1');
// const lessOne = document.getElementById('less-1');
// const txtOne = document.getElementById('txt-1');
// const dotsOne = document.getElementById('dots-1');

// const moreTwo = document.getElementById('more-2');
// const lessTwo = document.getElementById('less-2');
// const txtTwo = document.getElementById('txt-2');
// const dotsTwo = document.getElementById('dots-2');

// const moreThree = document.getElementById('more-3');
// const lessThree = document.getElementById('less-3');
// const txtThree = document.getElementById('txt-3');
// const dotsThree = document.getElementById('dots-3');

// const showMoreOne = () => {
//   dotsOne.style.display = 'none';
//   moreOne.style.display = 'none';
//   txtOne.style.display = 'inline';
//   lessOne.style.display = 'inline';
// }

// const showLessOne = () => {
//   dotsOne.style.display = 'inline';
//   moreOne.style.display = 'inline';
//   txtOne.style.display = 'none';
//   lessOne.style.display = 'none';
// }

// const showMoreTwo = () => {
//   dotsTwo.style.display = 'none';
//   moreTwo.style.display = 'none';
//   txtTwo.style.display = 'inline';
//   lessTwo.style.display = 'inline';
// }

// const showLessTwo = () => {
//   dotsTwo.style.display = 'inline';
//   moreTwo.style.display = 'inline';
//   txtTwo.style.display = 'none';
//   lessTwo.style.display = 'none';
// }

// const showMoreThree = () => {
//   dotsThree.style.display = 'none';
//   moreThree.style.display = 'none';
//   txtThree.style.display = 'inline';
//   lessThree.style.display = 'inline';
// }

// const showLessThree = () => {
//   dotsThree.style.display = 'inline';
//   moreThree.style.display = 'inline';
//   txtThree.style.display = 'none';
//   lessThree.style.display = 'none';
// }
// moreOne.addEventListener('click', showMoreOne);
// lessOne.addEventListener('click', showLessOne);
// moreTwo.addEventListener('click', showMoreTwo);
// lessTwo.addEventListener('click', showLessTwo);
// moreThree.addEventListener('click', showMoreThree);
// lessThree.addEventListener('click', showLessThree);

const sections = [
  {
    more: 'more-1',
    less: 'less-1',
    text: 'txt-1',
    dots: 'dots-1',
  },
  {
    more: 'more-2',
    less: 'less-2',
    text: 'txt-2',
    dots: 'dots-2',
  },
  {
    more: 'more-3',
    less: 'less-3',
    text: 'txt-3',
    dots: 'dots-3',
  },
];

const showMore = (section) => {
  section.dots.style.display = 'none';
  section.more.style.display = 'none';
  section.text.style.display = 'inline';
  section.less.style.display = 'inline';
};

const showLess = (section) => {
  section.dots.style.display = 'inline';
  section.more.style.display = 'inline';
  section.text.style.display = 'none';
  section.less.style.display = 'none';
};

sections.forEach((section) => {
  section.more = document.getElementById(section.more);
  section.less = document.getElementById(section.less);
  section.text = document.getElementById(section.text);
  section.dots = document.getElementById(section.dots);

  section.more.addEventListener('click', () => showMore(section));
  section.less.addEventListener('click', () => showLess(section));
});
