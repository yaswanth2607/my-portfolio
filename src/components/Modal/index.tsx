import {
  BackgroundOverlay,
  CustomFormLayout,
  GlobalStyles,
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  StyledInput,
  StyledInputContainer,
  StyledInputTextArea,
  StyledLabel,
} from "./styled";
import closeIcon from "../../assets/close.png";
import { createPortal } from "react-dom";
import AnimatedButton from "../AnimatedButton";
import { useForm, type SubmitHandler } from "react-hook-form";
interface ModalProps {
  visible: boolean;
  changeVisibility: () => void;
  modalData: any;
}

function Modal(props: ModalProps) {
  const { visible, changeVisibility, modalData } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  if (!visible) return null;

  return createPortal(
    <BackgroundOverlay>
      <ModalContainer
        data-testid="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <GlobalStyles />
        <ModalHeader data-testid="modal-header">
          <ModalTitle data-testid="modal-title">{modalData.title}</ModalTitle>
          <img
            src={closeIcon}
            height={32}
            width={32}
            onClick={() => {
              reset();
              changeVisibility();
            }}
            data-testid="modal-dismiss-btn"
          />
        </ModalHeader>
        <ModalBody data-testid="modal-body">
          <img
            data-testid="hire-me-image"
            alt="hire-me-image"
            {...modalData.image}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomFormLayout data-testid="custom-form-layout">
              {modalData.form.fields.map((field: any, index: number) => {
                const { label, type, validation, ...inputProps } = field;
                return (
                  <StyledInputContainer key={`form-${type}-${index}`}>
                    {type === "textField" ? (
                      <StyledInput
                        {...register(label, {
                          ...validation,
                        })}
                        id={`${label}`}
                        autoComplete="on"
                        {...inputProps}
                        placeholder=" "
                      />
                    ) : (
                      <StyledInputTextArea
                        {...register(label)}
                        id={`${label}`}
                        autoComplete="on"
                        {...inputProps}
                        placeholder=" "
                      />
                    )}
                    <StyledLabel htmlFor={`${label}`}>{label}</StyledLabel>
                    <>{errors[label]?.message}</>
                  </StyledInputContainer>
                );
              })}
            </CustomFormLayout>
            <AnimatedButton
              name={modalData.form.buttonName}
              type="submit"
              loading={false}
            />
          </form>
        </ModalBody>
      </ModalContainer>
    </BackgroundOverlay>,
    document.getElementById("modal") || document.body,
  );
}

export default Modal;
