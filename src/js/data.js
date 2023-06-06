export class DataClass {

    score = 0

    constructor() {
        this.score = 0
    }

    getScore() {
        this.score++
        return this.score
    }

    setScore(value) {
        this.score = value
    }
}