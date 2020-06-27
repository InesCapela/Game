import config from "./config.js";
import Menu from "./scene/Menu/Menu.js";
import MapaPrincipal from "./scene/Maps/MapaPrincipal.js";
import KeyOne from "./scene/Menu/Components/KeyOne.js";
import KeyTwo from "./scene/Menu/Components/KeyTwo.js";
import KeyThree from "./scene/Menu/Components/KeyThree.js";
import KeyFour from "./scene/Menu/Components/KeyFour.js";
import Nivel1 from "./scene/Maps/Nivel1.js";
import Nivel2 from "./scene/Maps/Nivel2.js";
import BootScene from "./scene/Maps/Boot.js";
import GameOver from "./scene/GameOptions/GameOver.js";
import Win from "./scene/GameOptions/win.js";
import MapaBoss from "./scene/Maps/MapaBoss.js"

export default class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("Boot", BootScene);
    this.scene.add("Menu", Menu);
    this.scene.add("GameOver", GameOver);
    this.scene.add("Win", Win);
    this.scene.add("MapaPrincipal", MapaPrincipal);
    this.scene.add("KeyOne", KeyOne);
    this.scene.add("KeyTwo", KeyTwo);
    this.scene.add("KeyThree", KeyThree);
    this.scene.add("KeyFour", KeyFour);
    this.scene.add("Nivel1", Nivel1);
    this.scene.add("Nivel2", Nivel2);
    this.scene.add("MapaBoss", MapaBoss);
    this.scene.start("Boot");
  }
}
new Game();
