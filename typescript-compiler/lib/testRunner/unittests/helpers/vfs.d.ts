import * as vfs from "../../_namespaces/vfs";
export interface FsOptions {
    libContentToAppend?: string;
    cwd?: string;
    executingFilePath?: string;
}
export type FsOptionsOrLibContentsToAppend = FsOptions | string;
/**
 * All the files must be in /src
 */
export declare function loadProjectFromFiles(files: vfs.FileSet, options?: FsOptionsOrLibContentsToAppend): vfs.FileSystem;
export declare function replaceText(fs: vfs.FileSystem, path: string, oldText: string, newText: string): void;
export declare function prependText(fs: vfs.FileSystem, path: string, additionalContent: string): void;
export declare function appendText(fs: vfs.FileSystem, path: string, additionalContent: string): void;
export declare function enableStrict(fs: vfs.FileSystem, path: string): void;
export declare function addTestPrologue(fs: vfs.FileSystem, path: string, prologue: string): void;
export declare function addShebang(fs: vfs.FileSystem, project: string, file: string): void;
export declare function restContent(project: string, file: string): string;
export declare function addRest(fs: vfs.FileSystem, project: string, file: string): void;
export declare function removeRest(fs: vfs.FileSystem, project: string, file: string): void;
export declare function addStubFoo(fs: vfs.FileSystem, project: string, file: string): void;
export declare function changeStubToRest(fs: vfs.FileSystem, project: string, file: string): void;
export declare function addSpread(fs: vfs.FileSystem, project: string, file: string): void;
export declare function getTripleSlashRef(project: string): string;
export declare function addTripleSlashRef(fs: vfs.FileSystem, project: string, file: string): void;
//# sourceMappingURL=vfs.d.ts.map