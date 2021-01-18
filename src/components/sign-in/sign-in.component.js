import React,{useState} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-Button/custom.button.component'
import {auth,signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

const SignIn = () => {
    const [formData, setFormData] = useState({email:'',password:''})
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const { email, password } = formData
        try {
            await auth.signInWithEmailAndPassword(email, password) 
            setFormData({email:'',password:''})
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    label="email"
                    value={formData.email}
                    handleChange={handleChange}
                    required />
                <FormInput
                    type="password"
                    name="password"
                    label="password"
                    value={formData.password}
                    handleChange={handleChange}
                    required />
                <div className="buttons">
                    <CustomButton type="submit">Sign-In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign-In with google</CustomButton>
                </div>
            </form>
        </div>
    )
}
export default SignIn