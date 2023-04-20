export async function postJson<T>(url: string, data: Record<string, any>): Promise<T> {
  const response = await fetch(url, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}
