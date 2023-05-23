// window.addEventListener('scroll', function() {
//   const aboutMeSection = document.querySelector('.about-me-section');
//   const groups = aboutMeSection.querySelectorAll('.group');

//   const sectionTop = aboutMeSection.offsetTop;
//   const sectionHeight = aboutMeSection.offsetHeight;
//   const windowHeight = window.innerHeight;
//   const scrollPosition = window.scrollY || window.pageYOffset;

//   if (scrollPosition > sectionTop - windowHeight && scrollPosition < sectionTop + sectionHeight) {
//     groups.forEach(function(group) {
//       group.style.opacity = '1';
//     });
//   } else {
//     groups.forEach(function(group) {
//       group.style.opacity = '0';
//     });
//   }
// });


// window.addEventListener('scroll', function() {
//   const aboutMeSection = document.querySelector('.about-me-section');
//   const groups = aboutMeSection.querySelectorAll('.group');

//   const sectionTop = aboutMeSection.offsetTop;
//   const sectionHeight = aboutMeSection.offsetHeight;
//   const windowHeight = window.innerHeight;
//   const scrollPosition = window.scrollY || window.pageYOffset;

//   groups.forEach(function(group, index) {
//     const groupTop = group.offsetTop;
//     const groupHeight = group.offsetHeight;

//     if (scrollPosition > groupTop - windowHeight + groupHeight && scrollPosition < groupTop + groupHeight) {
//       group.style.opacity = '1';
//     } else {
//       group.style.opacity = '0';
//     }
//   });
// });


window.addEventListener('DOMContentLoaded', function() {
  const aboutMeSection = document.querySelector('.about-me-section');
  const groups = aboutMeSection.querySelectorAll('.group');

  const sectionTop = aboutMeSection.offsetTop;
  const sectionHeight = aboutMeSection.offsetHeight;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY || window.pageYOffset;

  groups.forEach(function(group, index) {
    const groupTop = group.offsetTop;
    const groupHeight = group.offsetHeight;

    if (scrollPosition > groupTop - windowHeight + groupHeight && scrollPosition < groupTop + groupHeight) {
      group.style.opacity = '1';
    } else {
      group.style.opacity = '0';
    }
  });
});

window.addEventListener('scroll', function() {
  const aboutMeSection = document.querySelector('.about-me-section');
  const groups = aboutMeSection.querySelectorAll('.group');

  const sectionTop = aboutMeSection.offsetTop;
  const sectionHeight = aboutMeSection.offsetHeight;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY || window.pageYOffset;

  groups.forEach(function(group, index) {
    const groupTop = group.offsetTop;
    const groupHeight = group.offsetHeight;

    if (scrollPosition > groupTop - windowHeight + groupHeight && scrollPosition < groupTop + groupHeight) {
      group.style.opacity = '1';
    } else {
      group.style.opacity = '0';
    }
  });
});
