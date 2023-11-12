import axios from "axios";

const client = axios.create({ baseURL: process.env.NEXT_PUBLIC_TAKHNIK_BACKEND_URL });

export default function takhnikRequest(
  method: string,
  path = "",
  payload: FormData | object = {},
  accessToken: string | null = null
) {
  const options = {
    method,
    withCredentials: true,
    url: path,
    data: payload,
    json: true,
    headers: {} as Record<string, string>,
  };

  if (accessToken) {
    options.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return client(options);
}
