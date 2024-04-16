import * as ts from "../../_namespaces/ts";
import { CommandLineCallbacks, CommandLineProgram } from "./baseline";
import { File, TestServerHost, TestServerHostTrackingWrittenFiles } from "./virtualFileSystemWithWatch";
export declare const commonFile1: File;
export declare const commonFile2: File;
export type WatchOrSolution<T extends ts.BuilderProgram> = void | ts.SolutionBuilder<T> | ts.WatchOfConfigFile<T> | ts.WatchOfFilesAndCompilerOptions<T>;
export interface TscWatchCompileChange<T extends ts.BuilderProgram = ts.EmitAndSemanticDiagnosticsBuilderProgram> {
    caption: string;
    edit: (sys: TscWatchSystem) => void;
    timeouts: (sys: TscWatchSystem, programs: readonly CommandLineProgram[], watchOrSolution: WatchOrSolution<T>) => void;
    skipStructureCheck?: true;
}
export interface TscWatchCheckOptions {
    baselineSourceMap?: boolean;
    baselineDependencies?: boolean;
}
export interface TscWatchCompileBase<T extends ts.BuilderProgram = ts.EmitAndSemanticDiagnosticsBuilderProgram> extends TscWatchCheckOptions {
    scenario: string;
    subScenario: string;
    commandLineArgs: readonly string[];
    edits?: readonly TscWatchCompileChange<T>[];
}
export interface TscWatchCompile extends TscWatchCompileBase {
    sys: () => TestServerHost;
}
export declare const noopChange: TscWatchCompileChange;
export type TscWatchSystem = TestServerHostTrackingWrittenFiles;
export interface BaselineBase {
    baseline: string[];
    sys: TscWatchSystem;
}
export interface Baseline extends BaselineBase, CommandLineCallbacks {
}
export declare function createBaseline(system: TestServerHost, modifySystem?: (sys: TestServerHost, originalRead: TestServerHost["readFile"]) => void): Baseline;
export declare function createSolutionBuilderWithWatchHostForBaseline(sys: TestServerHost, cb: ts.ExecuteCommandLineCallbacks): ts.SolutionBuilderWithWatchHost<ts.EmitAndSemanticDiagnosticsBuilderProgram>;
interface CreateWatchCompilerHostOfConfigFileForBaseline<T extends ts.BuilderProgram> extends ts.CreateWatchCompilerHostOfConfigFileInput<T> {
    system: TestServerHost;
    cb: ts.ExecuteCommandLineCallbacks;
}
export declare function createWatchCompilerHostOfConfigFileForBaseline<T extends ts.BuilderProgram = ts.EmitAndSemanticDiagnosticsBuilderProgram>(input: CreateWatchCompilerHostOfConfigFileForBaseline<T>): ts.WatchCompilerHostOfConfigFile<T>;
interface CreateWatchCompilerHostOfFilesAndCompilerOptionsForBaseline<T extends ts.BuilderProgram> extends ts.CreateWatchCompilerHostOfFilesAndCompilerOptionsInput<T> {
    system: TestServerHost;
    cb: ts.ExecuteCommandLineCallbacks;
}
export declare function createWatchCompilerHostOfFilesAndCompilerOptionsForBaseline<T extends ts.BuilderProgram = ts.EmitAndSemanticDiagnosticsBuilderProgram>(input: CreateWatchCompilerHostOfFilesAndCompilerOptionsForBaseline<T>): ts.WatchCompilerHostOfFilesAndCompilerOptions<T>;
export declare function applyEdit(sys: BaselineBase["sys"], baseline: BaselineBase["baseline"], edit: TscWatchCompileChange["edit"], caption?: TscWatchCompileChange["caption"]): void;
export interface RunWatchBaseline<T extends ts.BuilderProgram> extends BaselineBase, TscWatchCompileBase<T> {
    sys: TscWatchSystem;
    getPrograms: () => readonly CommandLineProgram[];
    watchOrSolution: WatchOrSolution<T>;
    useSourceOfProjectReferenceRedirect?: () => boolean;
}
export declare function runWatchBaseline<T extends ts.BuilderProgram = ts.EmitAndSemanticDiagnosticsBuilderProgram>({ scenario, subScenario, commandLineArgs, getPrograms, sys, baseline, baselineSourceMap, baselineDependencies, edits, watchOrSolution, useSourceOfProjectReferenceRedirect, }: RunWatchBaseline<T>): void;
export declare function isWatch(commandLineArgs: readonly string[]): boolean | undefined;
export interface WatchBaseline extends BaselineBase, TscWatchCheckOptions {
    oldPrograms: readonly (CommandLineProgram | undefined)[];
    getPrograms: () => readonly CommandLineProgram[];
    caption?: string;
    resolutionCache?: ts.ResolutionCache;
    useSourceOfProjectReferenceRedirect?: () => boolean;
}
export declare function watchBaseline({ baseline, getPrograms, oldPrograms, sys, baselineSourceMap, baselineDependencies, caption, resolutionCache, useSourceOfProjectReferenceRedirect, }: WatchBaseline): readonly CommandLineProgram[];
export interface VerifyTscWatch extends TscWatchCompile {
    baselineIncremental?: boolean;
}
export declare function verifyTscWatch(input: VerifyTscWatch): void;
export {};
//# sourceMappingURL=tscWatch.d.ts.map