/**
 * Function to fetch APIs.
 * @param {string} url
 * @param {{ method: string }} fetchOptions
 * @returns {{ data: any, loading: boolean, error: any }}
 */
export async function useFetch(url, fetchOptions) {
  const responses = {
    loading: true,
    data: null,
    error: null,
  };

  const options = {
    method: fetchOptions.method || "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);

    const data = await response.json();

    responses.data = data;
    responses.loading = false;
  } catch (err) {
    responses.error = err;
    responses.loading = false;
  }

  return responses;
}
