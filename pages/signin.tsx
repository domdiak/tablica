import { FunctionComponent } from "react";
import AuthForm from "../components/AuthForm";

interface SigninProps {
    authPage: boolean;
}

const Signin: FunctionComponent<SigninProps> = () => {
    return <AuthForm mode="signin" />;
};

Signin.authPage = true;

export default Signin;
