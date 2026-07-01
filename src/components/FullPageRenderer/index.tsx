import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { StyledContainer } from "./styled";

function FullPageRenderer({ src }: { src: string }) {
  return (
    <StyledContainer data-testid="styled-container">
      <DotLottieReact src={src} loop autoplay />
    </StyledContainer>
  );
}

export default FullPageRenderer;
