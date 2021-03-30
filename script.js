const hamburger=document.querySelector('.menu-button')
const close_btn=document.querySelector('.close-button')
const navigation=document.querySelector('.mobile-navigation')

hamburger.addEventListener('click',()=>{
navigation.classList.add('open');
})

close_btn.addEventListener('click',()=>{
navigation.classList.remove('open')
})