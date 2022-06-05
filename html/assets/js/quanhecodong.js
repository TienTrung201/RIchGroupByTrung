var openIcon =document.querySelector('.openRelation__icon')

var relationOpen=document.querySelector('.close.relation__content--fix')
console.log(openIcon)
openIcon.addEventListener('click',function(e){
    relationOpen.classList.toggle('close')
    console.log(1)
})

// var Continer =document.querySelector('.Continer')
// Continer.addEventListener('click',function(e){
//     if(relationOpen.className.indexOf("close")>0){
//         relationOpen.classList.add('close')
//         console.log(1)
//     }
// })
// openIcon.addEventListener('click',function(e){
//     e.stopPropagation();
// })