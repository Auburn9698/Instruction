

import os
import csv


# Prompt the user for the video they're looking for:
video = input("Which video are you looking for?")

csvpath = os.path.join("..", "Resources", "netflix_ratings.csv")


# Open the csv file:
with open(csvpath) as csvfile:
    csvreader = csv.reader(csvfile, delimiter=',')

    for row in csvreader:
        if row[0] == video:
            print(row[0] + ' is rated' + row)
