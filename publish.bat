@echo off
echo NPM PUBLISH
echo Before continuing, ensure that:
echo - you are logged in (npm whoami)
echo - you have successfully rebuilt all the libraries
pause

cd .\dist\myrmidon\ng-tools
call npm publish --access=public
cd ..\..\..
pause

cd .\dist\myrmidon\ng-mat-tools
call npm publish --access=public
cd ..\..\..
pause
