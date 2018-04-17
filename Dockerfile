FROM nginx:latest
run rm -rf /usr/share/nginx/html
copy /pick /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]