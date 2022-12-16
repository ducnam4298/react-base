const BASE_URL = '';
export const URL_API = (api: string) => {
  return `${BASE_URL}/api/cms/${api}`;
};
export const Endpoint = {
  UPLOAD_FILE: URL_API('file/file'),
  UPLOAD_IMAGE: URL_API('file/image'),
  REFRESH_TOKEN: `${BASE_URL}/api/refresh-token`,
};
