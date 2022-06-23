import { GalleryAction, GalleryActionTypes, IGalleryState } from './types';

const initialState: IGalleryState = {
  gallery: null,
  error: null,
  isLoading: false,
};

const galleryReducer = (state = initialState, action: GalleryAction) => {
  switch (action.type) {
    case GalleryActionTypes.GET:
      return { ...state, isLoading: true };
    case GalleryActionTypes.GET_SUCCESS:
      return { ...state, gallery: action.payload, isLoading: false };
    case GalleryActionTypes.ERROR:
      return { ...state, error: action.payload };
    default: return state;
  }
};

export default galleryReducer;
