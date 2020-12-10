import pymongo

# Setup connection to mongodb
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# Select database and collection to use
db = client.store_inventory
produce = db.produce

# Insert into `produce` a list of five or more dictionaries that each include `type`, `cost`, and `stock`.

produce.insert_many(
[
        {
            "type": "apples",
            "cost": .23,
            "stock": 333
        },
        {
            "type": "oranges",
            "cost": .45,
            "stock": 30
        },
        {
            "type": "kiwi",
            "cost": .10,
            "stock": 1000
        },
        {
            "type": "mango",
            "cost": 1.30,
            "stock": 20
        },
        {
            "type": "berries",
            "cost": 2.99,
            "stock": 99
        }
    ]
)

print("Data Uploaded!")




















