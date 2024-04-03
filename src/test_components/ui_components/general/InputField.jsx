const InputField = ({ type, lenght }) => {
    let size = "size-3em";
    const emailStructure = /\w+@[a-zA-Z]+\.[a-zA-Z]{3,5}(\.[a-zA-Z]{3,5})?/;

    const checkEmail = (e) => {
        console.log(emailStructure.test(e.target.value));
    }

    if (lenght === 100){
        size = "size-max"
    }

    return (
    <input
        className={`field-style ${size}`}
        spellCheck={false}
        type={type}
        onChange={checkEmail}
    />
)};

export default InputField;
