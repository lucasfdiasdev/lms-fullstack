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



interface LoginProps {


}

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Please enter your email address"),
  password: Yup.string().required("Required").min(6)
})

const Login: React.FC<LoginProps> = ({
  
}) => {
  const [ show, setShow ] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {email: "", password: ""},
    validationSchema: schema,
    onSubmit: async({email, password}) => {
      console.log(email, password)
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
          Login caralho
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
              <span className='text-red-500 pt-1 block'>{errors.email}</span>
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
              <span className='text-red-500 pt-1 block'>{errors.password}</span>
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
              onClick={() => router.push('/register')}
            >
              Sign Up
            </span>
          </h5>
        </form>
      </div>
    </div>
  )
}

export default Login;