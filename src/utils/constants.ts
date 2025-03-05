
const basePath = process.env.NODE_ENV === "development" ? "" : 'https://goriant.com';

export const getAssetPath = (path: string) => {
  if (path.startsWith("/")) {
    return `${basePath}${path.toLowerCase()}`;
  }
  return path;
};
