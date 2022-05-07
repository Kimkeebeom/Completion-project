import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import QuestionWriteUI from "./questionWrite.presenter";

import {
  CREATE_QUESTION,
  FETCH_USED_ITEM_QUESTION
} from "./questionWrite.queries";

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
            contents: question
          }
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION,
            variables: { useditemId: String(router.query.itemId), page: 1 }
          }
        ]
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
      question={question}
    />
  );
}
