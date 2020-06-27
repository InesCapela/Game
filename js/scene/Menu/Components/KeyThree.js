export default class KeyThree extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  preload() {
    this.load.image("menu", "assets/Menu/menu.jpg");
  }

  create() {
    this.add.image(0, 0, "menu").setOrigin(0, 0);

    this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);

    this.label = this.add.text(
      100,
      150,
      "It's simple,\njust follow the rules\n\n 1. The doors open depending on the score\n\n 2. Move the player with the \"Arrows\"\n\n 3. Fire in space\n\nand remenber keep it simple\n\n\n Leave with ESC",
      {
        font: "20px Cambria",
        fill: "#ffffff",
      }
    );
  }

  update() {
    if (this.esc.isDown) {
      this.scene.stop();
      this.scene.start("Menu");
    }
  }
}
