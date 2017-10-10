# Build
#  docker build -t test_grid .
FROM node:8-slim

RUN apt-get -qqy update \
  && apt-get -qqy install \
    git-core \
  && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/diemol/test_grid.git

RUN npm install selenium-webdriver

WORKDIR /test_grid

CMD ["node", "test.js"]