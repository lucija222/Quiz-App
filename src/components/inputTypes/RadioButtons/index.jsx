 //Receives ANSWERS ARRAY from Question comp.

const RadioButtons = ({ answers }) => {
    const { answers } = answers;

    return (
        <>
            {answers.map((answer, index) => (
                <>
                    <input
                        type="radio"
                        name={index}
                        id={index}
                        value={answer}
                    />
                    <label htmlFor={index}>{answer}</label> <br />
                </>
            ))}

        </>
    );
};

export default RadioButtons;
