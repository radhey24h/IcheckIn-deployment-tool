import { soap } from 'strong-soap';
import { Request, Response, NextFunction } from 'express';
import { DeploymentServiceSettings } from '../configuration/deployment-service-settings';
import parser from 'fast-xml-parser';
import { ParserOption } from '../utilities/parser-option';
import humps from 'lodash-humps';

export class TargetDAO {
    getAllTargets(req: Request, res: Response, next: NextFunction) {
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetAllTargets();
                const traversalObj = parser.getTraversalObj(result.Machine, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    getTarget(req: Request, res: Response, next: NextFunction) {
        var args = {
            GetTargetRequest: {
                Id: req.body.id
            }
        };
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetTarget(args);
                const traversalObj = parser.getTraversalObj(result.Target, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    getTargetsByMachineId(req: Request, res: Response, next: NextFunction) {
        var args = {
            GetTargetsByMachineIdRequest: {
                Id: req.body.id
            }
        };
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetTargetsByMachineId(args);
                const traversalObj = parser.getTraversalObj(result.Targets, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData);
                res.json(jsonResult.deployTargetCollection);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    getTargetsByType(req: Request, res: Response, next: NextFunction) {
        var args = {
            GetTargetsByTypeRequest: {
                Id: req.body.id
            }
        };
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetTargetsByType(args);
                const traversalObj = parser.getTraversalObj(result.Target, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    getTargetsByMachineIdAndType(req: Request, res: Response, next: NextFunction) {
        var args = {
            GetTargetsByMachineIdAndTypeRequest: {
                Id: req.body.id,
                Type: req.body.type
            }
        };
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetTargetsByMachineIdAndType(args);
                const traversalObj = parser.getTraversalObj(result.Target, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    saveTarget(req: Request, res: Response, next: NextFunction) {
        var args = {
            SaveTargetContractRequest: {
                ClusterMachine: req.body.id
            }
        };
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try{
                const { result, envelope, soapHeader } = await client.SaveTarget(args);
                res.json(result);
            }
            catch(err){
                res.status(401).send({ error: err });
            }
        });
    }
    deleteTarget(req: Request, res: Response, next: NextFunction) {
        var args = {
            SaveTargetContractRequest: {
                ClusterMachine: req.body.id
            }
        };
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try{
                const { result, envelope, soapHeader } = await client.DeleteTarget(args);
                res.json(result);
            }
            catch(err){
                res.status(401).send({ error: err });
            }
        });
    }
}
