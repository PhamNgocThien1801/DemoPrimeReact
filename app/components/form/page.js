"use client"
import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';


export default function Form() {

    return (
        <div className='mt-5'>
            <div className='mt-5'>
                <FloatLabel>
                    <InputText id="username" className='w-full' />
                    <label for="username">FirstName</label>
                </FloatLabel>
            </div>
            <div className='mt-5'>
                <FloatLabel>
                    <InputText id="username" className='w-full' />
                    <label for="username">LastName</label>
                </FloatLabel>
            </div>
            <div className='mt-5'>
                <FloatLabel>
                    <InputText id="username" className='w-full' type='number' />
                    <label for="username">PhoneNumber</label>
                </FloatLabel>
            </div>
            <div className='mt-5'>
                <FloatLabel>
                    <InputText id="username" className='w-full' type='email' />
                    <label for="username">Emai;</label>
                </FloatLabel>
            </div>
            <div className='mt-5'>
                <FloatLabel>
                    <InputText id="username" className='w-full' />
                    <label for="username">Username</label>
                </FloatLabel>
            </div>
            <div className='mt-5'>
                <FloatLabel>
                    <InputText id="username" className='w-full' type='password' />
                    <label for="username">Password</label>
                </FloatLabel>
            </div>
            <div className='mt-5'>
                <FloatLabel>
                    <InputText id="username" className='w-full' type='password' />
                    <label for="username">Confirm password</label>
                </FloatLabel>
            </div>
            <div className='mt-5 float-end '>
                <Button label="Submit" />

            </div>
        </div>

    )
}
