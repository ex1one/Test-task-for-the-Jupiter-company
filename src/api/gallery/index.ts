import instance from '../instance';
import { IGallery } from './types';

const fetchGallery = (page: number, query: string) => instance.get<IGallery[]>('/photos', {
  params: {
    page,
    query,
  },
});

export default fetchGallery;
