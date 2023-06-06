import {Actor, Engine, Vector, Sound} from "excalibur";
import {Resources} from "./resources.js";

export class hoovy extends Actor {
    health = 200

    engine
    updateScore;

    constructor(updateScore) {
        super({ width: Resources.hoovy.width, height: Resources.hoovy.height });
        this.updateScore = updateScore;
    }

    onInitialize(_engine) {
        this.engine = _engine

        this.graphics.use(Resources.hoovy.toSprite());

        this.pos = new Vector(
            Math.random() * _engine.drawWidth,
            Math.random() * _engine.drawHeight);

        this.on("pointerdown", (event) => {
            console.log("You are dead, no big suprise", event);
            this.health = this.health - 100;

            if (this.health <= 0) {
                Resources.heavydead.play(1.5);
                this.kill()
                this.updateScore("heavy")
            }
        });


        this.vel = new Vector(Math.random() * 400 - 200, Math.random() * 400 - 200);
        this.anchor = new Vector(0.5, 0.5);

        const sc = 0.7;
        this.scale = new Vector(sc, sc);

    }

    onPostUpdate(Engine) {
        if (this.pos.x < 0 || this.pos.x + this.width > Engine.drawWidth) {
            this.vel.x = -this.vel.x;
        }
        if (this.pos.y < 0 || this.pos.y + this.height > Engine.drawHeight) {
            this.vel.y = -this.vel.y;
        }

    }
}