1. demo_module.js test URL  (Displaying date string from myfirstmodule.js)
node demo_module.js
http://localhost:8080/

2. Display queries value from url. 
node demo_querystring.js
http://localhost:8080/?year=2017&month=July

3. Create a Node.js file that reads the HTML file, and return the content:
node demo_readfile.js
http://localhost:8080/

4. Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error
node demo_fileserver.js
http://localhost:8080/summer.html -> success
http://localhost:8080/winter.html -> success
http://localhost:8080/other.html -> show 404 Not found.


Download a package
I want to download a package called "upper-case":
C:\Users\Your Name>npm install upper-case
package will be saved to below path
C:\Users\My Name\node_modules\upper-case

5. Create a Node.js file that will convert the output "Hello World!" into upper-case letters:
node demo_package.js
http://localhost:8080/ -> HELLO WORLD!

6. The Nodemailer Module
C:\Users\Your Name>npm install nodemailer
node demo_nodemailer.js
http://localhost:8080/ -> Send mail

7. API List Customers
node api_listcustomers.js
http://localhost:8080/listCustomerss
-> list all users in customers.json

