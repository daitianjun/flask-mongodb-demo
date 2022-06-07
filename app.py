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
    def post(self):
        data=request.json
        manager.insert(data)
        return {'message':'add success'}
    def delete(self):
        parse = reqparse.RequestParser()
        parse.add_argument('id',type=int)
        data=parse.parse_args()
        print(data)
        manager.collection.delete_one(data)
        return {'message':'delete success'}



if __name__ == '__main__':
    app.run()
