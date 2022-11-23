import { InferType } from 'yup';
export declare const autoFormSchema: import("yup").ObjectSchema<import("yup/lib/object").Assign<Record<string, import("yup").AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    description: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, import("yup").AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    description: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, import("yup").AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    description: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
export declare type SchemaValues = InferType<typeof autoFormSchema>;
