import Input from "../../form/Input.js"
import styles from "../../form/Form.module.css"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"

/*contexts */
import { Context } from "../../../context/UserContext.js"

function Register(){
    const [user, setUser] = useState({})
    const {register} = useContext(Context)

    function handlechange(e){
        setUser({...user, [e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        register(user)
    }

    return (
        <section className={styles.form_container}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <Input type="text" text="name" name="name" placeholder="Enter your name" handleOnchange={handlechange} />
                <Input type="text" text="phone" name="phone" placeholder="Enter your phone" handleOnchange={handlechange} />
                <Input type="email" text="E-mail" name="email" placeholder="Enter your e-mail" handleOnchange={handlechange} />
                <Input type="password" text="password" name="password"  placeholder="Enter your password" handleOnchange={handlechange} />
                <Input type="password" text="confirm" name="confirm" placeholder="confirm your password" handleOnchange={handlechange} />
                <input type="submit" value="register" />
            </form>
            <p>Already have a account? <Link to="/login">Click here</Link></p>
        </section>
    )

}
export default Register