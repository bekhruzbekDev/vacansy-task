import { useState } from "react";
import { AddCompany } from "./components/add-company";
import { CompanyTable } from "./components/company-table";
import { Header } from "./components/header";
import { CompanyModalState } from "../../types";
import { useApi } from "../../hooks/useApi";
import { companyData } from "../../utils/map-data";

export const Company = () => {
  const { data, refetch, isLoading } = useApi("/companies/get-all");
  const [openModal, setOpenModal] = useState<CompanyModalState>({
    open: false,
    role: "add",
    id: "",
  });

  const tableData = companyData(data?.data ? data.data : []);

  return (
    <div>
      <Header addCompanyModal={setOpenModal} />
      <CompanyTable
        data={tableData}
        editCompany={setOpenModal}
        refresh={refetch}
        loading={isLoading}
      />
      <AddCompany
        modalAction={openModal}
        setOpen={setOpenModal}
        refresh={refetch}
      />
    </div>
  );
};
