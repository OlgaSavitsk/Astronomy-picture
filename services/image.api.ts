import {useQuery } from 'react-query';
import { ImageType } from 'types';
import { apiService } from '../services';


export function useList<T>(
  params?: T,
) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}?api_key=${process.env.NEXT_PUBLIC_ACCESS_KEY}`

  const list = () =>
    apiService.get(url, params);

  return useQuery<ImageType | ImageType[]>(['image', params], list);
}
