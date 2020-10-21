import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import Colors from "./Colors";
const spin = keyframes`
to{
    transform: rotate(360deg);
}`;
const NavBar = () => {
  const [padding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${Colors.secondary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt me!</Link>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: 0.5s ${spin} linear infinite;

          &:hover {
            animation: 1s ${spin} linear infinite reverse;
            text-decoration: underline;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🍭
      </span>
    </header>
  );
};
export default NavBar;
