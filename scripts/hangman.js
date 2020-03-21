class Hangman {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('')
        this.guesses = guesses
        this.guessed = []
        this.status = 'playing'
    }
    get puzzle() {
        let display = ''
        this.word.forEach(letter => {
            if (this.guessed.includes(letter) || letter === ' ') {
                display += letter
            } else {
                display += '*'
            }
        })
        return display
    }
    makeGuess(guess) {
        if (this.status === 'playing') {
            guess = guess.toLowerCase()
            if (!this.guessed.includes(guess)) {
                this.guessed.push(guess)
                if (!this.word.includes(guess)) {
                    this.guesses--
                }
            }
            this.calcStatus()
        }
    }
    calcStatus() {
        // if (!this.guesses) {
        //     this.status = 'failed'
        // } else if (!this.getPuzzle().includes('*')) {
        //     this.status = 'finished'
        // }

        // const isFinished = this.word.every(letter => {
        //     return this.guessed.includes(letter)
        // })

        let isFinished = true
        this.word.forEach(letter => {
            if (!this.guessed.includes(letter) && letter !== ' ') {
                isFinished = false
            }
        })

        if (!this.guesses) {
            this.status = 'failed'
        } else if (isFinished) {
            this.status = 'finished'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guess left: ${this.guesses}`
        } else if (this.status === 'finished') {
            return `Great work! You finished the game!`
        } else if (this.status === 'failed') {
            const correctWord = this.word.join('')
            return `Nice try... the word was ${correctWord}`
        }
    }
}
