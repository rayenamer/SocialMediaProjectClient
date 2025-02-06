

# 📦 SocialMedia Project

Welcome to the **Angular SocialMedia Project**! This repository contains a well-structured Angular application designed to manage users, messages, and various functionalities. Below is a comprehensive overview of the project, including its structure, setup instructions, and usage guidelines.

---

## 📂 Project Structure

The project is organized into several key directories and files:

### `public`
- **favicon.ico** - The favicon for the application.

### `src`
The main source folder for the Angular application.

#### `app`
Contains the core application files.

- **`__services`** - Services for handling business logic.
  - `PaginationHelper.ts` - Helper for pagination logic.
  - `account.service.ts` - Service for account-related operations.
  - `members.service.ts` - Service for managing members.

- **`_directives`** - Custom directives.
  - `has-role.directive.ts` - Directive to check user roles.

- **`_forms`** - Form components.
  - **`text-input`** - Text input component.
    - `date-picker` - Date picker component.
    - `text-input.component.css` - Styles for text input.
    - `text-input.component.html` - Template for text input.
    - `text-input.component.ts` - Logic for text input.

- **`_guards`** - Route guards for protecting routes.
  - `admin.guard.ts` - Guard for admin routes.
  - `auth.guard.ts` - Guard for authentication.
  - `prevent-unsaved-changes.guard.ts` - Guard to prevent unsaved changes.

- **`_interceptors`** - HTTP interceptors.
  - `error.interceptor.ts` - Interceptor for handling errors.
  - `jwt.interceptor.ts` - Interceptor for JWT token management.
  - `loading.interceptor.ts` - Interceptor for loading states.

- **`_resolvers`** - Route resolvers for pre-fetching data.
  - `member-detailed.resolver.ts` - Resolver for member details.

- **`_services`** - Additional services.
  - `admin.service.ts` - Service for admin functionalities.
  - `busy.service.ts` - Service for managing busy states.
  - `confirm.service.ts` - Service for confirmation dialogs.
  - `likes.service.ts` - Service for managing likes.
  - `message.service.ts` - Service for handling messages.
  - `presence.service.ts` - Service for managing user presence.

#### `admin`
Admin-related components.

- **`admin-panel`** - Admin panel component.
  - `admin-panel.component.css` - Styles for the admin panel.
  - `admin-panel.component.html` - Template for the admin panel.
  - `admin-panel.component.ts` - Logic for the admin panel.

- **`photo-management`** - Component for managing photos.
  - `photo-management.component.css` - Styles for photo management.
  - `photo-management.component.html` - Template for photo management.
  - `photo-management.component.spec.ts` - Tests for photo management.
  - `photo-management.component.ts` - Logic for photo management.

- **`user-management`** - Component for managing users.
  - `user-management.component.css` - Styles for user management.
  - `user-management.component.html` - Template for user management.
  - `user-management.component.ts` - Logic for user management.

#### `assets`
Contains static assets.

- `user.png` - User image.

#### `error`
Components for handling errors.

- **`test-errors`** - Component for testing errors.
  - `test-errors.component.css` - Styles for test errors.
  - `test-errors.component.html` - Template for test errors.
  - `test-errors.component.ts` - Logic for test errors.

- **`not-found`** - Component for 404 errors.
  - `not-found.component.css` - Styles for not found.
  - `not-found.component.html` - Template for not found.
  - `not-found.component.ts` - Logic for not found.

- **`server-error`** - Component for server errors.
  - `server-error.component.css` - Styles for server error.
  - `server-error.component.html` - Template for server error.
  - `server-error.component.ts` - Logic for server error.

#### `home`
Home component of the application.
- `home.component.css` - Styles for home.
- `home.component.html` - Template for home.
- `home.component.ts` - Logic for home.

#### `lists`
Lists component.
- `lists.component.css` - Styles for lists.
- `lists.component.html` - Template for lists.
- `lists.component.ts` - Logic for lists.

#### `members`
Components related to members.

- **`member-card`** - Component for displaying member cards.
  - `member-card.component.css` - Styles for member card.
  - `member-card.component.html` - Template for member card.
  - `member-card.component.ts` - Logic for member card.

- **`member-detail`** - Component for displaying detailed member information.
  - `member-detail.component.css` - Styles for member detail.
  - `member-detail.component.html` - Template for member detail.
  - `member-detail.component.ts` - Logic for member detail.

#### `messages`
Components related to messaging.

- **`message-thread`** - Component for displaying message threads.
  - `message-thread.component.css` - Styles for message thread.
  - `message-thread.component.html` - Template for message thread.
  - `message-thread.component.ts` - Logic for message thread.

- **`message-input`** - Component for inputting messages.
  - `message-input.component.css` - Styles for message input.
  - `message-input.component.html` - Template for message input.
  - `message-input.component.ts` - Logic for message input.

#### `shared`
Shared components and modules.

- **`footer`** - Footer component.
  - `footer.component.css` - Styles for footer.
  - `footer.component.html` - Template for footer.
  - `footer.component.ts` - Logic for footer.

- **`header`** - Header component.
  - `header.component.css` - Styles for header.
  - `header.component.html` - Template for header.
  - `header.component.ts` - Logic for header.

- **`loading`** - Loading spinner component.
  - `loading.component.css` - Styles for loading spinner.
  - `loading.component.html` - Template for loading spinner.
  - `loading.component.ts` - Logic for loading spinner.

#### `styles`
Global styles for the application.

- `styles.css` - Main stylesheet for the application.

---

## ⚙️ Requirements

To run this Angular project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Angular CLI](https://angular.io/cli) (install globally using the command):
  ```bash
  npm install -g @angular/cli
  ```

## 🚀 Usage

Follow these steps to get your Angular application up and running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/angular-project.git
   cd angular-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   ng serve
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:4200
   ```

5. **Modify configurations as needed in the respective files.**

## 🤝 Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. **Make your changes and commit them:**
   ```bash
   git commit -m "Add some feature"
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/YourFeatureName
   ```
5. **Open a pull request.**

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## 👤 Author

**Rayen Ameur**  
[LinkedIn Profile](www.linkedin.com/in/rayen-ameur-10000s000)

If you have any questions or feedback, feel free to reach out.
