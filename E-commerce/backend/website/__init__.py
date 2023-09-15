from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager
import string
import random

db = SQLAlchemy()
DB_MANE = "database.db"


def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "".join(random.choices(
        string.ascii_lowercase + string.digits, k=15))
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_MANE}"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JSON_SORT_KEYS"] = False
    db.init_app(app)

    from .views.views import views

    app.register_blueprint(views, url_prefix="/")

    # create_database(app)

    return app

# def create_database(app):
#     if not path.exist(f"website/{DB_MANE}"):
#         db.create_all(app=app)
#         print("Database created")
