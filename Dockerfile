FROM cypress/browsers:node-18.16.0-chrome-112.0.5615.121-1-ff-112.0.1-edge-112.0.1722.48-1
WORKDIR /app

COPY package-lock.json .
COPY package.json .

ENV CI=1
RUN npm ci

RUN npx cypress verify