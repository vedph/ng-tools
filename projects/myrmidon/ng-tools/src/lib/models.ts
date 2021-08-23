/**
 * Generic paging options.
 */
export interface PagingOptions {
  pageNumber: number;
  pageSize: number;
}

/**
 * A generic page of data returned from some service.
 */
 export interface DataPage<T> extends PagingOptions {
  pageCount: number;
  total: number;
  items: T[];
}

/**
 * A wrapper for either a value or an optional error message.
 */
 export interface ErrorWrapper<T> {
  value?: T;
  error?: string;
}
