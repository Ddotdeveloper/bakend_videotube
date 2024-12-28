### Create a asyncHandler 
####  Methods -> 
- ##### Promise Method 
  The `asyncHandler` function wraps an asynchronous route handler (`requestHandler`) to simplify error handling in Express.js. It ensures that the handler is executed within a `Promise.resolve()` block, automatically catching any errors and forwarding them to the `next` middleware using `.catch(err => next(err))`. This eliminates the need for repetitive `try-catch` blocks in route definitions, streamlining error propagation in asynchronous code.
  
- ##### Higher Order functions Methode 2 
  
The `asyncHandler` is a higher-order function that wraps an asynchronous route handler function (`fn`) in Express.js. It automatically catches any errors that occur within the `fn` and sends a JSON response with the error details, preventing unhandled promise rejections. 

### Key Details:
1. **Input**: Takes an asynchronous function `fn` (e.g., a route handler).
2. **Execution**: Invokes `fn` with the request (`req`), response (`res`), and `next`) parameters.
3. **Error Handling**: If an error is thrown during `fn` execution, it is caught in the `catch` block.
4. **Response**: Sends an error response with:
   - HTTP status code (`err.code` or default `500` for internal server errors).
   - A JSON object indicating failure (`success: false`) and the error message (`message: err.message`).

This utility eliminates repetitive error-handling code in your route definitions.