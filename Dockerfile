FROM cypress/browsers:node16.5.0-chrome94-ff93
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress 

