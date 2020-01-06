import gql from "graphql-tag";

export const MARK_DONE = gql`
  mutation MarkDone($id: Int!) {
    update_todos(where: { id: { _eq: $id } }, _set: { done: true }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const TODO = gql`
  query {
    todos(order_by: { id: asc }) {
      id
      todo
      done
      user_id
    }
  }
`;
export const ADD_TODO = gql`
  mutation AddTodo($todo: String!) {
    insert_todos(objects: [{ todo: $todo }]) {
      returning {
        id
      }
    }
  }
`;

export const DEL_TODO = gql`
  mutation AddTodo($id: Int!) {
    delete_todos(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
