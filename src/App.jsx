import { Component } from "react";
import dataJson from "./assets/data.json";

class App extends Component {
  state = {
    isLoaded: false,
    questions: [],
    memes: [],
    tryAgainMeme: "",
  };

  componentDidMount() {
    this.setState(
      () => ({
        questions: dataJson.questions,
        memes: dataJson.memes,
        tryAgainMeme: dataJson.tryAgainMeme,
      }),
      () => console.log(this.state)
    );
  }

  render() {
    return <></>;
  }
}

export default App;
