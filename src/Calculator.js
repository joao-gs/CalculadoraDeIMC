import "./Calculator.css";
import React, { useState } from "react";

function Calculator() {
	const [height, setHeight] = useState();
	const [weight, setWeight] = useState();
	const [result, setResult] = useState();

	function calculate(){
		const imc = weight/(height*height);
		const imcModified = imc.toFixed(2);
		setResult(imcModified);
    }


	return (
		<div className="Calculator">
			<h3>Altura</h3>
			<input type="number"
				value={height}
				onChange={(e)=>setHeight(+e.target.value)}
				placeholder="Altura (m)">

			</input>
			<h3>Peso</h3>
			<input type="number"
				value={weight}
				onChange={(e)=>setWeight(+e.target.value)}
				placeholder="Peso (kg)">
            </input>
			<button onClick={calculate} className="Calculator-botao" >Calcular</button>
            <br />
			<h3>{result}</h3>
		</div>
	);
}

export default Calculator;
