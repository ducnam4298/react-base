import { MenuItem, TextField } from '@mui/material';

interface UIProps {
  options: any[];
  onSort: () => void;
}

export default function BlogPostsSort(props: UIProps) {
  return (
    <TextField select size="small" value="latest" onChange={props.onSort}>
      {props.options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
