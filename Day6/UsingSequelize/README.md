# Database

## Create user, db, and grant access

```shell
mysql -u root -p 
```

```mysql 
create user ngrusr identified by 'ngrpass';
create database ngrwsdb;
grant all privileges on ngrwsdb.* to ngrusr;
flush privileges;
exit
```


