import * as ts from "../../_namespaces/ts";
import { TscCompileSystem } from "./tsc";
import { TestServerHost } from "./virtualFileSystemWithWatch";
export declare function createSolutionBuilderHostForBaseline(sys: TscCompileSystem | TestServerHost, versionToWrite?: string, originalRead?: (TscCompileSystem | TestServerHost)["readFile"]): ts.SolutionBuilderHost<ts.EmitAndSemanticDiagnosticsBuilderProgram>;
export declare function createSolutionBuilder(system: TestServerHost, rootNames: readonly string[], originalRead?: TestServerHost["readFile"]): ts.SolutionBuilder<ts.EmitAndSemanticDiagnosticsBuilderProgram>;
export declare function ensureErrorFreeBuild(host: TestServerHost, rootNames: readonly string[]): void;
export declare function solutionBuildWithBaseline(sys: TestServerHost, solutionRoots: readonly string[], originalRead?: TestServerHost["readFile"]): TestServerHost;
//# sourceMappingURL=solutionBuilder.d.ts.map