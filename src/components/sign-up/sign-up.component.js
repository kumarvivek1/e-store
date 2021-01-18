import React,{useState} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-Button/custom.button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

const SignUp = (props) => {
    const [formData, setFormData] = useState({displayName:'',email:'',password:'',confirmPassword:''})
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        const {displayName,email,password,confirmPassword}=formData
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('password do not match')
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName})
            setFormData({displayName:'',email:'',password:'',confirmPassword:''})
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="sign-up">
            <h2 className="title">i do not have an account</h2>
            <span>sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={formData.displayName}
                    handleChange={handleChange}
                    label="Display Name"
                    required
                >
                </FormInput>
                <FormInput
                    type="email"
                    name="email"
                    value={formData.email}
                    handleChange={handleChange}
                    label="Email"
                    required
                />
                
                <FormInput
                    type="password"
                    name="password"
                    value={formData.password}
                    handleChange={handleChange}
                    label="Password"
                    required
                />
                
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                />

                <CustomButton type="submit">Sign-Up</CustomButton>
                    
            </form>
        </div>
    )
}
export default SignUp