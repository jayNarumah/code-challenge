# Inventory Management App - Code Challenge

A full-stack inventory and sales management application built with Angular and PrimeNG, featuring CRUD operations for products and sales with PDF export functionality.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Requirements](#requirements)
  - [Back-End Service](#back-end-service)
  - [Front-End](#front-end)
- [Guidelines](#guidelines)
- [Getting Started](#getting-started)
- [Development](#development)
- [Submission](#submission)
- [Evaluation Criteria](#evaluation-criteria)

## Description

You have been provided with a mini inventory CRUD application built with Angular and PrimeNG components. Your task is to enhance the application by:

- Implementing API integration using `json-server`
- Adding a comprehensive sales management feature
- Implementing PDF export functionality for inventory and sales data

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) and npm
- **Angular CLI** (v15 or higher) - Install globally with `npm install -g @angular/cli`
- **json-server** - Can be run via `npx` or installed globally

## Installation

1. Clone or fork this repository
2. Install dependencies:
   ```bash
   npm install && npm install -g json-server
   ```
3. Start the JSON server (in a separate terminal):
   ```bash
   json-server src/assets/data/products.json --watch
   ```
4. Navigate to `http://localhost:4200/` in your browser

## Requirements

### Back-End Service

#### Products API Endpoint (`/products`)

Create a RESTful API endpoint that supports `GET`, `POST`, `PUT`, and `DELETE` operations.

**Product Model:**

- `id` - Unique identifier
- `code` - Product code
- `name` - Product name
- `description` - Product description
- `price` - Product price (must be positive)
- `category` - Product category
- `quantity` - Stock quantity (must be non-negative)
- `inventoryStatus` - Inventory status
- `rating` - Product rating

**Validation Requirements:**

- Quantity must be non-negative
- Price must be positive
- All required fields must be validated

**Storage:** Store products in memory (no persistent database required)

#### Sales API Endpoint (`/sales`)

Create a RESTful API endpoint that supports `GET`, `POST`, `PUT`, and `DELETE` operations.

**Sale Model:**

- `id` - Unique identifier
- `productId` - Reference to the product
- `quantity` - Quantity sold (must be non-negative)
- `total` - Total sale amount (must be positive)
- `timestamp` - Sale timestamp

**Validation Requirements:**

- Quantity must be non-negative
- Total must be positive
- All required fields must be validated

**Storage:** Store sales in memory (no persistent database required)

### Front-End

#### Sales Management Page

Create a dedicated page for sales management with the following capabilities:

- **Create** new sales records
- **View** existing sales information
- **Update** sales records
- Display sales in a user-friendly interface

#### Export Functionality

Implement PDF export functionality that allows users to:

- Export inventory data to PDF
- Export sales data to PDF
- Generate well-formatted PDF documents

#### Non-Functional Requirements

- Follow Angular and PrimeNG style guides and best practices
- Structure code using appropriate components, services, and modules
- Implement code reusability and maintainability
- Ensure responsive design across different screen sizes
- Write clean, readable, and well-documented code

## Guidelines

- **Icons:** **Do NOT** use PrimeNG Icons. **ONLY** use SVG icons from [Feather Icons](https://feathericons.com) for navigation links
- **Styling:** Leverage CSS and Angular styles for customizing the application appearance
- **Code Quality:** Employ best practices for code readability, organization, and maintainability
- **Architecture:** Follow Angular architectural patterns and component-based design principles

## Getting Started

### Development Server

Run the development server:

```bash
ng serve
```

The application will be available at `http://localhost:4200/`. The app will automatically reload when you change any source files.

**Note:** Make sure to start the JSON server in a separate terminal before running the Angular app.

### Code Scaffolding

Generate new components, services, and modules using Angular CLI:

```bash
# Generate a component
ng generate component component-name

# Generate a service
ng generate service service-name

# Generate a module
ng generate module module-name
```

For more options, use:

```bash
ng generate directive/pipe/service/class/module
```

### Build

Build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build:

```bash
ng build --prod
```

### Running Tests

**Unit Tests:**

```bash
ng test
```

Executes unit tests via [Karma](https://karma-runner.github.io).

**End-to-End Tests:**

```bash
ng e2e
```

Executes end-to-end tests via [Protractor](http://www.protractortest.org/).

> **Note:** Before running e2e tests, make sure the app is being served via `ng serve`.

## Submission

To submit your completed challenge:

1. **Fork** the GitHub repository
2. **Commit** your changes with clear and concise commit messages
3. **Invite** @jayNarumah as a collaborator to your forked repository
4. **Send an email** to `abduljawad@centuryinformationsystems.com` with:
   - **Subject:** "Code Challenge Submission Done"
   - **Body:** Include your forked repository's URL

## Evaluation Criteria

Your submission will be evaluated based on:

- ✅ **API Implementation:** Correct implementation of back-end APIs for products and sales
- ✅ **Export Functionality:** Working PDF export for both inventory and sales data
- ✅ **Sales Management:** Complete and functional sales management page
- ✅ **Responsive Design:** Compatibility and responsiveness across different screen sizes and devices
- ✅ **Best Practices:** Adherence to Angular and PrimeNG best practices
- ✅ **Code Quality:** Code readability, structure, and reusability
- ✅ **User Experience:** Overall user experience and attention to detail

## Further Help

For more information:

- Angular CLI: Run `ng help` or visit the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)
- Angular Documentation: [https://angular.dev/overview](https://angular.dev/overview)
- PrimeNG Documentation: [https://primeng.org/](https://primeng.org/)
- JSON Server Documentation: [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

---

**Good luck with the challenge!** 🚀
