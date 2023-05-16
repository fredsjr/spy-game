import { Actor, Engine, Vector, Label, Color, Font, vec, Sound } from "excalibur";

import { Resources, ResourceLoader } from "./resources.js";

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

        for (let i = 0; i < 10; i++) {
            const Spycrab = new Actor({
                width: Resources.spyCrab.width,
                height: Resources.spyCrab.height,
            });
            Spycrab.graphics.use(Resources.spyCrab.toSprite());

            // const x = this.halfDrawWidth
            Spycrab.pos = new Vector(
                Math.random() * this.drawWidth,
                Math.random() * this.drawHeight
            );
            Spycrab.vel = new Vector(Math.random() * 50, 0);
            this.add(Spycrab);

            Spycrab.on("pointerdown", (event) => {
                console.log("You are dead, no big suprise");
                Spycrab.kill();
            });
            Spycrab.on("pointerdown", (dead) => {
                console.log('lol')
                Resources.death.play(0.7);
            });
            background.on("pointerdown", (piss) => {
                console.log('lol')
                Resources.piss.play(0.7);
            });
            this.add(Spycrab);

            const sc = 0.2;
            Spycrab.scale = new Vector(sc, sc);
        }
    }
}

new Game();