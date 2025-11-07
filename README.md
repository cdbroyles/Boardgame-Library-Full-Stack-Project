# Description
This is an inventory management system that can be used by boardgame conventions or boardgame restaraunts/bars.  The inventory pulls the collection from a user's boardgamegeek database.  It includes a way for a customer to view the status of games in the business's inventory (checked in / checked out).  There is also an employee login system that enables employees to handle the checkin/checkout of games.  Employees can also view who has what product at any given time.  Employees can also be set to administrators to be able to update employee records.

# Tech Stack Used
- JavaScript
- React
- Vite
- React Router
- CSS
- Java
- Springboot
- Maven
- MySQL

# Installation Instructions
1. Install MySQL Server, Java Development Kit 21, npm, Node.js
2. Clone this github repository to your local machine.
3. Update `src/main/resources/application.properties` with your specific MySQL credentials:
```
spring.datasource.url=jdbc:mysql://localhost:3306/boardgame_library_backend?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=[your-password]
```
4. Run the Java/Spring Boot application.  The API should now be running on `http://localhost:8080`.
5. In the front end project directory, install dependencies: `npm install`
6. Run the React/Vite application: `npm run dev`. Then type `o` in the terminal to open the app in the web browser.


# Wireframes
[Wire Frames](https://wireframe.cc/pro/pp/7ebc39299963498)

# Entity Relationship Diagrams
[Entity Relation Diagrams](https://www.figma.com/board/d9aitHojX3bo3o6yhLqRum/Backend-Project?node-id=0-1&t=TzQvBHgYCOfTZmVn-0)

# Future Features
- Add timestamps to checked out games
- In the inventory screen, show time since checked out for games that are not available.
- Add the user who checked out the game to the database.