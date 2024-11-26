## Miscellaneous - Thereotical

### Difference between cookies, localstorage and session storage
Cookies, LocalStorage, and SessionStorage are all used for storing data in the browser, but they differ in terms of scope, storage size, expiration behavior, and use cases
#### 1. Cookies
- **Purpose**: Primarily used for storing small amounts of data that need to be sent to the server with each HTTP request (for things like session management, user preferences, or authentication tokens).
- **Scope**:
    - Available across different windows and tabs of the same browser, for the same domain.
    - Can be set to be accessible by client-side JavaScript or made HTTP-only (accessible only by the server).
- **Storage Size**: Limited to around 4KB per cookie (varies slightly across browsers).
- **Expiration**: Cookies can be set with an expiration date (persistent cookies) or session-based (deleted when the browser is closed).
- **Accessibility**:
    - Cookies are accessible via document.cookie (client-side) or can be sent with HTTP requests (server-side).
    - HTTP cookies are automatically sent to the server with each request.
- **Security**:
    - Cookies can be flagged as secure (only transmitted over HTTPS) or HTTP-only to prevent JavaScript from accessing them.
    - Vulnerable to cross-site scripting (XSS) attacks if not handled properly.
- **Use Cases**:
    - Session management (user authentication).
    - Tracking user behavior across sessions.
    - Persisting small pieces of data that must be shared between client and server.

#### 2. LocalStorage
- **Purpose**: Used for storing large amounts of data client-side that persist even after the browser is closed. It is meant for client-side only use, with no data automatically sent to the server.
- **Scope**: 
    - Available across different windows and tabs of the same browser, as long as the same domain is accessed.
- **Storage Size**: Typically allows 5-10MB of data per origin (depending on the browser).
- **Expiration**: Data is stored persistently until explicitly deleted by JavaScript or by the user (e.g., clearing browser cache).
- **Accessibility**:
    - Only accessible via JavaScript (localStorage API).
    - Not automatically sent with HTTP requests like cookies.
- **Security**:
    - Vulnerable to XSS attacks if not sanitized properly, as malicious scripts could access LocalStorage data.
    - No built-in protection for secure data transmission like cookies.
- **Use Cases**:
    - Storing user preferences, theme settings, or user data that needs to persist across sessions.
    - Caching large client-side application data.
    - Offline applications, where data must be available even if the browser is closed and reopened.

#### 2. SessionStorage
- **Purpose**: Similar to LocalStorage, but designed for storing data for a single session. The data is cleared when the page session ends (when the browser tab or window is closed).
- **Scope**: Limited to the specific tab or window that created it. Other tabs or windows from the same domain do not share the stored data.
- **Storage Size**: Typically allows 5-10MB of data per origin (like LocalStorage).
- **Expiration**: Data is cleared when the tab or window is closed. If the page is reloaded or navigated within the same tab, the data persists.
- **Accessibility**:
    - Only accessible via JavaScript (sessionStorage API).
    - Not sent with HTTP requests like cookies.
- **Security**:
    - Vulnerable to XSS if data is not properly sanitized, since JavaScript can access it.
- **Use Cases**:
    - Storing temporary data, such as form inputs or UI state, that should be available only for the duration of a session (e.g., single tab or window).
    - Useful for scenarios like temporary authentication tokens during a single session or multi-step forms.

#### Key Takeaways:
- **Cookies** are ideal for small amounts of data that need to be sent to the server with every HTTP request, especially for things like session IDs or authentication tokens.
- **LocalStorage** is best for storing larger amounts of data that need to persist across browser sessions but do not need to be sent to the server.
- **SessionStorage** is ideal for data that needs to be stored temporarily for a single session (in a specific tab or window).


