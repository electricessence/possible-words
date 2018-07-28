/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {getPossibleWords as getWords} from "./core/get-possible-words";
import {treeFromWords} from "./core/tree-from-words";
import {dictionary as dict} from "./dictionary";

export const dictionary = treeFromWords(dict.fromFile("words.txt"));
export default function getPossibleWords(characters:string):string[]
{
	return getWords(dictionary, characters);
}

export function saveToJson()
{
	dict.toJsonFile("words.json",dictionary);
}