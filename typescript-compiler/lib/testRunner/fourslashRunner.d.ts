import * as FourSlash from "./_namespaces/FourSlash";
import { RunnerBase, TestRunnerKind } from "./_namespaces/Harness";
export declare class FourSlashRunner extends RunnerBase {
    private testType;
    protected basePath: string;
    protected testSuiteName: TestRunnerKind;
    constructor(testType: FourSlash.FourSlashTestType);
    enumerateTestFiles(): string[];
    kind(): TestRunnerKind;
    initializeTests(): void;
}
export declare class GeneratedFourslashRunner extends FourSlashRunner {
    constructor(testType: FourSlash.FourSlashTestType);
}
//# sourceMappingURL=fourslashRunner.d.ts.map