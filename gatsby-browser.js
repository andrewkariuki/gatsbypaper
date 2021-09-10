import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Code, Table } from "./src/components"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"
import Theme from "./src/themes/Theme"
import "./language-tabs.css"

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body,html{
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
    background-color: ${props => props.theme.colors.light1};
}
`
const components = {
  table: Table,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    }
    return <pre {...preProps} />
  },
  wrapper: ({ children }) => <>{children}</>,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </MDXProvider>
)
