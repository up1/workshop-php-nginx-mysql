# Workshop 2024/09/09
* PHP 8.3.9-fpm
* NGINX
* MySQL
* PHPMyAdmin
* Testing with [Cypress](https://www.cypress.io/)


## 1. Build 
```
$docker compose build php
$docker compose build nginx
```

## 2. Run NGINX + PHP (fpm) + MySQL
```
$export WEB_PORT=your-port
$docker compose up -d nginx

$docker compose ps
NAME                IMAGE             COMMAND                  SERVICE   CREATED              STATUS                        PORTS
php-nginx-db-1      mysql:9           "docker-entrypoint.s…"   db        About a minute ago   Up About a minute (healthy)   3306/tcp, 33060/tcp
php-nginx-nginx-1   php-nginx-nginx   "/docker-entrypoint.…"   nginx     5 seconds ago        Up 3 seconds                  0.0.0.0:8000->80/tcp
php-nginx-php-1     php-nginx-php     "docker-php-entrypoi…"   php       About a minute ago   Up About a minute (healthy)   9000/tcp
```

Access with web browser
* http://localhost:8000

## 3. UI Testing with Cypress
```
$docker compose up testing --abort-on-container-exit --build
```

## 4. Start PHPMyAdmin
```
$docker compose up -d phpmyadmin
$docker compose ps
```

Access with web browser
* http://localhost:8001
  * user=root
  * password=test

## 5. Scan code with [SonarQube](https://www.sonarsource.com/products/sonarqube/)
```
$export SONAR_PROJECT_KEY=php
$export SONAR_TOKEN=your-token
$docker compose up sonarscanner_php --abort-on-container-exit
```

## 6. Scan secret key with [GitLeak](https://github.com/gitleaks/gitleaks)
```
$docker compose up scan-gitleak --abort-on-container-exit
```

## 7. Delete all resources
```
$docker compose down
$docker volume prune
```

## 8. Convert from docker compose to Kubernetes
* [Kompose](https://kompose.io/)

```
$kompose convert
```

## 9. Deploy on Kubernetes
* [minikube]https://minikube.sigs.k8s.io/docs/start/
* [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)

**Start Kubernetes**
```
$minikube start --driver=docker --alsologtostderr
$minikube status

$minikube dashboard
```

**Check cluster**
```
$kubectl version --client
$kubectl cluster-info
$kubectl config view
$kubectl get nodes
$kubectl get pods --all-namespaces
```

**Install app to cluster**
* DB
* PHP
* NGINX

MySQL Database
```
$cd k8s
$kubectl apply -f db-claim1-persistentvolumeclaim.yaml
$kubectl get pv
$kubectl get pvc

$kubectl apply -f db-cm0-configmap.yaml
$kubectl get configmap

$kubectl apply -f db-deployment.yaml
$kubectl get deployment
$kubectl get rs
$kubectl get pod

$kubectl apply -f db-service.yaml
$kubectl get service
```

PHP
```
$kubectl apply -f php-deployment.yaml
$kubectl get deployment
$kubectl get rs
$kubectl get pod

$kubectl apply -f php-service.yaml
$kubectl get service
```

NGINX
```
$kubectl apply -f nginx-deployment.yaml
$kubectl get deployment
$kubectl get rs
$kubectl get pod

$kubectl apply -f nginx-service.yaml
$kubectl get service
```

Expose nginx service
```
$kubectl port-forward service/nginx 8000:8000
```
Access to app in web browser
* http://localhost:8000/

## 10. Delete all resources
```
$kubectl delete -f .
```