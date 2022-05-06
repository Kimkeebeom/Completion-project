import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { SetStateAction, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs
} from "../../../commons/types/generated/types";
import WriteUI from "./write.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./write.queries";
import { IProductWriteUI } from "./write.types";

// export const WriteContext = createContext<IWriteContext>({})

export default function Write(props: IProductWriteUI) {
  const router = useRouter();

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);

  const [images, setImages] = useState(["", ""]);
  // const [image, setImage] = useState<IWrite | string[] >(["",""])
  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [zipcode, setZipcode] = useState("");

  // const onChangeImages = (image: string, index: number) => {
  //   const newImages = [...images];
  //   newImages[index] = image;
  //   setImages(newImages);
  //   console.log("image:", newImages);
  // };

  const onChangeName = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const onChangeRemarks = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setRemarks(event.target.value);
  };

  const onChangeContents = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setContents(event.target.value);
  };

  const onChangePrice = (event: {
    target: { valueAsNumber: SetStateAction<number> };
  }) => {
    setPrice(event.target.valueAsNumber);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // ok 누르면 창이 사라짐
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    // cancle 누르면 창 사라짐
  };

  const onChangeAddress = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setAddress(event.target.value);
  };

  const onChangeAddressDetail = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setAddressDetail(event.target.value);
  };

  const onChangeZipcode = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setZipcode(event.target.value);
  };

  const onCompleteDaumPostCode = (data: any) => {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsModalVisible(false);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name,
            remarks,
            price: Number(price),
            contents,
            images,
            useditemAddress: {
              zipcode,
              address,
              addressDetail
            }
          }
        }
      });
      console.log("result:", result);
      Modal.success({ content: "상품이 성공적으로 등록되었습니다" });
      router.push(`/brand/${result.data.createUseditem._id}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdateSubmit = async () => {
    interface IAdress {
      zipcode: string;
      address: string;
      addressDetail?: string;
    }
    interface IUpdatedUseditemInput {
      useditemAddress: IAdress;
      images: string[];
      price: number;
      contents: string;
      remarks: string;
      name: string;
    }
    const myIUpdatedUseditemInput: IUpdatedUseditemInput = {
      images: [],
      price: 0,
      contents: "",
      remarks: "",
      name: "",
      useditemAddress: {
        address,
        addressDetail,
        zipcode
      }
    };
    if (name !== "") myIUpdatedUseditemInput.name = name;
    if (remarks !== "") myIUpdatedUseditemInput.remarks = remarks;
    if (contents !== "") myIUpdatedUseditemInput.contents = contents;
    if (price !== Number("")) myIUpdatedUseditemInput.price = price;
    if (images !== []) myIUpdatedUseditemInput.images = images;
    if (address) myIUpdatedUseditemInput.useditemAddress.address = address;
    if (addressDetail) {
      myIUpdatedUseditemInput.useditemAddress.addressDetail = addressDetail;
    }
    if (zipcode) myIUpdatedUseditemInput.useditemAddress.zipcode = zipcode;
    try {
      await updateUseditem({
        variables: {
          useditemId: props.data?.fetchUseditem._id,
          updateUseditemInput: myIUpdatedUseditemInput
        }
      });
      router.push(`/brand/${router.query.itemId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <WriteUI
      // onChangeImages={onChangeImages}
      onChangeName={onChangeName}
      onChangeRemarks={onChangeRemarks}
      onChangeContents={onChangeContents}
      onChangePrice={onChangePrice}
      onChangeAddress={onChangeAddress}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickSubmit={onClickSubmit}
      onClickUpdateSubmit={onClickUpdateSubmit}
      onChangeZipcode={onChangeZipcode}
      onCompleteDaumPostCode={onCompleteDaumPostCode}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      images={images}
      // setImages={setImages}
      isModalVisible={isModalVisible}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      data={props.data}
      isEdit={props.isEdit}
    />
  );
}
