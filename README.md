# React News Search App

This is a simple React app that interacts with the [NewsAPI](https://newsapi.org/) to fetch and display news articles based on user search queries.

## Features

- Users can search for news articles by entering keywords.
- News articles are fetched dynamically from the NewsAPI and displayed in a list.
- Each article includes the title, description, and a link to the full article.

## Technologies Used

- React
- Axios (for API calls)
- NewsAPI

## How to Run the App

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/Pawank1302/news-app
    cd react-news-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Get a free API key from [NewsAPI](https://newsapi.org/).

4. Replace the API key in the `src/services/api.js` file:
    ```js
    const API_KEY = 'your-newsapi-key';  // Replace with your API key
    ```

5. Start the app:
    ```bash
    npm start
    ```

6. Open the app in your browser:
    ```
    http://localhost:3000
    ```

