import { styled } from '@mui/material/styles';
import { Toolbar, Tooltip, IconButton, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { SearchMui } from 'components/search';

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));
interface UIProps {
  numSelected: number;
  filterName: string;
  onFilterName: (value: string) => void;
}

const UserListToolbar = (props: UIProps) => {
  return (
    <RootStyle
      sx={{
        ...(props.numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {props.numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {props.numSelected} selected
        </Typography>
      ) : (
        <SearchMui
          value={props.filterName}
          onChange={props.onFilterName}
          placeholder="Search user..."
        />
      )}

      {props.numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
      )}
    </RootStyle>
  );
};

export default UserListToolbar;
