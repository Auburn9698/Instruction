# @TODO: Your code here
my_info = {"name": "Greg", "Type of Pet": "Dog",
           "age": 46, 
            "hobbies": ["Dog Walking", "Lifting", "OCRs", "Photography"],
            "wakeup": {"Mon": 5, "Tue": 5, "Wed":  5, "Saturday": 6}}

#Print information from the dictionary:
print(f'Hello I am {my_info["name"]} and I have a {my_info["Type of Pet"]}')
print(f'I have {len(my_info["hobbies"])} hobbies!')
print(f'On the weekend I get up at {my_info["wakeup"]["Saturday"]}')
