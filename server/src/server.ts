import { app } from './app';
require('dotenv').config();

const port = process.env.PORT || 5000

// create server
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`)
})