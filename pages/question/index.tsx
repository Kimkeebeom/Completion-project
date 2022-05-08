import QuestionWrite from "../../src/components/units/brand/questionAndAnswer/question/write/questionWrite.container";
import styled from "@emotion/styled";
import QuestionList from "../../src/components/units/brand/questionAndAnswer/question/list/questionList.container";
const Wrap = styled.div`
  width: 100%;
  padding: 20px;
`;

export default function QuestionPage() {
  return (
    <Wrap>
      <QuestionWrite />
      <QuestionList />
    </Wrap>
  );
}
