import React from 'react';
import { Card, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import Scrollbar from '../Scrollbar';

interface UIProps {
  minWidth: string | number;
  Toolbar?: React.ReactNode;
  Pagination?: React.ReactNode;
}

const TableMui = (props: UIProps) => {
  const { Toolbar, Pagination } = props;
  return (
    <Card>
      {Toolbar && Toolbar}
      <Scrollbar>
        <TableContainer sx={{ minWidth: props.minWidth }}>
          <Table></Table>
        </TableContainer>
      </Scrollbar>
      {Pagination && Pagination}
    </Card>
  );
};




export default TableMui;
