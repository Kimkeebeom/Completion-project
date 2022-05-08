import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroller";
import QuestionAnswerListUI from "./questionAnswerList.presenter";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./questionAnswerList.queries";

const Wrap = styled.div`
  width: 100%;
`;

export default function QuestionAnswerList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      page: 1,
      useditemQuestionId: String(router.query.itemId)
      // useditemId: "62736f7ca8255b002988fbf0",
    }
  });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestionAnswers) {
          return {
            fetchUseditemQuestionAnswers: [...prev.fetchUseditemQuestionAnswers]
          };
        }
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers
          ]
        };
      }
    });
  };

  return (
    <Wrap>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={true}
      >
        {data?.fetchUseditemQuestions.map((el, index) => (
          <Fragment key={index}>
            <QuestionAnswerListUI data={data} el={el} />
          </Fragment>
        ))}
      </InfiniteScroll>
    </Wrap>
  );
}
