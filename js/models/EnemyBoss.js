import Bullets from "./Bullet.js";

export default class EnemyBoss extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "enemyBoss");

    this.nextTick = 0;
    this.bullets = this.scene.physics.add.group({
      classType: Bullets,
      key: "bullet",
    });

    scene.add.existing(this);
    scene.physics.add.existing(this);
    scene.physics.world.enable(this);

    this.fminX = x - 60;
    this.fmaxX = x + 60;
    this.setGravityY(300);
    this.direction = "left";
    this.setScale(3);

    this.lives=10;
  }

  movement() {
    switch (this.direction) {
      case "left":
        // Andar para a esquerda
        if (this.x > this.fminX) {
          this.setVelocityX(-45);
          this.anims.play("enemyBoss-" + this.direction, true);
        } else {
          // Atinge o limite esquerdo, muda de direção
          this.direction = "right";
        }
        break;
      case "right":
        // Andar para a direita
        if (this.x < this.fmaxX) {
          this.setVelocityX(45);
          this.anims.play("enemyBoss-" + this.direction, true);
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
    this.anims.play("enemyBoss-idle-" + this.direction, true);
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
      key: "enemyBoss-left",
      frames: this.scene.anims.generateFrameNumbers("enemyBoss", {
        start: 69,
        end: 71,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "enemyBoss-right",
      frames: this.scene.anims.generateFrameNumbers("enemyBoss", {
        start: 81,
        end: 83,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "enemyBoss-idle-right",
      frames: this.scene.anims.generateFrameNumbers("enemyBoss", {
        start: 82,
        end: 82,
      }),
      frameRate: 8,
    });

    this.scene.anims.create({
      key: "enemyBoss-idle-left",
      frames: this.scene.anims.generateFrameNumbers("enemyBoss", {
        start: 70,
        end: 70,
      }),
      frameRate: 8,
    });
  }

  killed() {
    if(this.lives-1==0){
      this.destroy();
    }else{
      this.lives--;
    }
  }
}