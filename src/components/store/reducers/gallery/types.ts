import { IGallery } from '../../../../api/gallery/types';

export interface IGalleryState {
  gallery: IGallery[] | null;
  error: null | unknown;
}

export enum GalleryActionTypes {
  GET = 'GET',
  ERROR = 'ERROR',
}

export interface SetGalleryAction {
  type: GalleryActionTypes.GET;
  payload: IGallery[];
}

export interface SetErrorAction {
  type: GalleryActionTypes.ERROR;
  payload: unknown;
}

export type GalleryAction =
  SetGalleryAction |
  SetErrorAction;
