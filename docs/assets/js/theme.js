function switchTheme(theme) {
  const checkedTheme = theme === 'dark' ? 'dark' : 'light';
  localStorage.setItem('color-theme', checkedTheme);
  if (checkedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
}

function setupThemeControl() {
  const btnLight = Array.from(document.getElementsByClassName('btn-light'));
  btnLight.forEach(element => {
    element.addEventListener('click', () => switchTheme('light'), false)
  });
  const btnDark = Array.from(document.getElementsByClassName('btn-dark'));
  btnDark.forEach(element => {
    element.addEventListener('click', () => switchTheme('dark'), false)
  });
}


const body = document.getElementsByTagName('body')[0];
body.addEventListener('load', setupThemeControl(), false);