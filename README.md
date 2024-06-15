# Holidays Search Application
This Node.js application allows users to search for holidays in a specific country for a given year using the Calendarific API.

Features
Search Form: Users can enter a country name and a year to search for holidays.
Display: Shows a list of holidays with their dates for the specified country and year.
Prerequisites
Before running the application, ensure you have the following installed:

Node.js (v14 or higher)
npm (Node Package Manager)
Installation
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/your-repository.git
Navigate to the project directory:

bash
Copy code
cd your-repository
Install dependencies:

bash
Copy code
npm install
Configuration
Obtain an API key from Calendarific by signing up for an account.

Replace "YOUR_API_KEY_HERE" in app.js with your Calendarific API key:

javascript
Copy code
const response = await axios.get(`https://calendarific.com/api/v2/holidays`, {
    params: {
        api_key: "YOUR_API_KEY_HERE",
        country: location,
        year: year
    }
});
Usage
Start the server:

bash
Copy code
node app.js
Open your web browser and go to http://localhost:4000 to access the application.

Enter a country name and a year in the provided form and click "Search Holidays".

View the list of holidays displayed on the screen.

Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/improvement).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/improvement).
Create a new Pull Request.