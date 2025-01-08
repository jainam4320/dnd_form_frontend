# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Frontend Project: Form Builder with Drag-and-Drop

### ReactJS Setup

- Use ReactJS to build the form builder interface.
- Utilize a DND plugin such as `react-beautiful-dnd` or `react-dnd` for drag-and-drop functionality.
- Allow users to drag and drop different form components (input fields, checkboxes, dropdowns, etc.) onto a canvas area to build the form.

### Form Components

Pre-defined form elements include:
- Text Input
- Textarea
- Select Dropdown
- Checkbox
- Radio Buttons
- Date Picker
- File Upload

Each component should have customizable properties (e.g., label, placeholder, required, validation rules, etc.).

### Form Builder Features

- **Drag-and-drop interface**: Users can drag components from a side panel and drop them onto a form-building area.
- **Editable Properties**: On selecting a form element, a properties panel opens, allowing users to edit settings (e.g., change label text, mark fields as required, etc.).
- **Preview Mode**: Allow users to preview the form before saving.
- **Save Form**: Capture the form structure (JSON format) and send it to the backend for saving.
- **Edit Existing Forms**: Display a list of previously created forms. On selecting a form, it should be editable using the same drag-and-drop interface.

### State Management

- Manage the state of form components and their properties with React's state or use a global state management tool like Redux if needed for complex operations.
- Store form metadata (title, description, etc.).

### Form Validation

- Allow adding validation rules to each form field (e.g., required, regex, max/min length).

### Submit to Backend

- Send the form structure (in JSON format) to the PHP backend for saving.
- On form save, display a success or error message to the user.

Here are some output of the images from the given tasks.

![alt text](<Screenshot 2025-01-08 at 4.20.58 AM.png>) 
![alt text](<Screenshot 2025-01-08 at 4.20.31 AM.png>) 
![alt text](<Screenshot 2025-01-08 at 4.19.15 AM.png>) 
![alt text](<Screenshot 2025-01-08 at 4.18.53 AM.png>) 
![alt text](<Screenshot 2025-01-08 at 4.18.31 AM.png>) 
![alt text](<Screenshot 2025-01-08 at 4.18.00 AM.png>) 
![alt text](<Screenshot 2025-01-08 at 4.21.18 AM.png>)