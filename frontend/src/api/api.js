const BASE_URL = 'http://localhost:5000/api';  // Your Node backend with module type

export async function fetchBusinessData(name, location) {
  const res = await fetch(`${BASE_URL}/business-data`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, location }),
  });
  return await res.json();
}

export async function regenerateHeadline(name, location) {
  const res = await fetch(`${BASE_URL}/regenerate-headline?name=${encodeURIComponent(name)}&location=${encodeURIComponent(location)}`);
  return await res.json();
}
