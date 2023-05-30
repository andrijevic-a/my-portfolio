// const handleScrollAnimation = (groups, windowHeight, scrollPosition) => {
//   groups.forEach(function (group) {
//     const groupTop = group.offsetTop;
//     const groupHeight = group.offsetHeight;

//     if (
//       scrollPosition > groupTop - windowHeight + groupHeight &&
//       scrollPosition < groupTop + groupHeight
//     ) {
//       group.style.opacity = '1';
//     } else {
//       group.style.opacity = '0';
//     }
//   });
// };

// const handleScrollAnimation = (groups, windowHeight, scrollPosition) => {
//   groups.forEach(function (group) {
//     const groupTop = group.getBoundingClientRect().top;

//     if (groupTop < windowHeight) {
//       group.style.opacity = '1';
//     } else {
//       group.style.opacity = '0';
//     }
//   });
// };

const handleScrollAnimation = (groups, windowHeight, scrollPosition) => {
  groups.forEach((group) => {
    const groupTop = group.getBoundingClientRect().top;
    const groupHeight = group.offsetHeight;
    const groupMiddle = groupTop + groupHeight / 2;

    if (groupMiddle < windowHeight) {
      group.style.opacity = '1';
    } else {
      group.style.opacity = '0';
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  const leftSideSection = document.querySelector('.left-side');
  const leftSideGroups = leftSideSection.querySelectorAll('.container-l');
  const leftSideRGroups = leftSideSection.querySelectorAll('.container-r');

  const rightSideSection = document.querySelector('.right-side');
  const rightSideGroups = rightSideSection.querySelectorAll('.container-r');

  const centerSection = document.querySelector('.about-me-section');
  const centerGroups = centerSection.querySelectorAll('.text-container');

  const windowHeight = window.innerHeight;

  const scrollHandler = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (window.innerWidth > 768) {
      handleScrollAnimation(leftSideGroups, windowHeight, scrollPosition);
      handleScrollAnimation(rightSideGroups, windowHeight, scrollPosition);
      handleScrollAnimation(centerGroups, windowHeight, scrollPosition);
    } else {
      handleScrollAnimation(leftSideGroups, windowHeight, scrollPosition);
      handleScrollAnimation(leftSideRGroups, windowHeight, scrollPosition);
      // handleScrollAnimation(centerGroups, windowHeight, scrollPosition);
    }
  };

  window.addEventListener('scroll', scrollHandler);
  scrollHandler(); // Trigger the initial animation state
});
