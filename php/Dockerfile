FROM php:8.3.9-fpm
RUN docker-php-ext-install mysqli pdo pdo_mysql
RUN docker-php-ext-enable mysqli
COPY ./*.php /var/www/html/