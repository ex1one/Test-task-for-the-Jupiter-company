import { GalleryAction, GalleryActionTypes, IGalleryState } from './types';

const initialState: IGalleryState = {
  gallery: null,
  error: null,
};

const galleryReducer = (state = initialState, action: GalleryAction) => {
  switch (action.type) {
    case GalleryActionTypes.SET_GALLERY:
      return { ...state, gallery: action.payload };
    case GalleryActionTypes.SET_ERROR:
      return { ...state, gallery: null, error: action.payload };
    default: return state;
  }
};

export default galleryReducer;
