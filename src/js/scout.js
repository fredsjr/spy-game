import {Actor, Engine, Vector, Sound} from "excalibur";
import {Resources} from "./resources.js";
import {Spycrab} from "./spycrab.js";

export class scout extends Spycrab {

    constructor(updateScore) {
        super(updateScore); // Call the constructor of the parent class (Spycrab)
        this.vel = new Vector(Math.random() * 600 - 200, Math.random() * 600 - 200);
        this.anchor = new Vector(0.5, 0.5);


    }

    onInitialize(_engine) {
        this.graphics.use(Resources.scout.toSprite());

        this.on("pointerdown", (event) => {
            console.log("You are dead, no big suprise", event);
            this.health = this.health - 100;

            if (this.health <= 0) {
                Resources.death.play(0.7);
                this.kill();
                this.updateScore("scout");
            }
        }); // Add the missing closing parenthesis and curly brace here
    }

    onPostUpdate(Engine) {
        super.onPostUpdate(Engine);
    }
}