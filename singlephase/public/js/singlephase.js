


import MainScene from "./MainScene.js";
const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 640,
    parent: 'phaser-game',
    scene: [MainScene]
};
new Phaser.Game(config);