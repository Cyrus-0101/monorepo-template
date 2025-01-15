import logger from 'jet-logger';

import server from './server';
import Env from './common/Env';

/******************************************************************************
                                  Run
******************************************************************************/

const SERVER_START_MSG =
  'Express server started on port: ' + Env.Port.toString();

server.listen(Env.Port, () => logger.info(SERVER_START_MSG));
