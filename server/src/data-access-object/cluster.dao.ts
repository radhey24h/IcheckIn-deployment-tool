import { soap } from 'strong-soap';
import { Request, Response, NextFunction } from 'express';
import { DeploymentServiceSettings } from '../configuration/deployment-service-settings';
import parser from 'fast-xml-parser';
import { ParserOption } from '../utilities/parser-option';
import humps from 'lodash-humps';

export class ClusterDAO {

    getAllMachines(req: Request, res: Response, next: NextFunction) {
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetAllMachines();
                const traversalObj = parser.getTraversalObj(result.ClusterServer, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData.ClusterServer);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }

    getMachine(req: Request, res: Response, next: NextFunction) {
        var args = {
            GetMachineRequest: {
                Id: req.body.id
            }
        };
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetMachine(args);
                const traversalObj = parser.getTraversalObj(result.ClusterMachine, ParserOption);
                const jsonData = parser.convertToJson(traversalObj, ParserOption);
                const jsonResult = humps(jsonData);
                res.json(jsonResult);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }

    saveMachine(req: Request, res: Response, next: NextFunction) {
        var args = {
            SaveMachineContractRequest: {
                ClusterMachine: req.body.id
            }
        };
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try{
                const { result, envelope, soapHeader } = await client.SaveMachine(args);
                res.json(result);
            }
            catch(err){
                res.status(401).send({ error: err });
            }
        });
    }

    deleteMachine(req: Request, res: Response, next: NextFunction) {
        var args = {
            SaveMachineContractRequest: {
                ClusterMachine: req.body.id
            }
        };
        var clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try{
                const { result, envelope, soapHeader } = await client.DeleteMachine(args);
                res.json(result);
            }
            catch(err){
                res.status(401).send({ error: err });
            }
        });
    }
}
