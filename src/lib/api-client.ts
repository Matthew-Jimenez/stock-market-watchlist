class BaseAPIClient {
  constructor(private baseUrl: string) {}

  public get = async <ResponseType>(url: string) => {
    const res = await fetch(`${this.baseUrl}${url}`, {
      method: "GET",
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    return data as ResponseType;
  };
}

export default BaseAPIClient;
