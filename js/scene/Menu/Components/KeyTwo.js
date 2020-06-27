export default class keyTwo extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  preload() {
    this.load.image("menu", "assets/Menu/menu.jpg");
    this.load.image("door", "assets/Door/closedDoor.png");
  }

  create() {
    this.add.image(0, 0, "menu").setOrigin(0, 0);
    this.add.image(70, 265, "door").setOrigin(0, 0);
    this.add.image(260, 265, "door").setOrigin(0, 0);
    this.add.image(460, 265, "door").setOrigin(0, 0);

    this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
  }

  update() {
    if (this.esc.isDown) {
      this.scene.stop();
      this.scene.start("Menu");
    }
  }
}
