"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const AddForm: React.FC = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/add-form");
    };

    return (
        <div className="h-[220px] bg-[#f1f3f4] w-full p-5 rounded-lg" onClick={handleClick}>
            <span>Start a new form</span>
            <div className="h-[123px] w-[164px] mt-2">
                <img 
                    className="cursor-pointer" 
                    src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png" 
                    alt="Blank Form"
                />
                <p className="mt-2 text-sm mr-3">Blank Form</p>
            </div>
        </div>
    );
}

export default AddForm;