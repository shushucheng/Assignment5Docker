# Assignment5Docker
CS612 Assignment5 MyFavoriteRestaurant (Docker+ Node.js+ Json)
-----------------------------------------------------------------------------------------------------------------------------------
Step1: Start the docker
1. docker images                                                        
List images in the docker

2. docker ps -a                                                         
Show all containers

3. docker build -t mynodeapp .                                          
Build an image from a Dockerfile(My image was named mynodeapp)
       -t Name and optionally a tag in the ‘name:tag’ format 
                                                                        
4. docker run --rm -d -p 8888.8888 --name myrunningapp mynodeapp
Run a command in a new container(My container was named myrunningapp).
      --name Assign a name to the container
      --rm Automatically remove the container when it exits
      -d Run container in background and print container ID
      -p Publish a container’s port(s) to the host

5. docker logs myrunningapp 
Fetch the logs of a container

6. docker rm myrunningapp                                               
Remove one or more containers

7. docker rmi -f mynodeapp                                              
Remove one or more images
      -f Force removal of the image

-------------------------------------------------------------------------------------------------------------------------------------
Step2: Open the browser(before you enter the command 6 of step1)
1. enter localhost:8888/listRestaurant
Displays a collection of my favorite chinese restaurants

2. enter localhost:8888/listRestaurant/1 or localhost:8888/listRestaurant/2 or localhost:8888/listRestaurant/3 
Displays a single restaurant that the corresponds to an ID=1,2,3 
                                                                        
