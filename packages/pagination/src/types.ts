export type PaginationBaseProps = {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (newPage: number) => void;
};
