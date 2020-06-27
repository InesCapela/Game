export default class Coin extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, "door");
  
      scene.add.existing(this);
      scene.physics.add.existing(this);
      scene.physics.world.enable(this);
      
      this.setFrame(0);
      this.setScale(0.7);
    }

  }
  