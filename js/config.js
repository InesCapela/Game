import "./phaser.min.js";

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
};
