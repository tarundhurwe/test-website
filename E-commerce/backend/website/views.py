from flask import Blueprint, jsonify
from flask_login import current_user
from .models import Items, InCart

views = Blueprint("views", __name__)


@views.route("/")
def home():
    try:
        if current_user:
            return jsonify({"button": "Logout", "url": "logout_url", "items": "number_of_items", "item_data": "item_data"})
        else:
            return jsonify({"item_data": "item_data", "message": "Working"})
    except Exception as e:
        return jsonify({"message": f"not working {e}"})
