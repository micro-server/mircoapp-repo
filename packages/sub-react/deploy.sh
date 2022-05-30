cd /root/sub-react

npm i

npm run build

build_time=`date '+%Y%m%d%H%M%S'`

mv /etc/nginx/build/sub /etc/nginxbuildHistory/build-$build_time

mv build /etc/nginx/sub