import gql from "graphql-tag";

export const SIGN_UP = gql`
  mutation signUp($email: String!, $password: String!, $name: String!) {
    signUp(user: { email: $email, password: $password, name: $name }) {
      token
    }
  }
`;
