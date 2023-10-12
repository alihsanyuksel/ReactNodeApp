create user 'books'@'localhost' IDENTIFIED WITH mysql_native_password by 'hello';
grant all on books.* to 'books'@'localhost';

drop user 'books'@'localhost';

create user 'books'@'localhost' identified by 'hello';

grant all on books.* to 'books'@'localhost';

/*new connection with these user values after that: */

show databases;

use books;

show tables;