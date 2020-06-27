import Protagonist from "../../models/Protagonist.js";
import Caixa from "../../models/Caixa.js";
export default class Nivel2 extends Phaser.Scene {
  constructor() {
    super("Nivel2");
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
      key: "nivel2"
    });

    this.game.config.width = this.map.widthInPixels;
    this.game.config.height = this.map.heightInPixels;
  
    const tileset = this.map.addTilesetImage("tiles", "tiles");
    this.map.createStaticLayer("Back", tileset, 1, 1);
    const front = this.map.createStaticLayer("Front", tileset, 1, 2);
    const kill = this.map.createStaticLayer("Kill", tileset, 1, 3);

    front.setCollisionByProperty({ colides: true }, true);
    kill.setCollisionByProperty({ kill: true }, true);

    //~~~~~~~~~~KEY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.kk= this.physics.add.image(90, 205, 'k');
    this.haskey=new Boolean(false);

    //~~~~~~~~~~~~COLOCAR AS CAIXAS NO MAPA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.caixa=new Caixa(this,400,555);
    this.caixa1=new Caixa(this,800,555);
    this.caixa3= new Caixa(this,100,205);
    this.caixa4= new Caixa(this,1200,205);
  
    //~~~~~~~~~~~~PROTAGONISTA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.protagonist = new Protagonist(this, this.protagonistX,this.protagonistY,4);
    this.protagonist.lives=this.protagonistLives;
    this.protagonist.score= this.protagonistScore;
    this.protagonist.addCameraProtagonist(this.protagonist, this.map,this.cameras.main);
    this.protagonist.addGUI(this.protagonist);// labels
    this.addInputs();

    //~~~~~~~~~~~Kill Protagonist~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    var arrayKill=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2684354721, 2684354721, 2684354701, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2684354721, 2684354721, 2684354701, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3221225633, 0, 0, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3221225613, 0, 0, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2684354701, 2684354701, 2684354701, 2684354701, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3221225613, 0, 0, 141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3221225613, 0, 0, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3221225613, 0, 0, 0, 0, 0, 0, 0, 0, 108, 109, 110, 111, 112, 113, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 75, 75, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 95, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 110, 111, 110, 111, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 131, 130, 131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2684354758, 194, 194, 194, 194, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 200, 200, 200, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 200, 200, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var newArraykill=[];

    for(var i=0; i<arrayKill.length; i++){
        if( arrayKill[i]!=0 || !newArraykill.find(element => element = arrayKill[i])){
            newArraykill.push(arrayKill[i]);
        }
    }

    for(var j=0; j<newArraykill.length; j++){
      this.map.setTileIndexCallback(newArraykill[j], this.killProtagonist, this);
    }

    //~~~~~~~COLLIDERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    this.physics.add.collider(this.protagonist, front);
    this.physics.add.collider(this.protagonist, kill);
    this.physics.add.collider(this.protagonist.bullets, front, this.destroyBullet, null, this);
    
    this.physics.add.collider(this.protagonist.bullets, this.caixa1, this.shotCaixa, null, this);
    this.physics.add.collider(this.protagonist.bullets, this.caixa,this.shotCaixa,null,this);
    this.physics.add.collider(this.protagonist.bullets,this.caixa2,this.shotCaixa,null,this);
    this.physics.add.collider(this.protagonist.bullets,this.caixa3,this.findKey,null,this);
    this.physics.add.overlap(this.protagonist, this.kk , this.checkKey , null, this);

    this.label = this.add.text(
      140,
      150,
      "Where is it ?...",
      {
        font: "20px Cambria",
        fill: "#FFFFFF",
      }
    );
  }

  update(time) {
    this.protagonist.update(this.cursors, time);
    if (this.protagonist.x >= 1220 && this.haskey==true) {
      this.scene.stop();
      this.scene.start('MapaPrincipal',{
        x : 3240, 
        y: 400,
        score :this.protagonist.score+100,
        lives : this.protagonist.lives
      });
    }
  }

  checkKey(haskey){
      this.kk.destroy();
      this.haskey=true;
  }

  addInputs() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spaceBar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.e=this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.E
    )
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

  destroyBullet(bullets){
    bullets.destroy();
  }

  shotCaixa(caixa, bullets) {
    bullets.destroy(); 
    caixa.destroy();
    this.protagonist.score+=20;
  }

  findKey(caixa, bullets) {
    bullets.destroy(); 
    caixa.destroy();
  }
}
