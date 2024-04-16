import * as fakes from "../../_namespaces/fakes";
import * as ts from "../../_namespaces/ts";
import * as vfs from "../../_namespaces/vfs";
export type TscCompileSystem = fakes.System & {
    writtenFiles: Set<ts.Path>;
    baseLine(): {
        file: string;
        text: string;
    };
    dtsSignaures?: Map<ts.Path, Map<string, string>>;
    storeSignatureInfo?: boolean;
};
export declare const noChangeRun: TestTscEdit;
export declare const noChangeOnlyRuns: TestTscEdit[];
export interface TestTscCompile extends TestTscCompileLikeBase {
    baselineSourceMap?: boolean;
    baselineReadFileCalls?: boolean;
    baselinePrograms?: boolean;
    baselineDependencies?: boolean;
}
export interface TestTscCompileLikeBase extends VerifyTscCompileLike {
    diffWithInitial?: boolean;
    modifyFs?: (fs: vfs.FileSystem) => void;
    computeDtsSignatures?: boolean;
    environmentVariables?: Record<string, string>;
}
export interface TestTscCompileLike extends TestTscCompileLikeBase {
    compile: (sys: TscCompileSystem) => void;
    additionalBaseline?: (sys: TscCompileSystem) => void;
}
/**
 * Initialize FS, run compile function and save baseline
 */
export declare function testTscCompileLike(input: TestTscCompileLike): TscCompileSystem;
export declare function makeSystemReadyForBaseline(sys: TscCompileSystem, versionToWrite?: string): void;
/**
 * Initialize Fs, execute command line and save baseline
 */
export declare function testTscCompile(input: TestTscCompile): TscCompileSystem;
export declare function verifyTscBaseline(sys: () => {
    baseLine: TscCompileSystem["baseLine"];
}): void;
export interface VerifyTscCompileLike {
    scenario: string;
    subScenario: string;
    commandLineArgs: readonly string[];
    fs: () => vfs.FileSystem;
}
/**
 * Verify by baselining after initializing FS and custom compile
 */
export declare function verifyTscCompileLike<T extends VerifyTscCompileLike>(verifier: (input: T) => {
    baseLine: TscCompileSystem["baseLine"];
}, input: T): void;
export interface TestTscEdit {
    edit: (fs: vfs.FileSystem) => void;
    caption: string;
    commandLineArgs?: readonly string[];
    /** An array of lines to be printed in order when a discrepancy is detected */
    discrepancyExplanation?: () => readonly string[];
}
export interface VerifyTscWithEditsInput extends TestTscCompile {
    edits?: readonly TestTscEdit[];
}
/**
 * Verify non watch tsc invokcation after each edit
 */
export declare function verifyTsc({ subScenario, fs, scenario, commandLineArgs, environmentVariables, baselineSourceMap, modifyFs, baselineReadFileCalls, baselinePrograms, edits, }: VerifyTscWithEditsInput): void;
//# sourceMappingURL=tsc.d.ts.map