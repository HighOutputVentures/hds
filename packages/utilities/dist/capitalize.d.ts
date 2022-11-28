interface Config {
    trim?: boolean;
    lower?: boolean;
    delimiter?: string;
}
export default function capitalize(subject: string, config?: Config): string;
export {};
