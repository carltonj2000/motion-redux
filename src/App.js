import React, { Component } from "react";
import ImageAnimation from "./ImageAnimation";

class App extends Component {
  render() {
    return (
      <div>
        <ImageAnimation
          startingWidth={400}
          startingHeight={200}
          startingX={200}
          startingY={200}
          endingWidth={1000}
          endingHeight={400}
          endingX={0}
          endingY={0}
          image="https://via.placeholder.com/400x400"
        />
      </div>
    );
  }
}

export default App;
