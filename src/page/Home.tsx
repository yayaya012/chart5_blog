import styled from "styled-components";
import BlogPage from "./BlogPage";

const HomeContainer = styled.div``;

export default function Home() {
  return (
    <HomeContainer>
      <BlogPage articleId="1" />
    </HomeContainer>
  );
}
