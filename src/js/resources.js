import { ImageSource, Sound, Resource, Loader, Color } from "excalibur";
import spyCrab from "../images/Spycrab.png";
import fort from "../images/2fort.png";
import scope from "../images/sniper_scope.png";
import music from "../sounds/french-meme-song.mp3";
import death from "../sounds/spy-death-sound.mp3";
import piss from "../sounds/piss-sniper-sound-effect.mp3"
import titleImage from "../images/game-logo.png"

const Resources = {
    spyCrab: new ImageSource(spyCrab),
    fort: new ImageSource(fort),
    scope: new ImageSource(scope),
    music: new Sound(music),
    death: new Sound(death),
    piss: new Sound(piss),
    logo: new ImageSource(titleImage)
};
const ResourceLoader = new Loader([
    Resources.spyCrab,
    Resources.fort,
    Resources.scope,
    Resources.music,
    Resources.death,
    Resources.piss,
    Resources.logo
]);
ResourceLoader.logo = titleImage
ResourceLoader.logoWidth = 900
ResourceLoader.logoHeight = 450
ResourceLoader.backgroundColor = Color.White

export { Resources, ResourceLoader };
