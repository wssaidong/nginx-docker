#!/bin/bash

echo 'start'
git add .
git commit -am 'auto deploy'
git push origin master
git log -1
echo 'end'
