const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

process.on('uncaughtException', err => {
  console.error(err.name, err.message);
  process.exit(1); // Exit with failure
});

dotenv.config({ path: './config.env' });

const database = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(database, {
    // Options to deal with deprecation warnings
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connection successful!'));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
