FROM node:16

ARG user
ARG uid

WORKDIR /var/www
# Install Dependencies

RUN apt-get update && apt-get install -y git curl libpng-dev libxml2-dev zip unzip

# Clean Cache

RUN apt-get clean && rm -rf /var/lib


COPY . /var/www/


RUN npm install

CMD ["npm","start"]

# Set working directory
RUN chown -R www-data:www-data /var/www
USER $user