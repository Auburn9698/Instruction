names = []
for _ in range(5):
    name = input("Please enter the name of someone you know. ")
    names.append(name)

lowercased = [name.lower() for name in names]
#Run lowercased to get the list in lower case
lowercased

titlecased = [name.title() for name in lowercased]
#Run titlecased to get the list as Titles with capital first letter
titlecased

invitations = [
    f"Dear {name}, please come to the wedding this Saturday!" for name in titlecased]

for invitation in invitations:
    print(invitation)
