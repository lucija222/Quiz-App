import Button from "../../components/Button/index.jsx";
import Checkboxes from "../../components/inputTypes/Checkboxes/index.jsx";
import RadioButtons from "../../components/inputTypes/RadioButtons/index.jsx";

//Has to receive a SINGLE QUESTION object, sent as questios[index]!
//Have to handle button onClick!
const Question = ({ question }) => {
    const { type, question, questionCode, answers, correctAnswers } = question;

    const text = "Submit";

    if (type == "text-input") {
        return (
            <>
                <label htmlFor={type}>{question}</label> <br />
                {questionCode !== "" && (
                    <img src={questionCode} alt="Question's code" />
                )}
                <br />
                <p id="answerGuide">
                    Separate values with a comma and a single space. E.g. "true,
                    6"
                </p>
                <input type="text" id={type} />
                <Button text={text} />
            </>
        );
    } else if (type == "radio-buttons") {
        return (
            <>
                <p>{question}</p> <br />
                {questionCode !== "" && (
                    <img src={questionCode} alt="Question's code" />
                )}
                <br />
                <RadioButtons answers={answers} />
                <Button text={text} />
            </>
        );
    } else {
        return <>
            <p>{question}</p> <br />
                {questionCode !== "" && (
                    <img src={questionCode} alt="Question's code" />
                )}
                <br />
                <Checkboxes answers={answers} />
                <Button text={text}/>
        </>;
    }
};

export default Question;
