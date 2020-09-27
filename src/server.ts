import bodyParser from 'body-parser';
import express from 'express';
import { jwt } from './middleware/jwt';
import mongoose from 'mongoose';
import { errorHandler } from './middleware/errorHandler';
import { UserRoutes } from './routes/userRoute';
import errorMiddleware from './middleware/errorMiddleware';

class App {
    public app: express.Application;
    public _userRoutes: UserRoutes = new UserRoutes();
    private mongoUrl: string;
    private PORT = process.env.PORT || 8080;

    /**
     *
     */
    constructor() {
        this.mongoUrl = "mongodb://localhost:27017/nodeBoilerplate";
        this.app = express();

        // global error handler
        
        this.config();

        this.configRoutes();
        this.mongoSetup();
        // this.app.use(errorHandler);
        this.app.use(errorMiddleware);
        this.app.listen(this.PORT, () => {
            console.log("Express server listening on port " + this.PORT);
          });
    }
    
    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.text());
        //   this.app.use(requestMiddleware);
        this.app.use(jwt);
    }

    private configRoutes(): void{
        this._userRoutes.routes(this.app);
    }
    
    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.on('open', function () {
            console.log("Connected to MongoDB");
        })
    }
}

export default new App().app;