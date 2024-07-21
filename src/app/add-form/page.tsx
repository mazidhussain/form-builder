"use client"
import React, { useEffect, useState } from "react";
import { FormBuilder, Formio } from "react-formio";
import { formIoData } from "@/utils/const";
import "react-form-builder2/dist/app.css";
import "formiojs/dist/formio.full.css";
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

type FormData = {
    components: any[];
};

export default function Page(): JSX.Element {
    const [formData, setFormData] = useState<FormData>(formIoData);

    const printResult = () => {
        Formio.createForm(document.getElementById("formio-result"), {
            components: formData.components
        }).then((form: any) => {
            console.log(form.component.components);
            form.on("submit", (data: any) => console.log("submit", data));
        });
    };

    useEffect(() => {
        console.log("data", formData);

    }, [formData])

    return (
        <div className="p-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Form Builder Playground</h2>
                <button onClick={printResult} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Display Result
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <FormBuilder
                    form={formData}
                    onSubmit={(data: any) => {
                        console.log(data);
                    }}
                    onChange={(schema: any) => console.log(schema)}
                    saveForm={(data: any) => setFormData(data)}
                    saveText="Save Form"
                    onSubmitDone={(data: any) => console.log(data)}
                />
            </div>
        </div>
    );
}
