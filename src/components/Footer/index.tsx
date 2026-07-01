import { useState } from "react";
import { footerTab } from "../../config";
import { FooterContainer, StyledImage } from "./styled";
import Modal from "../Modal";
import { ModalData } from "../../config";

function Footer() {
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const { hireMe, contactMe } = ModalData;

  const setDataForModal = (isHireMeFlag?: boolean) => {
    setVisible(!visible);
    if (isHireMeFlag) {
      setModalData((prev: any) => ({
        ...prev,
        title: hireMe.title,
        image: hireMe.image,
        form: hireMe.form,
      }));
    } else {
      setModalData((prev: any) => ({ ...prev, title: contactMe.title }));
    }
  };

  const changeModalVisibility = () => {
    setVisible(!visible);
  };

  return (
    <>
      <FooterContainer>
        <StyledImage
          {...footerTab.leftSection}
          onClick={() => {
            setDataForModal(true);
            changeModalVisibility();
          }}
        />
        <StyledImage
          {...footerTab.rightSection}
          onClick={() => {
            setDataForModal();
            changeModalVisibility();
          }}
        />
      </FooterContainer>
      <Modal
        visible={visible}
        changeVisibility={changeModalVisibility}
        modalData={modalData}
      />
    </>
  );
}

export default Footer;
