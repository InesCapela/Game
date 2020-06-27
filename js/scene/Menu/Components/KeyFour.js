export default class KeyFour extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  preload() {
    this.load.image("menu", "assets/Menu/menu.jpg");
  }

  create() {
    this.add.image(0, 0, "menu").setOrigin(0, 0);

    this.label = this.add.text(
      100,
      250,
      "Thanks for playing our Game\nWe hope you enjoyed and had fun\nOur game was inspired in 'That level again' and 'Rambo'\nAll game made by Luísa Costa and Inês Capela",
      {
        font: "20px Cambria",
        fill: "#ffffff",
      }
    );

    this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
  }

  update() {
    if (this.esc.isDown) {
      this.scene.stop();
      this.scene.start("Menu");
    }
  }
}
