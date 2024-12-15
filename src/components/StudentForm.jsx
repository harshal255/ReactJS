import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchemaValid } from '../types';

const StudentForm = ({ onSubmit, initialValue, type }) => {
    console.log("sf", initialValue);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: initialValue, resolver: zodResolver(studentSchemaValid) });

    useEffect(() => {
        reset(initialValue)
    }, [initialValue]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-parent'>
                <label htmlFor="email"> Email :</label>
                <div>
                    <input className='input'  {...register("email")} type="text" name='email' id='email' placeholder="Email" />
                    {errors?.email && <span className="text-red-500">{errors?.email?.message}</span>}
                </div>
            </div>
            <div className='input-parent'>
                <label htmlFor="name"> Full Name :</label>
                <div>
                    <input className='input'  {...register("name")} type="text" name='name' id='name' placeholder="Full Name" />
                    {errors?.name && <span className="text-red-500">{errors?.name?.message}</span>}
                </div>

            </div>
            <div className='input-parent'>
                <label htmlFor="username"> Username :</label>
                <div>
                    <input className='input'  {...register("username")} type="text" name='username' id='username' placeholder="Username" />
                    {errors?.username && <span className="text-red-500">{errors?.username?.message}</span>}
                </div>
            </div>
            <div className='input-parent'>
                <label htmlFor="password"> Password :</label>
                <div>
                    <input className='input'  {...register("password")} type="text" name='password' id='password' placeholder="Password" />
                    {errors?.password && <span className="text-red-500">{errors?.password?.message}</span>}
                </div>
            </div>
            <div className='btn'>
                <button type='submit'>{type === "edit" ? "Edit User" : "Add User"}</button>
            </div>
        </form>
    )
}

export default StudentForm