import Enemy from "./Enemy.js";

export default class EnemiesGroup extends Phaser.Physics.Arcade.Group {
  constructor(world, scene) {
    super(world, scene);

    var enemiesPositions = [
      [450, 580],
      [1300, 580],
      [1487,258],
      [1741,322],
      [1759,450],
      [2100, 550],
      [2200, 550],
      [2000, 140],
      [1950, 140],
      [3800, 550],
      [3160, 550],
      [3360, 550], 
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
