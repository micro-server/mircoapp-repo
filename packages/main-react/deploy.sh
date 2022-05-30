cd /root/frontend/main-react

npm i

npm run build

build_time=`date '+%Y%m%d%H%M%S'`

mv /etc/nginx/build /etc/nginx/build-bak/build-$build_time

mv build /etc/nginx/