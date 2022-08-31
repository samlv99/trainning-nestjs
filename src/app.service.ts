import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h2>Hello World. I am machine. Very happy nodejs and update</h2>';
  }
}
