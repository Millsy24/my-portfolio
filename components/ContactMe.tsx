import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import {useForm, SubmitHandler} from 'react-hook-form'

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}


type Props = {}

function ContactMe({}: Props) {
    const {register, handleSubmit} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = formData => {
       window.location.href=`mailto:lukascodes64@gmail.com?subject=${formData.subject}&body=Hi, my name is${formData.name}. ${formData.message}` 
    }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'></h3>


        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>

            Let me develop with you. <span className='decoration-custom-orange/50 underline'>Lets Talk</span>

            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-custom-orange h-7- w-7 animate-pulse'/>
                    <p className='text-2xl'>+1765-546-1064</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-custom-orange h-7- w-7 animate-pulse'/>
                    <p className='text-2xl'>lukascodes64@gmail.com</p>
                </div>
                
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input {...register('name')}type="text" className='contactInput' placeholder='Name'/>
                    <input {...register('email')}type="email" className='contactInput' placeholder='Email'/>
                </div>

                <input {...register('subject')}className='contactInput' placeholder='Subject'/>

                <textarea {...register('message')}className='contactInput' placeholder='Message'/>
                <button type ='submit' className='bg-custom-orange py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
    
        </div>
    </div>
  )
}

export default ContactMe