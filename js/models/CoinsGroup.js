import Coin from "./Coin.js";

export default class CoinsGroup extends Phaser.Physics.Arcade.Group {
  constructor(world, scene) {
    super(world, scene);

    var coinsPositions = [
      [200, 300],
      [380, 360],
      [795, 460],
      [1100, 550],
      [1390, 270],
      [2350, 460],
      [3290, 450],
      [4180, 490],
      [4500, 460],
    ];

    for (let i = 0; i < coinsPositions.length; i++) {
      let child = new Coin(scene, coinsPositions[i][0], coinsPositions[i][1]);            
      this.add(child);
    }
  }
}
