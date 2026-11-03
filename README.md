# mytools-demo

MyTools 统一示例：复制和读取剪贴板、打开链接、读取系统路径、列出应用。

版本：0.1.0；适用于 MyTools，不能作为独立网页调用宿主能力。

## 安装

在 MyTools 插件管理的 npm 安装入口输入 `@mytools-all/mytools-demo@0.1.0`。也可以下载本仓库，在开发者页面选择“安装本地目录”。

## 开发

直接编辑本目录的 HTML、JavaScript 和样式，无需依赖宿主源码或其他插件仓库。修改后重新安装本地目录。运行 `npm test` 检查包内契约和逻辑。插件 API 规范见 [mytools](https://github.com/mytools-all/mytools/tree/main/docs)。

## 权限

声明的宿主能力：clipboard.write、clipboard.read、shell.open、system.path、app.list。目录和危险操作仍需用户授权。

## 许可

项目代码使用 MIT；随附的第三方代码遵循各自随附的许可证。

此插件已合并原 mytools-hello 的读取剪贴板和应用列表演示，统一维护五项示例功能。涉及权限的调用仍由宿主确认。
