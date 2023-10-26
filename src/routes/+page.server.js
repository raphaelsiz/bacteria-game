import csv from 'csvtojson';
import { getNumber, getBacteria, query, toGuess } from "$lib/utils";

let properties = ["Name","Indole","Urease","D-glucose","D-mannitol","Lactose","Sucrose","Maltose","Salacin","Gelatinase","Glycerol"];
let bacteria;
let answer;
getBacteria(properties).then(b=>{
	bacteria = b || [null];
	answer = bacteria[getNumber(bacteria.length)]
	console.log(answer)
});

export function load({}) {
	return {
		properties
	};
}
export const actions = {
	default: async function ({request}) {
		const data = await request.formData()
		let guesses = JSON.parse(data.get("guesses"));
		const Name = data.get("guess")
		if (answer.Name.toLowerCase() == Name.toLowerCase()) {
			guesses.push(toGuess(answer,answer))
			return {success: true, valid: true, correct: true, guesses}
		}
		let guess = query(Name,bacteria);
		if (!guess) return {success: true, valid: false, guesses}
		guesses.push(toGuess(guess,answer))
		return {success: true, valid: true, correct: false, guesses}
	}
}