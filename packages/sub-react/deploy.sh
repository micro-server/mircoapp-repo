cd /root/sub-react

npm i

npm run build

build_time=`date '+%Y%m%d%H%M%S'`

mv /etc/nginx/sub /etc/buildHistory/build-$build_time

mv build /etc/nginx/sub/sub-react

