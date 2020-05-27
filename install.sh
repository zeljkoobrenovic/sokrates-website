ng build --prod
cp -r blog-src/_site/* dist/website/blog
git add .
git commit -m "dist"
git push
