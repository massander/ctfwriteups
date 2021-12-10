# A to Z

A = Z

B = Y

...


```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	// A encodes to Z, B to Y, ...
	alphabet := []byte("abcdefghijklmnopqrstuvwxyz")
	len := len(alphabet)
	alphabetMap := make(map[string]byte)
	for idx, val := range alphabet {
		alphabetMap[string(val)] = alphabet[len-idx-1]
	}

	fmt.Println(alphabetMap)

	cipher := strings.Split("yzhsufo_rh_nb_uze_wdziu", "_")
	flag := func(s []string) { fmt.Printf("MetaCTF{%s}", strings.Join(s, "_")) }
	result := make([]string, 0)

	for i := range cipher {
		word := []byte(cipher[i])
		for i, char := range word {
			word[i] = alphabetMap[string(char)]
		}
		result = append(result, string(word))
	}

	flag(result)
}
```
