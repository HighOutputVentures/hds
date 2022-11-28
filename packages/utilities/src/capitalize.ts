interface Config {
  trim?: boolean;
  lower?: boolean;
  delimiter?: string;
}

export default function capitalize(subject: string, config: Config = {}) {
  if (!config.delimiter) config.delimiter = ". ";

  if (config.trim) subject = subject.trim().replace(/\s{2,}/g, " ");
  if (config.lower) subject = subject.toLowerCase();

  if (subject.length <= 0) return subject;

  return subject
    .split(config.delimiter)
    .map((value) => value.at(0)?.toUpperCase().concat(value.substring(1)))
    .join(config.delimiter);
}
