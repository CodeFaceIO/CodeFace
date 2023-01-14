COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build \
&& npm i -g serve
EXPOSE 3000
CMD [ "serve", "-S" , "build"]
