

-- @block
create table myTable1 (
table1_id int, 
first_name varchar(30),
last_name varchar(30) not null, 
primary key (table1_id)  );

-- @block
create table myTable2 (
table2_id int, 
first_name varchar(30),
last_name varchar(30) not null, 
primary key (table2_id)  );

-- @block
CREATE TABLE myTable2(
table2_id int, 
FirstName VARCHAR(30), 
LastName VARCHAR(30) NOT NULL,
CONSTRAINT mytable2_PK primary key (table2_id)
)

-- @block
DROP TABLE myTable2

-- @block


-- @block
