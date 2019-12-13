import React, { Component } from "react";

import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
          style={{ cursor: "pointer" }}
        />
        <i
          className="flag br"
          onClick={() => this.context.onLanguageChange("brazilian")}
          style={{ cursor: "pointer" }}
        />
      </div>
    );
  }
}

export default LanguageSelector;
