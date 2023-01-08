import "./Calculator.css";
import React, { useState } from "react";

function Calculator() {
	const [altura, setAltura] = useState();
	const [peso, setPeso] = useState();
	const [resultado, setResultado] = useState();

	function calculate(){
		const imc = peso/(altura*altura);
		const imcFormatado = imc.toFixed(2);
		setResultado(imcFormatado);
    }


	return (
		<div className="Calculator">
			<h3>Altura</h3>
			<input type="number"
				value={altura}
				onChange={(e)=>setAltura(+e.target.value)}
				placeholder="Altura (m)">

			</input>
			<h3>Peso</h3>
			<input type="number"
				value={peso}
				onChange={(e)=>setPeso(+e.target.value)}
				placeholder="Peso (kg)">
            </input>
			<button onClick={calculate} className="Calculator-botao" >Calcular</button>
            <br />
			<h3>{resultado}</h3>
		</div>
	);
}

export default Calculator;
