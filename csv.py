import names
import csv
for i in range(10):
    a=(names.get_first_name())
    b=(names.get_last_name())
    fullname=(a+" "+b)
    emailid=a+b+"@gmail.com"
    print(fullname+"   "+emailid)

with open('dummydata.csv', 'w') as csvfile:
    fieldnames = ['full_name', 'email']
    writer = csv.writer(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for i in range(10):
        writer.writerow({'full_name': fullname, 'email':emailid} )
    
   