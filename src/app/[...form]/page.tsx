import React from 'react'

const page = ({ params }: { params: any }) => {
    console.log("mazid",params.form[1]);
    
    return (
        <div>page</div>
    )
}

export default page