import ForwardBar from "../../ui_components/ForwardBar";
import FormField from "../../ui_components/general/FormField";
import PageContainer from "../../ui_components/general/PageContainer";

const PaymentPage = () => (
	<>
		<ForwardBar />
		<PageContainer>
			<div className="vertical-display v-align">
				<h1 className="highlight">Ingresa tus datos</h1>
				<div className="horizontal-grid-2fr size-h-100">
					<FormField name={"Nombre"} type={"text"}/>
					<FormField name={"Apellido paterno"} type={"text"}/>
					<FormField name={"Apellido materno"} type={"text"}/>
					<FormField name={"Teléfono"} type={"number"}/>
					<FormField name={"Correo electrónico"} type={"text"}/>
				</div>
			</div>
		</PageContainer>
	</>
);

export default PaymentPage;
