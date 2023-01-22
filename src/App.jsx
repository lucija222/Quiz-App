import { Component } from "react";
import { getData } from "./services/fetch";

class App extends Component {
  state = {
    isLoaded: false,
    questions: [],
    memes: [],
    tryAgainMeme: "",
  };

  async componentDidMount() {
    const data = await getData();
    this.setState(
      () => ({
        questions: data.record.questions,
        memes: data.record.memes,
        tryAgainMeme: data.record.tryAgainMeme,
      }),
      () => console.log(this.state)
    );
  }

  render() {
    return <></>;
  }
}

export default App;
