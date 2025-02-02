import { useNavigate } from "react-router-dom";
import { AuthForm } from "../../components";
import { useApiMutation } from "../../hooks/useApiMutation";

import { FormSubmit } from "../../types/auth.type";
import { message } from "antd";

const Login = () => {
  const loginMutation = useApiMutation("/auths/sign-in");
  const navigate = useNavigate();
  const submit = async (data: FormSubmit) => {
    loginMutation.mutate(data, {
      onSuccess: (res) => {
        localStorage.setItem("userToken", res.data);
        navigate("/");
      },
      onError: (err: any) => {
        message.error(err.response.data);
      },
    });
  };
  return (
    <div className="w-full h-screen bg-[url('assets/login-bg.jpg')] bg-bottom bg-no-repeat bg-cover">
      <AuthForm
        variant="login"
        submitFun={submit}
        loading={loginMutation.isPending}
      />
    </div>
  );
};

export default Login;
