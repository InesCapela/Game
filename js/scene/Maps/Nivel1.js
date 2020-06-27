import Protagonist from "../../models/Protagonist.js";

export default class Nivel1 extends Phaser.Scene {
  constructor() {
    super("Nivel1");
  }

  init(data) {
    this.protagonistX = 132;
    this.protagonistY = 354;
    this.protagonistScore=0;
    this.protagonistLives=4;
    if (data.x && data.y) {
      this.protagonistX = data.x;
      this.protagonistY = data.y;
      this.protagonistScore = data.score;
      this.protagonistLives = data.lives;
    }
  }

  create() {
    this.map = this.make.tilemap({
      key: "nivel1",
    });

    this.game.config.width = this.map.widthInPixels;
    this.game.config.height = this.map.heightInPixels;

    const tileset = this.map.addTilesetImage("tiles", "tiles");
    this.map.createStaticLayer("Back", tileset, 1, 1);
    const front = this.map.createStaticLayer("Front", tileset, 1, 2);
    const kill = this.map.createStaticLayer("Kill", tileset, 1, 3);

    front.setCollisionByProperty({ colides: true }, true);
    kill.setCollisionByProperty({ kill: true }, true);

    //~~~~~~~~~~~~~~~~~~~KEY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.kk = this.physics.add.image(100, 205, 'k');
    this.haskey = new Boolean(false);
    //~~~~~~~~~~~~~~~~~~~Protagonista~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.protagonist = new Protagonist(this, this.protagonistX,this.protagonistY,4);
    this.protagonist.lives=this.protagonistLives;
    this.protagonist.score=this.protagonistScore;
    this.protagonist.addCameraProtagonist(this.protagonist, this.map, this.cameras.main);
    this.protagonist.addGUI(this.protagonist);
    this.physics.add.overlap(this.protagonist, this.kk, this.checkKey, null, this);

    var arrayKill = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2684354721, 2684354721, 2684354701, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2684354721, 2684354721, 2684354701, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3221225633, 0, 0, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3221225613, 0, 0, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2684354701, 2684354701, 2684354701, 2684354701, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3221225613, 0, 0, 141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3221225613, 0, 0, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3221225613, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 110, 111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 110, 111, 110, 111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2684354758, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var newArraykill = [];

    for (var i = 0; i < arrayKill.length; i++) {
      if (
        arrayKill[i] != 0 ||
        !newArraykill.find((element) => (element = arrayKill[i]))
      ) {
        newArraykill.push(arrayKill[i]);
      }
    }

    for (var j = 0; j < newArraykill.length; j++) {
      this.map.setTileIndexCallback(
        newArraykill[j],
        this.killProtagonist,
        this
      );
    }

    this.physics.add.collider(this.protagonist, front);
    this.physics.add.collider(this.protagonist, kill);
    this.physics.add.collider(
      this.protagonist.bullets,
      front,
      this.destroyBullet,
      null,
      this
    );
    this.physics.add.overlap(
      this.protagonist,
      this.level1,
      this.gol1,
      null,
      this
    );

    this.label = this.add.text(
      140,
      150,
      "Go get the key...",
      {
        font: "20px Cambria",
        fill: "#FFFFFF",
      }
    );

  }

  update(time) {

    this.pointer = this.input.activePointer;

    if (this.pointer.getDuration() < 30) {
      let x = Math.abs(this.pointer.worldX - this.protagonist.x);
      let y = Math.abs(this.pointer.worldY - this.protagonist.y);
      if (x < 150 && y < 50 ) {
        this.protagonist.x = this.pointer.worldX;
        this.protagonist.y = this.pointer.worldY;
      }
    }

    if(this.protagonist.isOutsideCanvas()){
      this.killProtagonist();
    }

    if (this.protagonist.x >= 1220 && this.haskey == true) {

      this.scene.stop();
      this.scene.start('MapaPrincipal', {
        x: 2070,
        y: 300,
        score: this.protagonist.score+100,
        lives : this.protagonist.lives
      });
    }
  }

  killProtagonist() {
    if (this.protagonist.lives - 1 == 0) {
      this.scene.stop();
      this.sound.stopAll();
      this.scene.start("GameOver");
    } else {
      this.protagonist.killed();
    }
  }

  checkKey(haskey) {
    this.kk.destroy();
    this.haskey = true;
  }
}