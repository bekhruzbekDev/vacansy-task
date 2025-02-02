import { Form } from "antd";
import { CustomBtn, FormInput } from "../../ui";
import { FormSubmit } from "../../../types/auth.type";
import { Link } from "react-router-dom";
interface Props {
  variant: "login" | "register";
  submitFun: (data: FormSubmit) => void;
  loading: boolean;
}
export const AuthForm = ({ variant, submitFun, loading }: Props) => {
  return (
    <div className="w-full h-screen bg-black/70  flex justify-center items-center">
      <div className="w-[462px] bg-white p-6 pb-[10px]">
        <h2 className="text-[36px] font-semibold">
          {variant === "register" ? "Регистрация" : "Вход"}
        </h2>
        <Form onFinish={submitFun}>
          {variant == "register" && (
            <FormInput
              mb="41px"
              name="fullName"
              placeholder="Введите Ф.И.О"
              label="Ф.И.О"
              type="text"
              rules={[
                {
                  required: true,
                  message: "Введите Ваше полное имя.",
                },
              ]}
            />
          )}
          <FormInput
            mb="41px"
            name="login"
            placeholder="Введите логин"
            label="Логин"
            type="text"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите ваш логин.",
              },
            ]}
          />
          <FormInput
            name="password"
            placeholder="Введите пароль"
            label="Пароль"
            type="text"
            rules={[
              {
                required: true,
                message: "Введите ваш пароль.",
              },
            ]}
            mb="41px"
          />
          <div className="mb-[25px]">
            <Link
              to={variant === "login" ? "/register" : "/login"}
              className="mb-[25px]"
            >
              {variant === "login" ? "Регистрация" : "Вход"}
            </Link>
          </div>
          <div className="flex justify-center">
            <CustomBtn bg="#7CB305" loading={loading} type="submit">
              {!loading && variant === "register" ? "Регистрировать" : "Вход"}
            </CustomBtn>
          </div>
        </Form>
      </div>
    </div>
  );
};
