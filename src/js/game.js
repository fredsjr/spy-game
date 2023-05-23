import { Actor, Engine, Vector, Label, Color, Font, vec, Sound } from "excalibur";

import { Resources, ResourceLoader } from "./resources.js";
import { Spycrab } from './spycrab.js';
import { hoovy } from './hoovy.js';

export class Game extends Engine {
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

        for (let i = 0; i < 10; i++){
            let spy = new Spycrab({
                pos: new Vector(
                    Math.random() * this.drawWidth,
                    Math.random() * this.drawHeight)
            })
            this.add(spy);
        }

        for (let i = 0; i < 10; i++){
            let heavy = new hoovy({
                pos: new Vector(
                    Math.random() * this.drawWidth,
                    Math.random() * this.drawHeight)
            })
            this.add(heavy);
        }

    }


}

new Game();