ng build --prod

mkdir dist/website/usage
cp -r blog-src/_site/* dist/website/usage

mkdir dist/website/concepts
cp -r blog-src/_site/* dist/website/concepts

git add .
git commit -m "dist"
git push
