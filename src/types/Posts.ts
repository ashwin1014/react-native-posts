interface Posts {
  body: string;
  id: number;
  title: string;
  userId: number;
}

type PostsResponse = Posts[];

export type {Posts, PostsResponse};
