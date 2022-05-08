import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import QuestionsAnswerList from "../list/questionAnswerList.container";
import { DELETE_USED_ITEM_QUESTION_ANSWER } from "../list/questionAnswerList.presenter";
import QuestionsAnswerWrite from "../write/questionAnswerWrite.container";

const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
    }
  }
`;

export default function QuestionAnswerDetail(props) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.useditemQuestionId, page: 1 }
  });

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  const onClickDelete = async (event) => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.target.id
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.useditemQuestionId, page: 1 }
          }
        ]
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {data?.fetchUseditemQuestionAnswers?.map((el) => (
        <div key={el._id}>
          <div style={{ color: "white" }}>{el.contents}</div>
          <button id={el._id} onClick={onClickDelete}>
            삭제하기
          </button>
          <QuestionsAnswerList key={el._id} el={el} />
        </div>
      ))}
      <QuestionsAnswerWrite
        data={data}
        useditemQuestionId={props.useditemQuestionId}
      />
    </>
  );
}
