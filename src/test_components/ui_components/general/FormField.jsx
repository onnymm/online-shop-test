import InputField from "./InputField";

const FormField = ({name, type}) => (
    <div className="vertical-display">
        {name}
        <InputField type={type} lenght={100}/>
    </div>
)

export default FormField;