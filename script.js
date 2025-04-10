document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.getElementById("overlay");
  const navItems = document.querySelectorAll(".nav-links li a");

  const closeMenu = () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("no-scroll");
  };

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    hamburger.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  overlay.addEventListener("click", closeMenu);

  // ✅ Close menu when any link is clicked
  navItems.forEach(item => {
    item.addEventListener("click", closeMenu);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const text1 = "Hi, I'm ";
  const text2 = "Jeffrey Lai";

  const typedText = document.getElementById("typed-text");
  const typedName = document.getElementById("typed-name");

  let index1 = 0;
  let index2 = 0;

  function typeText1() {
    if (index1 < text1.length) {
      typedText.textContent += text1.charAt(index1);
      index1++;
      setTimeout(typeText1, 100);
    } else {
      setTimeout(typeText2, 200); // small delay before name starts
    }
  }

  function typeText2() {
    if (index2 < text2.length) {
      typedName.textContent += text2.charAt(index2);
      index2++;
      setTimeout(typeText2, 100);
    }
  }

  typeText1();
});


// Counter animation when in view
const counters = document.querySelectorAll(".count");
let counterStarted = false;

function animateCounters() {
  if (counterStarted) return;

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / 100;

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target + (target >= 100 ? "+" : "");
      }
    };

    updateCount();
  });

  counterStarted = true;
}

// Detect when .stats is visible
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.disconnect(); // run only once
    }
  });
}, { threshold: 0.4 });

observer.observe(document.querySelector(".stats"));



document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll('.skill-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a staggered delay
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150); // delay each card by 150ms steps

        observer.unobserve(entry.target); // optional: trigger once
      }
    });
  }, {
    threshold: 0.1,
  });

  skillCards.forEach(card => {
    observer.observe(card);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 200); // staggered delay
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => observer.observe(item));
});