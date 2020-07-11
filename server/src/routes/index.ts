import express from 'express';
import { ApiRoutes } from './api.route';
import { ClusterRoutes } from './cluster.route';
import { LoginRoutes } from './login.route';
import { SchduleRoutes } from './schdule.route';
import { TargetRoutes } from './target.route';
import { CommonRoutes } from './common.route';

export class RestRouter {
    public apiRoute: ApiRoutes = new ApiRoutes();
    public clusterRoute: ClusterRoutes = new ClusterRoutes();
    public loginRoute: LoginRoutes = new LoginRoutes();
    public schduleRoutes: SchduleRoutes = new SchduleRoutes();
    public targetRoutes: TargetRoutes = new TargetRoutes();
    public commonRoutes: CommonRoutes = new CommonRoutes();

    routes(app: express.Application) {
        this.apiRoute.routes(app);
        this.loginRoute.routes(app);
        this.clusterRoute.routes(app);
        this.schduleRoutes.routes(app);
        this.targetRoutes.routes(app);
        this.commonRoutes.routes(app);
    }
}