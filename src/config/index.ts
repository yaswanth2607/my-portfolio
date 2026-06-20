import twiter from "../assets/twitter.png";
import github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import bulbOff from "../assets/bulb_off_1.png";
import bulbOn from "../assets/bulb_on_1.png";
import boyWithoutHeadSet from "../assets/contact_me_without_1.png";
import boyWithHeadSet from "../assets/contact_me_with_1.png";
import coverImage from "../assets/coverImage_1.png";

export const navbarTab = {
  textTab: [
    { label: "Home", path: "/" },
    // { label: "About", path: "/about" },
    // { label: "Projects", path: "projects" },
    // { label: "Blogs", path: "blogs" },
  ],
  iconTab: [
    { label: "twiter", path: "", src: twiter, height: 32, width: 32 },
    { label: "github", path: "", src: github, height: 32, width: 32 },
    { label: "linkedIn", path: "", src: facebook, height: 32, width: 32 },
    { label: "facebook", path: "", src: instagram, height: 32, width: 32 },
    {label: "insta", path: "", src: linkedin, height: 32, width: 32 }
  ]
};

export const footerTab = {
  leftSection: {
    before: bulbOff,
    after: bulbOn,
    height: 256,
    width: 144, 
    content: "Hire Me"
  },
  rightSection: {
    before: boyWithoutHeadSet,
    after: boyWithHeadSet,
    height: 256,
    width: 256,
    content: "Contact Me"
  }
}

export const pageContent = {
  home: {
    image: {
      src: coverImage,
      height: 300,
      width: 280,
      alt: "cover-photo",
      "data-testid": "cover-photo"
    },
    content: {
      heading: "Transforming Innovative Ideas into Intelligent Solutions Through Code, Design, and Automation — Building a Smarter Tomorrow.",
      body: "Passionate About AI, Machine Learning, and Data Engineering—Creating Smart Systems for a Smarter Future."
    }
  }
}