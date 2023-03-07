FROM cypress/browsers:node-18.14.1-chrome-110.0.5481.96-1-ff-109.0-edge-110.0.1587.41-1
WORKDIR /app

COPY package-lock.json .
COPY package.json .

ENV CI=1
RUN npm ci

RUN npx cypress verify