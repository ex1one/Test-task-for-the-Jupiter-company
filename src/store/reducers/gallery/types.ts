import { IGallery } from '../../../api/gallery/types';

export interface IGalleryState {
  gallery: IGallery[] | null;
  error: null | unknown;
  isLoading: boolean;
}

export enum GalleryActionTypes {
  GET = 'GET',
  GET_SUCCESS = 'GET_SUCCESS',
  ERROR = 'ERROR',
}

export interface GetGalleryAction {
  type: GalleryActionTypes.GET;
}

export interface GetSuccessGalleryAction {
  type: GalleryActionTypes.GET_SUCCESS;
  payload: IGallery[];
}
export interface ErrorGalleryAction {
  type: GalleryActionTypes.ERROR;
  payload: unknown;
}

export type GalleryAction =
  GetGalleryAction |
  GetSuccessGalleryAction |
  ErrorGalleryAction;
