export class CPU {
  freeze(): void {
    console.log("CPU freeze");
  }
  jump(position: number): void {
    console.log(`CPU jump to position: ${position}`);
  }
  execute(): void {
    console.log("CPU execute");
  }
}
