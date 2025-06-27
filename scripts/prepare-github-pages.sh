#!/bin/sh

echo "Prepare github pages ..."
ng build demo-app --configuration production --base-href https://emanuelefricano93.github.io/frxjs-Ngx-Timeline/
find . -type f -name "main-*.js" | xargs git add
git add docs
