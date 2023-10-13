import { TableRow, TableCell } from '@mui/material';

interface TableEmptyProps {
  page: number;
  rowsPerPage: number;
  count: number;
  cell: number;
}

const TableEmpty = (props: TableEmptyProps) => {
  const emptyRows =
    props.page > 0 ? Math.max(0, (1 + props.page) * props.rowsPerPage - props.count) : 0;
  return emptyRows > 0 ? (
    <TableRow style={{ height: 53 * emptyRows }}>
      <TableCell colSpan={props.cell} sx={{ borderBottom: 'none' }} />
    </TableRow>
  ) : (
    <></>
  );
};

export default TableEmpty;
