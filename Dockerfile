FROM nginx:latest
run rm -rf /usr/share/nginx/html
copy /pick /usr/share/pick
copy cfg /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]