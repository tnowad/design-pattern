import { IVideo } from "./IVideo";
import { RealVideo } from "./RealVideo";

export class ProxyVideo implements IVideo {
  private realVideo!: RealVideo;
  private filename: string;
  constructor(filename: string) {
    this.filename = filename;
  }
  display(): void {
    if (!this.realVideo) {
      this.realVideo = new RealVideo(this.filename);
    }
    this.realVideo.display();
  }
}
