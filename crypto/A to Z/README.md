# A to Z

Для решения этого зашифрованного флага потребуется только простой шифр замены. Переставьте буквы от А до Я.

    yzhsufo_rh_nb_uze_wdziu

---

A = Z, B = Y, C = ...

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

 // Decoding table
 // string(A) -> byte(Z)
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

Otput

	MetaCTF{bashful_is_my_fav_dwarf}
