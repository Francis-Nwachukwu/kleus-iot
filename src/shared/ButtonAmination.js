import { ThreeDots } from "react-loader-spinner";

const ButtonAnimation = ({ height, width }) => {
  return (
    <ThreeDots
      height={height ? height : "30"}
      width={width ? width : "30"}
      radius="9"
      strokeColor="white"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
export default ButtonAnimation;
