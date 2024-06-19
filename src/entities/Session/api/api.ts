import { routes, fetchRoute } from '@/shared/api/routes';
import { type RegisterRequest, type RegisterResponse } from './types';

export const sessionApi = {
  register: async (values: RegisterRequest) => {
    const response = await fetch(fetchRoute(routes.signUp), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const errorData = (await response.json()) as { error: string };
      throw new Error(errorData.error || 'Ошибка при регистрации');
    }

    const data = (await response.json()) as RegisterResponse;

    return data.token;
  },
};
