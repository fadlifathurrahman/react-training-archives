export async function api(endpoint, method = "GET", body) {
  const token = localStorage.getItem("token");
  if (token) {
    const response = await fetch(`http://localhost:3000/api${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const data = await (method === "GET" ? response.json() : response.text());
    return data;
  }
}
