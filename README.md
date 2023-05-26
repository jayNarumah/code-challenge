# Challenge Title
Inventory Management App - Sidebar and Dark Mode

## Description
- You have been provided with a mini inventory CRUD app built with Angular and PrimeNG components. 
- Your task is to enhance the app by implementing a collapsible sidebar with custom SVG icons and adding a Dark mode feature.

## Requirements
### Back-End Service
#### Create an API endpoint /products that support GET, POST, PUT, and DELETE operations
- Each product should have the following properties `id`, `code`, `name`, `description`, `price`, `category`, `quantity` ,`inventoryStatus`, `rating`.
- Implement data validation for the product properties (e.g., non-negative quantity, positive price).
- Store the products in memory (no need for a persistent database).
#### Create an API endpoint /sales that support GET, POST, PUT, and DELETE operations.
- Each sale should have the following properties: `id`, `productId`, `quantity`,`total` and `timestamp`.
- Implement data validation for the product properties (e.g., non-negative quantity, positive price).
- Store the products in memory (no need for a persistent database).

### Front-End 
#### Create page for sales management
- Users can create, view and update Sales information.

#### Implement a collapsible sidebar
- The sidebar should display navigation links and collapse/expand when the toggle button is clicked.
- Icons should be visible on collapse.
- Ensure proper styling and transitions for the collapsible behavior.
- Preserve the state of the sidebar (collapsed or expanded) across page reloads.
- **Collapsed** sidebar width according to preference but should not exceed 7% of page width.
- **Expanded** sidebar width according to preference but should not exceed 16% of page width.
- The links on the sidebard should be the sales management page, inventory page, and buttons to toggle Dark mode and the sidebar.

#### Implement Dark mode
- Add a Dark mode toggle button/switch to the app.
- When Dark mode is enabled, apply appropriate CSS styles to switch the app's color scheme to a dark theme.
- Make sure to handle the visibility and contrast of text and components for optimal user experience.

#### Implement the "Export" functionality
- Users should be able to extract inventory and sales information to pdf.

#### Non-Functional Requirements
- Make sure the collapsible sidebar and Dark mode feature work across different screen sizes and devices.
- Follow Angular and PrimeNG style guides and best practices.
- Structure the code using appropriate components, services, and modules.
- Implement code reusability and maintainability.

## Guidelines
- **Do Not** use PrimeNG Icons, **Only** use SVG icons from [Feather Icons](https://feathericons.com) for each navigation link.
- Leverage CSS and Angular styles for customizing the appearance of the sidebar and the display theme.
- Employ best practices for code readability, organization, and maintainability.

## Submission
- Create a fork of the GitHub repository.
- Commit your changes with clear and concise commit messages.
- Once you have completed the challenge, invite @7madayl3b and @NetDbug as collaborators to your forked repository. 
- Send an email to ahalbatu2@yahoo.com with the subject line "Code Challenge Submission done" Include your forked repository's URL in the email.
- Submission deadline is May 25, 2023 by 11:59 PM.

## Evaluation Criteria
- Implementation of APIs for back-end service.
- Implementation of the collapsible sidebar with custom SVG icons.
- Implementation of the Dark mode feature with proper styling and contrast.
- Export functionality implementation.
- Sales management page interface and functionality.
- Compatibility and responsiveness across different screen sizes and devices.
- Adherence to Angular and PrimeNG best practices.
- Code readability, structure, and reusability.
- Overall user experience and attention to detail.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` and `json-server src/assets/data/products.json` to start the api server. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
