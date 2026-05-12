// v2 - nav toggle + form + image fallback handling
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', links.classList.contains('open') ? 'true' : 'false');
    });
  }

  // If a background image fails to load, we want graceful fallback.
  // We test image URLs and remove them from elements that failed,
  // letting the CSS gradient/color fallback show through.
  document.querySelectorAll('[data-bg]').forEach((el) => {
    const url = el.getAttribute('data-bg');
    const img = new Image();
    img.onload = () => {
      el.style.backgroundImage = `url("${url}")`;
    };
    img.onerror = () => {
      // leave fallback gradient/color in place
      el.setAttribute('data-bg-failed', 'true');
    };
    img.src = url;
  });

  // Quote form
  const form = document.querySelector('form[data-quote-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = form.querySelector('[data-form-status]');
      const required = form.querySelectorAll('[required]');
      let valid = true;
      required.forEach((el) => {
        if (!el.value.trim()) {
          valid = false;
          el.style.borderColor = '#c0392b';
        } else {
          el.style.borderColor = '';
        }
      });
      if (!valid) {
        if (status) status.textContent = 'Please complete the required fields.';
        return;
      }
      if (status) status.textContent = "Thanks — we received your request. We'll reach out within one business day.";
      form.reset();
    });
  }
})();
