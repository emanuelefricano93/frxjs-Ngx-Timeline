#!/bin/sh

echo "Publish script ..."
ng build ngx-timeline --configuration production
cd dist/ngx-timeline
npm publish --access public
