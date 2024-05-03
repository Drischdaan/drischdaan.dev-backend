import { Test, TestingModule } from '@nestjs/testing';
import { AppController, PingResponse } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return a ping response', () => {
      const expected: PingResponse = { ping: 'pong' };
      expect(appController.getHello()).toEqual(expected);
    });
  });
});
