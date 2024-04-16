import { BuilderProgram, EmitAndSemanticDiagnosticsBuilderProgram, ParsedCommandLine, Program, SolutionBuilder, System, WatchOfConfigFile } from "./_namespaces/ts";
/** @internal */
export declare enum StatisticType {
    time = 0,
    count = 1,
    memory = 2
}
/** @internal */
export declare function isBuild(commandLineArgs: readonly string[]): boolean;
/** @internal */
export type ExecuteCommandLineCallbacks = (program: Program | BuilderProgram | ParsedCommandLine) => void;
/** @internal */
export declare function executeCommandLine(system: System, cb: ExecuteCommandLineCallbacks, commandLineArgs: readonly string[]): void | SolutionBuilder<EmitAndSemanticDiagnosticsBuilderProgram> | WatchOfConfigFile<EmitAndSemanticDiagnosticsBuilderProgram>;
//# sourceMappingURL=executeCommandLine.d.ts.map