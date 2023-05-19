export class Memento {
  level: number;
  score: number;
  health: string;
  constructor(level: number, score: number, health: string) {
    this.level = level;
    this.score = score;
    this.health = health;
  }
}
