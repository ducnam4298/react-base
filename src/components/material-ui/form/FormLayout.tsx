import { useState } from 'react';
import { Stack } from '@mui/material';
import { getIn, useFormik } from 'formik';
import { CompareArrows as CompareArrowsIcon, SyncAlt as SyncAltIcon } from '@mui/icons-material';
import { ChoiceType, ControlType, IForm, IFormControl, IFormRow } from 'common/models/form';
import { RightOption, FileType } from 'common/models/enum';
// import { LanguageCode } from 'common/models/enum';
// import { Language } from 'common/models/language';
import FormBoxLayout from './FormBoxLayout';
import { isArray } from 'lodash';
import {
  ButtonMui,
  TextFieldMui,
  SelectFieldMui,
  DatePickerFieldMui,
  RangePickerFieldMui,
  SwitchFieldMui,
  AutocompleteFieldMui,
  EditorField,
  UploadFileField,
} from 'components/material-ui';
import './index.css';
import AutocompleteVirtualizeField from '../AutocompleteVirtualizeField';
interface UIProps {
  form: IForm;
  numberBox?: number;
  listRightOptions?: RightOption[];
  initialValues: any;
  validationSchema?: any;
  onChangeTags?: (tags: string[]) => void;
  textButton?: string;
  iconButton?: string;
  disabledButton?: boolean;
  onSave?: (value: any) => void;
  onReset?: () => void;
  onSubmit?: () => void;
}

