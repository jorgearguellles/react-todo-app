# React Todo App

A modern and efficient Todo application built with React, implementing best practices and clean architecture patterns.

## 🚀 Technologies

- **React 18** - Latest version of React for building user interfaces
- **React Router DOM v6** - For handling routing and navigation
- **React Icons** - For beautiful and consistent iconography
- **PropTypes** - For runtime type checking of React props
- **UUID** - For generating unique identifiers
- **Jest & React Testing Library** - For comprehensive testing
- **ESLint** - For code quality and style consistency
- **GitHub Pages** - For deployment and hosting

## 🏗️ Architecture & Design Patterns

### Component Structure

The application follows a modular component-based architecture with clear separation of concerns:

- **Presentational Components**: UI-focused components that receive data and callbacks via props
- **Container Components**: Handle data and business logic
- **Context API**: For state management and prop drilling prevention

### Key Patterns Implemented

- **Component Composition**: Breaking down complex UIs into smaller, reusable components
- **Custom Hooks**: For reusable logic and state management
- **Context API**: For global state management
- **Error Boundaries**: For graceful error handling
- **Loading States**: For better user experience
- **Modal Pattern**: For focused user interactions

## 📱 UI Showcase

### Main Features

- Todo creation and management
- Search functionality
- Progress tracking
- Responsive design
- Modal interactions
- Loading states
- Error handling

### Screenshots

![Login Screen](https://github.com/jorgearguellles/react-todo-app/blob/main/public/1.png)
![Login Screen](https://github.com/jorgearguellles/react-todo-app/blob/main/public/2.png)
![Login Screen](https://github.com/jorgearguellles/react-todo-app/blob/main/public/3.png)
![Login Screen](https://github.com/jorgearguellles/react-todo-app/blob/main/public/4.png)

## 🛠️ Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jorgearguellles/react-todo-app.git

# Navigate to project directory
cd react-todo-app

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages

## 🧪 Testing

The project includes comprehensive testing setup with Jest and React Testing Library:

- Unit tests for components
- Integration tests for user interactions
- Test coverage reporting

## 📦 Project Structure

```
src/
├── components/     # Reusable UI components
├── context/       # Context providers
├── hooks/         # Custom React hooks
├── styles/        # CSS and styling files
├── __tests__/     # Test files
└── App.js         # Main application component
```

## 👨‍💻 Developer

### Jorge Arias Argüelles

- [LinkedIn Profile](https://www.linkedin.com/in/jorgeariasarguelles/)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built as part of the Platzi React course
- Inspired by modern todo applications
- Thanks to the React community for their excellent documentation and tools

## Features

- **Add Tasks**: Allows you to add new tasks to your list.
- **Complete Tasks**: Mark tasks as completed once they're done.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Search Tasks**: Filter tasks using keywords for easier navigation.

## Application Overview

The React Todo App provides a user-friendly interface to manage your daily tasks. You can add, complete, or delete tasks as needed. The search functionality allows you to filter specific tasks, making it easy to stay organized and track your activities.

## Applied Knowledge

The development of this application incorporates the following concepts and technologies:

- **React.js**: The main library used to build the user interface declaratively and efficiently.
- **Functional Components and Hooks**: Utilized functional components with hooks like `useState` and `useEffect` to manage state and side effects.
- **Context API**: Applied React's Context API to handle global state management, avoiding prop drilling.
- **LocalStorage**: Leveraged browser storage to persist tasks even after refreshing the page.
- **CSS Modules**: Styled components using modular CSS for clean and maintainable design.
- **Unit Testing**: Employed tools like Jest and React Testing Library to ensure component and hook functionality.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the Repository**: Download the source code to your local machine.

   ```bash
   git clone https://github.com/jorgearguellles/react-todo-app.git

   ```

2. **Install Dependencies:** Navigate to the project directory and install the required dependencies.
