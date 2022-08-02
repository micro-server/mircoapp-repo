blacklake web

## 安装 lerna

```
npm lerna -g
```

## 安装依赖

安装所有子项目的依赖包，并把所有项目依赖文件都提升到根目录下，避免相同依赖包在不同项目安装多次

```
yarn init or npm run init

```

## 启动项目

```
 yarn start

```

## 打包项目

```
 yarn build

```

## 导入其他项目

```
lerna import <path-to-external-repository>
```

导入带有提交历史记录的包到 ./packages/下，这对于将预先存在的独立的包收集到 Lerna 仓库非常有用。每次提交都修改为相对于包目录进行更改。例如，添加 package.json 的提交将改为添加 `packages/<directory-name>/package.json`。

## 发版

```
lerna publish

```

版本说明，以 0.1.0 为例,
[Prepatch]:
[Custom Version]: 自定义版本，可手动输入版本号以此类推 0.1.0-alpha.1
