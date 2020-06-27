export default class keyOne extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  preload() {
    this.load.image("space", "assets/Menu/space.jpg");
  }

  create() {
    this.add.image(0, 0, "space").setOrigin(0, 0).setScale(1);

    this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    this.space = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    this.label = this.add.text(
      100,
      250,
      "Where am I ? ",{
        font: "30px Cambria",
        fill: "#ffffff",
      }
    );
  }

  update() {
    if (this.space.isDown) {
      this.scene.stop();
      this.scene.start("MapaPrincipal");
    } else if (this.esc.isDown) {
      this.scene.stop();
      this.scene.start("Menu");
    }
  }
}