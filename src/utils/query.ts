import gql from "graphql-tag";

export const LOAD_USER = gql`
  query loadUser {
    loadUser {
      name
    }
  }
`;
