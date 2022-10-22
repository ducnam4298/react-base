import { useEffect, useState } from 'react';
import { Editor as EditorForm } from '@tinymce/tinymce-react';
// import { Editor as TinyMCEEditor } from 'tinymce';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  CircularProgress,
  Stack,
  useTheme,
} from '@mui/material';
import { FormikValues } from 'formik';
import { IFormControl } from 'common/models/form';
import './default.css';
import './error.css';

interface UIProps {
  fullWidth?: boolean;
  placeholder?: string;
  notched?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';

  formik: FormikValues;
  control: IFormControl;
  onChange?: (content: string, editor: any) => void;
  error?: boolean;
  helperText?: string;
}

const EditorField = (props: UIProps) => {
  if (props.error) {
    let defaultElementFirst = document.getElementsByClassName('default-editor')[0];
    let defaultElementSecond = document.getElementsByClassName('default-editor')[1];
    if (defaultElementFirst && defaultElementSecond) {
      defaultElementFirst.className = 'error-editor tox-tinymce';
      defaultElementSecond.className = 'error-editor tox-silver-sink tox-tinymce-aux"';
    }
  } else {
    let toxElementFirst = document.getElementsByClassName('tox')[0];
    let toxElementSecond = document.getElementsByClassName('tox')[1];
    if (toxElementFirst && toxElementSecond) {
      toxElementFirst.className = 'default-editor tox-tinymce';
      toxElementSecond.className = 'default-editor tox-silver-sink tox-tinymce-aux"';
    }
    let errorElementFirst = document.getElementsByClassName('error-editor')[0];
    let errorElementSecond = document.getElementsByClassName('error-editor')[1];
    if (errorElementFirst && errorElementSecond) {
      errorElementFirst.className = 'default-editor tox-tinymce';
      errorElementSecond.className = 'default-editor tox-silver-sink tox-tinymce-aux"';
    }
  }
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const Spinner = () => (
    <Stack
      width="100%"
      direction="row"
      justifyContent="center"
      padding="10px"
      border={`1px solid ${theme.palette.primary.main}`}
      borderTop={0}
      borderRadius="0 0 8px 8px"
    >
      <CircularProgress color="primary" />
    </Stack>
  );
  return (
    <FormControl fullWidth={props.fullWidth} variant={props.variant ?? 'outlined'}>
      <InputLabel
        id={props.control.id + '-editor-outlined-label'}
        shrink={true}
        htmlFor={props.control.id + '-editor-outlined'}
        error={props.error}
        style={{
          position: 'unset',
          transform: 'translate(0, 0) scale(1)',
          padding: 10,
          paddingLeft: 14,
          borderTop: 1,
          borderRight: 1,
          borderBottom: 0,
          borderLeft: 1,
          borderStyle: 'solid',
          borderColor: props.error ? theme.palette.error.main : theme.palette.primary.main,
          borderRadius: '8px 8px 0 0',
          width: '100%',
          maxWidth: '100%',
        }}
      >
        {props.control.title}
      </InputLabel>
      {loading && <Spinner />}
      <EditorForm
        apiKey="z1mntph9svsj9hxj92tnwn79zsuoj0w8v3849cw1e1q27u14"
        value={props.formik.values[props.control.id] ?? ''}
        init={{
          skin_url: props.error ? './errors.css' : './default.css',
          placeholder: props.placeholder,
          height: 250,
          menubar: true,
          plugins: [],
          textcolor_rows: '4',
          keep_styles: true,
          toolbar:
            'undo redo | styleselect | fontsizeselect| code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent ',
        }}
        onInit={() => {
          setLoading(false);
        }}
        onEditorChange={(c, e) => props.onChange && props.onChange(c, e)}
        toolbar="code"
      />
      {props.error && props.helperText && (
        <FormHelperText error={props.error} id={props.control.id + '-helper-text'}>
          {props.helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default EditorField;
