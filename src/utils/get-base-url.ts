interface Options {
  isServer?: boolean;
}

export const getBaseUrl = (opts?: Options): string => {
  opts ??= {};
  const { isServer } = opts;
  if (typeof window !== "undefined" && !isServer) {
    return "";
  }
  if (process.env.ZEABUR_URL) {
    return `https://${process.env.ZEABUR_URL}`;
  }

  if (process.env.RAILWAY_URL) {
    return `https://${process.env.RAILWAY_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return (
    (process.env.BASE_URL as string) || `http://localhost:${process.env.PORT}`
  );
};
