import { visuallyHidden } from '@mui/utils';
import { Box, Checkbox, TableRow, TableCell, TableHead, TableSortLabel } from '@mui/material';

interface UIProps {
  order: 'asc' | 'desc';
  orderBy: string;
  rowCount: number;
  headLabel: any[];
  numSelected: number;
  onRequestSort: Function;
  onSelectAllClick: Function;
}

const UserListHead = (props: UIProps) => {
  const createSortHandler = property => event => {
    props.onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={props.numSelected > 0 && props.numSelected < props.rowCount}
            checked={props.rowCount > 0 && props.numSelected === props.rowCount}
            onChange={() => props.onSelectAllClick()}
          />
        </TableCell>
        {props.headLabel.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? 'right' : 'left'}
            sortDirection={props.orderBy === headCell.id ? props.order : false}
          >
            <TableSortLabel
              hideSortIcon
              active={props.orderBy === headCell.id}
              direction={props.orderBy === headCell.id ? props.order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {props.orderBy === headCell.id ? (
                <Box sx={{ ...visuallyHidden }}>
                  {props.order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default UserListHead;
