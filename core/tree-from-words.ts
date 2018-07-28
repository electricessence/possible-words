/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {deepFreeze} from "../util/deep-freeze";

export const WORD_END:string = "\n";

export interface IMapReadOnly<T>
{
	[key:string]:Readonly<T>;
}

export interface DictionaryTreeNode extends IMapReadOnly<DictionaryTreeNode|string[]> {}

export function treeFromWords(words:string[]):DictionaryTreeNode
{
	const root = {};
	for(let word of words)
	{
		if(!word) continue; // Just in case we get an empty blank value.
		let node = root;
		for(const letter of word.split('').sort())
		{
			let n = node[letter];
			if(!n) node[letter] = n = {};
			node = n;
		}

		let a = node[WORD_END];
		if(!a) node[WORD_END] = a = [];
		a.push(word);
	}
	return deepFreeze(root); // keep the result immutable.
}
