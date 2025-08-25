// script.js — Professional Portfolio Interactions

// 1. Mobile Navigation Toggle
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
    siteNav.setAttribute("aria-expanded", !expanded);
  });
}

// 2. Smooth Scroll for Anchor Links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href");
    if (targetId && targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

// 3. Contact Form Validation
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");
    let valid = true;

    [name, email, message].forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = "#ef4444"; // red
        valid = false;
      } else {
        input.style.borderColor = "#d1d5db";
      }
    });

    if (valid) {
      alert("✅ আপনার বার্তা পাঠানো হয়েছে ।");
      form.reset();
    } else {
      alert("⚠️ সব ঘর পূরণ করুন।");
    }
  });
}

// 4. Footer Year Auto-Update
const yearSpan = document.querySelector("#year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

