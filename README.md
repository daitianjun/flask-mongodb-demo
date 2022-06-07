
### 项目简介
基于flask与mongodb的一个简易员工管理界面，前端框架使用的是bootstrap
案例来自书籍<<左手mongodb,右手redis>>，绝无抄袭，按照图片自行设计
实现员工信息的增加、删除、修改功能

### python环境3.8
#### 安装第三方依赖
pip install flask
pip install pymongo
pip install flask_restful

### 文件介绍
static文件夹存放静态文件
templates存放文件模板
models 文件连接mongodb数据库

### 项目运行
首先确保电脑开启mongodb服务
创建数据库 daidb
在该数据库下面创建集合 employ
然后运行 models.py文件以插入测试数据
然后终端输入 flask run

https://github.com/daitianjun/-Employee-management-interface/blob/master/static/img/1.png
