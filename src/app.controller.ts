import { Controller, Get } from '@nestjs/common';

type PingResponse = {
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
