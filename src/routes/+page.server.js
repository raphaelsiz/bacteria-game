import csv from 'csvtojson';
import { getNumber, getBacteria, query } from "$lib/utils";

let guesses = [];
let properties = ["Name","Indole","Urease"];
let bacteria;
let answer;
getBacteria(properties).then(b=>{
	bacteria = b || [null];
	answer = bacteria[getNumber(bacteria.length)]
	console.log(answer)
});

export function load({ params }) {
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
	default: async function ({request}) {
		const data = await request.formData()
		const Name = data.get("guess")
		if (answer.Name == Name) {
			guesses.push(answer)
			return {success: true, valid: true, correct: true, guesses}
		}
		let guess = query(Name,bacteria);
		if (!guess) return {success: true, valid: false, guesses}
		guesses.push(guess)
		return {success: true, valid: true, correct: false, guesses}
	}
}