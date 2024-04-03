import ButtonOption from "../../ui_components/general/ButtonOption";
import ElementsContainer from "../../ui_components/general/ElementsContainer";
import InputField from "../../ui_components/general/InputField";
import TextBox from "../../ui_components/general/TextBox";

const Home = () => (
	<ElementsContainer>
		<TextBox>Lista de productos</TextBox>
		<div className="horizontal-display">
			<ButtonOption
				text={"Productos"} // Texto del botón
				type={"main"} // Tipo de botón
				url={"/productos"} // URL del botón
			/>
			<InputField type={"text"} lenght={100}/>
		</div>
	</ElementsContainer>
);

export default Home;
