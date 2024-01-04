import app from './app';
import { databaseClient } from './database';

app.listen(app.get('port'), async () => {
  console.log('Server running on http://localhost:' + app.get('port') + '/');

  try {
    await databaseClient.$connect();
    console.log('Database connection has been established.');
  } catch (error) {
    console.error('Database connection could not be established.');
  }

  console.log('Application is ready to serve.');
});
