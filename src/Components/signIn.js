import './SiginIn.css'
import {useState} from 'react'
import { object, string, number, date, InferType } from 'yup';

export const SignInPage = () => {
    
    let userSchema = object({
        name: string().min(2).max(50).required(),
        email: string().email(),
        password : string().min(5).max(15).required(),
        confirmPassword : string().min(5).max(15).required()
      });

      const [errors,setErrors] = useState([])

      const [values,setValues] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : ""
      })



      const handleChange = (key,value) => {
        setValues({
            ...values,
            [key] : value
        })
      }

      const handleSubmission = () => {
        console.log(values)
        setErrors([])
        userSchema.validate(values , {abortEarly : false})
        .then((response) => {

        }).catch((error) => {
            setErrors(error.errors)
            console.log(errors)
        })
      }
      

    return (
        <div className='container'>
            <h1 style={{color : "white"}}>SignIn Page</h1> 

            <div className='form-container'>
                <div className='inputs-style'>
                <label>Name</label>
                <input  type= "text" value = {values.name} onChange = {(event) => {
                   const  value = event.target.value
                   handleChange("name" , value)
                }}/>

                </div>
                <div className='inputs-style'>
                <label>Email</label>
                <input type = "text" value = {values.email} onChange = {(event) => {
                    const value = event.target.value
                    handleChange("email" , value)
                }}/>
                </div>
                <div className='inputs-style'>
                <label>Password</label>
                <input type="password" value = {values.password} onChange = {(event) => {
                    const value = event.target.value 
                    handleChange("password" , value)
                }}/>
                </div>
                <div className='inputs-style'>
                <label>Confirm Password</label>
                <input type="password" value = {values.confirmPassword} onChange = {(event) => {
                    const value = event.target.value
                    handleChange("confirmPassword" , value)
                }}/>
                </div>

                <button onClick = {handleSubmission}>Submit</button>
                {errors.map((error , index)  => {
                   return <p key={index}>{error}</p>
                }
                )}
            </div>

        </div>
        
    )
}