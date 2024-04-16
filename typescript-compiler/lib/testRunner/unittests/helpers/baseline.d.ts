import * as ts from "../../_namespaces/ts";
import { TscCompileSystem } from "./tsc";
import { TestServerHost } from "./virtualFileSystemWithWatch";
export type CommandLineProgram = [ts.Program, ts.BuilderProgram?];
export interface CommandLineCallbacks {
    cb: ts.ExecuteCommandLineCallbacks;
    getPrograms: () => readonly CommandLineProgram[];
}
export declare function commandLineCallbacks(sys: TscCompileSystem | TestServerHost, originalReadCall?: ts.System["readFile"]): CommandLineCallbacks;
export declare function baselinePrograms(baseline: string[], programs: readonly CommandLineProgram[], oldPrograms: readonly (CommandLineProgram | undefined)[], baselineDependencies: boolean | undefined): void;
export declare function generateSourceMapBaselineFiles(sys: ts.System & {
    writtenFiles: ts.ReadonlyCollection<ts.Path>;
}): void;
export type ReadableProgramBuildInfoDiagnostic = string | [string, readonly ts.ReusableDiagnostic[]];
export type ReadableBuilderFileEmit = string & {
    __readableBuilderFileEmit: any;
};
export type ReadableProgramBuilderInfoFilePendingEmit = [original: string | [string], emitKind: ReadableBuilderFileEmit];
export type ReadableProgramBuildInfoEmitSignature = string | [string, ts.EmitSignature | []];
export type ReadableProgramBuildInfoFileInfo<T> = Omit<ts.BuilderState.FileInfo, "impliedFormat"> & {
    impliedFormat: string | undefined;
    original: T | undefined;
};
export type ReadableProgramBuildInfoRoot = [original: ts.ProgramBuildInfoFileId, readable: string] | [original: ts.ProgramBuildInfoRootStartEnd, readable: readonly string[]];
export type ReadableProgramMultiFileEmitBuildInfo = Omit<ts.ProgramMultiFileEmitBuildInfo, "fileIdsList" | "fileInfos" | "root" | "referencedMap" | "semanticDiagnosticsPerFile" | "emitDiagnosticsPerFile" | "affectedFilesPendingEmit" | "changeFileSet" | "emitSignatures"> & {
    fileNamesList: readonly (readonly string[])[] | undefined;
    fileInfos: ts.MapLike<ReadableProgramBuildInfoFileInfo<ts.ProgramMultiFileEmitBuildInfoFileInfo>>;
    root: readonly ReadableProgramBuildInfoRoot[];
    referencedMap: ts.MapLike<string[]> | undefined;
    semanticDiagnosticsPerFile: readonly ReadableProgramBuildInfoDiagnostic[] | undefined;
    emitDiagnosticsPerFile: readonly ReadableProgramBuildInfoDiagnostic[] | undefined;
    affectedFilesPendingEmit: readonly ReadableProgramBuilderInfoFilePendingEmit[] | undefined;
    changeFileSet: readonly string[] | undefined;
    emitSignatures: readonly ReadableProgramBuildInfoEmitSignature[] | undefined;
};
export type ReadableProgramBuildInfoBundlePendingEmit = [emitKind: ReadableBuilderFileEmit, original: ts.ProgramBuildInfoBundlePendingEmit];
export type ReadableProgramBundleEmitBuildInfo = Omit<ts.ProgramBundleEmitBuildInfo, "fileInfos" | "root" | "pendingEmit"> & {
    fileInfos: ts.MapLike<string | ReadableProgramBuildInfoFileInfo<ts.BuilderState.FileInfo>>;
    root: readonly ReadableProgramBuildInfoRoot[];
    pendingEmit: ReadableProgramBuildInfoBundlePendingEmit | undefined;
};
export type ReadableProgramBuildInfo = ReadableProgramMultiFileEmitBuildInfo | ReadableProgramBundleEmitBuildInfo;
export declare function isReadableProgramBundleEmitBuildInfo(info: ReadableProgramBuildInfo | undefined): info is ReadableProgramBundleEmitBuildInfo;
export type ReadableBuildInfo = Omit<ts.BuildInfo, "program"> & {
    program: ReadableProgramBuildInfo | undefined;
    size: number;
};
export declare function toPathWithSystem(sys: ts.System, fileName: string): ts.Path;
export declare function baselineBuildInfo(options: ts.CompilerOptions, sys: TscCompileSystem | TestServerHost, originalReadCall?: ts.System["readFile"]): void;
export declare function tscBaselineName(scenario: string, subScenario: string, commandLineArgs: readonly string[], isWatch?: boolean, suffix?: string): string;
//# sourceMappingURL=baseline.d.ts.map