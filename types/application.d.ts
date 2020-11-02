interface Application {
  initialization: boolean;
  finalization: boolean;
  api: NodeJS.Dict<any>;
  static: Map<string, Buffer>;
  root: string;
  path: string;
  apiPath: string;
  libPath: string;
  domainPath: string;
  staticPath: string;
  starts: Array<Function>;
  Application: Function,
  Error: Function,
  cert: Cert;
  db: Database;
  auth: Auth;
  logger: Logger;
  config: Config;
  console: Console;
  server: Server;
  sandbod: NodeJS.Dict<any>;
}

interface Cert {
  key: Buffer;
  cert: Buffer;
}
