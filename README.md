# Next.js Learning Guide

An interactive guide to mastering Next.js, this project provides a practical, in-depth understanding of key Next.js concepts through structured sections, each featuring clear examples to illustrate the concepts.

The project is organized into several key sections, each targeting specific Next.js features:

1. Server-Side and Client-Side Rendering
This section introduces the fundamentals of server components with client-side state handling.

2. Dynamic Generation - SSR
Learn to manage dynamic metadata and generate server-rendered pages (SGR) to optimize performance and SEO.

3. Incremental and Static Generation
Covers static content generation for pre-emptively creating pages, providing faster load times for frequently accessed pages.

4. Global State - Redux and LocalStorage
This section focuses on managing global application state using Redux and LocalStorage, essential for modern web applications.

## Table of Contents

- [Requirements](#requirements)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Requirements

You need to have the following installed:

A source code editor such as [VSCode](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com/), or any other editor of your choice.

[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F.svg?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![npm](https://img.shields.io/badge/npm-%23CB3837.svg?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/)

> [!NOTE]
> Clicking on the Node.js badge will take you to the Node.js website, where you can download the installer. It is recommended to use the stable version. When you install Node.js, npm will be installed automatically.

Check your Node.js and npm installation by running:

```bash
node --version
npm --version
```

## Technology Stack

This project utilizes the following technologies:

<p>
  <img src="https://skillicons.dev/icons?i=next" alt="Next.js" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=react" alt="React" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=redux" alt="Redux" width="40" height="40" />
  <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" width="40" height="40" />
</p>

## Project Structure

```bash
├───📁 public/
├───📁 src/
│   └───📁 app/
│       ├───📁 components/
│       ├───📁 dashboard/
│       │   ├───📁 counter/
│       │   ├───📁 main/
│       │   └───📄 layout.tsx
│       ├───📁 fonts/
│       ├───📁 shopping-cart/
│       │   ├───📁 components/
│       ├───📄 favicon.ico
│       ├───📄 globals.css
│       ├───📄 layout.tsx
│       └───📄 page.tsx
├───📄 .eslintrc.json
├───📄 LICENSE
├───📄 next-env.d.ts
├───📄 next.config.ts
├───📄 package-lock.json
├───📄 package.json
├───📄 postcss.config.mjs
├───📄 README.md
├───📄 tailwind.config.ts
└───📄 tsconfig.json
```

> [!NOTE]
> The complete directory structure will be presented here once it is finalized. This section will detail the organization of folders and files, providing a clear overview of each component's role in the application's architecture.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/daniel-pompa/next-learning-guide.git
```

2. **Navigate to the project directory:**

```bash
cd next-learning-guide
```

3. **Install dependencies:**

```bash
npm install
```

4. **Run the development server:**

```bash
npm run dev
```

> [!NOTE]
> The server will typically run on <http://localhost:3000>, but check the output on your terminal to be sure.

## Usage

Explore the application through its interactive dashboard.

- **Dashboard Navigation**: Use the dashboard to access each example, covering key topics such as server-side rendering, static generation, and state management.
- **Code Exploration**: Feel free to experiment with the codebase to deepen your understanding of Next.js functionalities and how they can be applied in real-world projects.
- **Further Reading**: For more in-depth information, consult the [Next.js documentation](https://nextjs.org/docs).

## Contributing

We welcome contributions from the community! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

**Code Standards**  

Before submitting a pull request, please ensure your code follows the project's coding standards. We use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to maintain code consistency and readability. Please run these tools before submitting.

## License

This project is licensed under the MIT License.

[![MIT License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)

> [!NOTE]
> Clicking on the MIT License badge to see the LICENSE file for details.

## Author

This project is maintained and developed by **Daniel Pompa Pareja**.

For any questions or suggestions, feel free to reach out via [email](mailto:daniel.40.pompa@gmail.com).

Enjoy learning and experimenting with Next.js! **Join us and contribute to make this guide even better for the community.**

[Back to Top](#table-of-contents)
