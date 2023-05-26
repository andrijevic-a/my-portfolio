const handleScrollAnimation = (groups, windowHeight, scrollPosition) => {
  groups.forEach(function(group) {
    const groupTop = group.offsetTop;
    const groupHeight = group.offsetHeight;

    if (scrollPosition > groupTop - windowHeight + groupHeight && scrollPosition < groupTop + groupHeight) {
      group.style.opacity = '1';
    } else {
      group.style.opacity = '0';
    }
  });
}

window.addEventListener('DOMContentLoaded', function() {
  const leftSideSection = document.querySelector('.left-side');
  const leftSideGroups = leftSideSection.querySelectorAll('.container-l');
  
  const rightSideSection = document.querySelector('.right-side');
  const rightSideGroups = rightSideSection.querySelectorAll('.container-r');

  const centerSection = document.querySelector('.about-me-section');
  const centerGroups = centerSection.querySelectorAll('.text-container');
  
  const windowHeight = window.innerHeight;

  const scrollHandler = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    handleScrollAnimation(leftSideGroups, windowHeight, scrollPosition);
    handleScrollAnimation(rightSideGroups, windowHeight, scrollPosition);
    handleScrollAnimation(centerGroups, windowHeight, scrollPosition);
  }

  window.addEventListener('scroll', scrollHandler);
  scrollHandler(); // Trigger the initial animation state
});
