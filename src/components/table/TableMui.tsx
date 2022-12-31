import React from 'react';
import { Card, Table, TableBody, TableContainer, TableRow } from '@mui/material';
import Scrollbar from '../Scrollbar';
import TableNotFound from './TableNotFound';
import TableEmpty from './TableEmpty';

interface UIProps {
  // min width of table
  minWidth: string | number;

  // render element of table
  Header: React.ReactNode;
  Body: React.ReactNode;
  Pagination?: React.ReactNode;

  // not found render when search data not result
  Toolbar?: React.ReactNode;
  isNotFound?: boolean;
  searchQuery: string;

  // properties will calculator when not result
  page: number;
  rowsPerPage: number;
  count: number;
  cell: number;
}

const TableMui = (props: UIProps) => {
  const { Toolbar, Pagination } = props;
  return (
    <Card>
      {Toolbar && Toolbar}
      <Scrollbar>
        <TableContainer sx={{ minWidth: props.minWidth }}>
          <Table>
            {props.Header}
            <TableBody>
              {props.Body}
              <TableEmpty
                count={props.count}
                rowsPerPage={props.rowsPerPage}
                page={props.page}
                cell={props.cell + 1}
              />
            </TableBody>
            {props.isNotFound && <TableNotFound searchQuery={props.searchQuery} />}
          </Table>
        </TableContainer>
      </Scrollbar>
      {Pagination && Pagination}
    </Card>
  );
};

export default TableMui;
