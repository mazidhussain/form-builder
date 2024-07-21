"use client"
import { redirect } from 'next/navigation'
import React from 'react'

const AddForm = () => {
    return (
        <div className="h-[220px]  bg-[#f1f3f4] w-full p-5 rounded-lg" onClick={()=> redirect('/add-form')}>
            <span>Start a new form</span>
            <div className="h-[123px] w-[164px] mt-2">
                <img className="cursor-pointer" src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"></img>
                <p className="mt-2 text-sm mr-3">Blank Form</p>
            </div>
        </div>
    )
}

export default AddForm