import { Path, ProjectPackageJsonInfo, Ternary } from "./_namespaces/ts";
import { ProjectService } from "./_namespaces/ts.server";
/** @internal */
export interface PackageJsonCache {
    addOrUpdate(fileName: string, path: Path): void;
    invalidate(path: Path): void;
    delete(fileName: Path): void;
    getInDirectory(directory: string): ProjectPackageJsonInfo | undefined;
    directoryHasPackageJson(directory: string): Ternary;
    searchDirectoryAndAncestors(directory: string): void;
}
/** @internal */
export declare function createPackageJsonCache(host: ProjectService): PackageJsonCache;
//# sourceMappingURL=packageJsonCache.d.ts.map