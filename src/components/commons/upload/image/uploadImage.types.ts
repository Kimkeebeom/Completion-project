import {
  ButtonHTMLAttributes,
  ChangeEvent,
  DetailedHTMLProps,
  MouseEvent
} from "react";

export interface IUploadImage {
  // onChange?: (event: ChangeEvent<HTMLImageElement>) => void;
  onChangeImages?: (images: string, index: number) => void;
  onChangeFile?: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeFile: (image: string, index: number) => void
  onClickImage?: (event: MouseEvent<HTMLImageElement, MouseEvent>) => void;
  fileRef: "";
  onClick?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  index: number;
  image: string;
  key: string;
}
