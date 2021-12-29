#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
# echo 'eryajf.net' > CNAME

# cat CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:felixfong/felixfong.github.io.git
else
  Date=`date '+%Y%m%d%H%M%S'`
  echo $Date
  msg='GitHub Actions Deploy'
  githubUrl=git@github.com:felixfong/felixfong.github.io.git
#  githubUrl=https://felixfong:${GITHUB_TOKEN}@github.com/felixfong/felixfong.github.io.git
#  git config --global user.name "fengxuechao"
#  git config --global user.email "2898687306@qq.com"
fi

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github gh-pages分支