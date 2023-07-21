import Img from "../images/missing.png";

const Fallback = () => {
  return (
    <>
      <img src={Img} alt="Fallback Image" />
      <p>Missing Rick</p>
    </>
  );
};

export default Fallback;
