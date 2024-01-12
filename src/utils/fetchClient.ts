/* eslint-disable @typescript-eslint/no-explicit-any */
const BASE_URL = 'https://swapi.dev/api';

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

async function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null, // we can send any data to the server
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  const [response] = await Promise.all([
    fetch(BASE_URL + url, options),
  ]);

  return response.ok
    ? response.json()
    : Promise.reject();
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};