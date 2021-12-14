# Still Believe in Magic

Мы нашли архив с файлом в нем, но не было расширения файла, поэтому мы не уверены,
что это такое. Можете ли вы выяснить, что это за файл, и затем открыть его?

```shell
    file magic.tar.gz
    # magic.tar.gz: gzip compressed data, last modified: Fri Dec  3 16:51:29 2021, from Unix, original size modulo 2^32 10240
    tar xzvf magic.tar.gz
    # magic
    file magic
    # magic: Zip archive data, at least v2.0 to extract, compression method=deflate
    ls
    # __MACOSX  magic  magic.tar.gz  magic.txt
    cat magic.txt
    # MetaCTF{was_it_a_magic_trick_or_magic_bytes?}%
```
