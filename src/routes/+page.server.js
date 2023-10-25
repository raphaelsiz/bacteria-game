import csv from 'csvtojson';
import { getNumber, getBacteria } from "$lib/utils";

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
		guesses, properties
	};
}
export const actions = {
	default: async function ({request}) {
		const data = await request.formData()
		const Name = data.get("guess")
		guesses.push({Name})
		return {success: true, valid: false, guesses}
	}
}