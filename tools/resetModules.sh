#! /bin/sh
watchman watch-del-all
rm -rf node_modules 
npm install
# rm -rf $TMPDIR/react-*
npm start -- --reset-cache
