import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';
import path from 'path';

import errorMiddleware from '@middlewares/error.middleware';
import authenticationRoutes from '@routes/authentication.routes';
import productsRoutes from '@routes/products.routes';
import usersRoutes from '@routes/users.routes';

const app = express();

// Configurar Content Security Policy en Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", 'https://res.cloudinary.com', 'data:'],
        scriptSrc: ["'self'"],
        // Puedes agregar más directivas según sea necesario
      },
    },
  })
);

app.use(cors());
app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/auth', authenticationRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);
app.get('*', (_req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')));

app.use(errorMiddleware);

export default app;
