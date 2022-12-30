import { IconButton, InputAdornment, OutlinedInput, styled } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

interface UIProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const SearchMui = (props: UIProps) => {
  return (
    <Searching
      value={props.value}
      onChange={e => props.onChange && props.onChange(e.target.value)}
      placeholder={props.placeholder}
      startAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="searching">
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export default SearchMui;

const Searching = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  paddingLeft: 0,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': { width: '50%', boxShadow: theme['customShadows'].z8 },
}));
