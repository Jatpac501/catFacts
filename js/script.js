let cursor = document.querySelector('#cursor');
let oneMore = document.querySelector('.oneMore');
let fact = document.querySelector('.fact');
let load = document.querySelector('.load');
let load__circle = document.querySelector('.load__circle');
addEventListener("DOMContentLoaded", () => {
  api();
  load__circle.style.boxShadow = '0 0 15px #0f0, inset 0 0 15px #0f0';
  load.style.width = '0px';
  load.style.height = '0px';
  load.style.opacity = '0';
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
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});
let api = () => {
  fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
      fact.innerHTML = data.fact;
      oneMore.style.background = 'rgba(162,247,129,.8)';
      setTimeout(() => {
        oneMore.style.background = 'rgba(0,0,0,.1)';
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
addEventListener("keydown", (e) => { 
  if (e.code === 'KeyD') {
    document.querySelector('body').classList.toggle('light');
  }
});
