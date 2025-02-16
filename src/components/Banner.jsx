import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="h-[600px] max-w-7xl mx-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Content here */}
    </div>
  );
};

export default Banner;