/* all code is initially loaded through internal, to avoid circular dep issues */
import "./internal"

// tslint:disable-next-line:no_unused-variable
import { IObservableArray, ObservableMap, IAction } from "mobx"

// we import the types to re-export them inside types.
import {
    enumeration,
    model,
    compose,
    custom,
    reference,
    union,
    optional,
    literal,
    maybe,
    maybeNull,
    refinement,
    string,
    boolean,
    number,
    integer,
    DatePrimitive,
    map,
    array,
    frozen,
    identifier,
    identifierNumber,
    late,
    undefinedType,
    nullType
} from "./internal"

export const types = {
    enumeration,
    model,
    compose,
    custom,
    reference,
    union,
    optional,
    literal,
    maybe,
    maybeNull,
    refinement,
    string,
    boolean,
    number,
    integer,
    Date: DatePrimitive,
    map,
    array,
    frozen,
    identifier,
    identifierNumber,
    late,
    undefined: undefinedType,
    null: nullType
}

// we import these values here to re-export them later so build-docs is happy
import {
    IModelType,
    IAnyModelType,
    IMSTMap,
    IMapType,
    IMSTArray,
    IArrayType,
    IType,
    IAnyType,
    ISimpleType,
    IComplexType,
    IAnyComplexType,
    IReferenceType,
    typecheck,
    escapeJsonPath,
    unescapeJsonPath,
    joinJsonPath,
    splitJsonPath,
    IJsonPatch,
    IReversibleJsonPatch,
    decorate,
    addMiddleware,
    IMiddlewareEvent,
    IMiddlewareHandler,
    IMiddlewareEventType,
    process,
    isStateTreeNode,
    IStateTreeNode,
    IAnyStateTreeNode,
    FixedCSProcessor,
    FixedOrOther,
    FixedJoin,
    flow,
    applyAction,
    onAction,
    IActionRecorder,
    ISerializedActionCall,
    recordActions,
    createActionTrackingMiddleware,
    setLivelynessChecking,
    LivelynessMode,
    ModelSnapshotType,
    ModelCreationType,
    ModelSnapshotType2,
    ModelCreationType2,
    ModelInstanceType,
    ModelPropertiesDeclarationToProperties,
    ModelProperties,
    ModelPropertiesDeclaration,
    OptionalProperty,
    ModelActions,
    ModelUnion,
    CustomTypeOptions,
    UnionOptions,
    Instance,
    SnapshotIn,
    SnapshotOut,
    SnapshotOrInstance,
    TypeOrStateTreeNodeToStateTreeNode,
    UnionStringArray,
    getType,
    getChildType,
    onPatch,
    onSnapshot,
    applyPatch,
    IPatchRecorder,
    recordPatches,
    protect,
    unprotect,
    isProtected,
    applySnapshot,
    getSnapshot,
    hasParent,
    getParent,
    hasParentOfType,
    getParentOfType,
    getRoot,
    getPath,
    getPathParts,
    isRoot,
    resolvePath,
    resolveIdentifier,
    getIdentifier,
    tryResolve,
    getRelativePath,
    clone,
    detach,
    destroy,
    isAlive,
    addDisposer,
    getEnv,
    walk,
    IModelReflectionData,
    IModelReflectionPropertiesData,
    IMaybeIComplexType,
    IMaybeIType,
    getMembers,
    getPropertyMembers,
    CastedType,
    cast,
    isType,
    isArrayType,
    isFrozenType,
    isIdentifierType,
    isLateType,
    isLiteralType,
    isMapType,
    isModelType,
    isOptionalType,
    isPrimitiveType,
    isReferenceType,
    isRefinementType,
    isUnionType,
    ExtractIStateTreeNode
} from "./internal"

export {
    IModelType,
    IAnyModelType,
    IMSTMap,
    IMapType,
    IMSTArray,
    IArrayType,
    IType,
    IAnyType,
    ISimpleType,
    IComplexType,
    IAnyComplexType,
    IReferenceType,
    FixedCSProcessor,
    FixedOrOther,
    FixedJoin,
    typecheck,
    escapeJsonPath,
    unescapeJsonPath,
    joinJsonPath,
    splitJsonPath,
    IJsonPatch,
    IReversibleJsonPatch,
    decorate,
    addMiddleware,
    IMiddlewareEvent,
    IMiddlewareHandler,
    IMiddlewareEventType,
    process,
    isStateTreeNode,
    IStateTreeNode,
    IAnyStateTreeNode,
    flow,
    applyAction,
    onAction,
    IActionRecorder,
    ISerializedActionCall,
    recordActions,
    createActionTrackingMiddleware,
    setLivelynessChecking,
    LivelynessMode,
    ModelSnapshotType,
    ModelCreationType,
    ModelSnapshotType2,
    ModelCreationType2,
    ModelInstanceType,
    ModelPropertiesDeclarationToProperties,
    ModelProperties,
    ModelPropertiesDeclaration,
    OptionalProperty,
    ModelActions,
    ModelUnion,
    CustomTypeOptions,
    UnionOptions,
    Instance,
    SnapshotIn,
    SnapshotOut,
    SnapshotOrInstance,
    TypeOrStateTreeNodeToStateTreeNode,
    UnionStringArray,
    getType,
    getChildType,
    onPatch,
    onSnapshot,
    applyPatch,
    IPatchRecorder,
    recordPatches,
    protect,
    unprotect,
    isProtected,
    applySnapshot,
    getSnapshot,
    hasParent,
    getParent,
    hasParentOfType,
    getParentOfType,
    getRoot,
    getPath,
    getPathParts,
    isRoot,
    resolvePath,
    resolveIdentifier,
    getIdentifier,
    tryResolve,
    getRelativePath,
    clone,
    detach,
    destroy,
    isAlive,
    addDisposer,
    getEnv,
    walk,
    IModelReflectionData,
    IModelReflectionPropertiesData,
    IMaybeIComplexType,
    IMaybeIType,
    getMembers,
    getPropertyMembers,
    CastedType,
    cast,
    isType,
    isArrayType,
    isFrozenType,
    isIdentifierType,
    isLateType,
    isLiteralType,
    isMapType,
    isModelType,
    isOptionalType,
    isPrimitiveType,
    isReferenceType,
    isRefinementType,
    isUnionType,
    ExtractIStateTreeNode
}
