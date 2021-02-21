#!/bin/bash

echo $# $1

if [[ "$#" != "1" ]] ; then
    echo "one parameter needed!"
    echo "password for container"
    exit
fi

echo "starting docker server."


docker pull mysql/mysql-server:5.6.42
docker run --name=mysql1 -e MYSQL_ROOT_HOST=% -e MYSQL_ROOT_PASSWORD="$1" -d mysql/mysql-server:5.6.42 
docker start mysql1 
echo
ip a | grep docker | grep inet

docker inspect mysql1 | grep IPAddress

docker ps