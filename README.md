# Home Wiki

这个 wiki 用来集中整理装修、施工、采购、风格参考、户型图和 3D 模型资料。

## 装修地图

![装修地图高清图](<首页-assets/装修地图高清图.jpg>)

## 内容入口

- [装修流程参考](51天装修流程表/README.md)
- [装修施工工艺标准参考](装修施工工艺标准/README.md)
- [装修合同、报价与验收参考](装修合同、报价与验收/README.md)
- [装修避坑参考](装修避坑/README.md)
- [我的装修](我的装修/README.md)

## 本地预览

需要 Node.js 18.17 或更高版本。

```bash
npm install
npm run wiki:serve
```

本地预览默认运行在 <http://localhost:4000>。

## 构建静态站点

```bash
npm run wiki:build
```

构建产物会生成到 `_book/`，可以部署到任意静态站点服务。
