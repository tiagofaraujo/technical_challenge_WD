# The Phone Cave Catalog App

This app is a catalog for The Phone Cave store. It allows users to view and explore the available phones in the store's inventory. The app consists of a REST API server built with Node.js and a client-side application developed using React.js.

## Installation and Setup

To run the Phone Cave Catalog App on your local machine, please follow these instructions:

### Server-side (REST API)

1. Make sure you have Node.js installed on your machine (version 12 or above).

2. Clone the repository from GitHub:

   ```
   git clone https://github.com/your-username/phone-cave-catalog-app.git
   ```

3. Navigate to the server directory:

   ```
   cd phone-cave-catalog-app/server
   ```

4. Install the required dependencies:

   ```
   npm install
   ```

5. Start the server:

   ```
   npm start
   ```

   The server will be running at `http://localhost:3000`.

### Client-side (React Application)

1. In a new terminal window, navigate to the client directory:

   ```
   cd phone-cave-catalog-app/client
   ```

2. Install the required dependencies:

   ```
   npm install
   ```

3. Start the React development server:

   ```
   npm start
   ```

   The client-side application will be running at `http://localhost:3001`.

## App Usage

Once you have both the server and client running, you can start using the Phone Cave Catalog App. Follow the steps below:

1. Open your web browser `http://localhost:3001`.

2. The home page will display a list of phones available in The Phone Cave store.

3. Click on a phone model from the list to view its detailed information.

4. The detailed view will show specific details about the phone, including images.

5. While the API request is being processed, a spinner component will be displayed to indicate loading.

## Notes and Additional Information

- The app uses a fake data source (`phones.json`) to simulate the catalog data.

- The focus of this exercise is on functionality and speed rather than sophisticated design. Therefore, the UI may not be visually polished.

- You have a three-hour time limit to complete the challenge. If you're unable to finish all the minimum viable product (MVP) objectives within this time, you can still submit your work via a pull request.

Thank you for your participation! If you have any questions or need further assistance, please feel free to reach out.
