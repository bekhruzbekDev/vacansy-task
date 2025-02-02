import { Table, Dropdown, Popconfirm } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Company, CompanyModalState } from "../../../types";

import { useApiDelete } from "../../../hooks/useApiDelete";
import { useEffect } from "react";

interface Props {
  data: Company[];
  editCompany: (data: CompanyModalState) => void;
  refresh: () => void;
  loading: boolean;
}
export const CompanyTable = ({
  data,
  editCompany,
  refresh,
  loading,
}: Props) => {
  const { mutate: deleteCompany, isSuccess } = useApiDelete(
    "/companies/delete/by-id"
  );
  async function deleteFun(id: any) {
    deleteCompany(id);
  }
  useEffect(() => {
    if (isSuccess) refresh();
  }, [isSuccess]);
  const columns = [
    {
      title: "Названия компании",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Количество сотрудников",
      dataIndex: "employees",
      key: "employees",
    },
    {
      key: "actions",
      render: (data: { id: string }) => (
        <Dropdown
          menu={{
            items: [
              {
                key: "1",
                label: (
                  <div
                    className="flex items-center gap-2"
                    onClick={() =>
                      editCompany({
                        open: true,
                        role: "edit",
                        id: data.id,
                      })
                    }
                  >
                    <BiEdit size={20} /> Изменить
                  </div>
                ),
              },
              {
                key: "2",
                label: (
                  <Popconfirm
                    title="Вы хотите удалить?"
                    icon={
                      <span style={{ color: "#FA8C16", fontSize: "18px" }}>
                        ⚠️
                      </span>
                    }
                    onConfirm={() => deleteFun(data.id)}
                    okText="Да"
                    cancelText="Нет"
                    okButtonProps={{
                      danger: true,
                      style: { borderColor: "red", color: "white" },
                    }}
                    cancelButtonProps={{
                      style: { borderColor: "#E0E0E0", background: "#F5F5F5" },
                    }}
                  >
                    <span className="flex items-center gap-2 text-[#FA2424]">
                      <BiTrash size={20} /> Удалить
                    </span>
                  </Popconfirm>
                ),
              },
            ],
          }}
          trigger={["click"]}
        >
          <MoreOutlined style={{ cursor: "pointer", fontSize: 20 }} />
        </Dropdown>
      ),
    },
  ];
  return (
    <div className="px-4 ">
      {" "}
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        loading={loading}
      />
    </div>
  );
};
