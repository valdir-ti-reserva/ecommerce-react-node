import express from 'express';
import cors from 'cors';
import data from './data';

const app = express();
app.use(cors());

app.get("/api/products",(req, res) => {
  res.send(data.products);
});

app.listen(5001, () => {console.log("Server running on http://localhost:5001")});

