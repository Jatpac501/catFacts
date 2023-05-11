let oneMore = document.querySelector('.oneMore');
let fact = document.querySelector('.fact');
oneMore.addEventListener('click', () => { 
    fact.style.padding = '0';
    fact.style.lineHeight = '0px';
    fact.style.height = '0px';
    api();
    oneMore.style.background = 'rgba(162,247,129,.8)';
    setTimeout(() => {
        oneMore.style.background = 'rgba(0,0,0,.1)';
        fact.style.height = '100%';
        fact.style.padding = '20px';
        fact.style.lineHeight = '100%';
    }, 500);
})

let cursor = document.querySelector('#cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})

let api = () => {
    fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => {
    document.querySelector('.fact').innerHTML = data.fact;
  })
  .catch(error => console.error(error));
}
api();