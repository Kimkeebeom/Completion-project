import { gql, useQuery } from "@apollo/client";
import BestItemsUI from "./bestItems.presenter";

const FETCH__BEST_USED_ITEMS = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
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

export default function BestItems() {
  const { data } = useQuery(FETCH__BEST_USED_ITEMS);

  return <BestItemsUI data={data} />;
}
