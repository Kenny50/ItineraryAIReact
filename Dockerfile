# Stage-A
# 用一個有 node 環境的 Image，來
FROM node:lts-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build


# Stage-B: 
# 使用 NGINX image
FROM nginx

# 從 Stage-A COPY 過的內容，只取需要的 dist/ 資料夾，放入 NGINX Image 中
WORKDIR /app
COPY --from=0 /app/build ./build/
# 當然別忘了我們的 NGINX 設定檔
COPY conf.d/* /etc/nginx/conf.d/
