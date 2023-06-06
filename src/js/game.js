import { Actor, Engine, Vector, Label, Color, Font, vec, FontUnit, Sound } from "excalibur";

import { Resources, ResourceLoader } from "./resources.js";
import { Spycrab } from './spycrab.js';
import { hoovy } from './hoovy.js';
import {scout} from './scout.js'
import {Fort} from "./2fort.js";
import {StartScreen} from "./startscreen.js";
import {endscreen} from "./endscreen.js";
import {timeout} from "./timeout.js";
// import {DataClass} from "./data.js";

export class Game extends Engine {

    myLabel
    heavy

    constructor() {
        super({ width: 1630, height: 830, backgroundColor: Color.Black });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        // this.dataClass = new DataClass()

        this.addScene('startscene', new StartScreen())
        this.addScene('2fort', new Fort())
        this.addScene('complete', new endscreen())
        this.addScene('timeout', new timeout())

        this.goToScene('startscene')


    }}

export const game = new Game()



    //
    //     let background = new Actor({
    //         pos: new Vector(0, 0),
    //         width: 800, height: 500,
    //         anchor: vec(0, 0)
    //     })
    //     background.graphics.use(Resources.fort.toSprite())
    //     this.add(background)
    //
    //     this.myLabel = new Label({
    //         text: 'Score: 0',
    //         pos: new Vector(100, 100),
    //         font: new Font({
    //             family: 'impact',
    //             size: 24,
    //             unit: FontUnit.Px
    //         })
    //     })
    //
    //     this.add(this.myLabel)
    //
    //     for (let i = 0; i < 10; i++){
    //         let spy = new Spycrab({
    //             pos: new Vector(
    //                 Math.random() * this.drawWidth,
    //                 Math.random() * this.drawHeight)
    //         })
    //         this.add(spy);
    //     }
    //
    //     for (let i = 0; i < 10; i++){
    //         this.heavy = new hoovy({
    //             pos: new Vector(
    //                 Math.random() * this.drawWidth,
    //                 Math.random() * this.drawHeight)
    //         })
    //         this.add(this.heavy);
    //     }
    //
    // }
    //
    // updateScore(name){
    //     if (name == "heavy"){
    //         this.score+= 2
    //     } else {
    //         this.score++
    //     }
    //     this.myLabel.text = `Score: ${this.score}`
    // }