const FormLayout = (props: UIProps) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: props.initialValues,
    validationSchema: props.validationSchema,
    onSubmit: values => {
      props.onSave && props.onSave(values);
    },
  });
  // const [code, setCode] = useState(LanguageCode.EN.toString());
  // const getFieldValue = (fieldName: string) => {
  //   let item = formik.values.languages?.find((e: Language) => e.code === code);
  //   return item && item[fieldName];
  // };
  // const setFieldValue = (fieldName: string, v: string) => {
  //   let values = formik.values;
  //   let item = values.languages?.find((e: Language) => e.code === code);
  //   if (item) {
  //     item[fieldName] = v;
  //     values[fieldName] = v;
  //   }
  //   formik.setValues(values);
  // };

  const errorMessage = (fieldName: string) => {
    const touched: boolean = getIn(formik.touched, fieldName);
    const error: string = getIn(formik.errors, fieldName);
    if (error && touched) return { touched, error };
  };

  const errorMessageFile = (fieldName: string) => {
    const touched: { path: boolean } | { path: boolean }[] = getIn(formik.touched, fieldName);
    const error: string = getIn(formik.errors, fieldName);
    if (error && touched) {
      let touchedValid;
      if (isArray(touched)) {
        touchedValid = touched.find(t => t.path === true);
      } else {
        touchedValid = touched;
      }
      return { touched: touchedValid?.path ?? touchedValid, error };
    }
  };

  const FormControls = (boxNumber: number) => {
    return (
      <Stack width="100%" gap={boxNumber !== 0 ? 0 : '10px'}>
        {props.form?.rows?.map((r: IFormRow, index: number) => (
          <Stack key={'r' + index} direction="row" gap={boxNumber !== 0 ? 0 : '10px'}>
            {r.controls
              ?.filter(c => c.boxNumber === boxNumber)
              .map((c: IFormControl) => {
                if (
                  c.type === ControlType.Text ||
                  c.type === ControlType.Password ||
                  c.type === ControlType.Number ||
                  c.type === ControlType.Note
                ) {
                  return (
                    <Stack key={'c' + c.id} width={100 / (r.controls?.length ?? 1) + '%'}>
                      <TextFieldMui
                        fullWidth={c.fullWidth}
                        formik={formik}
                        control={c}
                        onChange={value => formik.setFieldValue(c.id, value)}
                        error={errorMessage(c.id)?.touched}
                        helperText={errorMessage(c.id)?.error}
                      />
                    </Stack>
                  );
                } else if (c.type === ControlType.Choice) {
                  if (c.choiceDisplay === ChoiceType.Select) {
                    return (
                      <Stack key={'c' + c.id} width={100 / (r.controls?.length ?? 1) + '%'}>
                        <SelectFieldMui
                          fullWidth={c.fullWidth}
                          formik={formik}
                          control={c}
                          optionLabel="label"
                          optionValue="value"
                          onChange={value => formik.setFieldValue(c.id, value)}
                          error={errorMessage(c.id)?.touched}
                          helperText={errorMessage(c.id)?.error}
                        />
                      </Stack>
                    );
                  } else if (c.choiceDisplay === ChoiceType.Autocomplete) {
                    return (
                      <Stack spacing={2} key={'c' + c.id} width={100 / (r.controls?.length ?? 1) + '%'}>
                        <AutocompleteFieldMui
                          fullWidth={c.fullWidth}
                          formik={formik}
                          control={c}
                          optionLabel="label"
                          optionValue="value"
                          onChange={value => formik.setFieldValue(c.id, value)}
                          error={errorMessage(c.id)?.touched}
                          helperText={errorMessage(c.id)?.error}
                        />
                        <AutocompleteVirtualizeField
                          fullWidth={c.fullWidth}
                          formik={formik}
                          control={c}
                          optionLabel="label"
                          optionValue="value"
                          onChange={value => formik.setFieldValue(c.id, value)}
                          error={errorMessage(c.id)?.touched}
                          helperText={errorMessage(c.id)?.error}
                        />
                      </Stack>
                    );
                  } else return <></>;
                } else if (c.type === ControlType.Toggle) {
                  return (
                    <Stack key={'c' + c.id} width={100 / (r.controls?.length ?? 1) + '%'}>
                      <SwitchFieldMui
                        fullWidth={c.fullWidth}
                        formik={formik}
                        control={c}
                        onChange={value => formik.setFieldValue(c.id, value)}
                        error={errorMessage(c.id)?.touched}
                        helperText={errorMessage(c.id)?.error}
                      />
                    </Stack>
                  );
                } else if (c.type === ControlType.Editor) {
                  return (
                    <Stack key={'c' + c.id} width={100 / (r.controls?.length ?? 1) + '%'}>
                      <EditorField
                        fullWidth={c.fullWidth}
                        formik={formik}
                        control={c}
                        onChange={value => formik.setFieldValue(c.id, value)}
                        error={errorMessage(c.id)?.touched}
                        helperText={errorMessage(c.id)?.error}
                      />
                    </Stack>
                  );
                } else if (c.type === ControlType.Date) {
                  if (c.choiceDisplay === ChoiceType.Date) {
                    return (
                      <Stack key={'c' + c.id} width={100 / (r.controls?.length ?? 1) + '%'}>
                        <DatePickerFieldMui
                          fullWidth={c.fullWidth}
                          formik={formik}
                          control={c}
                          onChange={value => formik.setFieldValue(c.id, value)}
                          error={errorMessage(c.id)?.touched}
                          helperText={errorMessage(c.id)?.error}
                        />
                      </Stack>
                    );
                  } else {
                    return (
                      <Stack key={'c' + c.id} width={100 / (r.controls?.length ?? 1) + '%'}>
                        <RangePickerFieldMui
                          fullWidth={c.fullWidth}
                          formik={formik}
                          control={c}
                          onChange={value => formik.setFieldValue(c.id, value)}
                          error={errorMessage(c.id)?.touched}
                          helperText={errorMessage(c.id)?.error}
                        />
                      </Stack>
                    );
                  }
                } else if (c.type === ControlType.Attachment) {
                  return (
                    <Stack key={'c' + c.id} width={100 / (r.controls?.length ?? 1) + '%'}>
                      <UploadFileField
                        control={c}
                        height={'10rem'}
                        width={'100%'}
                        fileType={
                          c.choiceDisplay === ChoiceType.File ? FileType.File : FileType.Image
                        }
                        multiple={c.multiple}
                        accept={c.accept}
                        value={formik.values[c.id]}
                        onChange={files => {
                          if (c.choiceDisplay === ChoiceType.File) {
                            formik.setFieldValue(c.id, files);
                          } else {
                            files && files[0] && formik.setFieldValue(c.id, files[0]);
                          }
                        }}
                        error={
                          formik.values[c.id]
                            ? errorMessageFile(c.id)?.touched
                            : errorMessage(c.id)?.touched
                        }
                        helperText={
                          formik.values[c.id]
                            ? errorMessageFile(c.id)?.error
                            : errorMessage(c.id)?.error
                        }
                      />
                    </Stack>
                  );
                } else if (c.type === ControlType.Language) {
                  return (
                    <Stack key={'c' + c.id} width={100 / (r.controls?.length ?? 1) + '%'}></Stack>
                  );
                } else {
                  return <></>;
                }
              })}
          </Stack>
        ))}
      </Stack>
    );
  };
  const [isShow, setShow] = useState(true);
  const { numberBox = 1, listRightOptions = [] } = props;
  const onToggle = () => setShow(!isShow);

  const RightBox = () => {
    let indents: any[] = [];
    for (let i = 0; i < numberBox; i++) {
      indents.push(
        <FormBoxLayout
          show={listRightOptions[i]?.show ?? true}
          title={listRightOptions[i]?.title ?? `Right box ${i + 1}`}
          key={'box' + i}
          children={FormControls(i + 1)}
        />
      );
    }
    return indents;
  };
  return (
    <>
      {props.listRightOptions ? (
        <div key={'form-wrapper'} className="nate-team-form-wrapper">
          <div className={`nate-team-left-form ${!isShow ? 'nate-team-w-left-hidden' : ''}`}>
            {FormControls(0)}
          </div>
          <div className={`nate-team-right-form ${!isShow ? 'nate-team-w-right-hidden' : ''}`}>
            <ButtonMui size="small" variant="outlined" onClick={() => onToggle()}>
              {isShow ? <CompareArrowsIcon /> : <SyncAltIcon />}
              {isShow ? 'Hide' : undefined}
            </ButtonMui>
            {isShow && <div className="nate-team-box-list">{RightBox()}</div>}
          </div>
        </div>
      ) : (
        FormControls(0)
      )}
      <Stack direction="row" justifyContent="flex-end" width="100%" gap={3}>
        <ButtonMui
          size="large"
          variant="outlined"
          onClick={() => {
            props.onReset && props.onReset();
            formik.resetForm();
          }}
        >
          Hủy
        </ButtonMui>
        <ButtonMui
          size="large"
          variant="contained"
          onClick={() => {
            props.onSubmit && props.onSubmit();
            formik.handleSubmit();
          }}
        >
          Gửi
        </ButtonMui>
      </Stack>
    </>
  );
};

export { FormLayout };
