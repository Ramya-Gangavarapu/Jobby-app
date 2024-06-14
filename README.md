# Jobby App

## Overview
A React-based online job searching application that allows users to browse through a list of job offers, apply filters, search jobs, and view detailed information about each job.


## Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

## Key Features
Job Search: Browse through a list of job offers and apply filters to narrow down the results.
Search Jobs: Search for specific job titles or keywords.
Job Details: View detailed information about each job.
Basic Authentication: Implemented a basic authentication flow with error handling for invalid username and password.
Persistent User Credentials: Uses cookies to persist user credentials across page reloads.
Navigation: Uses React Router for navigation within the application.
Protected Routes: Implemented protected routes to control access for certain routes.
API Integration: Fetches data from APIs using the component lifecycle and handles API errors with a retry button.

## Technical Details
Frontend Framework: Built using React.
Folder Structure: Maintains a consistent folder structure following clean code guidelines.
Naming Conventions: Uses meaningful naming conventions, such as prefixing event handlers with on and creating reusable components.
Mock APIs: Integrated mock APIs for data, with filter-specific API calls using query parameters.
Conditional Rendering: Uses conditional rendering to display different components based on API status.
Loading Spinner: Displays a loading spinner from the react-loader-spinner package during API requests.
Responsive Design: Uses media queries and flexbox for a responsive layout.

## Future Enhancements
Backend Development: Plan to develop a backend for the app to provide a more comprehensive experience, including user registration and saving favourite jobs.
