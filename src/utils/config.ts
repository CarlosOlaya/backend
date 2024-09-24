import logger from '@managers/logger.manager';
import { version } from '@package';

function getEnv(env: string): string | undefined {
  return Bun.env[env];
}

function getEnvRequired(env: string): string {
  const value = getEnv(env);
  if (!value) {
    logger.error(`Missing required environment variable: ${env}`);
    process.exit(1);
  }
  return value;
}

const port = Number(getEnv('PORT')) || 3000;

const config = {
  cloudinary: {
    apiKey: getEnvRequired('CLOUDINARY_API_KEY'),
    apiSecret: getEnvRequired('CLOUDINARY_API_SECRET'),
    cloudName: getEnvRequired('CLOUDINARY_CLOUD_NAME'),
  },
  jwtSecrets: {
    login: getEnvRequired('JWT_SECRET_LOGIN'),
  },
  mongodbUri: getEnvRequired('MONGODB_URI'),
  nodeEnv: getEnv('NODE_ENV') || 'development',
  port,
  productionServer: getEnv('PRODUCTION_SERVER') || `http://localhost:${port}`,
  version,
};

export default config;
