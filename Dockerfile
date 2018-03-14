FROM nginx:latest
run rm -rf /usr/share/nginx/html
copy /pick /usr/share/nginx/html/pick
CMD ["nginx", "-g", "daemon off;"]