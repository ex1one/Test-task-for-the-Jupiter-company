import { RootState } from '../index';

const selectors = {
  gallery: (state: RootState) => state.galleryReducer,
};
export default selectors;
