import express, { Application } from 'express';
import router from './components/auth/auth.route';

const app: Application = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/auth', router);

app.listen(process.env.PORT, () => {
  console.log(`Server on liste http://localhost:${process.env.PORT}`);
});

export default app;
