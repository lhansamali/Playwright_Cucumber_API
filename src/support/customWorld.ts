import { setWorldConstructor, World } from '@cucumber/cucumber';
import { request, APIRequestContext ,APIResponse} from 'playwright';

export class CustomWorld extends World {
  requestContext!: APIRequestContext;
  response?: APIResponse;
  
  constructor(options: any) {
    super(options);
  }

  async initRequestContext() {
    if (!this.requestContext) {
      this.requestContext = await request.newContext();
    }
  }

  async dispose() {
    await this.requestContext?.dispose();
  }
}

setWorldConstructor(CustomWorld);
