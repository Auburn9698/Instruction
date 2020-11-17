
#Create two variables called name and country that will hold strings.
name = "Greg"
country = "United States"

#Create two variables called age and hourly_wage that will hold integers.
age = 46
hourly_wage = 15

#Create a variable called daily_wage that will hold the value of hourly_wage multiplied by 8.
daily_wage = hourly_wage * 8

#Create a variable called satisfied which will hold a boolean.
satisfied =True

# Use traditional string concatenation to print the name, country, age, and hourly_wage variables.
print ("Hello" + name + "!")

print ("You live in" (country) )

print ("You are + " str(age) + " years old")

# With an f-string, print the daily_wage and satisfied variables.

print("You make  {daily_wage} per day" )

print("Are you satisfied with your current wage? {satisfied} ")