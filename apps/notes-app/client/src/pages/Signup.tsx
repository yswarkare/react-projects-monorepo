import { object, ref, string } from 'yup'
import SignUpOrLogin from "../components/SignUpOrLogIn";

const userProps = {
  firstName: "First Name",
  lastName: "Last Name",
  username: "Username",
  mobile: "Mobile Number",
  email: "Email ID",
  password: "Password",
  confirmPassword: "Confirm Password",
}

const userSchema = object({
  firstName: string().required().min(3).max(150),
  lastName: string().required().min(3).max(150),
  username: string().required().min(3).max(150),
  mobile: string().required().min(10).max(15),
  email: string().email().required().min(3).max(150),
  password: string()
    .min(8, "You must enter at least 8 characters.")
    .max(150)
    .matches(/[0-9]/, "You must enter at least one number.")
    .matches(/[a-z]/, "You must enter at least one lowercase letter.")
    .matches(/[A-Z]/, "You must enter at least one uppercase letter.")
    .matches(/[#?!@$%^&*-]/, "You must enter at least one symbols.")
    .required(),
  confirmPassword: string()
    .oneOf([ref('password')], "Passwords must match.")
    .required(),
})

const Signup = () => {

  return (
    <div className="w-full pt-8 flex flex-col justify-center items-center">
      <SignUpOrLogin
        title={"Sign Up"}
        url={'http://localhost:5000/api/user/sign-up'}
        userProps={userProps}
        userSchema={userSchema}
      ></SignUpOrLogin>
    </div>
  );
}

export default Signup;
