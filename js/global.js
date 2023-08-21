document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});

// Change Theme Setting with a Switch
const currentTheme = localStorage.getItem('theme');
const switchElem = document.querySelector('#theme-switch');

const setTheme = (isDark) => {
  if (isDark) {
    switchElem.classList.add('is-dark');
    switchElem.querySelector('span').innerText = 'light_mode';
    switchElem.title = 'Switch to light mode';
  }
  else {
    switchElem.classList.remove('is-dark');
    switchElem.querySelector('span').innerText = 'dark_mode';
    switchElem.title = 'Switch to dark mode';
  }
}

if (switchElem) {
  // Load
  if (currentTheme) setTheme(true);
  // Change
  switchElem.addEventListener('click', e => {
    e.preventDefault();
    if (!switchElem.classList.contains('is-dark')) {
      // Dark Theme
      document.documentElement.setAttribute('theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setTheme(true);
    }
    else {
      // Light Theme
      document.documentElement.removeAttribute('theme');
      localStorage.removeItem('theme');
      setTheme(false);
    }
  });
}
