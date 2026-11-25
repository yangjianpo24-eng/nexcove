# NexCove 应用界面源码预览

**独立空间，自由开发。**
**Your space. Your environment.**

本目录包含 NexCove 实际使用的品牌字标、外观变量与主题预设源码，来自 `9eaeabc20b6808a49a1106ab0809e4bb6ca5ddb8`。预览入口仅在浏览器呈现这些组件。范围为 **Project Preview**，完整应用源码和 Windows 下载尚未发布。

## 构建源码预览

使用 Node 24.22.1 和 npm，在本目录执行以下操作。依赖采用冻结源码的锁文件。依赖安装可能访问 npm registry；构建后的本地预览使用回环地址，页面不需要后端。

```sh
npm --prefix ui ci
npm --prefix ui run build
npm --prefix ui run preview
```

预览使用原封保留的应用模块与品牌文件。独立 Windows x64 临时目录已用 Node 24.22.1 和 npm 11.19.1 完成锁定依赖还原与 Vite 生产构建，锁文件字节保持一致。上游 Claude Cage、agent-vm 和主题预设来源的署名保留在原始源码注释、[MIT](LICENSE)、[NOTICE](NOTICE) 和[第三方许可](THIRD_PARTY_LICENSES)中。

**English.** This is a source-only Project Preview of the production NexCove wordmark and appearance modules. The locked dependency restore and production build passed with Node 24.22.1 and npm 11.19.1. Build with the commands above. The full application source and Windows downloads remain private.
