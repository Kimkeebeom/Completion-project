import { ChangeEventHandler, MouseEvent, MouseEventHandler } from "react";
import { Address } from "react-daum-postcode";

export interface IWriteContext {
  onChangeFile: () => void;
}

export interface IProductWriteUI {
  data: any;
  setImages: string;
  images: any;
  isEdit?: boolean;
  isActive: boolean;
  address: string;
  addressDetail: string;
  zipcode: string;

  showModal: MouseEventHandler<HTMLElement>;
  handleCancel: (e: MouseEvent<HTMLElement, MouseEvent>) => void;
  handleOk: (e: MouseEvent<HTMLElement, MouseEvent>) => void;

  onChangeName: ChangeEventHandler<HTMLInputElement>;
  onChangeRemarks: ChangeEventHandler<HTMLInputElement>;
  onChangePrice: ChangeEventHandler<HTMLInputElement>;
  onChangeAddress: ChangeEventHandler<HTMLInputElement>;
  onChangeAddressDetail: ChangeEventHandler<HTMLInputElement>;
  onChangeZipcode: ChangeEventHandler<HTMLInputElement>;
  onCompleteDaumPostCode: (address: Address) => void;
  // isModalVisible: JSX.Element
  productTitle: ChangeEventHandler<HTMLInputElement>;
  productWriter: ChangeEventHandler<HTMLInputElement>;
  productContents: ChangeEventHandler<HTMLInputElement>;
  productPrice: ChangeEventHandler<HTMLInputElement>;
  onClickSubmit: MouseEventHandler<HTMLButtonElement>;
  onClickUpdateSubmit: MouseEventHandler<HTMLButtonElement>;
}
