const cursor = document.querySelectorAll('.cursor');
const oneMore = document.querySelector('.oneMore');
const fact = document.querySelector('.fact');
const load = document.querySelector('.load');
const load__circle = document.querySelector('.load__circle');
const theme = document.querySelector('.theme');
addEventListener("DOMContentLoaded", () => {
  api();
  setTimeout( () => {
  load__circle.style.boxShadow = '0 0 15px #0f0, inset 0 0 15px #0f0';
  load.style.width = '0px';
  load.style.height = '0px';
  load.style.opacity = '0';
  }, 1000);
  setTimeout( () => {
    load.remove();
  }, 3000);
  
});
oneMore.addEventListener('click', () => { 
    fact.style.padding = '0';
    fact.style.lineHeight = '0px';
    fact.style.height = '0px';
    api();
});
document.addEventListener('mousemove', (e) => {
  for (let i = 0; i <= 5; i++) {
    cursor[i].style.top = e.pageY+ 'px';
    cursor[i].style.left = e.pageX + 'px';
  }
});
const api = () => {
  fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
      fact.innerHTML = data.fact;
      oneMore.style.background = 'rgba(162,247,129,.8)';
      setTimeout(() => {
        if (document.querySelector('body').classList.value == 'light') {
          oneMore.style.background = 'rgba(255,255,255,.9)';
        } else {
          oneMore.style.background = 'rgba(0,0,0,.1)';
        }
        fact.style.height = '100%';
        fact.style.padding = '20px';
        fact.style.lineHeight = '100%';
      }, 500);
    })
    .catch(error => {
      console.error(error);
      oneMore.style.background = 'rgba(247,129,129,.8)';
    })
}
function changeTheme() {
  document.querySelector('body').classList.toggle('light');
    if (document.querySelector('body').classList.value == 'light') {
      document.documentElement.style.setProperty('--themePrm', '#000');
      document.documentElement.style.setProperty('--themeScnd', '#fff');
      oneMore.style.background = 'rgba(255,255,255,.9)';
      theme.innerHTML = 'LIGHT THEME';
    } else {
      document.documentElement.style.setProperty('--themePrm', '#fff');
      document.documentElement.style.setProperty('--themeScnd', '#000');
      oneMore.style.background = 'rgba(0,0,0,.1)';
      theme.innerHTML = 'DARK THEME';
    }
}
theme.addEventListener('click', () => { 
    changeTheme();
  });
addEventListener("keydown", (e) => { 
  if (e.code === 'KeyD') {
    changeTheme();
  }
});