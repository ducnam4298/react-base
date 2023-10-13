import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import {  useState } from 'react';
import {
  Stack,
  Avatar,
  Checkbox,
  TableRow,
  TableCell,
  Container,
  Typography,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import Page from 'components/Page';
import Label from 'components/Label';
import UserListHead from './userListHead';
import UserListToolbar from './userListToolbar';
import UserMoreMenu from './userMoreMenu';
import USER_LIST from '../../_mocks_/user';
import { ButtonMui, ModalMui, PaginationMui } from 'components';
import { TableMui } from 'components/table';
import { FormLayout } from 'components/material-ui/form/FormLayout';
import { useAppDispatch, useAppSelector } from 'store';
import { Forms, validationSchema } from './form/config';
import { UserAction } from 'store/user';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', align: false },
  { id: 'company', label: 'Company', align: false },
  { id: 'role', label: 'Role', align: false },
  { id: 'isVerified', label: 'Verified', align: false },
  { id: 'status', label: 'Status', align: false },
  { id: '' },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, _user => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map(el => el[0]);
}

const User = () => {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [selected, setSelected] = useState<any>([]);
  const [orderBy, setOrderBy] = useState('company');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openModal, onChangeModal] = useState(false);
  const userState = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelections = USER_LIST.map(n => n.name);
      setSelected(newSelections);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (per: number) => {
    setRowsPerPage(per);
    setPage(0);
  };

  const handleFilterByName = (value: string) => {
    setFilterName(value);
  };

  const filteredUsers = applySortFilter(USER_LIST, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  const onSave = (values: any) => {
    dispatch(UserAction.fieldChange({ fieldName: 'createNewUser', fieldValue: values }));
  };

  return (
    <Page title="User | Minimal-UI">
      <ModalMui open={openModal} height={400} onClose={() => onChangeModal(false)}>
        <FormLayout
          form={Forms[0]}
          initialValues={userState.createNewUser}
          validationSchema={validationSchema}
          onSave={onSave}
        />
      </ModalMui>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <ButtonMui
            label="New User"
            startIcon={<Add sx={{ color: '#ffffff' }} />}
            onClick={() => onChangeModal(true)}
          />
        </Stack>
        <TableMui
          minWidth={800}
          Header={
            <UserListHead
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={USER_LIST.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
            />
          }
          Body={filteredUsers
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(row => {
              const { id, name, role, status, company, avatarUrl, isVerified } = row;
              const isItemSelected = selected.indexOf(name) !== -1;
              return (
                <TableRow
                  hover
                  key={id}
                  tabIndex={-1}
                  role="checkbox"
                  selected={isItemSelected}
                  aria-checked={isItemSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isItemSelected}
                      onChange={event => handleClick(event, name)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row" padding="none">
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar alt={name} src={avatarUrl} />
                      <Typography variant="subtitle2" noWrap>
                        {name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="left">{company}</TableCell>
                  <TableCell align="left">{role}</TableCell>
                  <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell>
                  <TableCell align="left">
                    <Label variant="ghost" color={(status === 'banned' && 'error') || 'success'}>
                      {sentenceCase(status)}
                    </Label>
                  </TableCell>

                  <TableCell align="right">
                    <UserMoreMenu />
                  </TableCell>
                </TableRow>
              );
            })}
          Pagination={
            <PaginationMui
              rowsPerPageOptions={[5, 10, 25]}
              count={USER_LIST.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          }
          Toolbar={
            <UserListToolbar
              numSelected={selected.length}
              filterName={filterName}
              onFilterName={handleFilterByName}
            />
          }
          isNotFound={isUserNotFound}
          searchQuery={filterName}
          count={USER_LIST.length}
          rowsPerPage={rowsPerPage}
          page={page}
          cell={TABLE_HEAD.length + 1}
        />
      </Container>
    </Page>
  );
};

export default User;
