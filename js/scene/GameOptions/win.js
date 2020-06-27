export default class Win extends Phaser.Scene {
    constructor(key) {
      super(key);
    }
  
    preload() {
      this.load.image("win", "assets/Menu/win.jpg");
  
      this.one_key = this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.ONE
      );
      
    }
  
    create() {
      this.add.image(0, 0, "win").setOrigin(0, 0).setScale(0.9);
  
      this.label = this.add.text(
        100,
        100,
        "Congrats !!!!! ",
        {
          font: "30px Cambria",
          fill: "#000000",
        }
      );

      this.label = this.add.text(
        100,
        450,
        "Menu press 1 ",
        {
          font: "10px Cambria",
          fill: "#000000",
        }
      );
    }
  
    update() {
      if (this.one_key.isDown) {
        this.scene.stop();
        this.scene.start("Menu");
      }
    }
  }
  