import csv from 'csvtojson';
import { getNumber, getBacteria, query, toGuess } from "$lib/utils";

let properties = ["Name","Indole","Urease"];
let bacteria;
let answer;
getBacteria(properties).then(b=>{
	bacteria = b || [null];
	answer = bacteria[getNumber(bacteria.length)]
	console.log(answer)
});

export function load({}) {
	return {
		answer: {
			Name: "",
            Shape: "",
            "Aerobic needs": ""
		},
		properties
	};
}
export const actions = {
	default: async function ({request,cookies}) {
		let guesses = cookies.get('guesses') ? JSON.parse(cookies.get('guesses')) : [];
		const data = await request.formData()
		const Name = data.get("guess")
		if (answer.Name == Name) {
			guesses.push(toGuess(answer,answer))
			return {success: true, valid: true, correct: true, guesses}
		}
		let guess = query(Name,bacteria);
		if (!guess) return {success: true, valid: false, guesses}
		guesses.push(toGuess(guess,answer))
		cookies.set('guesses',JSON.stringify(guesses))
		return {success: true, valid: true, correct: false, guesses}
	}
}