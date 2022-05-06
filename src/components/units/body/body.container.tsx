import { gql, useQuery } from "@apollo/client";
import BodyUI from "./body.presenter";

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

export default function Body() {
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: { isSoldout: false, search: "", page: 1 },
  });

  return <BodyUI data={data} />;
}
