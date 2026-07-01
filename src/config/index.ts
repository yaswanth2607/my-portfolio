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
import hireMe from "../assets/hire_me.png";

export const REG_EXP = {
  LETTERS_WITH_SPACE: /^[A-Za-z\s'-]+$/,
  LETTERS_WITH_DIGIT_SPACE: /^[A-Za-z0-9\s'-]+$/,
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MOBILE: /^[6-9]\d{9}$/
};

export const navbarTab = {
  textTab: [
    { label: "Home", path: "/" },
    // { label: "About", path: "/about" },
    // { label: "Projects", path: "projects" },
    // { label: "Blogs", path: "blogs" },
  ],
  iconTab: [
    { label: "twiter", path: "", src: twiter, height: 32, width: 32 },
    {
      label: "github",
      path: "https://github.com/yaswanth2607",
      src: github,
      height: 32,
      width: 32,
    },
    {
      label: "linkedIn",
      path: "https://www.linkedin.com/in/thota-yaswanth-43655a283/",
      src: linkedin,
      height: 32,
      width: 32,
    },
    { label: "facebook", path: "", src: facebook, height: 32, width: 32 },
    { label: "insta", path: "", src: instagram, height: 32, width: 32 },
  ],
};

export const footerTab = {
  leftSection: {
    before: bulbOff,
    after: bulbOn,
    height: 256,
    width: 144,
    content: "Hire Me",
  },
  rightSection: {
    before: boyWithoutHeadSet,
    after: boyWithHeadSet,
    height: 256,
    width: 256,
    content: "Contact Me",
  },
};

export const pageContent = {
  home: {
    image: {
      src: coverImage,
      height: 300,
      width: 280,
      alt: "cover-photo",
      "data-testid": "cover-photo",
    },
    content: {
      heading:
        "Transforming Innovative Ideas into Intelligent Solutions Through Code, Design, and Automation — Building a Smarter Tomorrow.",
      body: "Passionate About AI, Machine Learning, and Data Engineering—Creating Smart Systems for a Smarter Future.",
    },
  },
};

export const ModalData = {
  hireMe: {
    title: "Hire Me!!!!",
    image: { src: hireMe, height: "270px" },
    form: {
      fields: [
        {
          label: "Name",
          type: "textField",
          validation: {
            required: { value: true, message: "Name is required." },
            pattern: { value: REG_EXP.LETTERS_WITH_SPACE, message: "Only A-Z values are accepted." },
          },
        },
        {
          label: "Organization Name",
          type: "textField",
          validation: {
            required: { value: true, message: "Organization name is required." },
            pattern: { value: REG_EXP.LETTERS_WITH_SPACE, message: "Only A-Z values are accepted." },
          },
        },
        {
          label: "Role Name",
          type: "textField",
          validation: {
            required: { value: true, message: "Role name is required for which you want me to hire." },
            pattern: { value: REG_EXP.LETTERS_WITH_DIGIT_SPACE, message: "Only the folowing characters are accepted: A-Z, 0-9, space and -." },
          },
        },
        {
          label: "Email Id",
          type: "textField",
          validation: {
            required: { value: true, message: "Email is required to contact." },
            pattern: { value: REG_EXP.EMAIL, message: "Please enter a valid email." },
          },
        },
        {
          label: "Mobile Number",
          type: "textField",
          validation: {
            required: { value: true, message: "Mobile number is required to contact." },
            pattern: { value: REG_EXP.MOBILE, message: "Please enter a valid 10-digit mobile number." },
          },
        },
        {
          error: "Enter message you want to convey to me",
          label: "Message to Me",
          type: "textArea",
        },
      ],
      buttonName: "Submit",
      successMessage: "",
      failureMessage: "",
    },
  },
  contactMe: {
    title: "Contact Me!!!!",
  },
};


