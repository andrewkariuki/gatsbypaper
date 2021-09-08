import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "./src/themes/Theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
)
