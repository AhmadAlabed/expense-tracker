# Expense Tracker – Vanilla JS

A simple expense tracking app built with **plain JavaScript**, without any frameworks or external libraries. The main goal of this project is to practice clean project structure and learn basic architecture ideas like Clean Architecture and SOLID, but in a practical and lightweight way.

## 🔧 Tech Stack

- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **No external dependencies**

## 🧱 Project Idea & Architecture

I tried to organize the project in a clean and understandable way by separating the core logic, the state, and the UI. The goal was to avoid messy “spaghetti code” and make the project easier to extend later.

### Main Architectural Points:

1. **Layered Architecture**

   - **core**: business logic, models, schemas, validation
   - **state**: simple reactive state management
   - **ui**: DOM updates, event handling, view logic

2. **Clean Code Principles**
   - Each file or function has one clear responsibility (SRP)
   - Dependencies are injected instead of being hard-coded
   - Updates to state use immutable patterns (like `structuredClone`)

## 📁 Project Structure

```text
src/
├── app/
│   └── app.js           # Composition Root (wiring everything together)
├── core/
│   ├── expense/         # Domain Rules (Model, Schema, Validators)
│   └── common/          # Shared utilities
├── state/
│   └── expenses.js      # Reactive State Management
├── ui/
│   ├── filter/          # Filter Logic
│   ├── form/            # Form Controller & Validation UI
│   └── table/           # Table Renderer & Event Delegation
└── main.js              # Entry Point
```

## ✨ Features

- Add and remove expenses
- Real-time form validation
- Filter expenses by category
- UI automatically reacts to state changes
- Live calculation of total balance

## ▶️ How to Run

1. Download or clone the project.
2. **(Recommended)** Use a local development server (e.g., VS Code Live Server).

## 🙏 Acknowledgements

Thanks to [Code Zetta](https://www.youtube.com/@codezetta) for the helpful educational content that inspired this project.

## 📝 Future Improvements

- Review the code and fix anything that doesn’t follow Clean Code very well
- Handle more edge cases and optimize where needed
- Try more advanced patterns as I learn more

---

(❤️) => Ahmad;
