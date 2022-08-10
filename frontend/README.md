Install Docker-Machine using git bash using below command
 if [[ ! -d "$HOME/bin" ]]; then mkdir -p "$HOME/bin"; fi && curl -L https://github.com/docker/machine/releases/download/v0.16.2/docker-machine-Windows-x86_64.exe > "$HOME/bin/docker-machine.exe" && chmod +x "$HOME/bin/docker-machine.exe"
Create ec2 instance as host for application
docker-machine create --driver amazonec2 --amazonec2-access-key AK************** --amazonec2-secret-key rZ*************************** vidly
Create optimised build for frontend
docker build -t vidly_web_opt -f Dockerfile.prod .
Build application
docker-compose -f docker-compose.prod.yml build
Test application
docker-compose -f docker-compose.prod.yml up -d 
Deploy application in AWS
docker-machine env vidly
eval $("C:\Users\*****\bin\docker-machine.exe" env vidly)




