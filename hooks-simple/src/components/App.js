import React, { useState } from "react";

import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div className="ui container" style={{ paddingTop: "10px" }}>
      <div className="ui content">
        <button
          className="ui button primary"
          onClick={() => setResource("posts")}
        >
          Posts
        </button>
        <button
          className="ui button primary"
          onClick={() => setResource("todos")}
        >
          Todos
        </button>
      </div>
      <UserList />
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
