declare type Dict = Record<string, unknown>;
declare type PostJson = <T = unknown>(url: string, postfields: Dict) => Promise<T>;
export declare const postJson: PostJson;
export {};
