from flask import Flask,render_template,request
from models import DatabaseManager
from flask_restful import Resource,Api,reqparse
manager = DatabaseManager()
app = Flask(__name__)

api = Api(app)

@app.route('/')
def index():
    data = manager.query_all()
    return render_template('index.html',data=data)

@api.resource('/rest')
class System(Resource):
    def __init__(self):
        self.parse = reqparse.RequestParser()
        self.parse.add_argument('id', type=int)
    def post(self):
        data=request.json
        manager.insert(data)
        return {'message':'add success'}
    def delete(self):
        data=self.parse.parse_args()
        manager.collection.delete_one(data)
        return {'message':'delete success'}
    def put(self):
        dic = request.json
        data = self.parse.parse_args()
        dic.pop('id')
        manager.collection.update_one(data,{"$set":dic})
        return {'message': 'put success'}




if __name__ == '__main__':
    app.run()
