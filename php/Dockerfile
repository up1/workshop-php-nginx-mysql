FROM php:8.3.9-fpm
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip \
    && docker-php-ext-install zip pdo pdo_mysql mysqli opcache
RUN docker-php-ext-enable mysqli
COPY php.ini /usr/local/etc/php/php.ini
COPY opcache.ini /usr/local/etc/php/conf.d/opcache.ini
COPY ./*.php /var/www/html/