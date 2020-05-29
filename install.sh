ng build --prod
mkdir dist/website/blog
cp -r blog-src/_site/* dist/website/blog
git add .
git commit -m "dist"
git push
