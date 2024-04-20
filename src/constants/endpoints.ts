const BASE_URL = 'https://jsonplaceholder.typicode.com';

const POSTS_API = {
  GET_POSTS: '/posts',
  GET_POST_BY_ID: (postId: number) => `/posts/${postId}`,
} as const;

export {POSTS_API, BASE_URL};
