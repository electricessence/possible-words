/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import * as fs from "fs";
import {DictionaryTreeNode} from "./core/tree-from-words";

export namespace dictionary
{
	export function fromFile(fileName:string):string[]
	{
		return fs.readFileSync(fileName)
			.toString()
			.split("\r\n");
	}

	export function toJsonFile(fileName:string, dictionary:DictionaryTreeNode)
	{
		fs.writeFileSync(fileName, JSON.stringify(dictionary, null, "\t"));
	}
}
