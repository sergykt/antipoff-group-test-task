import { User } from '../model/types';
import { UserListResponse, UserRaw } from './types';

export const mapUser = (user: UserRaw): User => ({
  id: user.id,
  email: user.email,
  firstName: user.first_name,
  lastName: user.last_name,
  avatar: user.avatar,
});

export const mapUserList = (userList: UserListResponse) => {
  const { data, per_page: perPage, total_pages: totalPages, ...rest } = userList;

  return {
    ...rest,
    perPage,
    totalPages,
    data: data.map(mapUser),
  };
};
