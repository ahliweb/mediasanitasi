export const supportedLangs = ["id", "en"] as const;
export type Lang = (typeof supportedLangs)[number];

export const defaultLang: Lang = "id";

export const languages: Record<Lang, { label: string; short: string }> = {
  id: { label: "Bahasa Indonesia", short: "ID" },
  en: { label: "English", short: "EN" },
};

export const getLang = (value?: string | null): Lang =>
  supportedLangs.includes(value as Lang) ? (value as Lang) : defaultLang;

export const stripBasePath = (path: string): string =>
  path.startsWith("/en") ? path.replace(/^\/en(\/|$)/, "/") : path;

const isExternalLink = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

export const withBasePath = (href: string, lang: Lang): string => {
  if (isExternalLink(href)) {
    return href;
  }

  const basePath = lang === "en" ? "/en" : "";
  const [path, hash] = href.split("#");
  const normalizedPath = path
    ? path.startsWith("/")
      ? path
      : `/${path}`
    : "/";
  const trimmedPath = normalizedPath === "/" ? "" : normalizedPath;
  const combined = `${basePath}${trimmedPath}` || "/";
  const finalPath = normalizedPath === "/" && basePath ? `${basePath}/` : combined;

  return hash ? `${finalPath}#${hash}` : finalPath;
};
