/**
 * Parse a url and break it into resource, id and verb
 */
export function parseRequestURL() {
  const url = location.hash.slice(1).toLowerCase() || "/";
  const route = url.split("/");
  const request = {
    resource: null,
    id: null,
    verb: null,
  };

  request.resource = route[1];
  request.id = route[2];
  request.verb = route[3];

  return request;
}
