import { CareTaker } from "./CareTaker";
import { Player } from "./Player";

const player = new Player();
player.level = 1;
player.score = 100;
player.health = "100%";

player.displayPlayerInfo();

const careTaker = new CareTaker();
careTaker.levelMaker = player.createMaker(player);

player.level = 2;
player.score = 130;
player.health = "80%";

player.displayPlayerInfo();

player.restoreLevel(careTaker.levelMaker);

player.displayPlayerInfo();
