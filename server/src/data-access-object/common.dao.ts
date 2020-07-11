import { soap } from 'strong-soap';
import { Request, Response, NextFunction } from 'express';
import { DeploymentServiceSettings } from '../configuration/deployment-service-settings';
import parser from 'fast-xml-parser';
import { ParserOption } from '../utilities/parser-option';
import humps from 'lodash-humps';

export class CommonDAO {
    getServerDateTime(req: Request, res: Response, next: NextFunction) {
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetServerDateTime();
                const traversalObj = parser.getTraversalObj(result.ClusterServer, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData.ClusterServer);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    sendAppPackage(req: Request, res: Response, next: NextFunction) {
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.SendAppPackage();
                const traversalObj = parser.getTraversalObj(result.ClusterServer, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData.ClusterServer);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    getLastExecutedConfigByType(req: Request, res: Response, next: NextFunction) {
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetLastExecutedConfigByType();
                const traversalObj = parser.getTraversalObj(result.ClusterServer, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData.ClusterServer);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    getConfigToolURL(req: Request, res: Response, next: NextFunction) {
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetConfigToolURL();
                const traversalObj = parser.getTraversalObj(result.ClusterServer, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData.ClusterServer);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    executeGenericOperation(req: Request, res: Response, next: NextFunction) {
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.ExecuteGenericOperation();
                const traversalObj = parser.getTraversalObj(result.ClusterServer, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData.ClusterServer);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    getRestorePointInfo(req: Request, res: Response, next: NextFunction) {
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetRestorePointInfo();
                const traversalObj = parser.getTraversalObj(result.ClusterServer, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData.ClusterServer);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    restorePointDeploy(req: Request, res: Response, next: NextFunction) {
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.RestorePointDeploy();
                const traversalObj = parser.getTraversalObj(result.ClusterServer, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData.ClusterServer);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    getDeployAgentStatus(req: Request, res: Response, next: NextFunction) {
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetDeployAgentStatus();
                const traversalObj = parser.getTraversalObj(result.ClusterServer, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData.ClusterServer);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
}
