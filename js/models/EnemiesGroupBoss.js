import Enemy from "./Enemy.js";

export default class EnemiesGroupBoss extends Phaser.Physics.Arcade.Group {
  constructor(world, scene) {
    super(world, scene);

    var enemiesPositions = [
    [400, 550],
    [700, 550],
    [850, 550],
    [950, 550],
    ];

    for (let i = 0; i < enemiesPositions.length; i++) {
      let child = new Enemy(
        scene,
        enemiesPositions[i][0],
        enemiesPositions[i][1]
      );
      child.active = false;
      this.add(child);
    }
  }
}
