let firstCard
let secondCard
let cards = document.querySelectorAll('.card')


function chosenCard(clicked) {
    clicked.target.classList.add('selecting')
    if (firstCard === undefined) {
        firstCard = clicked.target
    } else {
        secondCard = clicked.target
        for (let i = 0; i < cards.length; i++) {
            cards[i].removeAttribute('onclick')
        }
        if (firstCard.innerHTML === secondCard.innerHTML) {
            firstCard.classList.remove('selecting')
            secondCard.classList.remove('selecting')
            firstCard.classList.add('selected')
            secondCard.classList.add('selected')
        } else {
            firstCard.classList.remove('selecting')
            secondCard.classList.remove('selecting')
        } 
        let carteRimaste = document.querySelectorAll('.card:not(.selected)')
        for (i = 0; i < carteRimaste.length; i++)
            carteRimaste[i].setAttribute('onclick', 'chosenCard(event)')
            firstCard = undefined
            secondCard = undefined
    }
}