#!/bin/sh

echo "Prepare github pages ..."
ng build demo-app --configuration production --base-href https://emanuelefricano93.github.io/frxjs-Ngx-Timeline/
find . -type f -name "main-*.js" | xargs git add
rm -rf docs && mkdir docs
cp -r dist/demo-app/browser/. docs;
find dist/demo-app/ -maxdepth 1 -type f -exec cp {} docs/ \;
git add docs
