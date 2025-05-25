export interface ApiError extends Error {
  info?: unknown;
  status?: number;
}

export async function fetcher<JSON = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<JSON> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  const url = input instanceof URL ? input : new URL(input.toString(), baseUrl);
  
  const res = await fetch(url, init);
  
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.') as ApiError;
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
} 