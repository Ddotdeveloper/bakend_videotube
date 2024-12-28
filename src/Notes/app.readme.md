

## Basic Middlewares functions are used in this `app.js`
These middleware functions are used in an Express application to handle various aspects of request processing. Here's a detailed explanation:

1. **`app.use(express.json({limit:"16kb"}))`:**
   - **Purpose**: Parses incoming JSON payloads in the request body.
   - **Why**: Helps your application understand and extract JSON data from client requests (e.g., APIs or form submissions using JSON).
   - **`{limit: "16kb"}`**: Restricts the maximum size of JSON data in the request body to 16 kilobytes to prevent abuse or large payloads causing memory issues.

2. **`app.use(express.urlencoded({extended: true, limit: "16kb"}))`:**
   - **Purpose**: Parses URL-encoded payloads (form submissions or query strings) in the request body.
   - **Why**: Enables the server to extract data sent via HTML forms using the `application/x-www-form-urlencoded` content type.
   - **`extended: true`**: Allows parsing of nested objects (using the `qs` library), making it more powerful.
   - **`limit: "16kb"`**: Limits the size of the URL-encoded payload to 16 kilobytes for similar reasons as above.

3. **`app.use(express.static("public"))`:**
   - **Purpose**: Serves static files like HTML, CSS, JavaScript, images, etc., from the `public` directory.
   - **Why**: Makes files in the `public` folder directly accessible via the web browser. For example, accessing `/styles.css` fetches the `styles.css` file from `public/styles.css`.

4. **`app.use(cookieParser())`:**
   - **Purpose**: Parses cookies attached to incoming requests.
   - **Why**: Enables your application to read and handle cookies sent by the client (e.g., for authentication, user sessions, or preferences).

### Summary:
These middleware functions together enable your Express app to:
- Handle and process incoming JSON and form data securely and efficiently.
- Serve static assets like CSS, JavaScript, or images to the client.
- Manage cookies for stateful interactions between the client and server.