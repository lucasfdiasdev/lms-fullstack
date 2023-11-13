'use client';

import React, { useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Input from '@/app/components/input';
import Button from '@/app/components/button';

import { styles } from '@/app/styles/login-styles';

import { 
  AiFillGithub, 
  AiOutlineEye, 
  AiOutlineEyeInvisible 
} from 'react-icons/ai';
import { useRouter } from 'next/navigation';

interface RegisterProps {

}

const schema = Yup.object().shape({
  name: Yup.string().required("Insira seu nome completo").min(6, 'minimo de 6 caracteres'),
  email: Yup.string().email("Invalid email address").required("Please enter your email address"),
  password: Yup.string().required("Required").min(3, "minimo de 3 caracteres")
})

const Register: React.FC<RegisterProps> = ({
  
}) => {
  const [ show, setShow ] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "", 
      password: ""
    },
    validationSchema: schema,
    onSubmit: async({name, email, password}) => {
      console.log(name, email, password)
      router.push('/verification')
    }
  });

  const {
    errors, 
    touched, 
    values, 
    handleChange, 
    handleSubmit
  } = formik;

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        h-[90vh]
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
        dark:bg-slate-900
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
        "
      >
        <h1 className={`${styles.title}`}>
          Registrar conta
        </h1>

        <form
          className="space-y-3"
          onSubmit={handleSubmit}
        >
          <div
            className='w-full'
          >
            <Input
              type='text'
              name=""
              value={values.name}
              onChange={handleChange}
              id='name'
              placeholder='Name'
              className={`
                ${styles.input} 
                ${errors.name && touched.name && 'border-red-500'}
              `}
              label='name address'
              htmlFor='name'
            />
            {errors.name && touched.name && (
              <span className='text-sm text-red-500 pt-1 block'>{errors.name}</span>
            )}
          </div>
          
          <div
            className='w-full'
          >
            <Input
              type='text'
              name=""
              value={values.email}
              onChange={handleChange}
              id='email'
              placeholder='Email'
              className={`
                ${styles.input} 
                ${errors.email && touched.email && 'border-red-500'}
              `}
              label='Email address'
              htmlFor='email'
            />
            {errors.email && touched.email && (
              <span className='text-sm text-red-500 pt-1 block'>{errors.email}</span>
            )}
          </div>

          <div
            className='w-full relative'
          >
            <Input
              type={!show ? "password" : "text"}
              name="password"
              value={values.password}
              onChange={handleChange}
              id='password'
              placeholder='Password'
              className={`
                ${styles.input} 
                ${errors.password && touched.password && 'border-red-500'}
              `}
              label='Password'
              htmlFor='password'
            />
            {errors.password && touched.password && (
              <span className='text-sm text-red-500 pt-1 block'>{errors.password}</span>
            )}
            {
              !show ? (
                <AiOutlineEyeInvisible
                  className="absolute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShow(true)}
                />
              ) : (
                <AiOutlineEye
                  className="absolute bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={() => setShow(false)}
                />
              )
            }
          </div>
          

          <Button
            type='submit'
            value='login'
            label='Login'
            onClick={() => ''}
          />
          <br />
          <h5 className='text-center pt-4 font-Poppins text-[14px] text-black dark:text-white'>
            Or join with
          </h5>
          <div
            className='
              flex
              items-center
              justify-center
              my-3
            '
          >
            <AiFillGithub 
              size={30}
              className="cursor-pointer"
            />
          </div>
          <h5 className='text-center font-Poppins text-[14px]'>
            Not have any account?{" "}
            <span
              className='text-[#2190ff] pl-1 cursor-pointer'
              onClick={() => router.push('/login')}
            >
              Sign Up
            </span>
          </h5>
        </form>
      </div>
    </div>
  )
}

export default Register;