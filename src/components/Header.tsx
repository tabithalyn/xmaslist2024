import lightsImg from "/public/static/assets/qcBXLgB4i.gif";

const Header = () => {
  return (
    <div className="w-full p-10 text-center min-[320px]:text-2xl sm:text-3xl md:text-4xl xl:text-5xl lg:text-5xl font-black">
      🎄 Tabitha's Xmas List 2024 🎁
      <div className="w-full flex flex-wrap justify-center">
        <img src={lightsImg} className="w-1/4 mix-blend-multiply" />
      </div>
    </div>
  );
}
 
export default Header;