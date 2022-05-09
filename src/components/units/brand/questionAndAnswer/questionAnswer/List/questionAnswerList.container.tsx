import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import QuestionAnswerListUI from "./questionAnswerList.presenter";
import { DELETE_USED_ITEM_QUESTION_ANSWER } from "./questionAnswerList.queries";

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

export default function QuestionAnswerList(props) {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.questionEl._id, page: 1 }
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
            variables: {
              useditemQuestionId: props.questionEl._id,
              page: 1
            }
          }
        ]
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return <QuestionAnswerListUI data={data} onClickDelete={onClickDelete} />;
}
