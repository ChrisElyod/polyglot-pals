import React from 'react';
import { Box, Container, Text } from "@chakra-ui/layout";
import SectionHeader from '../components/section-header';
import { useFormik } from 'formik';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import Link from 'next/link';
import Image from 'next/image';

import * as Yup from 'yup';

import styles from '../styles/signup.module.scss';
import FormField from '../components/form-field';

export default function Signup() {

  const signupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid Email')
      .required('Required'),
    userName: Yup.string()
      .required('Username is required.')
      .min(3, 'Usernames must be a minimum of 3 characters')
      .matches(/^(?!.*[!@#$%^&*])/, 'Must not contain special characters'),
    password: Yup.string()
      .required('Password is required.')
      .min(8, 'Password should be a minimum of 8 characters')
      .matches(/^(?=.*[0-9]{1,})/, 'Must contain at least 1 number')
      .matches(/(?=.*[!@#\$%\^&\*])/, 'Must contain at least 1 special character')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      userName: '',
      password: '',
    },
    validationSchema: signupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    }
  })
 
  return (
    <Box bg="whiteAlpha.900" borderRadius="15px" boxShadow="2xl" display="flex" position="relative" w={{ base: "75vw", md: "40vw" }}>
      <Box position="relative" width="40%" height="inherit" borderLeftRadius="15px" display={{ base: 'none', md: 'inline-block' }}>
        <Image src="/images/contour.png" layout='fill' objectFit='cover' alt="woweeee" className={styles.signupImageContainer} /> 
      </Box>
      <Box p="8">
        <SectionHeader>Sign Up</SectionHeader>
        <form onSubmit={formik.handleSubmit} style={{ marginTop: '.5em' }}>
          <FormField
            fieldInput={<Input id="email" name="email" type="email" />}
            fieldError={formik.errors.email}
            fieldTouched={formik.touched.email}
            fieldName="email"
            formikHandleChange={formik.handleChange}
            label="Email Address"
          />
          <FormField
            fieldInput={<Input id="userName" name="userName" type="text" />}
            fieldError={formik.errors.userName}
            fieldTouched={formik.touched.userName}
            fieldName="userName"
            formikHandleChange={formik.handleChange}
            label="Username"
          />
          <FormField
            fieldInput={<Input id="password" name="password" type="password" />}
            fieldError={formik.errors.password}
            fieldTouched={formik.touched.password}
            fieldName="password"
            formikHandleChange={formik.handleChange}
            label="Password"
          />
          <Button type="submit" colorScheme="brand" my="4">Sign Up!</Button>
        </form>
        <Text display="flex" flexDirection={{ base: 'column', sm: 'row', md: 'column', lg: 'row' }}>Already have an account?&nbsp;<Text color="teal"><Link href="/signin">Sign in...</Link></Text></Text>
      </Box>
    </Box>
  )
}