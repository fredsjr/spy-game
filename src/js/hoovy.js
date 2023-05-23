import {Actor, Engine, Vector, Sound} from "excalibur";
import {Resources} from "./resources.js";

export class hoovy extends Actor {
    health = 200

    constructor() {
        super({width: Resources.hoovy.width, height: Resources.hoovy.height});
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);

        this.graphics.use(Resources.hoovy.toSprite());

        this.pos = new Vector(
            Math.random() * _engine.drawWidth,
            Math.random() * _engine.drawHeight);

        this.on("pointerdown", (event) => {
            console.log("You are dead, no big suprise");
            this.health = this.health - 100;

            if (this.health <= 0) {
                Resources.heavydead.play(0.7);
                this.kill()
            }
        });

        this.vel = new Vector(Math.random() * 400 - 200, Math.random() * 400 - 200);
        this.anchor = new Vector(1, 0);

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