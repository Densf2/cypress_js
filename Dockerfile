FROM cypress/browsers:node12.18.3-chrome87-ff82
# setup
WORKDIR /app
COPY . .
RUN npm install --no-save
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]