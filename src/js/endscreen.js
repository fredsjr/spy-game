import { Actor, Engine, Vector, Label, Color, Font, vec, FontUnit, Sound, Scene, Loader } from "excalibur";
import { Resources } from "./resources.js";
import { Leaderboard } from "./leaderboard.js";

export class endscreen extends Scene {
    scoreLabel;
    score;

    constructor() {
        super({ width: 1630, height: 830, backgroundColor: Color.Black });
        this.startGame();
    }

    startGame() {
        let background = new Actor({
            pos: new Vector(0, 0),
            width: 800,
            height: 500,
            scale: new Vector(3, 3),
            anchor: vec(0, 0),
        });
        background.graphics.use(Resources.soldiersmile.toSprite());
        this.add(background);

        this.scoreLabel = new Label({
            text: "well done maggot!",
            pos: new Vector(500, 500),
            font: new Font({
                family: "impact",
                color: "white",
                size: 50,
                unit: FontUnit.Px,
            }),
        });
    }

    onInitialize(_engine) {
        this.button = new Actor({
            pos: new Vector(800, 400),
            width: 200,
            height: 200,
        });

        this.button.graphics.use(Resources.start.toSprite());

        this.button.on("pointerdown", (event) => {
            // Reset the score before transitioning to the startscene
            this.score = null;
            _engine.goToScene("startscene");
        });

        this.add(this.button);

        //Add High Score label.
        this.highScoreLabel = new Label({
            pos: new Vector(50, 100),
            color: Color.White,
            font: new Font({
                size: 30,
            }),
        });
        this.add(this.highScoreLabel);

        //Add Player Name label.
        this.playerNameLabel = new Label({
            pos: new Vector(_engine.drawWidth / 2, 180),
            color: Color.White,
            font: new Font({
                size: 30,
                family: "Arial",
                textAlign: "center",
            }),
        });
        this.scoreLabel.anchor.setTo(0.5, 0.5);
        this.add(this.playerNameLabel);
    }

    onActivate(ctx) {
        const leaderboard = new Leaderboard();

        if (ctx.data) {
            // Add player to the leaderboard.
            const playerName = localStorage.getItem("playerName");
            this.currentScore = parseFloat(ctx.data.score).toFixed(2);
            leaderboard.addScore(playerName, this.currentScore);
            this.highScoreLabel.text = leaderboard.getFormattedTopScores();
            this.playerNameLabel.text = `Name: ${playerName}\n\n Score: ${this.currentScore}`;
        }
    }
}