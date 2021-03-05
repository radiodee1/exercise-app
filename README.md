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
VUE_APP_BACKEND_PORT="3010"
VUE_APP_BACKEND_URL="http://localhost:"

VUE_APP_MYSQL_PORT="3306"
VUE_APP_MYSQL_USER="root"
VUE_APP_MYSQL_HOST="http://172.17.0.2:"
VUE_APP_MYSQL_PASSWORD="somepass"
```