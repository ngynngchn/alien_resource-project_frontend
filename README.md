## ALIEN FICTIONAL DASHBOARD

Deployed on [here!](https://dashboard-alien.onrender.com/)


This repository contains the code for a fictional dashboard that allows aliens to harvest resources using human labor. The dashboard has three buttons that allow the alien to select between 5, 10, or 15 humans as their harvesting method. There is also a capacity bar that shows how much of the available capacity is currently being utilized.

### Frontend Repository

The frontend repository contains the code for the alien interface of the dashboard. It is built using HTML, CSS, and JavaScript, and uses the React framework. The code is organized into components, which make it easy to modify and extend the dashboard.

### Backend Repository

The backend repository contains the code for the server-side logic of the dashboard. It is built using Node.js with Express.js, and uses a JSON file to store information about the humans that are added and sold by the alien. Whenever the alien selects a harvesting method, the backend tracks the amount of humans added each time with an ID and a timestamp, and saves it in the JSON file. Whenever the alien sells their resources (humans), the bar is emptied and the sale information is stored in the JSON file.

### Selling Resources

When the alien sells their humans, the backend stores the sale information (including the sale time and the number of humans sold), and updates the alien's balance. The balance is displayed to the alien in a pop-up notification, which shows how much revenue was made and what the new balance is. In addition, the dashboard also displays the current balance and the potential revenue that can be accomplished if the harvest is sold.

### Tools Used

- HTML
- CSS
- JavaScript
- React
- Node.js
- Express.js

### Additional Features

In the future the alien should receive an email everytime a sale has been made.
In a different page the alien should be able look into all his past done sales.

### Running the Dashboard

To run the dashboard, you will need to clone both the frontend and backend repositories and follow the instructions and run npm install && npm run dev. From there, you can select your harvesting method, track your capacity utilization, and sell your resources to earn money.

Thank you for checking out our alien dashboard !
