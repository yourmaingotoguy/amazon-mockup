import express from 'express';
import config from './config';
import mongoose from 'mongoose'
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';

import bodyParser from 'body-parser';

const mongodbURL = config.MONGODB_URL;
//Connect to MongoDB
mongoose.connect(mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});