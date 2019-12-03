import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
  return (
    <div
      className="ui container comments"
      style={{ marginTop: 12, marginBottom: 12 }}
    >
      <ApprovalCard>
        <strong>Are you sure you want to do this?</strong>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.findName()}
          text={faker.lorem.words(5)}
          avatar={faker.image.avatar()}
          timeAgo="Today at 4:45PM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.findName()}
          text={faker.lorem.words(5)}
          avatar={faker.image.avatar()}
          timeAgo="Today at 2:00AM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.findName()}
          text={faker.lorem.words(5)}
          avatar={faker.image.avatar()}
          timeAgo="Today at 9:30PM"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
