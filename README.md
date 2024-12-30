# Next.js Todo Application

A feature-rich todo application built with Next.js and Tailwind CSS that includes categories, filtering, and local storage persistence.

## Features

- Create and manage todos
- Categorize todos
- Filter todos by status (All/Active/Completed)
- Local storage persistence
- Responsive design
- Custom category creation
- Mark todos as complete/incomplete
- Delete todos

## Prerequisites

- Node.js 14.0 or later
- npm or yarn

## Installation

1. Clone the repository:
   bash
   git clone <your-repo-url>
   cd todo-app


2. Install dependencies:
   bash
   npm install
# or
yarn install


3. Run the development server:
   bash
   npm run dev
# or
yarn dev


4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure


todo-app/
├── app/
│   └── page.js    # Main todo application component
├── public/        # Static assets
└── styles/        # Global styles


## Usage

### Adding a Todo
1. Enter todo text in the input field
2. Select a category (optional)
3. Click "Add" or press Enter

### Managing Categories
1. Enter new category name
2. Click "Add" to create category
3. Use category dropdown when creating todos

### Filtering Todos
Use the filter buttons to show:
- All todos
- Active todos
- Completed todos

## Technologies Used

- Next.js 14
- React
- Tailwind CSS
- LocalStorage API

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).