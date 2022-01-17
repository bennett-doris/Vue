## Vue脚手架环境搭建

### 安装npm

下载并安装 node.js https://nodejs.org/en/download/

更新 npm

```
npm -v
npm install npm@latest -g
npm install npm@next -g
```

配置npm镜像：

```
npm config set registry https://registry.npm.taobao.org
```

### 安装CLi

全局安装脚手架（仅第一次执行）

```
npm install -g @vue/cli
```

切换到你要创建项目的目录，然后用命令创建项目

```
vue create xxxx
```

启动项目

```
npm run serve
```

