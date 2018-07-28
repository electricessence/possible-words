# possible-words
A simple set of functions that demonstrates building a word tree and how to retrieve the possible words.

## Usage
```node index [word]```

#### Example 1
```
>node index cat
Possible words for: "cat"
act
at
cat
ta
```

#### Example 2
```
>node index aha
Possible words for: "aha"
aa
aah
ah
aha
ha
```

## Source Dictionary

```words.txt```

##### View the resultant map by:
```node words-to-json```

##### Results in:
```words.json```

Which could be used directly instead of recompiling each time.
