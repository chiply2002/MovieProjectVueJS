# customprojectHD

## Instructions
**Back-end assumption**: 
- Localhost with XAMPP, PHP, MySQL

1. Set up database
- Current database name: test

- Please edit 2 lines in apis.php and actorapis.php with your database name and username, password of the localhost
  $database = 'test';
  $conn = mysqli_connect('localhost', 'root', '', $database)

- Execute the SQL script: ```src/assets/api/dbmovies.sql```

2. Run XAmpp Apache to serve the back-end script

- Under folder `$XAMPP/htdocs`, create a subdirectory named ```customproject```
- Copy the back-end PHP script to that directory
- Change the URL value of the property `dbapi` in the related components (Admin folder and Detail folder) to point the URL of the back-end PHP script. The new value should be:
  `http://localhost/customproject/api/apis.php`
  Note: If you created the same folder (htdocs/customproject), so you just have to paste the api folder into it, no need to change the dpapi

3. Please login with email "admin@gmail.com" and password "123456" then go to the My Profile page (click the arrow on the top right of the page). As the admin role, you can create/update/delete movies and users. To be more specific, the screenshots were included in the report.

4. All the data are symbolic

5. Run the front-end
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
