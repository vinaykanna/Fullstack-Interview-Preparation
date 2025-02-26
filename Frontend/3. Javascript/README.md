## Javascript Interview Questions

1. [Difference between cookies, localstorage and session storage](#difference-between-cookies-localstorage-and-session-storage)
2. [Explain event delegation in JavaScript](#explain-event-delegation-in-javascript)
3. [What is the difference between event bubbling and event capturing and how and do you prevent it from happening?](#the-difference-between-event-bubbling-and-event-capturing)


## Difference between cookies, localstorage and session storage
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


## Explain event delegation in JavaScript

Event delegation is a technique in JavaScript where a single event listener is attached to a parent element instead of attaching event listeners to multiple child elements. When an event occurs on a child element, the event bubbles up the DOM tree, and the parent element's event listener handles the event based on the target element.

Event delegation provides the following benefits:

- Improved performance: Attaching a single event listener is more efficient than attaching multiple event listeners to individual elements, especially for large or dynamic lists. This reduces memory usage and improves overall performance.

- Simplified event handling: With event delegation, you only need to write the event handling logic once in the parent element's event listener. This makes the code more maintainable and easier to update.

- Dynamic element support: Event delegation automatically handles events for dynamically added or removed elements within the parent element. There's no need to manually attach or remove event listeners when the DOM structure changes

However, do note that:
- It is important to identify the target element that triggered the event.
- Not all events can be delegated because they are not bubbled. Non-bubbling events include: focus, blur, scroll, mouseenter, mouseleave, resize, etc.


## The Difference Between Event Bubbling and Event Capturing

## Event Bubbling
This is the **default behavior** in the DOM (Document Object Model). When an event (like a click) happens on an element, it first triggers the event handler on that element, then "bubbles up" to its parent elements, all the way to the root (usually the `document` or `window`). 

For example:
- If you click a button inside a `<div>`, the button’s event fires first, then the `<div>`’s, then any ancestors’ events, moving upward.

## Event Capturing
This is the **opposite**. The event starts at the root (like `document`) and "captures down" through the DOM tree to the target element. 

For example:
- In the same scenario, the event would fire on the `<div>` first, then the button. 
- It’s less commonly used but can be enabled explicitly (e.g., with `addEventListener`’s `useCapture` option set to `true`).

**In short**: Bubbling goes *up* from the target; capturing goes *down* to the target.

## How to Prevent It
You can stop either bubbling or capturing using the `event.stopPropagation()` method in JavaScript. This prevents the event from moving further in its current phase (bubbling or capturing).

### Examples:
- **In bubbling**: If you call `event.stopPropagation()` on the button, the event won’t reach the `<div>` or beyond.
- **In capturing**: If you call it on the `<div>`, it won’t reach the button.

If you also want to stop the default behavior (like a link navigating), use `event.preventDefault()`. Sometimes you’ll see both together, depending on the use case.

### Code Snippet:
```javascript
button.addEventListener('click', (event) => {
  event.stopPropagation(); // Stops bubbling or capturing
  event.preventDefault();  // Stops default action, if needed
  console.log('Button clicked, but event won’t go further!');
});