echo $1
echo "use password as first parameter."

echo "docker logs mysql1 2>&1 | grep GENERATED"
echo "Some helpful mysql commands"
echo "mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'password';"
echo "mysql> SET PASSWORD = PASSWORD('password');"
echo 
echo "some helpful docker commands"
echo "sudo docker ps"
echo "sudo docker container ls"
echo "sudo docker stop 'container'"
echo "sudo docker start mysql1"
echo
echo "mysql> update mysql.user set host='%' where user='root';"

echo

docker exec -it mysql1 mysql -uroot -p"$1"


