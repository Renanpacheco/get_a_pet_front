import Input from "../../form/Input.js"
import styles from "../../form/Form.module.css"
import { Link } from "react-router-dom"

function Register(){
    function handlechange(e){}
    return (
        <section className={styles.form_container}>
            <h1>Register</h1>
            <form>
                <Input text="name" name="name" type="text" placeholder="Enter your name" handleOnchange={handlechange} />
                <Input text="phone" name="phone" type="text" placeholder="Enter your phone" handleOnchange={handlechange} />
                <Input text="E-mail" name="email" type="email" placeholder="Enter your e-mail" handleOnchange={handlechange} />
                <Input text="password" name="password" type="password" placeholder="Enter your password" handleOnchange={handlechange} />
                <Input text="confirm password" name="confirmpassword" type="password" placeholder="confirm your password" handleOnchange={handlechange} />
                <input type="submit" value="register" />
            </form>
            <p>Already have a account? <Link to="/login">Click here</Link></p>
        </section>
    )

}
export default Register