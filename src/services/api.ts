export type ApiUser = {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
};

export type ApiResponse<T> = {
  status: string;
  message?: string;
  data?: T;
};

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request to ${path} failed with ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export const api = {
  health: () => request<ApiResponse<null>>('/health'),
  dbTest: () => request<ApiResponse<unknown>>('/db-test'),
  users: {
    list: () => request<ApiResponse<ApiUser[]>>('/api/users'),
    create: (payload: Pick<ApiUser, 'name' | 'email'> & { phone?: string }) =>
      request<ApiResponse<ApiUser>>('/api/users', {
        method: 'POST',
        body: JSON.stringify(payload),
      }),
    remove: (id: number) => request<ApiResponse<null>>(`/api/users/${id}`, { method: 'DELETE' }),
  },
};
