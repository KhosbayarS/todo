import React from "react";
import { Query } from "react-apollo";
import Del from "./components/DeleteTodo";
import { Alert } from "reactstrap";
import Mark from "./components/MarkDone";
import { TODO } from "./components/queries";
import { Row, Col } from "antd";

const Todos = () => {
  // <p className="center">You have no todo's left, yay!</p>

  return (
    <div className="collection-item">
      <Query query={TODO}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return console.log(error);
          if (data.todos.length) {
            const name = data.todos[0].user_id;
            return data.todos.map(({ id, todo, done, user_id }) => (
              <div style={{ display: "inline" }}>
                <Row type="flex">
                  <Col md={16}>
                    <Alert key={id} color={done ? "success" : "warning"}>
                      <span key={id}>
                        {todo} <Del id={id} /> <Mark id={id} />
                      </span>
                    </Alert>
                  </Col>
                  <Col md={8}>
                    <div style={{ marginLeft: "20px" }}>{user_id}</div>
                  </Col>
                </Row>
              </div>
            ));
          } else {
            return <div> EMPTY...</div>;
          }
        }}
      </Query>
    </div>
  );
};

export default Todos;
