#
# friendly-requests client Dockerfile
#

# Do all the Node stuff
FROM node:8.5.0
MAINTAINER Code for Dayton Developers <https://github.com/codefordayton/friendly-requests>

WORKDIR /app

ADD . /app

# Run the React production build
RUN npm install && \
    npm build

# Move only the production build files to another container to serve via nginx
FROM nginx:alpine
MAINTAINER Code for Dayton Developers <https://github.com/codefordayton/friendly-requests>

# copy the artifacts from the first stage into Nginx
COPY --from=0 /app/build /usr/share/nginx/html

CMD nginx -g "daemon off;"
