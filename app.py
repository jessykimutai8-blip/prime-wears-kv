from flask import Flask, render_template

app = Flask(__name__)


# ==============================
# SHOE PRODUCTS
# ==============================

SHOES = [
    {
        "id": 1,
        "name": "Classic White Sneakers",
        "price": 1800,
        "category": "Sneakers",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
    },
    {
        "id": 2,
        "name": "Black Casual Sneakers",
        "price": 2000,
        "category": "Sneakers",
        "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80"
    },
    {
        "id": 3,
        "name": "Classic Brown Shoes",
        "price": 2500,
        "category": "Official",
        "image": "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80"
    },
    {
        "id": 4,
        "name": "Sport Running Shoes",
        "price": 2200,
        "category": "Sports",
        "image": "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=80"
    },
    {
        "id": 5,
        "name": "Premium Black Sneakers",
        "price": 2800,
        "category": "Sneakers",
        "image": "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=80"
    },
    {
        "id": 6,
        "name": "Ladies Fashion Shoes",
        "price": 2300,
        "category": "Ladies",
        "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80"
    }
]


# ==============================
# HOME PAGE
# ==============================

@app.route("/")
def home():
    return render_template("index.html", shoes=SHOES)


# ==============================
# SHOES PAGE
# ==============================

@app.route("/shoes")
def shoes():
    return render_template("shoes.html", shoes=SHOES)


# ==============================
# ORDER PAGE
# ==============================

@app.route("/order")
def order():
    return render_template("order.html", shoes=SHOES)


# ==============================
# RUN APPLICATION
# ==============================

if __name__ == "__main__":
    app.run(debug=True)