let game

displayEle = document.querySelector('#word-display')
guessEle = document.querySelector('#guess-left')

const renderGame = () => {
    displayEle.innerHTML = ''
    guessEle.textContent = game.statusMessage

    const word = game.puzzle.split('')
    word.forEach(letter => {
        letterEle = document.createElement('span')
        letterEle.textContent = `${letter}`
        displayEle.appendChild(letterEle)        
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    renderGame()
} 

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    renderGame()
})

document.querySelector('#reset').addEventListener('click', (e) => {
    startGame()
})

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(err)
// })

// getCountry('MX').then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err)
// })
