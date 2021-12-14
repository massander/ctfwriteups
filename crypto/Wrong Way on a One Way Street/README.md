# Wrong Way on a One Way Street

Хеширование - это система, с помощью которой информация шифруется таким образом, что
ее невозможно расшифровать ... теоретически. Веб-сайты часто хэшируют пароли, чтобы
в случае утечки их паролей злоумышленники фактически не узнали пароль пользователя;
они просто получат его в зашифрованном виде.
Однако один и тот же пароль всегда будет соответствовать одному и тому же
зашифрованному тексту, поэтому, если злоумышленник сможет угадать ваш пароль,
он сможет вычислить хэш. Сможете угадать пароль для этого хеша?
cb78e77e659c1648416cf5ac43fca4b65eeaefe1

Check [CrashStation](https://crackstation.net/) or use `hashcat`

    wget http://scrapmaker.com/data/wordlists/dictionaries/rockyou.txt
    hashcat -m 100 -a 0 cb78e77e659c1648416cf5ac43fca4b65eeaefe1 ./rockyou.txt

Output

    cb78e77e659c1648416cf5ac43fca4b65eeaefe1:babyloka13       
                                                          
    Session..........: hashcat
    Status...........: Cracked
    Hash.Mode........: 100 (SHA1)
    Hash.Target......: cb78e77e659c1648416cf5ac43fca4b65eeaefe1
