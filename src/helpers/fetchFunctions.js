const URL = process.env.REACT_APP_BASE_URL;

export async function fetchPost(endpoint, objectToSend, token) {
  const authorization = token ? { Authorization: `Bearer ${token}` } : '';
  const res = await fetch(URL + endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authorization },
    body: JSON.stringify(objectToSend),
  });
  const resInJson = await res.json();
  return resInJson;
}

export async function fetchPostAd(endpoint, objectToSend, token) {
  const authorization = token ? { Authorization: `Bearer ${token}` } : '';
  const res = await fetch(URL + endpoint, {
    method: 'POST',
    headers: { ...authorization },
    body: objectToSend,
  });
  console.log(JSON.stringify(objectToSend));
  const resInJson = await res.json();
  return resInJson;
}

export async function fetchGet(endpoint, token) {
  const authorization = token ? { Authorization: `Bearer ${token}` } : '';
  const res = await fetch(URL + endpoint, {
    headers: { ...authorization },
  });
  const resInJson = await res.json();
  return resInJson;
}
