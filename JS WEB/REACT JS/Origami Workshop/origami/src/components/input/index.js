import React from 'react'

const Input = ({ label, id, value, type, onChange }) => {
    return (
        <div>
            <label htmlFor={id}>
                {label} :
                <input type={type} id={id} value={value} onChange={onChange} />
            </label>
        </div>
    )
}

export default Input