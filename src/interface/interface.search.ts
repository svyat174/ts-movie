import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InterfaceSearch extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  searchMovies: Function
}