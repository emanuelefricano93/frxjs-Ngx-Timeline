#!/bin/sh

#LAST_VERSION=(npm pkg get version | sed 's/"//g')
LAST_VERSION=$(npm pkg get version | sed 's/"//g')
echo $LAST_VERSION
sed -i.bak "s/\"version\": \"[0-9]\.[0-9]\.[0-9]\"/\"version\": \"$LAST_VERSION\"/g" "projects/ngx-timeline/package.json"
rm projects/ngx-timeline/package.json.bak
sed -i.bak "s/Version [0-9]\.[0-9]\.[0-9]/Version $LAST_VERSION/g" "projects/ngx-timeline/README.md"
rm projects/ngx-timeline/README.md.bak
sed -i.bak "s/Version [0-9]\.[0-9]\.[0-9]/Version $LAST_VERSION/g" "README.md"
rm README.md.bak
#git commit -am "Release $LAST_VERSION"
#git tag v$LAST_VERSION
