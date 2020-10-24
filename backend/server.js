import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoutes';
import productRoute from './routes/productRoutes'
import bodyParser from 'body-parser';
dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true 
}).catch(error => console.log(error.reason));
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const app = express();

app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
// app.get("/api/products/:id", (req, res) => {
//     const productId = req.params.id;
//     const product = data.products.find(x=>x._id == productId);
//     if(product)
//         res.send(product);
//     else
//         res.status(404).send({ msg: 'Product not found'});
// });

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(5000, () => { console.log('Server started at 5000') });