import { gql, useQuery } from "@apollo/client";
import ItemsListUI from "./itemsList.presenter";

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      price
      tags
      images
      seller {
        name
      }
    }
  }
`;

export default function ItemsList(props) {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: { isSoldout: false, search: "", page: 1 },
  });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems) {
          return { fetchUseditems: [...prev.fetchUseditems] };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <ItemsListUI data={data} isMain={props.isMain} onLoadMore={onLoadMore} />
  );
}
