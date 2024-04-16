import * as ts from "../../_namespaces/ts";
export declare function compilerOptionsToConfigJson(options: ts.CompilerOptions): object;
export declare const libContent: string;
export declare const symbolLibContent = "\ninterface SymbolConstructor {\n    readonly species: symbol;\n    readonly toStringTag: symbol;\n}\ndeclare var Symbol: SymbolConstructor;\ninterface Symbol {\n    readonly [Symbol.toStringTag]: string;\n}\n";
export interface FsContents {
    [path: string]: string;
}
export declare function libPath(forLib: string): string;
export declare function getProjectConfigWithNodeNext(withNodeNext: boolean | undefined): {
    module: string;
    target: string;
} | undefined;
//# sourceMappingURL=contents.d.ts.map