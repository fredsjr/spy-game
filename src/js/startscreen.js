import {Color, Font, Label, Scene, Vector, Actor} from 'excalibur'
import {Resources} from './resources.js'
import {Leaderboard} from './leaderboard.js'

export class StartScreen extends Scene {
    game
    playerNameInput
    startButton

    onInitialize(engine) {
        this.game = engine

        //Add Title Text
        const titleLabel = new Label({
            pos: new Vector(engine.drawWidth / 2, 100),
            text: 'tryhard simulator',
            color: Color.White,
            font: new Font({
                size: 72,
                family: 'Arial',
                textAlign: 'center'
            })
        })
        titleLabel.anchor.setTo(0.5, 0.5)
        this.add(titleLabel)

        //Create and add High Score Label.
        this.highScoreLabel = new Label({
            pos: new Vector(50, 100),
            color: Color.White,
            font: new Font({
                size: 30
            })
        })
        this.add(this.highScoreLabel)
    }

    onActivate(ctx) {
        //Get and show the leaderboard.
        const leaderboard = new Leaderboard()
        this.highScoreLabel.text = leaderboard.getFormattedTopScores()

        //Create input for Player name.
        this.playerNameInput = document.createElement('input')
        this.playerNameInput.type = 'text'
        this.playerNameInput.style.position = 'absolute'
        this.playerNameInput.style.left = `${this.game.canvas.offsetLeft + this.game.drawWidth / 2 - 100}px`
        this.playerNameInput.style.top = `${this.game.canvas.offsetTop + 500}px`
        this.playerNameInput.style.width = '200px'
        this.playerNameInput.style.height = '30px'
        this.playerNameInput.placeholder = 'Enter your name'
        this.playerNameInput.style.fontSize = '20px'
        this.playerNameInput.style.border = '2px solid white'
        this.playerNameInput.style.color = 'Black'
        this.playerNameInput.style.textAlign = 'center'
        document.body.appendChild(this.playerNameInput)
        this.playerNameInput.addEventListener('input', this.onInputTextChanged.bind(this))

        //Create Start button.
        this.startButton = new Actor({
            pos: new Vector(700, 350),
            width: Resources.start.toSprite().width,
            height: Resources.start.toSprite().height
        })
        this.startButton.graphics.use(Resources.start.toSprite())
        this.add(this.startButton)

        this.startButton.on('pointerdown', this.onStartButtonClick)
    }

    onInputTextChanged() {
        // Trim the input text to the maximum length
        if (this.playerNameInput.value.length > 10) {
            this.playerNameInput.value = this.playerNameInput.value.slice(0, 10)
        }
    }

    onStartButtonClick = () => {
        //When game start save player name into local storage.
        let playerName = this.playerNameInput.value.trim()
        if (playerName === '') {
            playerName = `Player${Math.floor(Math.random() * 10000)}`
        }

        //Store the player name in localStorage
        localStorage.setItem('playerName', playerName)

        this.game.goToScene('2fort')
    }

    onDeactivate() {
        //Remove the input element from the DOM when leaving the scene
        if (this.playerNameInput && this.playerNameInput.parentNode) {
            this.playerNameInput.parentNode.removeChild(this.playerNameInput)
        }

        //Remove the event listener for the start button
        if (this.startButton) {
            this.startButton.off('pointerup', this.onStartButtonClick)
        }
    }
}

// import {Actor, Engine, Vector, Label, Color, Font, vec, FontUnit, Sound, Scene, Loader} from "excalibur";
//
//
// import { Resources} from "./resources.js";
//
//
// export class StartScreen extends Scene{
//
//     button
//
//     constructor() {
//         super({width: Resources.start.width, height: Resources.start.height});
//
//
//     }
//
//     onInitialize(_engine) {
//         this.button = new Actor({
//             pos: new Vector(800, 400),
//             width: 200, height: 200
//         })
//
//
//         this.button.graphics.use(Resources.start.toSprite())
//
//         this.button.on('pointerdown', (event) => _engine.goToScene('2fort'))
//
//         this.add(this.button)
//     }
//
// }