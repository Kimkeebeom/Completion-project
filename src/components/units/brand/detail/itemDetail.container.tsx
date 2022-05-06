import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DetailUI from "./itemDetail.presenter";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
    }
  }
`;

export default function Detail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: String(router.query.itemId)
    }
  });

  const MoveToproductEdit = () => {
    router.push(`/brand/${router.query.itemId}/edit`);
  };

  return <DetailUI data={data} MoveToproductEdit={MoveToproductEdit} />;
}
