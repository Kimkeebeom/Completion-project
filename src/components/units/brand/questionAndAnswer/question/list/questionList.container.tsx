import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import QuestionListUI from "./questionList.presenter";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroller";

const FETCH_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      user {
        _id
        name
      }
      createdAt
    }
  }
`;

const Wrap = styled.div`
  width: 100%;
`;

export default function QuestionList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_QUESTIONS, {
    variables: {
      page: 1,
      useditemId: String(router.query.itemId),
      // useditemId: "62736f7ca8255b002988fbf0",
    },
  });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions) {
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
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
            <QuestionListUI data={data} el={el} />
          </Fragment>
        ))}
      </InfiniteScroll>
    </Wrap>
  );
}
