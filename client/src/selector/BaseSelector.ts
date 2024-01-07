export class BaseSelector {
  message: string;
  data: any[];

  constructor(init: Partial<BaseSelector>) {
    this.message = init.message;
    this.data = init.data;
  }
}
