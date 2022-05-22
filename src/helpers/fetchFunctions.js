const URL = process.env.REACT_APP_BASE_URL;

export async function fetchPost(endpoint, objectToSend) {
  const res = await fetch(URL + endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(objectToSend),
  });
  const resInJson = await res.json();
  return resInJson;
}
