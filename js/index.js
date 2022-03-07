let cap = document.querySelector('.main__cap');
let letter = document.querySelector('.letter');
let letterText = document.querySelector('.letterText')
let btn = document.querySelector('.btn')

cap.addEventListener('click', () => {
   cap.classList.toggle('active')
})

letter.addEventListener('click', () => {
   letterText.classList.add('active2')
   
})

btn.addEventListener('click', () => {
   letterText.classList.remove('active2')
   
})