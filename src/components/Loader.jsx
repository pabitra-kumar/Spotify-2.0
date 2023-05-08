import loader from "../assets/loader.svg";

const Loader = ({ title }) => (
  <div className="w-full flex flex-col justify-center items-center">
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="text-white text-2xl font-bold mt-2">
      {title || "Loading..."}
    </h1>
  </div>
);

export default Loader;
