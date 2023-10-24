import { getNumber } from "$lib/timeutils";
let guesses = [];
let properties = ["Name","Shape","Aerobic needs","Gram"];
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
		const guess = data.get("guess")
		guesses.push({Name: guess})
		return {success: true, valid: false, guesses, properties}
	}
}