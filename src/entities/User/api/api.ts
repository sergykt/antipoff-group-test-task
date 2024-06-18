import { rtkApi } from '@/shared/api/rtkApi';
import { type UserListResponse, type UserByIdResponse } from './types';
import { type UserList, type User } from '../model/types';
import { mapUser, mapUserList } from './mapper';

export const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<UserList, number>({
      query: (page) => ({
        url: `/users?delay=2&page=${page}`,
      }),
      transformResponse: (response: UserListResponse) => mapUserList(response),
    }),
    getUserById: build.query<User, number>({
      query: (id) => ({
        url: `/users/${id}`,
      }),
      transformResponse: (response: UserByIdResponse) => mapUser(response.data),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
