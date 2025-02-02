import { CompanyResData } from "../types";

export const companyData = (data: CompanyResData[] | []) => {
  return data.map((item, i) => {
    return {
      id: item.id,
      key: i,
      name: item.name,
      employees: `${item.count} человек`,
    };
  });
};
