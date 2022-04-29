import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs
} from "../../../../commons/types/generated/types";
import { UPLOAD_FILE } from "./uploadImage.queries";
import { IUploadImage } from "./uploadImage.types";
import * as S from "./uploadImage.styles";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function UploadImage(_props: IUploadImage) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    try {
      const result = await uploadFile({
        variables: {
          file: file // shorthandPorperties 가능(key와 value값이 같을 때)
        }
      });
      // console.log(result.data?.uploadFile.url)
      setImage(result.data?.uploadFile.url);
      // props.images(result.data?.uploadFile.url, props.index)
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      {image ? (
        <S.Image
          onClick={onClickImage}
          src={`https://storage.googleapis.com/${image}`}
        />
      ) : (
        <S.UploadButton onClick={onClickImage}>
          <>+</>
          <>Upload</>
        </S.UploadButton>
      )}
      <S.HiddenUploadInputTag
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
      />
    </>
  );
}
