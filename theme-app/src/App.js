import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";

export const theme1 = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const theme2 = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${theme1};
  `;

const SwitchTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 75px;
  background-color: ${theme2};
  `;

const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={{ theme: "light" }}>
        <SwitchTheme>
          <h1>Theme App</h1>
          <p>
            <input type="checkbox" />Use Dark Theme
          </p>
        </SwitchTheme>
        <Container>
          <h2>Welcome!</h2>
          <h3>Full Stack Web Development</h3>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
