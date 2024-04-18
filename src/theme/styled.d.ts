import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      shape: string;
      input: string;
      placeholder: string;
      background: string;
      black: string;
      white: string;
    };
  }
}
