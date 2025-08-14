function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  navLinks.classList.toggle('show');
  hamburger.classList.toggle('open');
}





// project filtering

const filterButtons = document.querySelectorAll('.button1');
const projectLinks = document.querySelectorAll('.project-link');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update button active class
    filterButtons.forEach(btn => btn.classList.remove('activebutton'));
    button.classList.add('activebutton');

    const category = button.getAttribute('data-category');

    projectLinks.forEach(link => {
      const categories = link.getAttribute('data-category').split(' '); // split tags into array

      if (category === 'all' || categories.includes(category)) {
        link.style.display = 'block';
      } else {
        link.style.display = 'none';
      }
    });
  });
});




  
// FAQ section

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.icon');

  question.addEventListener('click', () => {
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.icon').textContent = '+';
      }
    });

    const isActive = item.classList.contains('active');
    item.classList.toggle('active');
    icon.textContent = isActive ? '+' : '×';
  });
});


// animations

  AOS.init({
    duration: 800,
    offset: 100
  });


//testimnial slider

const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (nextBtn && prevBtn && carousel) {
  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 420, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -420, behavior: "smooth" });
  });
}


//button clicks

  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "15min", {origin:"https://app.cal.com"});


  Cal.ns["15min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});


  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin:"https://app.cal.com"});
  
  // Important: Please add the following attributes to the element that should trigger the calendar to open upon clicking.
  Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});







const pricingButtons = document.querySelectorAll(".pricingbutton");
const pricingCards = document.querySelectorAll(".pricing-card");

pricingButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Switch button active state
        pricingButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const target = button.getAttribute("data-target");

        // Switch card active state
        pricingCards.forEach(card => {
            card.classList.remove("active");
        });

        document.getElementById(target).classList.add("active");
    });
});


// Disable right-click
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // Disable key shortcuts
  // document.addEventListener('keydown', function (e) {
  //   // Ctrl+U
  //   if (e.ctrlKey && e.key.toLowerCase() === 'u') {
  //     e.preventDefault();
  //   }

  //   // Ctrl+Shift+I or Ctrl+Shift+J
  //   if (e.ctrlKey && e.shiftKey && (e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'j')) {
  //     e.preventDefault();
  //   }

  //   // F12
  //   if (e.key === 'F12') {
  //     e.preventDefault();
  //   }

  //   // Ctrl+Shift+C
  //   if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'c') {
  //     e.preventDefault();
  //   }
  // });