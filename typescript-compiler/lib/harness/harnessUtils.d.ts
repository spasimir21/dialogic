import * as ts from "./_namespaces/ts";
export declare function encodeString(s: string): string;
export declare function evalFile(fileContents: string, fileName: string, nodeContext?: any): void;
/** Splits the given string on \r\n, or on only \n if that fails, or on only \r if *that* fails. */
export declare function splitContentByNewlines(content: string): string[];
/** Reads a file under /tests */
export declare function readTestFile(path: string): string | undefined;
export declare function memoize<T extends ts.AnyFunction>(f: T, memoKey: (...anything: any[]) => string): T;
export declare const canonicalizeForHarness: ts.GetCanonicalFileName;
export declare function assertInvariants(node: ts.Node | undefined, parent: ts.Node | undefined): void;
export declare function convertDiagnostics(diagnostics: readonly ts.Diagnostic[]): {
    start: number | undefined;
    length: number | undefined;
    messageText: string;
    category: string;
    code: number;
}[];
export declare function sourceFileToJSON(file: ts.Node): string;
export declare function assertDiagnosticsEquals(array1: readonly ts.Diagnostic[], array2: readonly ts.Diagnostic[]): void;
export declare function assertStructuralEquals(node1: ts.Node, node2: ts.Node): void;
export declare function filterStack(error: Error, stackTraceLimit?: number): Error;
//# sourceMappingURL=harnessUtils.d.ts.map