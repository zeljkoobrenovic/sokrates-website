ng build --prod

cd blog-usage-src
bash install.sh
cd ..
mkdir dist/website/usage
cp -r blog-usage-src/_site/* dist/website/usage

cd blog-src
bash install.sh
cd ..
mkdir dist/website/concepts
cp -r blog-src/_site/* dist/website/concepts

git add .
git commit -m "dist"
git push
