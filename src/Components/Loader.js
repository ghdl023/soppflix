import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 10px;
`;

export default () => (
  <Container>
    <span role="progressbar" aria-label="Loading">
      Loading...
    </span>
  </Container>
);
