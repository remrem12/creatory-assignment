import cookie from "react-cookies";
import queryString from "query-string";

export const fetchApi = async (url: string, options?: any, payload?: any) => {
  const defaultOptions = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // incase BE api need an auth
      Authorization: cookie.load("auth"),
    },
  };
  const opts = {
    ...defaultOptions,
    ...(options ?? {}),
  };
  if (opts && opts.method === "GET") {
    url = queryString.stringifyUrl({ url: url, query: payload });
  }

  const res = await fetch(url, opts);
  const data = await res.json();
  if (res.status === 403 || res.status === 401) {
    alert(data.errorDetails);
    return null;
  }
  return data || {};
};
