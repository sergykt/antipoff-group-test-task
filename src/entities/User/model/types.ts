import { type Camelize } from '@/shared/lib/camelize';
import { type UserListResponse, type UserRaw } from '../api/types';

export type User = Camelize<UserRaw>;

export type UserCardProps = Omit<User, 'email'>;

export type UserList = Camelize<UserListResponse>;

export interface UserState {
  likes: Record<number, boolean>;
}
