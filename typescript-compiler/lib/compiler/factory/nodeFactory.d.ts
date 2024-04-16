import { BaseNodeFactory, Node, NodeFactory, SourceMapSource, SyntaxKind, TransformFlags } from "../_namespaces/ts";
/** @internal */
export declare const enum NodeFactoryFlags {
    None = 0,
    NoParenthesizerRules = 1,
    NoNodeConverters = 2,
    NoIndentationOnFreshPropertyAccess = 4,
    NoOriginalNode = 8
}
/** @internal */
export declare function addNodeFactoryPatcher(fn: (factory: NodeFactory) => void): void;
/**
 * Creates a `NodeFactory` that can be used to create and update a syntax tree.
 * @param flags Flags that control factory behavior.
 * @param baseFactory A `BaseNodeFactory` used to create the base `Node` objects.
 *
 * @internal
 */
export declare function createNodeFactory(flags: NodeFactoryFlags, baseFactory: BaseNodeFactory): NodeFactory;
/**
 * Gets the transform flags to exclude when unioning the transform flags of a subtree.
 *
 * @internal
 */
export declare function getTransformFlagsSubtreeExclusions(kind: SyntaxKind): TransformFlags.HasComputedFlags | TransformFlags.ArrowFunctionExcludes | TransformFlags.FunctionExcludes | TransformFlags.ConstructorExcludes | TransformFlags.MethodOrAccessorExcludes | TransformFlags.PropertyExcludes | TransformFlags.ClassExcludes | TransformFlags.ModuleExcludes | TransformFlags.TypeExcludes | TransformFlags.ObjectLiteralExcludes | TransformFlags.ArrayLiteralOrCallOrNewExcludes | TransformFlags.VariableDeclarationListExcludes | TransformFlags.CatchClauseExcludes;
export declare const factory: NodeFactory;
declare let SourceMapSource: new (fileName: string, text: string, skipTrivia?: (pos: number) => number) => SourceMapSource;
/**
 * Create an external source map source file reference
 */
export declare function createSourceMapSource(fileName: string, text: string, skipTrivia?: (pos: number) => number): SourceMapSource;
export declare function setOriginalNode<T extends Node>(node: T, original: Node | undefined): T;
export {};
//# sourceMappingURL=nodeFactory.d.ts.map