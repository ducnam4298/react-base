import { TableBody, TableRow, TableCell } from '@mui/material';
import { SearchNotFoundMui } from 'components/search';

interface TableNotFoundProps {
  searchQuery: string;
}

const TableNotFound = (props: TableNotFoundProps) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
          <SearchNotFoundMui searchQuery={props.searchQuery} />
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default TableNotFound;
