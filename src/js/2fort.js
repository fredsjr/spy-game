import { Actor, Engine, Vector, Label, Color, Font, vec, Timer, FontUnit, Sound, Scene } from "excalibur";

import { Resources, ResourceLoader } from "./resources.js";
import { Spycrab } from './spycrab.js';
import { hoovy } from './hoovy.js';
import {scout} from './scout.js';
// import {DataClass} from "./data.js";

// import {endscreen} from "./endscreen.js";


export class Fort extends Scene {

    game
    score = 0
    timer
    time = 5
    myLabel
    timeLabel
    heavy
    scout

    constructor() {
        super({ width: 1630, height: 830, backgroundColor: Color.Black });
        // this.start(ResourceLoader).then(() => this.startGame());
        this.startGame()
    }

    onInitialize(engine) {
        this.game = engine
    }

    onPostUpdate(_engine , _delta) {
        super.onPostUpdate(_engine, _delta);
        if (this.score === 40) {
            _engine.goToScene('complete', {score: this.score})
        }
    }

    startGame() {

            let background = new Actor({
                pos: new Vector(0, 0),
                width: 800, height: 500,
                anchor: vec(0, 0)
            })
            background.graphics.use(Resources.fort.toSprite())
            this.add(background)

            this.myLabel = new Label({
                text: 'Score: 0',
                pos: new Vector(100, 100),
                font: new Font({
                    family: 'impact',
                    size: 24,
                    unit: FontUnit.Px
                })
            })

            this.add(this.myLabel)

            for (let i = 0; i < 10; i++){
                this.Spycrab = new Spycrab(this.updateScore.bind(this));
                    {
                    pos: new Vector(
                        Math.random() * this.drawWidth,
                        Math.random() * this.drawHeight)
                }
                this.add(this.Spycrab);
            }

            for (let i = 0; i < 10; i++){
                this.heavy = new hoovy(this.updateScore.bind(this));
                {
                    pos: new Vector(
                        Math.random() * this.drawWidth,
                        Math.random() * this.drawHeight)
                }
                this.add(this.heavy);
            }

        for (let i = 0; i < 10; i++){
            this.scout = new scout(this.updateScore.bind(this));
            {
                pos: new Vector(
                    Math.random() * this.drawWidth,
                    Math.random() * this.drawHeight)
            }
            this.add(this.scout);
        }

        }



    onActivate(ctx) {
        Resources.music.play(0.7)

        //Add the Time Label
        this.timeLabel = new Label({
            text: 'Time: 0.00',
            pos: new Vector(125, 125),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })
        this.add(this.timeLabel)

        //Create timer and activate it
        this.timer = new Timer({
            fcn: () => this.onTimer(),
            repeats: true,
            interval: 10,
        })
        this.add(this.timer)
        this.timer.start()
    }

    onTimer() {
        // Every 10ms the timer counts down.
        this.time -= 0.01;
        this.timeLabel.text = `Time: ${this.time.toFixed(2)}`;
        if (this.time <= 0){
            this.game.goToScene('complete', {score: this.score});
        }
    }

    updateScore(name){
            if (name == "heavy"){
                this.score+= 2
            } else {
                this.score++
            }
            this.myLabel.text = `Score: ${this.score}`
        }

    }