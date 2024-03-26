# Fundraiser Progress Bar

This is a fundraiser progress bar web application with realtime updates built using React for the frontend and Flask for the backend API.

## Overview

The Fundraiser Progress Bar Web App provides a user-friendly interface for tracking the progress of fundraising campaigns. It displays a visually appealing progress bar indicating the percentage of the fundraising goal achieved, along with essential metrics and details about the campaign.

 - Frontend:
 - <img src="https://github.com/Krishpkreame/FundraiserWebapp/assets/79666419/5db22dd1-d016-4ea6-bdd3-4a5f6bdffd18" width="500">

 - Backend interface:
 - <img src="https://github.com/Krishpkreame/FundraiserWebapp/assets/79666419/3f16426b-02d4-4117-a7bf-21e61f6d1caf" width="400">

## Features

- **Dynamic Progress Bar**: The frontend dynamically updates the progress bar to reflect the current state of the fundraising campaign.
  
- **Responsive Design**: The application is designed to be responsive, ensuring a seamless user experience across various devices and screen sizes.

- **Real-time:** The application updates and checks the backend for any changes every 2 seconds so the progress bar is updated efficiently.

## Technologies Used

- **React**: A popular JavaScript library for building user interfaces, used for the frontend development of the application.
  
- **Flask**: A lightweight Python web framework, utilized to create a RESTful API backend for handling data requests and interactions.
  
- **HTML/CSS**: Standard web technologies used for structuring and styling the user interface.
  
- **JavaScript**: Client-side scripting language used for interactivity and dynamic updates.
  
- **RESTful API**: The backend API follows the REST architectural style, providing endpoints for fetching campaign data and updating progress.

## Setup

1. Clone the repository.
2. Navigate to the `frontend` directory and install dependencies using `npm install`.
3. Navigate to the `backend` directory and set up the Flask environment. Install dependencies using `pip install -r requirements.txt`.
4. Start the frontend development server using `npm start dev -- --host --port 80`.
5. Run the Flask backend server using `python main.py`.
6. Access the backend application in your web browser at port 7450 for interface to input data. 
	1. `http://192.168.1.175:7450`
7. Access the frontend in your web browser at port 80 for interface to show progress bar.
	1. `http://192.168.1.175`

## Contributions

Contributions to enhance the features, improve performance, or fix issues are welcome. Please fork the repository, make your changes, and submit a pull request.
