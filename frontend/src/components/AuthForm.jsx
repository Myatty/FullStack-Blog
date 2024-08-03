import { Link, Form , useSearchParams, useActionData, useNavigation } from "react-router-dom"


const AuthForm = () => {

    const data = useActionData();
    const navigation = useNavigation();

    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get("mode") === "login";
    const isSubmitting = navigation.state === "submitting";

  return (
    <section className="form-section" id="auth-form">
        
            <p>{isLogin ? "Login to your Account" : "Create new Account"}</p>
            {
                data && data.error && (
                    <ul>
                        {
                            Object.values(data.errors).map(err => {
                                <li key={err}>{err}</li>
                            })
                        }
                    </ul>
                )
            }
            {
                data && data.message && <span>{data.message}</span>
            }
            <Form action="post">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your Email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your Email" />
                </div>
                <button className="btn login-btn" disabled={isSubmitting}>
                    
                    {isSubmitting ? "Submitting" : isLogin ? "Login" : "Register"}

                </button>
            </Form>
            { 
                isLogin ? (<p className="create-account">
                    Dont have an Account? <Link to="/auth?mode=signup">Create Here!</Link>
                </p>) : (<p className="create-account">
                Already have an account? <Link to="/auth?mode=login">Login Here!</Link>
            </p>) 
            }
       
    </section>
  )
}

export default AuthForm