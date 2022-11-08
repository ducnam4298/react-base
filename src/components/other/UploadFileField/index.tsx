import React, { useEffect, useMemo } from 'react';
import { FormHelperText, Stack, Theme, useTheme } from '@mui/material';
import { AddAPhoto as AddAPhotoIcon } from '@mui/icons-material';
import styled from '@emotion/styled';
import { useFilePicker } from 'hooks';
import * as Assets from 'assets';
import { IFormControl } from 'common/models/form';
import { FileType } from 'common/models/enum';

interface UIProps {
  control: IFormControl;
  width: string | number;
  height: string | number;
  fileType: FileType;
  multiple?: boolean;
  accept?: string | string[];
  value?: any;
  minSize?: number;
  maxSize?: number;
  onChange?: (file?: File[]) => void;
  error?: boolean;
  helperText?: string;
}

const UploadFileField = (props: UIProps) => {
  const theme = useTheme();
  const [openFileSelector, onChangeFile, { plainFiles }] = useFilePicker({
    accept: props.accept,
    multiple: props.multiple ?? false,
    limitFilesConfig: { min: props.minSize ?? 1, max: props.maxSize },
  });
  useEffect(() => {
    if (plainFiles.length > 1) {
      props.onChange && props.onChange(plainFiles);
    } else if (plainFiles.length === 1) {
      props.onChange && props.onChange(plainFiles);
    } else {
      props.onChange && props.onChange(undefined);
    }
  }, [plainFiles]);
  useEffect(() => {
    if (!props.value) {
      onChangeFile([]);
    }
  }, [props.value]);
  const UploadFile = useMemo(() => {
    return props.fileType === FileType.File ? (
      <>
        <Stack
          direction="row"
          height="28.8px"
          padding="0"
          marginTop="0.5rem"
          minWidth="5.5rem"
          maxWidth="6.5rem"
          justifyContent="space-evenly"
          border={`1px solid ${
            props.error ? theme.palette.error.main : theme.palette.primary.main
          }`}
          borderRadius="8px"
          sx={{
            cursor: 'pointer',
            '&:hover': {
              cursor: 'pointer',
              border: `1px solid ${
                props.error ? theme.palette.error.light : theme.palette.primary.light
              }`,
            },
          }}
          onClick={openFileSelector}
        >
          {props.value && props.value.length > 0 ? (
            <>
              <Assets.UpdateFile
                fill={props.error ? theme.palette.error.main : theme.palette.primary.main}
                style={{ height: 'auto', width: '1rem' }}
              />
              <Label theme={theme} error={props.error} style={{ fontSize: 12 }}>
                UpdateFile
              </Label>
            </>
          ) : (
            <>
              <Assets.UploadFile
                fill={props.error ? theme.palette.error.main : theme.palette.primary.main}
                style={{ height: 'auto', width: '1rem' }}
              />
              <Label theme={theme} error={props.error} style={{ fontSize: 12 }}>
                UploadFile
              </Label>
            </>
          )}
        </Stack>
        {plainFiles && plainFiles.length ? (
          plainFiles.map((file: File, index: number) => (
            <Stack key={file.name} direction="row" gap="10px" alignItems="center">
              <Label theme={theme}>{file.name}</Label>
              <Assets.RemoveFile
                fill={theme.palette.error.main}
                style={{
                  height: '0.7rem',
                  width: 'auto',
                  cursor: 'pointer',
                }}
                onClick={() => props.onChange && props.onChange(plainFiles.splice(index, 1))}
              />
            </Stack>
          ))
        ) : (
          <></>
        )}
      </>
    ) : (
      <Stack
        width={props.width ?? '4rem'}
        height={props.height ?? '4rem'}
        borderRadius="8px"
        border={`1px solid ${props.error ? theme.palette.error.main : theme.palette.primary.main}`}
        position="relative"
        sx={{
          '& > svg': {
            display: 'none',
          },
          '&:hover': {
            cursor: 'pointer',
            border: `1px solid ${
              props.error ? theme.palette.error.light : theme.palette.primary.light
            }`,
          },
          '&:hover > svg': {
            display: 'block',
          },
        }}
        onClick={openFileSelector}
      >
        {!props.value ? (
          <AddAPhotoIcon
            style={{
              display: 'block',
              margin: 'auto',
              color: props.error ? theme.palette.error.main : theme.palette.primary.main,
              fontSize: '2rem',
            }}
          />
        ) : (
          <>
            <Image
              width={props.width}
              height={props.height}
              src={plainFiles.length > 0 ? URL.createObjectURL(props.value) : props.value}
            />
            <Assets.UpdateFile
              fill={theme.palette.error.main}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 30,
                height: 'auto',
              }}
            />
          </>
        )}
      </Stack>
    );
  }, [props.value, plainFiles, props.error]);
  return (
    <Stack>
      {props.control.title && (
        <Stack direction="row">
          <Label theme={theme} error={props.error}>
            {props.control.title}
          </Label>
        </Stack>
      )}
      {UploadFile}
      {props.error && props.helperText && (
        <FormHelperText error={props.error} id={props.control?.id + '-helper-text'}>
          {props.helperText}
        </FormHelperText>
      )}
    </Stack>
  );
};

export default UploadFileField;

const Label = styled.div<{ theme: Theme; error?: boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: #323130;
  margin: 0px;
  padding: 5px 0px;
  overflow-wrap: break-word;
  display: flex;
  align-items: center;
  color: ${props =>
    props.error ? props.theme.palette.error.main : props.theme.palette.primary.main};
`;
const Image = styled.img<{ width: string | number; height: string | number }>`
  width: ${props => props.width ?? '4rem'};
  height: ${props => props.height ?? '4rem'};
  border-radius: 8px;
  &:hover: {
    opacity: 0.8;
    cursor: pointer;
  }
`;
