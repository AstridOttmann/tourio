import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
}

body {
  margin: 0 auto;
  padding: 0;
  max-width: 368px;
}
`;
