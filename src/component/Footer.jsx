import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <footer id="Footer" className="bg-[#001233] font-mont">
      <div className=" flex justify-between w-[90%] m-auto p-3">
        <div className=" text-white ">
          <p className=" text-[12px]">
            Created by Yawer Atique{" "}
            <i className="fas fa-heart text-yellow-500"></i> 2023 All Rights
            Reserved.
          </p>
        </div>
        <div className=" ">
          <AnchorLink href="#home" className="text-white text-[14px]">
            <i className="bx bx-up-arrow-alt"></i>
          </AnchorLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
