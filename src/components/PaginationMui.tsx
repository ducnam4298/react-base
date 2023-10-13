import { TablePagination } from '@mui/material';

interface UIProps {
  count?: number;
  rowsPerPageOptions?: number[];
  page?: number;
  onPageChange?: (page: number) => void;
  rowsPerPage?: number;
  onRowsPerPageChange?: (per: number) => void;
}

enum ItemAriaLabel {
  First = 'First',
  Last = 'Last',
  Next = 'Next',
  Previous = 'Previous',
}

const RenderItemAriaLabel = (type: 'first' | 'last' | 'next' | 'previous') => {
  if (type === 'first') {
    return ItemAriaLabel.First;
  } else if (type === 'last') {
    return ItemAriaLabel.Last;
  } else if (type === 'next') {
    return ItemAriaLabel.Next;
  } else {
    return ItemAriaLabel.Previous;
  }
};
const PaginationMui = (props: UIProps) => {
  return (
    <TablePagination
      rowsPerPageOptions={props.rowsPerPageOptions ?? [5]}
      component="div"
      count={props.count ?? 0}
      page={props.page ?? 0}
      getItemAriaLabel={RenderItemAriaLabel}
      showFirstButton
      showLastButton
      onPageChange={(e, page) => props.onPageChange && props.onPageChange(page)}
      labelRowsPerPage="Show item"
      rowsPerPage={props.rowsPerPage ?? 5}
      onRowsPerPageChange={e =>
        props.onRowsPerPageChange && props.onRowsPerPageChange(Number(e.target.value))
      }
    />
  );
};

export default PaginationMui;
