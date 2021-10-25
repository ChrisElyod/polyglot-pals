import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { FormikHandlers } from 'formik';
import React, { ChangeEventHandler, FC, ReactComponentElement } from 'react';

interface IFormField {
  label?: string;
  fieldError?: string;
  fieldTouched?: boolean;
  fieldInput: React.ReactNode;
  fieldName: string;
  formikHandleChange: ChangeEventHandler
}

const FormField:FC<IFormField> = ({ label, fieldError, fieldTouched, fieldInput, fieldName, formikHandleChange }) => {
  return (
    <FormControl isInvalid={fieldError && fieldTouched} mb="3" onBlur={(e) => console.log(e)}>
      {label && <FormLabel htmlFor={fieldName}>{label}</FormLabel>}
      {fieldInput}
      <FormErrorMessage>{fieldError}</FormErrorMessage>
    </FormControl>
  )
};

export default FormField;