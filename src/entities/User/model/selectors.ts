export const getLikes = (state: RootState) => state.users.likes;

export const getLikeById = (state: RootState, id: number) => state.users.likes[id] ?? false;
