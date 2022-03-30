import { MenuItem, TextField } from '@mui/material';
interface UIProps {
  options: any[];
  onSort?: () => void;
}

const BlogPostsSort = (props: UIProps) => {
  return (
    <TextField
      select
      size="small"
      value="latest"
      onChange={() => {
        props.onSort && props.onSort();
      }}
    >
      {props.options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default BlogPostsSort;
