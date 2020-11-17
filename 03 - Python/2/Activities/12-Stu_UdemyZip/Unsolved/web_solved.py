import os
import csv

udemy_csv = os.path.join("..", "Resources", "web_starter.csv")

title = [] #1
price = [] #4
subscribers = [] #5
reviews = [] #6
course_length = []
review_percent = []
length = [] #9

with open(udemy_csv, encoding='utf-8') as csvfile:
    csvreader = csv.reader(csvfile, delimiter = ',' )
    for row in csvreader:

        #Add the title:
        title.append(row[1])

        #Add the price:
        price.append(row[4])

        #Add the subscribers:
        subscribers.append(row[5])

        #Add the number of reviews:
        reviews.append(row[6])

        #Determine percent of reviews left:
        percent = round(int(row[6]) / int(row[5]), 2)
        review_percent.append(percent)

        #Get course length as just a number:
        new_length = row[9].split(" ")
        length.append(float(new_length[0]))

#Cleaned lists put together:
cleaned_csv = zip(title, price, subscribers, reviews, review_percent, length)

# Set variable for output file (Creates new file in Unsolved Directory)
output_file = os.path.join("web_final.csv")

#  Open the output file
with open(output_file, "w") as datafile:
    writer = csv.writer(datafile)


    writer.writerow(["Title", "Course Price", "Subscribers", "Reviews left", 
                     "Percent of Reviews",  "Length of Course"])

    writer.writerows(cleaned_csv)




   








    



