# 📝 TaskX - Persistent To-Do List Web App

A clean, modern, and lightweight To-Do List application designed to help users manage daily tasks with real-time feedback, responsive UI, and persistent browser storage.

---

## 🚀 Live Demo

[View Live Site](https://taskx-app.netlify.app/)

---

## 🚀 Key Features

- **Browser Data Persistence:** Automatically saves all active tasks to `localStorage` so your list stays intact even after closing or refreshing the browser.
- **Task Input Validation:** Validates user entries to prevent empty submissions and displays warning messages.
- **Strike-Through Completion:** Mark tasks as completed using interactive checkboxes.
- **Key-Bound Deletion:** Delete individual tasks using unique key identifiers to ensure accurate removal from storage.
- **Clear All Shortcut:** Instantly wipe all active tasks and reset internal counters using a double-click shortcut on the **Clear** button.
- **Keyboard Navigation:** Support for quick task entry via the `Enter` key and initial input auto-focus.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic document layout
- **CSS3:** Flexbox layouts, `:root` variable themes, and modern `:has()` parent selectors
- **JavaScript (ES6):** Dynamic DOM manipulation, closure scope key binding, event listeners, and `localStorage` API
- **Font Awesome:** Minimalist vector icon graphics

---

## 📖 How to Use

1. Type your task inside the auto-focused text input box.
2. Press **+ Add** or hit **Enter** to add the task to your list.
3. Check the checkbox next to a task to toggle strike-through completion.
4. Click the **Trash Icon** on any item to delete that specific task.
5. **Double-click** the **Clear** button to wipe all saved tasks from storage and reset the app.

---

## 📁 Project Structure

```text
TaskX/
├── index.html     # Semantic HTML layout and container setup
├── style.css      # Theme variables, flexbox grid, and element styles
├── app.js         # DOM manipulation, event listeners, and localStorage logic
└── README.md      # Comprehensive project documentation

---

## 💻 How to Run Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/UzairSuriya/taskx.git](https://github.com/UzairSuriya/taskx.git)