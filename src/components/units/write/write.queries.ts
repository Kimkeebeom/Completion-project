import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      price
      contents
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
      images
    }
  }
`;
