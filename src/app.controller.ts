import { Controller, Get } from '@nestjs/common';

export type PingResponse = {
  ping: 'pong';
};

@Controller()
export class AppController {
  @Get()
  getHello(): PingResponse {
    return {
      ping: 'pong',
    };
  }
}
