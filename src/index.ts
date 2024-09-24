import app from 'app';

import connectDatabases from '@managers/connection.manager';
import logger from '@managers/logger.manager';
import config from '@utils/config';

connectDatabases();

app.listen(config.port, () => {
  const devMessage = `Server listening at http://localhost:${config.port}`;
  const prodMessage = `Server listening at port ${config.port}`;
  const message = config.nodeEnv !== 'development' ? prodMessage : devMessage;

  logger.info(message);
});
