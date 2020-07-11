import { soap } from 'strong-soap';
import { Request, Response, NextFunction } from 'express';
import { SecurityServiceSettings } from '../configuration/security-service-settings';
import humps from 'lodash-humps';

export class LoginDAO {
    authenticate(req: Request, res: Response, next: NextFunction) {
        var args = {
            AuthenticateContractRequest: {
                UserName: req.body.userName,
                Password: req.body.password
            }
        };
        var clientOptions = {};
        soap.createClient(SecurityServiceSettings.end_points_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.Authenticate(args);
                const jsonResult = humps(result)
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err })
            }
        });
    }
}
