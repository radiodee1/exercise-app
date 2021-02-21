docker stop mysql1
docker container rm mysql1
docker rm $(docker ps -a -q)
docker images ls

docker ps -a
