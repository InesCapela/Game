export default class MenuScene extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  preload() {
    this.load.image("menu", "assets/Menu/menu.png");

    this.one_key = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ONE
    );
    this.two_key = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.TWO
    );
    this.three_key = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.THREE
    );
    this.four_key = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.FOUR
    );
  }

  create() {
    this.add.image(0, 0, "menu").setOrigin(0, 0);

    this.label = this.add.text(
      100,
      250,
      "1. Start Playing \n\n2. Levels\n\n3. How to play \n\n4. Credits ",
      {
        font: "30px Cambria",
        fill: "#ffffff",
      }
    );
  }

  update() {
    if (this.one_key.isDown) {
      this.scene.stop();
      this.scene.start("KeyOne");
    } else if (this.two_key.isDown) {
      this.scene.stop();
      this.scene.start("KeyTwo");
    } else if (this.three_key.isDown) {
      this.scene.stop();
      this.scene.start("KeyThree");
    } else if (this.four_key.isDown) {
      this.scene.stop();
      this.scene.start("KeyFour");
    }
  }
}
