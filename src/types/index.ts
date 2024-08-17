export interface ListResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    totalRecords: number;
    totalPages: number;
  };
}

export interface PageProps {
  params: {
    locale: string;
  };
}
