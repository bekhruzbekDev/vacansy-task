import { Form, message, Modal } from "antd";

import { CustomBtn, FormInput } from "../../../components";
import { CompanyData, CompanyModalType } from "../../../types";
import { useApiMutation } from "../../../hooks/useApiMutation";
import { useApi } from "../../../hooks/useApi";
import { useEffect } from "react";

import { useApiUpdate } from "../../../hooks/useApiUpdate";

export const AddCompany = ({
  modalAction,
  setOpen,
  refresh,
}: CompanyModalType) => {
  const companyMutation = useApiMutation("/companies/add");
  const [form] = Form.useForm();
  const {
    mutate: updateCompany,
    isPending,
    isSuccess,
  } = useApiUpdate("/companies/update");
  const { data } = useApi(
    modalAction.role == "edit" ? `/companies/get/${modalAction.id}` : ""
  );

  const initialFormData = {
    name: data?.data.name,
    count: Number(data?.data.count),
  };

  useEffect(() => {
    if (modalAction.role === "edit") form.setFieldsValue(initialFormData);
  }, [form, data]);
  useEffect(() => {
    if (isSuccess) setOpen({ id: "", open: false, role: "add" });
    refresh();
    form.resetFields();
  }, [isSuccess]);

  const submit = async (data: CompanyData) => {
    if (modalAction.role == "add") {
      companyMutation.mutate(
        { ...data, count: Number(data.count) },
        {
          onSuccess: (res) => {
            setOpen({ open: false, role: "add", id: "" });
            message.success(res.statusText);
            form.resetFields();
            refresh();
          },
          onError: (err: any) => {
            message.error(err.response.data);
          },
        }
      );
    } else {
      updateCompany({ ...data, id: modalAction.id });
    }
  };
  const onCancel = () => {
    setOpen({ open: false, role: "add", id: "" });
    form.resetFields();
  };

  return (
    <>
      <Modal
        title="Добавить компания"
        open={modalAction.open}
        footer={null}
        onCancel={onCancel}
      >
        <div className="">
          <Form onFinish={submit} form={form}>
            <div className="flex  justify-between  w-full items-center mb-[21px]">
              <p className="w-[300px] ">Названия компании</p>
              <FormInput
                type="text"
                name="name"
                placeholder="Названия компании"
                rules={[
                  {
                    required: true,
                    message: "Введите название вашей компании",
                  },
                ]}
              />
            </div>
            <div className="flex  justify-between items-center w-full mb-[21px]">
              <p className="w-[300px]">Введите количество</p>
              <FormInput
                type="number"
                name="count"
                placeholder="Названия компании"
                rules={[
                  {
                    required: true,
                    message: "Пожалуйста, введите Введите количество",
                  },
                ]}
              />
            </div>
            <div className="flex justify-center ">
              <CustomBtn
                bg="#1890FF"
                type="submit"
                loading={isPending || companyMutation.isPending}
              >
                Добавить компания
              </CustomBtn>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};
