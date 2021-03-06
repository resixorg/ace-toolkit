#!/usr/bin/env bash

git checkout master
git pull
rm -rf dist

ember build --environment production

git checkout gh-pages
git pull
ls -1 | grep -v -E '^dist|CNAME|circle.yml$' | xargs rm -rf
mv dist/* ./
mv dist/.* ./
rmdir dist

git add -A
git commit -am "Update"
git push

git checkout master
git pull
git reset --hard HEAD

rm -rf node_modules bower_components dist tmp
npm install && bower install
git reset --hard HEAD
