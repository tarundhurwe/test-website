from flask import Blueprint, jsonify

views = Blueprint("views", __name__)


@views.route("/")
def home():
    """
    @author: Tarun
    :method desc: api for homepage
    """
    try:
        return jsonify({"Welcome message": "Welcome to cool e-commerce website"})
    except Exception as e:
        return jsonify({"Failure": "Some error occurred from our end"})
