import gql from "graphql-tag";

export const FEED = gql`
  query feed {
    feed {
      id
      title
      content
      createdAt
    }
  }
`;

export const NEW_NOTE = gql`
  mutation createDraft {
    createDraft(title: "New Draft", content: "") {
      title
      content
    }
  }
`;
export const NOTE = gql`
  query Note($id: Int!) {
    note(id: $id) {
      id
      content
      createdAt
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation updateNote($id: Int!, $content: String!) {
    updateNote(id: $id, content: $content) {
      content
    }
  }
`;
