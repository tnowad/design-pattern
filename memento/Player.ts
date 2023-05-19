import { Memento } from "./Memento";

export class Player {
  level!: number;
  score!: number;
  health!: string;
  lifeline: number = 3;
  createMaker(player: Player): Memento {
    return new Memento(player.level, player.score, player.health);
  }
  restoreLevel(playerMemento: Memento) {
    this.level = playerMemento.level;
    this.score = playerMemento.score;
    this.health = playerMemento.health;
    this.lifeline = this.lifeline - 1;
  }
  displayPlayerInfo(): void {
    console.log("Level: ", this.level);
    console.log("Score: ", this.score);
    console.log("Health: ", this.health);
    console.log("Lifeline left: ", this.lifeline);
  }
}
