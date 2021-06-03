import axios from 'axios';
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function resData(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.data;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  const lang = localStorage.getItem('lang');
  const headers = new Headers({
    ...options,
    lang,
  });

  return fetch(url, {
    method: 'GET',
    headers,
  })
    .then(checkStatus)
    .then(parseJSON);
}

export async function fetchAxios(options) {
  const lang = localStorage.getItem('lang');
  const headers = { ...options, headers: { ...options.headers, lang } };

  let res = await axios(headers);

  res = checkStatus(res);
  res = resData(res);

  return res;
}
