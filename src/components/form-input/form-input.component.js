import React from 'react'

import './form-input.styles.scss'

const FormInput = (props) => {
    const {handleChange,label,...otherProps}=props
    return (
        <div className="group">
            {label ? (
                <label className={`${otherProps.value.length ? 'shrinkLabel' : ''}form-input-label`}>
                    {label}
                </label>
            ): null
            }
            <input className="form-input" onChange={handleChange} {...otherProps} />
        </div>
    )
}
export default FormInput