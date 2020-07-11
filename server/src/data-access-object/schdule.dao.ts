import { soap } from 'strong-soap';
import { Request, Response, NextFunction } from 'express';
import { DeploymentServiceSettings } from '../configuration/deployment-service-settings';
import { ParserOption } from '../utilities/parser-option';
import parser from 'fast-xml-parser';
import { Schedule } from '../models/schdule.model';

export class SchduleDAO {

    getAllConfiguration(req: Request, res: Response, next: NextFunction) {
        let clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetAllConfiguration();
                let results=result.Configurations.string.toString().split(',');

                //const xml = `<?xml version="1.0" encoding="utf-8"?><ServiceConfiguration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" Channel="iCheckEQ" CurrentVersion="07.00.01.06" Customer="TAMEKIOSK" Origin="Deployment Tool" UserName="citadmin" xmlns="http://www.sita.aero/NWAF/Communication"><TagTypes Type="DatabaseScript"><File Name="DeployScript_iCheckEQ" Path="DeployScript_iCheckEQ.xml" Status="Update" /><Machines Id="1387" Name="WF SERVER" Port="8080"><IpAddress>10.91.148.213</IpAddress><Target Path="http://10.91.148.214:8731/Services/Deploy/DeployService.svc" Id="2027" Name="WF SERVER" /></Machines></TagTypes><TagTypes Type="XapFile" /><TagTypes Type="Documentation" /><Schedule DateTime="10/31/2018 13:48:23" Status="Executed" Id="18653" DeploymentId="16982" JobName="CITADMIN_18653" CreationDateTime="10/31/2018 13:43:38" /><ScheduleStatusLog /></ServiceConfiguration>,<?xml version="1.0" encoding="utf-8"?><ServiceConfiguration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" Channel="iCheckWebEQ" CurrentVersion="07.00.00.25" Customer="TAMEWEB" Origin="Deployment Tool" UserName="citadmin" xmlns="http://www.sita.aero/NWAF/Communication"><TagTypes Type="DatabaseScript"><File Name="DeployScript_iCheckWebEQ" Path="DeployScript_iCheckWebEQ.xml" Status="Update" /><Machines Id="1387" Name="WF SERVER" Port="8080"><IpAddress>10.91.148.213</IpAddress><Target Path="http://10.91.148.214:8731/Services/Deploy/DeployService.svc" Id="2027" Name="WF SERVER" /></Machines></TagTypes><TagTypes Type="XapFile" /><TagTypes Type="Documentation" /><Schedule DateTime="10/31/2018 13:49:48" Status="Executed" Id="18654" DeploymentId="16983" JobName="CITADMIN_18654" CreationDateTime="10/31/2018 13:43:58" /><ScheduleStatusLog /></ServiceConfiguration>,<?xml version="1.0" encoding="utf-8"?><ServiceConfiguration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" Channel="iCheckEQ" CurrentVersion="07.00.01.06" Customer="TAMEKIOSK" Origin="Deployment Tool" UserName="citadmin" xmlns="http://www.sita.aero/NWAF/Communication"><TagTypes Type="DatabaseScript"><File Name="DeployScript_iCheckEQ" Path="DeployScript_iCheckEQ.xml" Status="Update" /><Machines Id="1387" Name="WF SERVER" Port="8080"><IpAddress>10.91.148.213</IpAddress><Target Path="http://10.91.148.214:8731/Services/Deploy/DeployService.svc" Id="2027" Name="WF SERVER" /></Machines></TagTypes><TagTypes Type="XapFile" /><TagTypes Type="Documentation" /><Schedule DateTime="10/31/2018 13:48:23" Status="Executed" Id="18653" DeploymentId="16982" JobName="CITADMIN_18653" CreationDateTime="10/31/2018 13:43:38" /><ScheduleStatusLog /></ServiceConfiguration>,<?xml version="1.0" encoding="utf-8"?><ServiceConfiguration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" Channel="iCheckWebEQ" CurrentVersion="07.00.00.25" Customer="TAMEWEB" Origin="Deployment Tool" UserName="citadmin" xmlns="http://www.sita.aero/NWAF/Communication"><TagTypes Type="DatabaseScript"><File Name="DeployScript_iCheckWebEQ" Path="DeployScript_iCheckWebEQ.xml" Status="Update" /><Machines Id="1387" Name="WF SERVER" Port="8080"><IpAddress>10.91.148.213</IpAddress><Target Path="http://10.91.148.214:8731/Services/Deploy/DeployService.svc" Id="2027" Name="WF SERVER" /></Machines></TagTypes><TagTypes Type="XapFile" /><TagTypes Type="Documentation" /><Schedule DateTime="10/31/2018 13:49:48" Status="Executed" Id="18654" DeploymentId="16983" JobName="CITADMIN_18654" CreationDateTime="10/31/2018 13:43:58" /><ScheduleStatusLog /></ServiceConfiguration>,<?xml version="1.0" encoding="utf-8"?><ServiceConfiguration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" Channel="iCheckEQ" CurrentVersion="07.00.01.06" Customer="TAMEKIOSK" Origin="Deployment Tool" UserName="citadmin" xmlns="http://www.sita.aero/NWAF/Communication"><TagTypes Type="DatabaseScript"><File Name="DeployScript_iCheckEQ" Path="DeployScript_iCheckEQ.xml" Status="Update" /><Machines Id="1387" Name="WF SERVER" Port="8080"><IpAddress>10.91.148.213</IpAddress><Target Path="http://10.91.148.214:8731/Services/Deploy/DeployService.svc" Id="2027" Name="WF SERVER" /></Machines></TagTypes><TagTypes Type="XapFile" /><TagTypes Type="Documentation" /><Schedule DateTime="10/31/2018 13:48:23" Status="Executed" Id="18653" DeploymentId="16982" JobName="CITADMIN_18653" CreationDateTime="10/31/2018 13:43:38" /><ScheduleStatusLog /></ServiceConfiguration>,<?xml version="1.0" encoding="utf-8"?><ServiceConfiguration xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" Channel="iCheckWebEQ" CurrentVersion="07.00.00.25" Customer="TAMEWEB" Origin="Deployment Tool" UserName="citadmin" xmlns="http://www.sita.aero/NWAF/Communication"><TagTypes Type="DatabaseScript"><File Name="DeployScript_iCheckWebEQ" Path="DeployScript_iCheckWebEQ.xml" Status="Update" /><Machines Id="1387" Name="WF SERVER" Port="8080"><IpAddress>10.91.148.213</IpAddress><Target Path="http://10.91.148.214:8731/Services/Deploy/DeployService.svc" Id="2027" Name="WF SERVER" /></Machines></TagTypes><TagTypes Type="XapFile" /><TagTypes Type="Documentation" /><Schedule DateTime="10/31/2018 13:49:48" Status="Executed" Id="18654" DeploymentId="16983" JobName="CITADMIN_18654" CreationDateTime="10/31/2018 13:43:58" /><ScheduleStatusLog /></ServiceConfiguration>`;
                //let results = xml.toString().split(',');
                
                const jsonData = [];
                for (let resultsKey of results) {

                    const traversalObj = parser.getTraversalObj(resultsKey, ParserOption);
                    const jsonResponse = parser.convertToJson(traversalObj, ParserOption).ServiceConfiguration;
                    
                    const scheduleResponse: Schedule = {
                        details: jsonResponse.CurrentVersion,
                        customer: jsonResponse.Customer,
                        application: jsonResponse.Channel,
                        version: jsonResponse.CurrentVersion,
                        deployTime: jsonResponse.Schedule.DateTime,
                        deployStatus: jsonResponse.Schedule.Status,
                        jobName: jsonResponse.Schedule.JobName
                    };
                    jsonData.push(scheduleResponse);
                }
                res.json(jsonData);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
     getConfiguration(req: Request, res: Response, next: NextFunction) {
        let clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetConfiguration();
                res.json(result);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    getDeployScheduleById(req: Request, res: Response, next: NextFunction) {
        let clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetDeployScheduleById();
                res.json(result);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }

    getConfigurationBySchedulerStatus(req: Request, res: Response, next: NextFunction) {
        let clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.GetConfigurationBySchedulerStatus();
                res.json(result);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    updateSchedule(req: Request, res: Response, next: NextFunction) {
        let clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.UpdateSchedule();
                res.json(result);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
    deleteSchedule(req: Request, res: Response, next: NextFunction) {
        let clientOptions = {};
        soap.createClient(DeploymentServiceSettings.end_point_URL, clientOptions, async function (err: any, client: any) {
            if (err) {
                res.status(500).send({ error: 'Internal server error happened' })
            }
            try {
                const { result, envelope, soapHeader } = await client.DeleteSchedule();
                res.json(result);
            } catch (err) {
                res.status(401).send({ error: err });
            }
        });
    }
}
