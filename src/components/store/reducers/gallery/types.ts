import { IGallery } from '../../../../api/gallery/types';

export interface IGalleryState {
  gallery: IGallery[] | null;
  error: null | unknown;
}

export enum GalleryActionTypes {
  SET_GALLERY = 'SET_GALLERY',
  SET_ERROR = 'SET_ERROR',
}

export interface SetGalleryAction {
  type: GalleryActionTypes.SET_GALLERY;
  payload: IGallery[];
}

export interface SetErrorAction {
  type: GalleryActionTypes.SET_ERROR;
  payload: unknown;
}

export type GalleryAction =
  SetGalleryAction |
  SetErrorAction;
