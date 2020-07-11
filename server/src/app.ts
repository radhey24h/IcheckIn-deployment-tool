import express from 'express';
import bodyParser from 'body-parser';
import { RestRouter }from './routes/index'

class App {

    public app: express.Application;
    public router:RestRouter = new RestRouter();

    constructor() {
        this.app = express();
        this.configuration();
        this.router.routes(this.app)
    }

    private configuration(): void {
        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', "*");
            res.setHeader('Access-Control-Allow-Methods', "GET, POST, OPTIONS, PUT, DELETE");
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
            next();
        });

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;