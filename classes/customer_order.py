class Product:
    def __init__(self, id, name, price):
        self.id = id
        self.name = name
        self.price = price
class OrderItem:
    def __init__(self, product, quantity):
        self.product = product
        self.quantity = quantity
class Order:
    def __init__(self, order_number, customer_name):
        self.order_number = order_number
        self.customer_name = customer_name
        self.items = []
    def add_item(self, product, quantity):
        item = OrderItem(product, quantity)
        self.items.append(item)
    def remove_item(self, item):
        self.items.remove(item)
    def calculate_total_price(self):
        total_price = sum(item.product.price * item.quantity for item in self.items)
        return total_price
class Customer:
    def __init__(self, customer_id, name):
        self.customer_id = customer_id
        self.name = name
        self.orders = []
    def place_order(self, order):
        self.orders.append(order)
    def get_order_by_number(self, order_number):
        for order in self.orders:
            if order.order_number == order_number:
                return order
        return None
