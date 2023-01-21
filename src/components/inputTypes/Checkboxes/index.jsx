//Receives ANSWERS ARRAY from Question comp.

const Checkboxes = ({ answers }) => {
    const { answers } = answers;

    return (
        <>
            {answers.map((answer, index) => (
                <>
                    <input
                        type="checkbox"
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

export default Checkboxes;
