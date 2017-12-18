FROM php:7.0.1-apache

RUN apt-get update && apt-get install -y mysql-client libmysqlclient-dev \ 
      && docker-php-ext-install mysqli
    # Initialize html and php.ini
COPY src/ /var/www/html/
COPY config/ /usr/local/etc/php/php.ini