# exercise-app

## `.env` file

Maybe make your own one of these. Put it at the root of `client`. On heroku, set these variables using the online console. Also for heroku set BACKEND_PORT and BACKEND_URL to empty strings.

```
VUE_APP_BACKEND_PORT=3010
VUE_APP_BACKEND_URL=http://localhost:

PORT=8080 
## this is the html server for testing, etc

MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_HOST=http://172.17.0.2:
MYSQL_PASSWORD=somepass
MYSQL_DATABASE=web

DEV_USERNAME=root
DEV_PASSWORD=admin

```

# Exercise App Notes

## GENERAL
The goal of this exercise site is to psychologically encourage use of the site by users. The idea is that you go to the site to report your exercises, and then you go back to convert those exercises into workouts. The repeated login for the users encourages more use in the future. Whether this works or not is not easy to calculate. It is assumed that this approach works for the purpose of the class' assignment. The github and heroku URL links are below.

github: https://github.com/radiodee1/exercise-app  
heroku: https://dliebman-app.herokuapp.com/  

## PROFILES/USERS
I have set up these five fake accounts so that it is easier to test the 'profiles' and 'friends' mysql tables. You can log in as any of these users. 

Joseph Woolsey  
127 Prospect St. #2  
Kingston, NY, 12401  
j.woolsey@gmail.com  
username: woolsey  


Rod Stewart  
173-24 Croydon Rd.  
Queens, NY, 12345  
rod@aol.com  
username: rodney  


Donald Duck  
1234 Looney Rd.  
Hannah, Detroit, 12345  
d.duck@hannah.barberra.com  
username: mansion  


Buggs Bunney  
12345 Looney Rd.  
Hannah, Detroit, 12345  
bbunny@hannah.barberra.com  
username: buggs  


Elmer Fudd  
1 Mansion Way  
Yacht, Michigan, 54321  
elmer.j.fudd@milionair.com  
username: fuddj  

## ROOT/DEV USER
There is a root user. The root user can see the 'dev' page. This page shows some usage statistics. The root user can also see all posts in their feed. The root account is like other accounts in that the password is protected using bcrypt. 

## FRIENDS
Maintaining the 'friends' table is a complex task. The 'friends' page is a list of all the users. You can ask another user to be your friend. Then you must wait for them to confirm the request before you see their posts on your feed. 

To test this out, log in as one of the fake users above, go to the 'friends' page, request friendship from one of the other users, and then log in again as them. When you log in the second time you can see the request you just made as the other user in the 'friends' list.

## PICTURES
Pictures can be uploaded to the site. I have not uploaded many photos because they ultimately take up room in the MYSQL database. Testing this is easy on the pages for 'Message' and 'Exercise'. The 'Workout' page does not allow for pictures because I thought it made the page too busy.

## MESSAGE
This page is just for general text messages. A picture can be included.

## EXERCISE
This page is for registering a single exercise. Dropdown menus are used to describe the exercise performed. There are two major drop-down menus. The dropdown menus can be very specific, and change to more accurately describe your actions. For instance, if you start off saying you used weights in the first drop-down, the second drop-down has options for 'curls' or 'lifts'. If you start off with 'laps' the second drop-down has options for 'swimming' or 'running'. This page does a calculation if you report a weight change that tells you if you are too heavy or light. A picture can be included in 'exercise' posts.

## WORKOUT
This form allows you to go over all your recent exercise posts and combine them into a single 'workout'. There are two modes of operation. The first just lists the exercises to the screen so that you can review them. In the second mode you list them to the screen and also choose which ones you want in the final 'workout' post. You can list exercises from the past with varying post times. Because there is so much going on in this form, a picture cannot be included.

## CRON MODIFICATION
In the future I would implement a cron job that deleted 'exercise' posts that are older than a certain number of days. I would choose a limit of 90 days. This would leave in the feed all 'workout' and 'message' posts.