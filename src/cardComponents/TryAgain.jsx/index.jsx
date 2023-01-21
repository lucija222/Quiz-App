//Should receive HINT property - have to add it to JSON, possibly change question prop !!
//Have to handle Button onClick!

import Button from "../../components/Button";

const TryAgain = ({hint}) => {

    const hintText = `Hint: ${hint}`;

    return (
        <>
            <img src="../../assets/images/failMeme/404error.jpg" alt="Meme about your lack of knowledge" /> <br />
            <p>{hintText}</p>
            <Button text="Try Again"/>
        </>
    );
}

export default TryAgain;