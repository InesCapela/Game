export default class Boot extends Phaser.Scene {
  constructor() {
    super("Boot");
  }
  preload() {
    // Usado na generalidade
    this.load.audio("music", "assets/gameSong.mp3");

    this.load.image("tiles", "assets/tiles.png");

    this.load.image("bullet", "assets/Bullet/bullet.png");

    this.load.audio("fire", "assets/fire-sound.mp3");

    this.load.spritesheet("protagonist", "assets/Protagonist/protagonist.png", {
      frameHeight: 64,
      frameWidth: 64,
    });

    this.load.spritesheet("enemy", "assets/Enemy/enemy.png", {
      frameHeight: 32,
      frameWidth: 32,
    });

    this.load.spritesheet("door", "assets/Door/Door.png", {
      frameHeight: 114,
      frameWidth: 78,
    });

    // Mapa principal

    this.load.image("toch","assets/Niveis/torch3.png")

    this.load.tilemapTiledJSON("map", "assets/MapaPrincipal/mapa_niveis.json");

    this.load.audio("coinSound", "assets/Coin/coinSound.mp3");

    this.load.spritesheet("coin", "assets/Coin/coin.png", {
      frameHeight: 39,
      frameWidth: 39,
    });

    // Boss
    this.load.spritesheet("enemyBoss", "assets/Enemy/enemy.png", {
      frameHeight: 32,
      frameWidth: 32,
    });

    this.load.tilemapTiledJSON("boss", "assets/Boss/mapa_boss.json");

    this.load.image("girl", "assets/Protagonist/girl.png");

    // Nível 1
    this.load.tilemapTiledJSON("nivel1", "assets/Niveis/level1.json");

    // Nível 2
    this.load.image("k","assets/chave.png");
    this.load.tilemapTiledJSON("nivel2", "assets/Niveis/level1.json");
    this.load.spritesheet("caixa", "assets/caixa.png",{
      frameHeight: 76,
      frameWidth: 114
    });
  }
  create() {
    this.scene.start("Menu");
  }
}
