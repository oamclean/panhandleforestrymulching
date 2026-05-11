// Mobile nav toggle + simple form validation
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.setAttribute(
        'aria-expanded',
        links.classList.contains('open') ? 'true' : 'false'
      );
    });
  }

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
      if (status) {
        status.textContent =
          "Thanks — we received your request. We'll reach out within one business day.";
      }
      form.reset();
    });
  }
})();
