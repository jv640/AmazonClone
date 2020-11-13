import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import config from './config';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoutes';
import productRoute from './routes/productRoutes';
import orderRoute from './routes/orderRoutes';
// import uploadRoute from './routes/uploadRoutes';

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}).catch(error => console.log(error.reason));
mongoose.set('useFindAndModify', false);

const app = express();

app.use(bodyParser.json());
// app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);

// app.get('/api/config/paypal', (req, res) => {
//   res.send(config.PAYPAL_CLIENT_ID);
// });

// app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
// app.use(express.static(path.join(__dirname, '/../frontend/build')));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
// });

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});