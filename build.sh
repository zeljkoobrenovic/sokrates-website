ng build --prod

cd blog-src
bash install.sh
cd ..
mkdir dist/website/book
cp -r blog-src/_site/* dist/website/book

git add .
git commit -m "dist"
git push
