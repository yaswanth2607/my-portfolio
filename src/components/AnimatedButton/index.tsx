import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { StyledAnimationButtonContainer, StyledSubmitButton } from "./styled";
import buttonLoading from "../../assets/animation/Button_Loader.lottie";

interface AnimatedButtonProps {
  type: "submit" | "reset" | "button";
  name: string;
  onClick?: () => void;
  loading: boolean;
}
function AnimatedButton({ name, type, onClick, loading }: AnimatedButtonProps) {
  const renderComponent = loading ? (
    <DotLottieReact src={buttonLoading} loop autoplay height={51} width={82} />
  ) : (
    <StyledSubmitButton
      data-testid="styled-container"
      type={type}
      onClick={onClick}
    >
      {name}
    </StyledSubmitButton>
  );
  return (
    <StyledAnimationButtonContainer>
      {renderComponent}
    </StyledAnimationButtonContainer>
  );
}

export default AnimatedButton;
