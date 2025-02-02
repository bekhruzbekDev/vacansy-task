import { useNavigate } from "react-router-dom";
import { AuthForm } from "../../components";
import { useApiMutation } from "../../hooks/useApiMutation";

import { FormSubmit } from "../../types/auth.type";
import { message } from "antd";

const Register = () => {
  const registerMutation = useApiMutation("/auths/sign-up");
  const navigate = useNavigate();
  const submit = async (data: FormSubmit) => {
    registerMutation.mutate(data, {
      onSuccess: (res) => {
        message.success("register successFully");

        localStorage.setItem("userToken", res.data);
        navigate("/login");
      },
      onError: (err: any) => {
        message.error(err.response.data);
      },
    });
  };
  return (
    <div className="w-full h-screen bg-[url('assets/login-bg.jpg')] bg-bottom bg-no-repeat bg-cover">
      <AuthForm
        variant="register"
        submitFun={submit}
        loading={registerMutation.isPending}
      />
    </div>
  );
};

export default Register;
