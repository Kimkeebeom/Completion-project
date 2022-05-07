import "react-quill/dist/quill.snow.css";
import * as S from "./write.styles";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import UploadImage from "../../commons/upload/image/uploadImage.container";
import { IProductWriteUI } from "./write.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false
});

export default function WriteUI(props: IProductWriteUI) {
  const handleChange = (value: string) => {
    console.log(value);
    // value값이 <p><br></p>와 같으면 빈 문자로 보여주고 아니면 value값을 보여주기
    // setValue('contents', value === '<p><br></p>' ? "" : value)

    // yup에서 값이 변경되는 것만 인지할 뿐,
    // 검증까지 못하기 때문에 react-hook-form에
    // onChange됐는지 안됐는지 알려주는 기능
    // trigger('contents')
    // }
  };

  return (
    <S.Wrapper>
      <div className="titleBox">
        <h1 className="title">{props.isEdit ? "수정" : "등록"}</h1>
      </div>
      <S.RowWrap>
        <S.Label>상품명</S.Label>
        <S.Input
          type="text"
          placeholder="상품명을 작성해주세요"
          onChange={props.onChangeName}
          defaultValue={props.data ? props.data?.fetchUseditem?.name : ""}
        />
      </S.RowWrap>

      <S.RowWrap>
        <S.Label>상품 요약</S.Label>
        <S.Input
          type="text"
          placeholder="상품요약을 작성해주세요"
          onChange={props.onChangeRemarks}
          defaultValue={props.data ? props.data?.fetchUseditem?.remarks : ""}
        />
      </S.RowWrap>

      <S.RowWrap>
        <S.Label>상품 내용</S.Label>
        {/* <div className="ReactQuill">
          <ReactQuill
            onChange={handleChange}
            defaultValue={props.data ? props.data?.fetchUseditem?.contents : ""}
          />
        </div> */}
        <S.Contents
          type="textarea"
          onChange={props.onChangeContents}
          defaultValue={props.data ? props.data?.fetchUseditem?.contents : ""}
        />
      </S.RowWrap>

      <S.RowWrap>
        <S.Label>판매 가격</S.Label>
        <S.Input
          type="number"
          placeholder="상품 가격을 입력해주세요"
          onChange={props.onChangePrice}
          defaultValue={props.data ? props.data?.fetchUseditem?.price : ""}
        />
      </S.RowWrap>

      <S.RowWrap>
        <S.Label>태그 입력</S.Label>
        <S.Input type="tag" placeholder="#태그 #태그 #태그" />
      </S.RowWrap>

      <S.Location>
        <S.Label>브랜드 위치</S.Label>
        <S.RowWrap>
          <S.Img>
            <img src="/images/mapExample.png" />
          </S.Img>
          {props.isModalVisible && (
            <Modal
              title="주소 검색"
              visible={true}
              onOk={props.handleOk}
              onCancel={props.handleCancel}
            >
              <DaumPostcode onComplete={props.onCompleteDaumPostCode} />
            </Modal>
          )}
          <S.AddressBox>
            <div>
              <input
                type="primary"
                placeholder="07250"
                onChange={props.onChangeZipcode}
                value={
                  props.zipcode
                    ? props.zipcode
                    : props.data?.fetchUseditem?.useditemAddress?.zipcode
                }
                readOnly
              />
              <button onClick={props.showModal}>우편번호 검색</button>
            </div>
            <S.AddressContents>
              <S.AddressInput
                type="text"
                defaultValue={
                  props.address
                    ? props.address
                    : props.data?.fetchUseditem?.useditemAddress?.address
                }
                readOnly
              />
              <S.AddressInput
                type="text"
                placeholder="상세주소 입력"
                onChange={props.onChangeAddressDetail}
                defaultValue={
                  props.addressDetail
                    ? props.addressDetail
                    : props.data?.fetchUseditem?.useditemAddress?.addressDetail
                }
              />
            </S.AddressContents>
          </S.AddressBox>
        </S.RowWrap>
      </S.Location>

      <S.ImageBox>
        <span>사진 첨부</span>
        <div className="ImageUploadBox">
          {props.images?.map((el: string, index: number) => (
            <UploadImage
              key={uuidv4()}
              fileRef={""}
              index={index}
              image={el}
              onChangeImages={props.onChangeImages}
            />
          ))}
        </div>
      </S.ImageBox>

      <S.ButtonBox>
        <S.RegisButton
          onClick={
            props.isEdit ? props.onClickUpdateSubmit : props.onClickSubmit
          }
          isActive={props.isActive}
        >
          {props.isEdit ? "수정" : "등록"}
        </S.RegisButton>
        <S.CancelButton>취소</S.CancelButton>
      </S.ButtonBox>
    </S.Wrapper>
  );
}
