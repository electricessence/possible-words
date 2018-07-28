/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {DictionaryTreeNode, WORD_END} from "./tree-from-words";

function getPossibleWordsFromNode(
	node: DictionaryTreeNode,
	orderedLookup: ArrayLike<string>,
	index: number = 0): string[]
{
	let results: string[] = [];
	const len = orderedLookup.length;
	let previousChar: string;
	let char: string;

	for (; index < len; index++)
	{
		previousChar = char;
		char = orderedLookup[index];
		const n = node[char];
		if (!n) continue; // Invalid? Try the next one.

		const a = n[WORD_END];
		if (a && a.length)
			results = results.concat(a);

		if (previousChar != char)
		{
			// some limited recursion.
			results = results.concat(
				getPossibleWordsFromNode(node, orderedLookup, index + 1));
		}

		node = <DictionaryTreeNode>n;
	}

	return results;
}

// noinspection SpellCheckingInspection
export function getPossibleWords(
	root: DictionaryTreeNode,
	characters: string): string[]
{
	// category => acegorty
	// aha => aah
	return getPossibleWordsFromNode(root,
		Object.freeze(characters.split('').sort()/*keep immutable just in case*/));
}