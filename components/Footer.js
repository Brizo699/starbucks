import { VscChevronDown } from "react-icons/vsc";
import { BsTwitter } from "react-icons/Bs";
import { ImFacebook } from "react-icons/Im";
import { BsInstagram } from "react-icons/Bs";

function Footer() {
  return (
    <footer className=" flex flex-col font-three ">
      {/* Footer Social Media */}
      <div className="flex items-center p-10 space-x-2">
        <div className="footerIconContainer">
          <ImFacebook />
        </div>
        <div className="footerIconContainer">
          <BsTwitter />
        </div>
        <div className="footerIconContainer">
          <BsInstagram />
        </div>
      </div>
      {/* Footer Small Screen */}
      <div className="md:hidden ">
        <div className="footerSmLink border-t-[1px]">
          <a className="" href="">
            About us
          </a>
          <VscChevronDown className="footerArrowIcon" />
        </div>
        <div className="footerSmLink">
          <a href="">Coffee</a>
          <VscChevronDown className="footerArrowIcon" />
        </div>
        <div className="footerSmLink">
          <a href="">The Starbucks Rewards</a>
          <VscChevronDown className="footerArrowIcon" />
        </div>
        <div className="footerSmLink">
          <a href="">Menu</a>
          <VscChevronDown className="footerArrowIcon" />
        </div>
        <div className="footerSmLink">
          <a href="">Contact us</a>
          <VscChevronDown className="footerArrowIcon" />
        </div>
      </div>
      {/* Footer Large Screen */}
      <div className="flex-wrap max-w-[2000px] md:px-10 hidden md:flex pb-14">
        <div className="footerLg">
          <h1 className="footerlgH1">About us</h1>
          <a className="footerLinks" href="">
            Our Company
          </a>
          <a className="footerLinks" href="">
            Our Heritage
          </a>
          <a className="footerLinks" href="">
            Starbucks
          </a>
          <a className="footerLinks" href="">
            Newsroom
          </a>
        </div>
        <div className="footerLg">
          <h1 className="footerlgH1">Coffee</h1>
          <a className="footerLinks" href="">
            Our Coffees
          </a>
          <a className="footerLinks" href="">
            Brewing Guides
          </a>

          <a className="footerLinks" href="">
            Starbucks Reserve™
          </a>

          <a className="footerLinks" href="">
            Ethical Sourcing
          </a>
        </div>
        <div className="footerLg">
          <h1 className="footerlgH1">Menu</h1>
          <a className="footerLinks" href="">
            Drinks
          </a>
          <a className="footerLinks" href="">
            Food
          </a>
          <a className="footerLinks" href="">
            Merchandise
          </a>
        </div>
        <div className="footerLg">
          <h1 className="footerlgH1">Starbucks Rewards</h1>
          <a className="footerLinks" href="">
            Join now
          </a>
          <a className="footerLinks" href="">
            Mobile App
          </a>
          <a className="footerLinks" href="">
            Corporate Purchase
          </a>
        </div>
        <div className="footerLg">
          <h1 className="footerlgH1">Contact us</h1>
          <a className="footerLinks" href="">
            Customer Service
          </a>
          <a className="footerLinks" href="">
            FAQ's
          </a>
        </div>
      </div>
      <h1 className="flex justify-center py-4 tracking-wide text-sm md:border-t-[1px] border-[#bbbbbb]">
        © 2022 Starbucks Coffee Company. all rights reserved.
      </h1>
    </footer>
  );
}

export default Footer;
