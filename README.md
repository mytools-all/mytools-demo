# mytools-demo

MyTools 统一示例：复制和读取剪贴板、打开链接、读取系统路径、列出应用。

版本：0.1.1；适用于 MyTools，不能作为独立网页调用宿主能力。

## 安装

当前合并版 0.1.1 尚未确认重新发布，请先下载源码，运行 `npm pack`，在 MyTools 开发者页面选择“安装插件包（.zip / .tgz）”；也可将完整源码目录放到“打开插件目录”指向的根目录后“重新扫描”。只有索引 published:true 后才使用 `@mytools-all/mytools-demo@0.1.1` 进行 npm 安装。

## 开发

直接编辑本目录的 HTML、JavaScript 和样式，无需依赖宿主源码或其他插件仓库。修改后重新安装本地目录。运行 `npm test` 检查包内契约和逻辑。插件 API 规范见 [mytools](https://github.com/mytools-all/mytools/tree/main/docs)。

## 权限

声明的宿主能力：clipboard.write、clipboard.read、shell.open、system.path、app.list。目录和危险操作仍需用户授权。

## 许可

项目代码使用 MIT；随附的第三方代码遵循各自随附的许可证。

此插件已合并原 mytools-hello 的读取剪贴板和应用列表演示，统一维护五项示例功能。涉及权限的调用仍由宿主确认。

发布状态以 [项目索引](https://github.com/mytools-all/mytools-home/blob/main/plugins/database.json) 的 published 字段为准；未发布时请先安装源码目录。

## 作为开发案例

完整入门见 [插件开发指南](https://github.com/mytools-all/mytools/blob/main/docs/plugin-development/README.md) 与 [Demo 逐步说明](https://github.com/mytools-all/mytools/blob/main/docs/plugin-development/demo-walkthrough.md)。源码中五个按钮共用 call/catch，不依赖宿主源码。浏览器预览没有桥接，不能使用系统能力；真实验证请安装到宿主。
