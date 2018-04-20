FROM nginx:latest
run rm -rf /usr/share/nginx/html
copy /pick /usr/share/pick
copy /app /usr/share/app
copy cfg /etc/nginx/conf.d
copy nginx.confg /etc/nginx/
CMD ["nginx", "-g", "daemon off;"]