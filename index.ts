/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import getPossibleWords from "./words";

const word = process.argv[process.argv.length-1];
if(word)
{
	console.log(`Possible words for: "${word}"`);
	for(const w of getPossibleWords(word))
		console.log(w);
}