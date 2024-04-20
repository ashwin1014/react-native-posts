import {useCallback} from 'react';

import {useQuery} from '@tanstack/react-query';
import {AxiosError} from 'axios';

import {POSTS_API} from 'src/constants/endpoints';
import {CACHE_KEYS} from 'src/constants/queryKeys';
import {useAxios} from 'src/providers/AxiosProvider';
import {type Posts} from 'src/types/Posts';
/**
 * @see https://jsonplaceholder.typicode.com/
 *
 * @returns Posts[]
 */
function usePostsByIdQuery(postId: number) {
  const axios = useAxios();

  const fetchBuyer = useCallback(
    async (signal: AbortSignal | undefined): Promise<Posts> => {
      const {data} = await axios.get<Posts>(POSTS_API.GET_POST_BY_ID(postId), {
        signal,
      });
      return data;
    },
    [axios, postId],
  );

  return useQuery<Posts, AxiosError>({
    queryFn: ({signal}) => fetchBuyer(signal),
    queryKey: [CACHE_KEYS.POSTS, postId],
  });
}

export default usePostsByIdQuery;
