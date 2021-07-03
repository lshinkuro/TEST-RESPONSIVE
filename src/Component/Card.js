import React from 'react'

const Card = (props) => {
    return (
        <div className="max-w-md w-auto md:w-64 mx-auto bg-white rounded-lg shadow-md md:h-auto   overflow-hidden md:max-w-2xl m-4 md:m-6 p-4 md:p-6" style={{ borderRadius: 25, margin: 10 }}>
            <div className="md:flex">
                <div>
                    <p className="uppercase tracking-wide text-sm text-black text-center font-semibold">Text</p>
                    <p className="mt-6 text-gray-500 text-left text-sm mb-80">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
