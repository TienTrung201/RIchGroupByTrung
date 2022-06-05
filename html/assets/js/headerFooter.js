var openNav = document.querySelector('.nav--right')
var iconBar = document.querySelector('.icon--bar')
var iconClose = document.querySelector('.iconClose')

console.log(openNav)
console.log(iconBar)
iconBar.onclick = function() {
    openNav.classList.add('nav--child--open')
}

openNav.onclick = function() {
    openNav.classList.remove('nav--child--open')
}
iconClose.onclick = function() {
    openNav.classList.remove('nav--child--open')
}
var back = document.querySelector('.nav__child')
back.addEventListener('click', function(event) {
    event.stopPropagation()
})