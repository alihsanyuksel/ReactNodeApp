use books;

insert into books (author, title, published)
values
('ali ihsan', 'birden', '1988-01-01');

select * from books;

SHOW PROCESSLIST;

delete from books where id = 1;

insert into books (author, title, published)
values
('ali ihsan', 'segh', '1988-01-01');

set SQL_SAFE_UPDATES = 0;

delete from books;

insert into books set author = 'Cahide Arslan',
title = 'yenilmezler',
published = '1999-02-02';
