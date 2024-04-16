import { AnonymousFunctionDefinition, Block, CallExpression, ClassLikeDeclaration, ClassStaticBlockDeclaration, Expression, ExpressionStatement, Identifier, NamedEvaluation, Node, NodeArray, NodeFactory, Statement, StringLiteral, TransformationContext, WrappedExpression } from "../_namespaces/ts";
/**
 * Gets a string literal to use as the assigned name of an anonymous class or function declaration.
 * @internal
 */
export declare function getAssignedNameOfIdentifier(factory: NodeFactory, name: Identifier, expression: WrappedExpression<AnonymousFunctionDefinition>): StringLiteral;
/**
 * Creates a class `static {}` block used to dynamically set the name of a class.
 *
 * @param assignedName The expression used to resolve the assigned name at runtime. This expression should not produce
 * side effects.
 * @param thisExpression Overrides the expression to use for the actual `this` reference. This can be used to provide an
 * expression that has already had its `EmitFlags` set or may have been tracked to prevent substitution.
 * @internal
 */
export declare function createClassNamedEvaluationHelperBlock(context: TransformationContext, assignedName: Expression, thisExpression?: Expression): ClassNamedEvaluationHelperBlock;
/** @internal */
export type ClassNamedEvaluationHelperBlock = ClassStaticBlockDeclaration & {
    readonly body: Block & {
        readonly statements: NodeArray<Statement> & readonly [
            ExpressionStatement & {
                readonly expression: CallExpression & {
                    readonly expression: Identifier;
                };
            }
        ];
    };
};
/**
 * Gets whether a node is a `static {}` block containing only a single call to the `__setFunctionName` helper where that
 * call's second argument is the value stored in the `assignedName` property of the block's `EmitNode`.
 * @internal
 */
export declare function isClassNamedEvaluationHelperBlock(node: Node): node is ClassNamedEvaluationHelperBlock;
/**
 * Gets whether a `ClassLikeDeclaration` has a `static {}` block containing only a single call to the
 * `__setFunctionName` helper.
 * @internal
 */
export declare function classHasExplicitlyAssignedName(node: ClassLikeDeclaration): boolean;
/**
 * Gets whether a `ClassLikeDeclaration` has a declared name or contains a `static {}` block containing only a single
 * call to the `__setFunctionName` helper.
 * @internal
 */
export declare function classHasDeclaredOrExplicitlyAssignedName(node: ClassLikeDeclaration): boolean;
/**
 * Injects a class `static {}` block used to dynamically set the name of a class, if one does not already exist.
 * @internal
 */
export declare function injectClassNamedEvaluationHelperBlockIfMissing<T extends ClassLikeDeclaration>(context: TransformationContext, node: T, assignedName: Expression, thisExpression?: Expression): Extract<ClassLikeDeclaration, Pick<T, "kind">>;
/**
 * Performs a shallow transformation of a `NamedEvaluation` node, such that a valid name will be assigned.
 * @internal
 */
export declare function transformNamedEvaluation<T extends NamedEvaluation>(context: TransformationContext, node: T, ignoreEmptyStringLiteral?: boolean, assignedName?: string): Extract<NamedEvaluation, Pick<T, "kind" | keyof T & "operatorToken" | keyof T & "name">>;
//# sourceMappingURL=namedEvaluation.d.ts.map