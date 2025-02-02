import { RiLogoutCircleLine } from "react-icons/ri";
import { CustomBtn } from "../../../components";
import { CompanyModalState } from "../../../types";
import { useNavigate } from "react-router-dom";
interface Props {
  addCompanyModal: (data: CompanyModalState) => void;
}
export const Header = ({ addCompanyModal }: Props) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };
  return (
    <header className="w-full  h-[65px] bg-[#313131] px-[10px] flex justify-between items-center mb-4">
      <p className="text-white text-sm font-semibold">Компании</p>
      <div className="flex items-center gap-4">
        <RiLogoutCircleLine
          onClick={logout}
          size={25}
          color="white"
          className="cursor-pointer"
        />
        <CustomBtn
          bg="#08979C"
          onClick={() => addCompanyModal({ open: true, role: "add", id: "" })}
        >
          Добавить компания
        </CustomBtn>
      </div>
    </header>
  );
};
