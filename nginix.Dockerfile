FROM duluca/minimal-nginx-web-server:1-alpine

COPY dist/AIERP /var/www

CMD 'nginix'
