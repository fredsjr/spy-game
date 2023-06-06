import {Actor, Engine, Vector, Sound} from "excalibur";
import {Resources} from "./resources.js";

    export class Spycrab extends Actor {
        health = 100

        engine
        updateScore;

        constructor(updateScore) {
            super({width: Resources.spyCrab.width, height: Resources.spyCrab.height});
            this.updateScore = updateScore;
        }

        onInitialize(_engine) {
            this.engine = _engine

            this.graphics.use(Resources.spyCrab.toSprite());

            this.pos = new Vector(
                Math.random() * _engine.drawWidth,
                Math.random() * _engine.drawHeight);

            this.on("pointerdown", (event) => {
                console.log("You are dead, no big suprise", event);
                this.health = this.health - 100;

                if (this.health <= 0) {
                    Resources.death.play(0.7);
                    this.kill()
                    this.updateScore("Spycrab")

                }
            });

            this.vel = new Vector(Math.random() * 400 - 200, Math.random() * 400 - 200);
            this.anchor = new Vector(0.5, 0.5);

            const sc = 0.2;
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

// for (let i = 0; i < 10; i++) {
//     const Spycrab = new Actor({
//         width: Resources.spyCrab.width,
//         height: Resources.spyCrab.height,
//     });
//     Spycrab.graphics.use(Resources.spyCrab.toSprite());

    // const x = this.halfDrawWidth
    // Spycrab.pos = new Vector(
    //     Math.random() * this.drawWidth,
    //     Math.random() * this.drawHeight

    // Spycrab.vel = new Vector(Math.random() * 80 - 40, Math.random() * 80 - 40);
    // this.anchor = new Vector(1, 0);



    // Spycrab.on("pointerdown", (dead) => {
    //     console.log('lol')
    //     Resources.death.play(0.7);
    // });
    // background.on("pointerdown", (piss) => {
    //     console.log('lol')
    //     Resources.piss.play(0.7);
    // });


    // const sc = 0.2;
    // Spycrab.scale = new Vector(sc, sc);
// }

//
// }