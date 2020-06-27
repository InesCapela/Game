import Bullets from "./Bullet.js";

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "enemy");

     this.nextTick = 0;
     this.bullets = this.scene.physics.add.group({
      classType: Bullets,
      key: "bullet",
    });

    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.physics.world.enable(this);

    this.fminX = x - 80;
    this.fmaxX = x + 80;
    this.setGravityY(300);
    this.direction = "right";
    this.setScale(2);

  }

  movement() {
    switch (this.direction) {
      case "left":
        // Andar para a esquerda
        if (this.x > this.fminX) {
          this.setVelocityX(-45);
          this.anims.play("enemy-" + this.direction, true);
        } else {
          // Atinge o limite esquerdo, muda de direção
          this.direction = "right";
        }
        break;
      case "right":
        // Andar para a direita
        if (this.x < this.fmaxX) {
          this.setVelocityX(45);
          this.anims.play("enemy-" + this.direction, true);
        } else {
          // Atinge o limite direito, muda de direção
          this.direction = "left";
        }
        break;
    }
  }

  stopMovement(x) {
    this.setVelocityX(0);
    if (this.x > x) {
      this.direction = "left";
    } else {
      this.direction = "right";
    }
    this.anims.play("enemy-idle-" + this.direction, true);
  }

  fire(time, enemy) {
    if (time > this.nextTick) {
      var bullet = this.bullets.get();
      bullet.fire(250, this.x + 7, this.y + 5, enemy);
      var bulletFreq = 950;
      this.nextTick = time + bulletFreq;
    }
  }

  animationEnemy() {
    this.scene.anims.create({
      key: "enemy-left",
      frames: this.scene.anims.generateFrameNumbers("enemy", {
        start: 12,
        end: 14 ,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "enemy-right",
      frames: this.scene.anims.generateFrameNumbers("enemy", {
        start: 24,
        end: 26,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "enemy-idle-right",
      frames: this.scene.anims.generateFrameNumbers("enemy", {
        start: 13,
        end:13,
      }),
      frameRate: 8,
    });

    this.scene.anims.create({
      key: "enemy-idle-left",
      frames: this.scene.anims.generateFrameNumbers("enemy", {
        start: 25,
        end: 25,
      }),
      frameRate: 8,
    });
  }
}