import { Actor, Engine, Vector, Label, Color, Font, vec, FontUnit, Sound } from "excalibur";

import { Resources, ResourceLoader } from "./resources.js";
import { Spycrab } from './spycrab.js';
import { hoovy } from './hoovy.js';

export class Game extends Engine {

    score = 0
    myLabel
    heavy

    constructor() {
        super({ width: 1630, height: 830, backgroundColor: Color.Black });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        Resources.music.play(0.7)

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
            let spy = new Spycrab({
                pos: new Vector(
                    Math.random() * this.drawWidth,
                    Math.random() * this.drawHeight)
            })
            this.add(spy);
        }

        for (let i = 0; i < 10; i++){
            this.heavy = new hoovy({
                pos: new Vector(
                    Math.random() * this.drawWidth,
                    Math.random() * this.drawHeight)
            })
            this.add(this.heavy);
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

new Game();