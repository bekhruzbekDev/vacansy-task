import { BiLoader } from "react-icons/bi";

interface Props {
  children: string;
  bg?: string;
  loading?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}
export const CustomBtn = ({ children, bg, loading, type, onClick }: Props) => {
  return (
    <button
      className={`px-4 text-white py-[5px] cursor-pointer ${
        loading ? "opacity-70" : ""
      }`}
      type={type ? type : "button"}
      style={{ background: bg }}
      disabled={loading}
      onClick={onClick}
    >
      {loading ? (
        <span className="flex items-center gap-4">
          <BiLoader size={22} className="animate-spin" /> {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
};
