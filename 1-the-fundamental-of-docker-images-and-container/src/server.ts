import path from 'path';
import express from 'express';
import { Config } from './@types/interfaces';

const staticPath = path.join(__dirname, '../', '/static');
const viewsPath = path.join(staticPath, '/views');

const useMiddleware = (app: express.Application) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(viewsPath));
};

const createServer = ({ port, host }: Config) => {
  const app = express();

  useMiddleware(app);

  app.get('/', (_, res) => {
    res.sendFile(`${viewsPath}/index.html`);
  });

  app.listen(port, () => {
    console.log(`Server is listening on http://${host}:${port}`);
  });
};

export default createServer;
