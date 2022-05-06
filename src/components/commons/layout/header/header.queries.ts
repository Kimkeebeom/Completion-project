import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUserLoggedIn {
    _id
    email
    name
    userPoint {
      amount
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
