import { MapLike } from "../typescript/typescript";
import * as ts from "../typescript/typescript";
export declare class NodeTypingsInstaller extends ts.server.typingsInstaller.TypingsInstaller {
    private readonly nodeExecSync;
    private readonly npmPath;
    readonly typesRegistry: Map<string, MapLike<string>>;
    private delayedInitializationError;
    constructor(globalTypingsCacheLocation: string, typingSafeListLocation: string, typesMapLocation: string, npmLocation: string | undefined, validateDefaultNpmLocation: boolean, throttleLimit: number, log: ts.server.typingsInstaller.Log);
    handleRequest(req: ts.server.TypingInstallerRequestUnion): void;
    protected sendResponse(response: ts.server.TypingInstallerResponseUnion): void;
    protected installWorker(requestId: number, packageNames: string[], cwd: string, onRequestCompleted: ts.server.typingsInstaller.RequestCompletedAction): void;
    /** Returns 'true' in case of error. */
    private execSyncAndLog;
}
//# sourceMappingURL=nodeTypingsInstaller.d.ts.map