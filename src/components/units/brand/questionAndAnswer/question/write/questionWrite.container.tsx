import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import QuestionWriteUI from "./questionWrite.presenter";

import { CREATE_QUESTION } from "./questionWrite.queries";

export default function QuestionWrite() {
  const router = useRouter();
  const [question, SetQuestion] = useState("");
  const [createUseditemQuestion] = useMutation(CREATE_QUESTION);

  const onChangeQuestion = (event) => {
    SetQuestion(event.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.itemId),
          createUseditemQuestionInput: {
            contents: question,
          },
        },
      });
      console.log(result);
      SetQuestion("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <QuestionWriteUI
      onChangeQuestion={onChangeQuestion}
      onClickSubmit={onClickSubmit}
    />
  );
}
