const bar = document.getElementById('bar');
const bar_close = document.getElementById('bar_close');
const navbar = document.getElementById('navbar');

if(bar){
  bar.addEventListener('click', () =>{
    navbar.classList.add('active');
  })
}

if(bar_close){
  bar_close.addEventListener('click', () =>{
    navbar.classList.remove('active');
  })
}