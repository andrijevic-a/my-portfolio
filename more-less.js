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
