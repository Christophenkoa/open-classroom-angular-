export class PostModel {
  public title: string;
  public content: string;
  public loveIts: number;
  // tslint:disable-next-line:variable-name
  public created_at: Date;

  constructor(title: string, content: string, love: number) {
    this.title = title;
    this.content = content;
    this.loveIts = love;
    this.created_at = new Date();
  }
}
