import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { IUpdateUseditemQuestionInput } from "../../../../../../commons/types/generated/types";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS
} from "../list/questionList.queries";
import { FETCH_USED_ITEM_QUESTION } from "../write/questionWrite.queries";
import QuestionEditUI from "./questionEdit.presenter";
import { UPDATE_USED_ITEM_QUESTION } from "./questionEdit.queries";

export default function QuestionEdit(props) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [editContents, setEditContents] = useState("");

  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);

  const onClickDelete = (event) => {
    try {
      deleteUseditemQuestion({
        variables: {
          useditemQuestionId: event.target.id
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.itemId, page: 1 }
          }
        ]
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdateButton = () => {
    setIsEdit(true);
  };

  const onClickCancelButton = () => {
    setIsEdit(false);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setEditContents(event.target.value);
  };

  const onClickUpdate = () => {
    try {
      const updateUseditemQuestionInput: IUpdateUseditemQuestionInput = {};
      if (editContents) updateUseditemQuestionInput.contents = editContents;

      updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: updateUseditemQuestionInput,
          useditemQuestionId: props.el._id
        },

        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION,
            variables: { useditemId: router.query.itemId, page: 1 }
          }
        ]
      });
      setIsEdit(false);
      if (!editContents) return;
      Modal.success({ content: "수정이 성공적으로 완료되었습니다." });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <QuestionEditUI
      onClickRegisCommentAnswer={props.onClickRegisCommentAnswer}
      onClickUpdateButton={onClickUpdateButton}
      onClickCancelButton={onClickCancelButton}
      onChangeContents={onChangeContents}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
      isEdit={isEdit}
      el={props.el}
    />
  );
}
