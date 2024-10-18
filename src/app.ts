import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';
import path from 'path';
import axios from 'axios';  // Asegúrate de importar axios

import errorMiddleware from '@middlewares/error.middleware';
import authenticationRoutes from '@routes/authentication.routes';
import productsRoutes from '@routes/products.routes';
import usersRoutes from '@routes/users.routes';

const app = express();

// Configurar Content Security Policy en Helmet
helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", 'https://drive.google.com'],
        imgSrc: ["'self'", 'data:', 'blob:', 'https://drive.google.com'],
      },
    },
  })
  

  app.use(cors({
    origin: 'http://localhost:4200', // Cambia a tu origen de Angular
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Añadir rutas
app.use('/api/auth', authenticationRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);

app.get('/api/proxy-image', async (req, res) => {
    const imageUrl = req.query['url'] as string;
  
    if (!imageUrl) {
      console.error('URL no proporcionada');
      return res.status(400).send('URL de la imagen es requerida');
    }
  
    try {
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const contentType = response.headers['content-type'] || 'application/octet-stream';  // Valor por defecto si no se proporciona
            
      res.set('Content-Type', contentType);  // Asegura que se envíe el tipo de contenido correcto
      res.send(response.data);
    } catch (error) {
      console.error('Error al obtener la imagen desde Google Drive:', error);
      res.status(500).send('Error fetching image');
    }
  });
  
  

// Cualquier otra ruta debe cargar el archivo index.html
app.get('*', (_req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')));

// Middleware de error
app.use(errorMiddleware);

export default app;
