export default class Bullet extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y) {
    super(scene, x, y, "bullet");

    this.scene.add.existing(this);

    //enable physics to sprite
    this.scene.physics.world.enable(this);
    this.tint = "#ff0000";

    this.baseVelocity = 350;
  }

  removeFromScreen() {
    this.x = -100;
    this.setVelocity(0, 0);
  }

  fire(velocity, x, y, enemy) {
    this.scene.time.addEvent({
      callback: () => {
        this.active = false;
        this.x = -200;
        this.visible = false;
      },
      callbackScope: this,
      delay: 600,
    });

    this.setVelocityX(velocity);
    this.setPosition(x, y);
    if (enemy != null) {
      this.scene.physics.moveToObject(this, enemy, velocity);
    }
    this.active = true;
    this.visible = true;
  }

  isOutsideCanvas() {
    const width = this.scene.game.config.width;
    const height = this.scene.game.config.height;

    return this.x > width || this.y > height || this.x < 0 || this.y < 0;
  }
}