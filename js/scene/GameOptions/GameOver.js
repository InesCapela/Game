export default class gameOver extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  preload() {
    this.load.image("gameOver", "assets/Menu/gameover.png");

    this.one_key = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ONE
    );

  }

  create() {
    this.add.image(0, 0, "gameOver").setOrigin(0, 0);

    this.label = this.add.text(
      100,
      100,
      "Game Over ",
      {
        font: "30px Cambria",
        fill: "#ffffff",
      }
    );

    this.label = this.add.text(
      100,
      450,
      "Restart press 1 ",
      {
        font: "10px Cambria",
        fill: "#ffffff",
      }
    );
  }

  update() {
    if (this.one_key.isDown) {
      this.scene.stop();
      this.scene.start('MapaPrincipal', {
        x: 5,
        y: 400,
        score: 0,
        lives: 4
      });

    }
  }
}
