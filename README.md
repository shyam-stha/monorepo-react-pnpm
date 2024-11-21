# Monorepo Vite PNPM

This is a **monorepo** managed using **PNPM Workspaces**, built with **Vite** and **React**. The project is designed to streamline development by organizing multiple applications and shared packages within a single repository. With **PNPM**, dependency management is efficient and scalable, making it ideal for modern frontend development.

---

## Features

- **Monorepo Architecture**: Centralized management of multiple apps and shared libraries.
- **PNPM Workspaces**: Fast and efficient dependency management with workspace linking.
- **Vite Integration**: Lightning-fast development with modern build tooling.
- **TypeScript Support**: Type-safe development across all packages.
- **Shared Components**: Reusable UI components, utilities, and icons.
- **Scalability**: Ideal for teams and large-scale projects.

---

## Project Structure

```plaintext
monorepo-vite-pnpm/
├── packages/
│   ├── icons/          # Shared icons package
│   ├── utils/          # Shared utilities package
│   ├── ui/             # Shared UI components package
├── apps/
│   ├── admin-dashboard/  # Admin dashboard React app
│   ├── website/          # Website React app
├── pnpm-workspace.yaml   # Defines workspace structure
├── package.json          # Root package configuration

```

Ensure you have the following installed:

- **Node.js** (>= 16.x)
- **PNPM** (>= 8.x)

---

## Steps to Set Up the Project

1. **Clone the Repository & Setup**:

   ```bash
   git clone https://github.com/your-repo/monorepo-vite-pnpm.git
   cd monorepo-vite-pnpm
   pnpm local:setup
   ```

2. **Start Development Server**:

    - To start Website app:
    ```bash
    pnpm site:dev
    ```
    - To start Admin Dashboard app:
    ```bash
    pnpm admin:dev
    ```

3. **Scripts**:
    
    ```bash
    pnpm local:setup	// Installs dependencies and builds all shared packages.
    pnpm ui:build	// Builds the shared UI package.
    pnpm utils:build	// Builds the shared utilities package.
    pnpm icons:build	// Builds the shared icons package.
    pnpm site:dev	// Starts the development server for the website.
    pnpm admin:dev	// Starts the development server for the admin dashboard.
    pnpm test:all	// Runs tests for all packages and apps.
    ```

4. **Testing**:
    
    - For testing use below command
    ```bash
    pnpm test:all
    ```