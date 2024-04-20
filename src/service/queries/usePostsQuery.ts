import {useCallback} from 'react';

import {useQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';

import {POSTS_API} from 'src/constants/endpoints';
import {CACHE_KEYS} from 'src/constants/queryKeys';
import {useAxios} from 'src/providers/AxiosProvider';
import {type PostsResponse} from 'src/types/Posts';
/**
 * @see https://jsonplaceholder.typicode.com/
 *
 * @returns PostsResponse[]
 */
function usePostsQuery() {
  const axios = useAxios();

  const fetchBuyer = useCallback(
    async (signal: AbortSignal | undefined): Promise<PostsResponse> => {
      const {data} = await axios.get<PostsResponse>(POSTS_API.GET_POSTS, {
        signal,
      });
      return data;
    },
    [axios],
  );

  return useQuery<PostsResponse, AxiosError>({
    queryFn: ({signal}) => fetchBuyer(signal),
    queryKey: [CACHE_KEYS.POSTS],
  });
}

export default usePostsQuery;
