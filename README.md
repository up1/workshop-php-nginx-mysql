# Workshop
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

## 5. Delete all resources
```
$docker compose down
$docker volume prune
```