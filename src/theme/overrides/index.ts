import { Theme } from '@mui/material';
import { merge } from 'lodash';
import Card from './Card';
import Lists from './Lists';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import IconButton from './IconButton';
import Autocomplete from './Autocomplete';
import InputLabel from './InputLabel';
import CalendarPicker from './CalendarPicker';
import SvgIcon from './SvgIcon';
import Chip from './Chip';
import Menu from './Menu';
import Table from './Table';

// ----------------------------------------------------------------------

const ComponentsOverrides = (theme: Theme) => {
  return merge(
    Card(theme),
    Lists(theme),
    Paper(theme),
    InputLabel(theme),
    Input(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    IconButton(theme),
    Autocomplete(theme),
    CalendarPicker(theme),
    SvgIcon(theme),
    Chip(theme),
    Menu(theme),
    Table(theme)
  );
};

export default ComponentsOverrides;
