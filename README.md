# exercise-app

for dev purposes you need a mysql-login.json file at the root of `client/` and the client must be on the dev computer.

## mysql-login.json

Make your own one of these! Put it in your project root. Use it with the mysql scripts in the 'sql' folder.

```
{
    "host": "somehost",
    "port": "3306"
    "user": "root",
    "password": "password"
}
```

## `.env` file

Maybe make your own one of these too.

```
export BACKEND_PORT="3010"
export BACKEND_URL="http://localhost:"

export MYSQL_PORT="3306"
export MYSQL_USER="root"
export MYSQL_HOST="http://172.17.0.2:"
export MYSQL_PASSWORD="somepass"
```