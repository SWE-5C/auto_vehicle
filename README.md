# Gainesville Autonomous Vehicles

**Link to deployed web app**: https://auto-vehicles.herokuapp.com/
**Credit(API)**: GoogleMaps, Transloc, Bootstrap, AngularJS
**Features:**
**GPS Locator**
![alt tag](http://gdurl.com/OUID)
This map tracks the location of the autonomous vehicles and updates the in real time

**About**
![alt tag](http://gdurl.com/Fn-b)
This is a portion of the homepage that describes the Autonomous Vehicles Project

**Twitter**
![alt tag](http://gdurl.com/B7hp)
This shows all the tweets with the handle or hashtag of the admin’s choice

**Admin Dahboard**
![alt tag](http://gdurl.com/FQvz)
The app has pages that can only be accessed by admins. The dashboard can only be accessed by admins.

**Testimonial Management**
![alt tag](http://gdurl.com/E9OT)
When an admin presses the ‘Manage User Experience’ button in the admin dashboard, they are redirected to this page where they can view all the testimonials that people have submitted.

**Testimonial Management (continued)**
![alt tag](http://gdurl.com/aU9u)
When an admin clicks on one of the rows of the Testimonials table, he or she is redirected to this page. The admin can see the person’s testimonial and picture. Furthermore, the admin can have the testimonial shown on the homepage by clicking on one of the blue buttons under the picture.

**Testimonials**
![alt tag](http://gdurl.com/ebu6)
Four testimonials are show on the homepage for anyone to see. Position 1 is the leftmost, Position 2 is the second leftmost, Position 3 is the second rightmost, Position 4 is the rightmost  

**Surveys**
![alt tag](http://gdurl.com/hVnZ)
People can access a survey by clicking on the ‘Survey’ tab in the header navbar. There are two different surveys. One survey can be accessed by any individual and the other can only be accessed by people who are logged in to the web app. The survey depicted above can only be seen by people who are logged in. Both surveys are accessed the same way (‘Survey’ tab).

**Add Data**
![alt tag](http://gdurl.com/SNbt)
When the ‘Add Data’ button is clicked in the admin dashboard, the admin is redirected to the qualtrics page login page. Once the admin logs in, he/she will see the page depicted above where they can manage the two surveys.

**Data Visualization**
![alt tag](http://gdurl.com/hvAv)
A graphical representation of the data accumulated from survey responses. This page is accessed by logging into the app as an admin and clicking on the ‘Responses’ tab in the header navbar.


**How to run project locally:**
run grunt --force in terminal (make sure ruby, bower, and npm have already been installed and the 
github repo has been cloned)
Open browser and type 'localhost:3000' in url bar


**Deployment Information**
Links:
GitHub (Code Repository) - https://github.com/SWE-5C/auto_vehicle
Web Server Hosting Provider - Heroku https://id.heroku.com/login
API Keys
-	Transloc API

We are using a Mongo database for your web app. It is located at https://mlab.com/login/. Your capacity is 0.5 GB and you are currently using 16 MB. This is free.


If you want to change your database username and password, visit https://mlab.com/user?username=gvilleavs
If you want to review your account visit https://mlab.com/account-details/ 

If you want to change out of your database, you will need to set the current URI to your new URI.
You can update this value in your web app in 
**development.js – config/env/**

![alt tag](http://gdurl.com/8YkT)

Image Storage
We are currently storing your images for your web app on Cloudinary. Your capacity is 10 GB 

If you want to change your image storage username and password, visit https://cloudinary.com/console/settings/users 
If you want to review your account visit https://cloudinary.com/console/settings/users 

