import Bullet from "./Bullet.js";

export default class Protagonist extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y,lives) {
    super(scene, x, y, "protagonist");

    this.initialX = x;
    this.initialY = y;
    this.lives = lives;
    this.score = 0;
    this.bulletsMaxsize = 5;

    this.leve1Complete= new Boolean(false);
    this.leve2Complete= new Boolean(false);

    this.bullets = this.scene.physics.add.group({
      maxSize: this.bulletsMaxsize,
      classType: Bullet,
    });

    this.timeToShoot = 0;
    this.fireRate = 250;
    this.velocity = 250;

    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.scene.physics.world.enable(this);

    this.setGravityY(400); 
    this.setFrame(1);

    this.facing = "right";
  }

  update(cursors, time) {
    if (this.body) {
      this.setVelocityX(0);
      const width = this.scene.game.config.width;
      const height = this.scene.game.config.height;

      if (cursors.right.isDown && this.x < width - this.frame.width) {
        this.setVelocityX(this.velocity);
        this.setFrame(1);
        this.facing = "right";
      } else if (cursors.left.isDown && this.x > 0 + this.frame.width) {
        this.setVelocityX(-this.velocity);
        this.setFrame(0);
        this.facing = "left";
      } else {
        this.setVelocityX(0);
      }
      // Saltar
      if (cursors.up.isDown && this.body.blocked.down) {
        this.setVelocityY(-320); // Velocidade de Salto
      }

      if (cursors.space.isDown && this.timeToShoot < time) {
        let bullet = this.bullets.getFirstDead(true, this.x, this.y);

        if (bullet) {
          let velocity = 200;
          if (this.facing === "left") {
            velocity = -velocity;
          }
          bullet.fire(velocity, this.x, this.y, null);
        }

        this.timeToShoot = time + this.fireRate;
      }

      this.bullets.children.iterate(function(bullet) {
        if (bullet.isOutsideCanvas()) {
          this.bullets.killAndHide(bullet);
        }
      }, this);
    }
  }

  killed(){
      this.lives--;
      this.x = this.initialX;
      this.y = this.initialY;
      this.scene.labelLives.setText("Lives: " + this.lives );
  }

  addCameraProtagonist(protagonist, map, main) {
    const camera = main;
    camera.startFollow(protagonist);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
  }
  

  //~~~~~~~~~~~~~~~~~~~~~~~~LABEL LIVES & Score ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  addGUI() {
    //label para mostrar as vidas do protagonista
    this.scene.labelLives = this.scene.add.text(
      10,
      10,
      "Lives: " + this.lives,
      {
        font: "30px Cambria",
        fill: "#ffffff",
      }
    );

    //label para mostrar o score do protagonista
    this.scene.labelScore = this.scene.add.text(
      500,
      10,
      "Score: " + this.score + "xp",
      {
        font: "30px Cambria",
        fill: "#ffffff",
      }
    );

    // Estas labels passam a ser dinâmicas, acompanhando o protagonista durante o jogo
    this.scene.labelLives.setScrollFactor(0);
    this.scene.labelScore.setScrollFactor(0);
  }

  isOutsideCanvas() {
    const width = this.scene.game.config.width;
    const height = this.scene.game.config.height;

    return this.x > width || this.y > height || this.x < 0 || this.y < 0;
}
}
