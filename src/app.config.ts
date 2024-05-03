export interface IAppConfig {
  port: number;
  frontendUrl: string;
}

type AppConfigContainer = {
  app: IAppConfig;
};

export default (): AppConfigContainer => ({
  app: {
    port: parseInt(process.env.PORT, 10) || 3000,
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:4200',
  },
});
