from . import db
from flask import Blueprint, jsonify, request
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, login_required, logout_user, current_user
from .models import User
from os.path import join, dirname
import sqlite3 as sql
from .db_connection import DatabaseConnection

database = DatabaseConnection()
auth = Blueprint("auth", __name__)


def get_db():
    conn = sql.connect(join(dirname(__file__), "database.db"))
    cur = conn.cursor()
    return conn, cur



""" api to handle login """


@auth.route("/login", methods=["GET", "POST"])
def login():
    try:
        json_data = ""
        if request.method == "POST" and not current_user.is_authenticated:
            login_data = request.get_json()
            email = login_data["email"]
            password = login_data["password"]
            if user := User.query.filter_by(email=email).first():
                if check_password_hash(user.password, password):
                    login_user(user, remember=True)
                    json_data = jsonify(
                        {"status": "logged in successfully", "is_authenticated": True}
                    )
                else:
                    json_data = jsonify(
                        {"status": "incorrect password", "is_authenticated": False}
                    )
            else:
                json_data = jsonify(
                    {"status": "user doesn't exist", "is_authenticated": False}
                )
        elif request.method == "POST":
            json_data = jsonify(
                {"status": "user is already logged-in", "is_authenticated": True}
            )
        else:
            json_data = jsonify(
                {"error": "method not allowed", "is_authenticated": False}
            )
    except Exception as e:
        json_data = jsonify(
            {"error": "Error occurred please try again", "is_authenticated": False}
        )
    json_data.headers.add("Access-Control-Allow-Origin", "*")
    return json_data


""" api to handle logout """


@auth.route("/logout")
@login_required
def logout():
    try:
        logout_user()
        return jsonify({"status": "logged out successfully"})
    except Exception:
        return jsonify({"error": "some error occurred from server side"})


""" api to handle signup """


@auth.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method != "POST":
        return jsonify({"error": "method not allowed"})
    try:
        user_signup_data = request.get_json()
        email = user_signup_data["email"]
        password = user_signup_data["password"]
        first_name = user_signup_data["first name"]
        last_name = user_signup_data["last name"]
        if User.query.filter_by(email=email).first():
            return jsonify(
                {"status": "Email is already in use. Please use different email."}
            )
        new_user = User(
            email=email,
            password=generate_password_hash(password, method="sha256"),
            first_name=first_name,
            last_name=last_name,
        )
        db.session.add(new_user)
        db.session.commit()
        json_data = {
            "status": "account created successfully",
            "user data": {
                "email": email,
                "first name": first_name,
                "last name": last_name,
            },
        }
        return jsonify(json_data)
    except Exception as e:
        return jsonify({"error": "error occurred from our end"})


""" api to handle account deletion"""


@auth.route("/delete", methods=["GET", "POST"])
@login_required
def delete_account():
    try:
        if request.method == "POST":
            user_email = current_user.email
            logout_user()
            user = User.query.filter_by(email=user_email).first()
            if user:
                db.session.delete(user)
                db.session.commit()
                return jsonify({"status": "Account deleted successfully"})
            return jsonify({"status": "Some error occurred at our end"})
    except Exception as e:
        return jsonify({"status": f"Failed to delete account {e}"})


@auth.route("/verified", methods=["GET"])
def is_authenticated():
    json_data = ""
    if request.method == "GET":
        if current_user.is_authenticated:
            json_data = jsonify({"verified": True})
        else:
            json_data = jsonify({"verified": False})
    json_data.headers.add("Access-Control-Allow-Origin", "*")
    return json_data