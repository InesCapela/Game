import Protagonist from "../../models/Protagonist.js";
import EnemiesGroupBoss from "../../models/EnemiesGroupBoss.js";
import EnemyBoss from "../../models/EnemyBoss.js";

export default class MapaBoss extends Phaser.Scene {
  constructor() {
    super("MapaBoss");
  }

  create() {
    this.map = this.make.tilemap({
      key: "boss",
    });

    this.sound.play('music', {
      volume: 0.0,
      loop: true
    });

    this.game.config.width = this.map.widthInPixels;
    this.game.config.height = this.map.heightInPixels;

    const tileset = this.map.addTilesetImage("tiles", "tiles");
    this.map.createStaticLayer("Back", tileset, 1, 1);
    const front = this.map.createStaticLayer("Front", tileset, 1, 2);

    front.setCollisionByProperty({ colides: true }, true);

    this.add.image(1800, 545, "girl").setScale(0.4);

    //-----CARREGAR TOCHAS -------------------------------
    var tochPositions = [
      [100, 350],
      [250, 350],
      [400, 350],
      [550, 350],
      [700, 350],
      [850, 350],
      [1000,350],
      [1150,350]
    ];
    for (let i = 0; i < tochPositions.length; i++) {
     this.add.image(tochPositions[i][0],tochPositions[i][1],"toch");
    }
    //~~~~~~~~~~~~PROTAGONISTA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.protagonist = new Protagonist(this, 5, 280,5);
    this.protagonist.addCameraProtagonist(
      this.protagonist,
      this.map,
      this.cameras.main
    );
    this.protagonist.addGUI(this.protagonist); // labels
    this.addInputs();
    //~~~~~~~COLLIDERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.physics.add.collider(this.protagonist, front);
    this.physics.add.collider(
      this.protagonist.bullets,
      front,
      this.destroyBullet,
      null,
      this
    );
    
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Emenies ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.enemyBoss = new EnemyBoss(this, 1650, 530);
    this.physics.add.overlap(this.protagonist.bullets,this.enemyBoss,this.shotBoss,null,this);
    this.physics.add.collider(this.enemyBoss, front);
    this.physics.add.overlap(this.enemyBoss.bullets,this.protagonist,this.killProtagonist,null,this);
    this.physics.add.collider(this.protagonist.bullets,this.enemyBoss,this.shotEnemy,null,this);

    this.enemies = new EnemiesGroupBoss(this.physics.world, this);
    this.enemies.lives=2;
    this.physics.add.collider(this.enemies, front);
    this.physics.add.overlap(
      this.enemies,
      this.protagonist,
      this.killProtagonist,
      null,
      this
    );

    this.physics.add.collider(
      this.protagonist.bullets,
      this.enemies,
      this.shotEnemy,
      null,
      this
    );

    this.enemies.getChildren().forEach((enemy) => {
      this.physics.add.collider(
        enemy.bullets,
        this.protagonist,
        this.shotProtagonist,
        null,
        this
      );

      this.physics.add.collider(
        enemy.bullets,
        front,
        this.destroyBullet,
        null,
        this
      );
    }, this);
  }

  update(time) {
    if (this.protagonist) {
      this.protagonist.update(this.cursors, time);
      this.enemiesMovementAndFire(time, this.protagonist, this.enemies);
      this.bossFireAndMovement(time, this.protagonist, this.enemyBoss);
    }
  }

  killProtagonist() {
    if(this.protagonist.lives-1==0){
      this.scene.stop();
      this.sound.stopAll();
      this.scene.start("GameOver");
    }else{
      this.protagonist.killed();
      
    }
  }
  
  enemiesMovementAndFire(time, protagonist) {
    Phaser.Actions.Call(
      this.enemies.getChildren(),
      function(enemy) {
        enemy.animationEnemy();
        if (
          Math.abs(enemy.x - this.protagonist.x) <= 200 &&
          Math.abs(enemy.y - this.protagonist.y) <= 50
        ) {
          enemy.stopMovement(protagonist.x);
          enemy.fire(time, this.protagonist);
        } else {
          enemy.movement();
        }
      },
      this
    );
  }

  bossFireAndMovement(time,protagonist){
    this.enemyBoss.animationEnemy();
    if (
      Math.abs(this.enemyBoss.x - this.protagonist.x) <= 200 &&
      Math.abs(this.enemyBoss.y - this.protagonist.y) <= 50
    ) {
      this.enemyBoss.stopMovement(protagonist.x);
      this.enemyBoss.fire(time, this.protagonist);
    } else {
      this.enemyBoss.movement();
    }
  }

  addInputs() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spaceBar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
  }

  shotEnemy(enemiesGroupBoss, bullets) {
    this.protagonist.score += 50;
    let scale = this.protagonist.scale;
    this.protagonist.setScale(scale+0.1);
    this.labelScore.setText("Score: " + this.protagonist.score + "xp");
    bullets.destroy();
    enemiesGroupBoss.lives -= 1;
    if (enemiesGroupBoss.lives == 0) {
      enemiesGroupBoss.destroy();
    }
  }

  shotBoss(enemyBoss, bullets) {
    bullets.destroy();
    if(this.enemyBoss.lives-1==0){
      this.scene.stop();
      this.sound.stopAll();
      this.scene.start("Win");
    }else{
      this.enemyBoss.killed();
      console.log(this.enemyBoss.lives);
    }
  }

  destroyBullet(bullets) {
    bullets.destroy();
  }

  shotProtagonist(protagonist, bullets) {
    bullets.destroy();
    this.protagonist.killed();
  }
  
}