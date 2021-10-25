import React from 'react';
import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Box } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { Field, Form, Formik } from 'formik';

function FormikForm() {
  return (
    <Formik
      initialValues={{ learningLanguage: '', speakingLanguage: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name="languageToLearn">
            {({ field, form}) => (
              <FormControl isInvalid={form.errors.learningLanguage && form.touched.learningLanguage}>
                <Select {...field} variant="filled" colorScheme="linkedin" my="2" placeholder="I'm learning">
                  <option value="option1">Language 1</option>
                  <option value="option2">Language 2</option>
                  <option value="option3">Language 3</option>
                </Select>
              </FormControl>
            )}
          </Field>
          <Field name="languageSpoken">
            {({ field, form}) => (
              <FormControl isInvalid={form.errors.speakingLanguage && form.touched.speakingLanguage}>
              <Select {...field} variant="filled" colorScheme="linkedin" my="2" placeholder="I speak">
                <option value="option1">Language 1</option>
                <option value="option2">Language 2</option>
                <option value="option3">Language 3</option>
              </Select>
            </FormControl>
            )}
          </Field>
          <Button type="submit" colorScheme="brand" isFullWidth>Submit</Button>
        </Form>
      )}
    </Formik>
  )
}

const DemoForm = () => (
  <Box>
    <FormikForm />
  </Box>
);

export default DemoForm;