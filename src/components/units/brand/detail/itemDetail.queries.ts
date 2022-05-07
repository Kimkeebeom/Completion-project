import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      createdAt
      buyer {
        _id
        name
      }
      seller {
        _id
        name
      }
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export const TOGGLE_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const FETCH_PICK = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
    }
  }
`;

// export const UPDATE_BOARD = gql`
//   mutation updateBoard(
//     $boardId: ID!
//     $password: String
//     $updateBoardInput: UpdateBoardInput!
//   ) {
//     updateBoard(
//       boardId: $boardId
//       password: $password
//       updateBoardInput: $updateBoardInput
//     ) {
//       _id
//     }
//   }
// `
