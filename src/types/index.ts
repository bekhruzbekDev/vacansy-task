export interface Rules {
  [key: string]: string | number | boolean | unknown;
}

export interface FormInputType {
  name: string;
  type: string;
  label?: string;
  placeholder: string;
  mb?: string;
  rules?: Rules[];
}

export interface CompanyData {
  name: string;
  count: number;
}

export interface CompanyModalState {
  open: boolean;
  role: "add" | "edit";
  id: string;
}

export interface CompanyModalType {
  setOpen: (data: CompanyModalState) => void;
  modalAction: CompanyModalState;
  refresh: () => void;
}

export interface CompanyResData {
  id: string;
  name: string;
  count: number;
}

export interface Company {
  key: number;
  id: string;
  name: string;
  employees: string;
}
