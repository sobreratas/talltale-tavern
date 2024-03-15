const headerSection = document.querySelector(".header-section");

window.addEventListener("scroll", ()=> {
  let offset = window.scrollY;
  headerSection.style.backgroundPositionY = offset * 0.7 + 'px';
})

//FADE IN - LEFT
const fadeIn = document.querySelectorAll(".fade-in");

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        fadeInObserver.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

fadeIn.forEach((fade) => {
  fadeInObserver.observe(fade);
});

//FADE IN 2 - MIDDLE
const fadeIn2 = document.querySelectorAll(".fade-in-2");

const fadeIn2Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        fadeIn2Observer.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

fadeIn2.forEach((fade2) => {
  fadeIn2Observer.observe(fade2);
});

//FADE IN 3 - MIDDLE
const fadeIn3 = document.querySelectorAll(".fade-in-3");

const fadeIn3Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        fadeIn3Observer.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

fadeIn3.forEach((fade3) => {
  fadeIn3Observer.observe(fade3);
});

//MIDDLE CARD CLASS INTERSECTION OBSERVER 
const middleCards = document.querySelectorAll(".middle-card");

const middleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) middleObserver.unobserve(entry.target)
    })
},
    {
        threshold: .5,
    })

middleCards.forEach(card => {
    middleObserver.observe(card)
})

const boxes = document.querySelectorAll(".box");

const boxObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add show class when intersected
        boxObserver.unobserve(entry.target); // Stop observing once shown
      }
    });
  },
  {
    threshold: 0.5,
  }
);

boxes.forEach((box) => {
  boxObserver.observe(box);
});

//FOOTER COPYRIGHT TEXT
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();


year.innerHTML = currentYear;
