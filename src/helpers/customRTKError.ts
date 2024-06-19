import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const customRTKError = (error: unknown) => {
  const errorMessage = (error as FetchBaseQueryError).status
    ? `${(error as FetchBaseQueryError).status} ${(error as FetchBaseQueryError).data}`
    : 'An unknown error occurred';
  alert(errorMessage); //TODO Custom Alert
};
