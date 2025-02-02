import { Form } from "antd";
import { FormInputType } from "../../../types";

export const FormInput = ({
  name,
  label,
  rules,
  placeholder,
  type,
  mb,
}: FormInputType) => {
  return (
    <div className="w-full h-[32px] " style={{ marginBottom: mb }}>
      <label className="text-sm text-[#000000]">{label}</label>
      <Form.Item name={name} rules={rules}>
        <input
          type={type}
          className="h-8 border w-full rounded-[2px] border-[#D9D9D9] px-3 py-[5px] outline-none"
          placeholder={placeholder}
        />
      </Form.Item>
    </div>
  );
};
