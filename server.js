import express from 'express';
import { createServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

async function startServer() {
  const app = express();
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  // Integrate Vite as middleware
  const vite = await createServer({
    server: { middlewareMode: 'ssr' },
  });

  app.use(vite.middlewares);

  // Set the view engine to EJS
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

  // Serve static files
  app.use(express.static('public'));

  // Route for the homepage
  app.get('/', (req, res) => {
    res.render('index', { title: 'Vite + Express + EJS' });
  });

  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}

startServer();
