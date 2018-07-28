/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {DictionaryTreeNode, WORD_END} from "./tree-from-words";

export function getPossibleWords(
	root:DictionaryTreeNode,
	characters:string):string[]
{
	let results:string[] = [];
	let node:DictionaryTreeNode = root;

	for(const letter of characters.split('').sort())
	{
		const n = node[letter];
		if(!n || Array.isArray(n)) break;
		const a = n[WORD_END];
		if(Array.isArray(a) && a.length)
			results = results.concat(a);
		node = n;
	}
	return results;
}