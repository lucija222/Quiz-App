import { Component } from "react";
import { getData } from "./services/fetch";

class App extends Component {
    state = {
        isLoaded: false,
        questions: [],
        memes: [],
        tryAgainMeme: "",
    };

    componentDidMount() {
        const data = getData();
        this.setState(() => ({questions: data.questions, memes: data.memes, tryAgainMeme: data.tryAgainMeme}),
        () => console.log(this.state))
    };

    render() {
        return <></>;
    }
}

export default App;
