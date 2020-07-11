export class Cluster {
    id: number;
    name: string;
    ip: string;
    port: number;
    xapFile: boolean;
    databaseScript: boolean;
    documentation: boolean;
    applicationName?: string;

    constructor(
        options: {
            id?: number;
            name?: string;
            ip?: string;
            port?: number;
            xapFile?: boolean;
            databaseScript?: boolean;
            documentation?: boolean;
            applicationName?: string;
        } = {}
    ) {
        this.id = options.id;
        this.name = options.name || '';
        this.ip = options.ip || '';
        this.port = options.port === undefined ? null : options.port;
        this.xapFile = !!options.xapFile;
        this.databaseScript = !!options.databaseScript;
        this.documentation = !!options.documentation;
        this.applicationName = options.applicationName || '';
    }
}
