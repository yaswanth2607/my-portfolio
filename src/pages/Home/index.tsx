import { HomeContainer, ImageTextContainer } from "./styled";
import { pageContent } from "../../config";

function Home() {
  const {
    home: { image, content },
  } = pageContent;

  return (
    <HomeContainer data-testid="content-container">
      <ImageTextContainer>
        <img {...image} />
        <div>
          <h2>{content.heading}</h2>
          <h5>{content.body}</h5>
        </div>
      </ImageTextContainer>
    </HomeContainer>
  );
}

export default Home;
