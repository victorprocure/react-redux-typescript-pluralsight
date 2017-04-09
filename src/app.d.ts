declare module "*.json" {
    const data: any;
    export default data;
}

declare module "*.html" {
    const value: string;
    export default value;
}

declare module "*.css" {
    const value: any;
    export default value;
}


declare module 'redux-immutable-state-invariant' {
    import * as Redux from "redux";
    type isImmutableDefault = (value: any) => boolean;
    type immutableStateInvariantMiddlewareInterface = (isImmutable?: isImmutableDefault) => Redux.Middleware;
    let immutableStateInvariantMiddleware: immutableStateInvariantMiddlewareInterface;
    export default immutableStateInvariantMiddleware;
}