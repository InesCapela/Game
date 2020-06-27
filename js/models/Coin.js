export default class Coin extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "coin");

    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.physics.world.enable(this);

    this.setFrame(0);
    this.setGravityY(300);
    this.setScale(1);

    this.scene.anims.create({
      key: "spin",
      frames: this.scene.anims.generateFrameNumbers("coin", {
        start: 0,
        end: 7,
      }),
      frameRate: 25,
      repeat: -1,
    });

    this.anims.play("spin", true);
  }
  removeFromScreen() {
    this.x = -100;
    this.setVelocity(0, 0);
  }
}
