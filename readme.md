node_modules太多了 所以并没有提交上去 ，需要安装 create-reac-app   安装react-router@2  还要起服务   myappAdmia中通过node.js起服务（也需要安装起服务的模块 express,后台解析模块body-parser ，mongoose数据库模块）  ，my-app的package.json中设置“proxy”:"http://localhost:8090/"代理   登录注册还用到了mongooseDB  所以也需要开启  再在my-app中通过cnpm/npm run start 将服务跑起来     测试一下  git pull更新