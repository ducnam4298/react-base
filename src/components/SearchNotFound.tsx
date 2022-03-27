import { Paper, Typography } from '@mui/material';

interface UIProps {
  searchQuery?: string;
}

const SearchNotFound = (props: UIProps) => {
  return (
    <Paper>
      <Typography gutterBottom align="center" variant="subtitle1">
        Not found
      </Typography>
      <Typography variant="body2" align="center">
        No results found for &nbsp;
        <strong>&quot;{props.searchQuery}&quot;</strong>. Try checking for typos or using complete words.
      </Typography>
    </Paper>
  );
};

export default SearchNotFound;
