import { LoginController } from '../controllers/login.controller'
import express = require('express');

export class LoginRoutes {

    loginController: LoginController = new LoginController();

    public routes(app: express.Application): void {
        app.route('/api/authenticate').post(this.loginController.authenticate);
    }
}