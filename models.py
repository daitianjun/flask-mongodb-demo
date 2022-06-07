#  _*_ coding:   utf-8 _*_
#  @Time     :   2022/6/7 13:40
#  @Author   :   Luohen
#  @Email    :   2794998378@qq.com
#  @Software :   pycharm

import pymongo

# 创建连接对象
class DatabaseManager:
    def __init__(self):
        self.client = pymongo.MongoClient()
        self.database = self.client['daidb']
        self.collection = self.database['employ']

    # 添加测试数据
    def test(self):
        names = ['王小雨','张小二','赵小三','司三少','李四']
        ages = [12,32,35,26,19]
        birthdays = ['1997-09-26','1999-03-21','1995-01-12','2000-01-25','2001-09-09']
        addresses = ['广东广州','四川成都','北京','河南郑州','陕西西安']
        currents = ['贵州贵阳','陕西西安','山东济南','湖北武汉','河南郑州']
        for index,name in enumerate(names):
            data = {'id':index+1,'name':name,'age':ages[index],'birthday':birthdays[index],'address':addresses[index],'current_address':currents[index]}
            self.collection.insert_one(data)
    # 查询所有数据
    def query_all(self):
        data = list(self.collection.find())
        return data
    # 插入一条数据
    def insert(self,data):
        self.collection.insert_one(data)




if __name__=='__main__':
    manger = DatabaseManager()
    manger.test()

