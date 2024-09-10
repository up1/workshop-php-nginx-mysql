FROM cypress/browsers
WORKDIR /opt/app
RUN npx cypress install
COPY . /opt/app
CMD ["npx", "cypress", "run"]