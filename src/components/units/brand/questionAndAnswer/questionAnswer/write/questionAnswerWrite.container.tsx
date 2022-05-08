import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import router from "next/router";
import { ChangeEvent, useState } from "react";
import QuestionsAnswerWriteUI from "./questionAnswerWrite.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWERS,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./questionAnswerWrite.queries";

export default function QuestionsAnswerWrite(props) {
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWERS
  );

  const [questionAnswers, setQuestionAnswers] = useState("");
  const [isClick, setIsClick] = useState(false);

  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestionAnswers(e.target.value);
  };

  const onClickCommentAnswerButton = () => {
    setIsClick(true);
  };

  const onClickCancelButton = () => {
    setIsClick(false);
  };

  const onClickRegisCommentAnswer = async () => {
    console.log("등록됐나?", questionAnswers);
    console.log(router.query.itemId);
    console.log("data:", props.questionEl);
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: questionAnswers,
          },
          useditemQuestionId: props.questionEl._id, // 기존 댓글에 대한 ID값!
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.questionEl._id, page: 1 },
          },
        ],
      });
      setQuestionAnswers("");
      setIsClick(false);
      //   props.setIsEdit(false);
      console.log("contents:", questionAnswers);
      if (questionAnswers) {
        Modal.success({ content: "답글이 등록되었습니다." });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <QuestionsAnswerWriteUI
      isClick={isClick}
      questionAnswers={questionAnswers}
      onChangeContents={onChangeContents}
      onClickCancelButton={onClickCancelButton}
      onClickCommentAnswerButton={onClickCommentAnswerButton}
      onClickRegisCommentAnswer={onClickRegisCommentAnswer}
    />
  );
}
