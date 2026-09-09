# 📝 TaskX - Persistent To-Do List Web App

A clean, modern, and lightweight To-Do List application designed to help users manage daily tasks with real-time feedback, dynamic character counting, responsive UI, and persistent browser storage.

---

## 🚀 Live Demo

[View Live Site](https://taskx-app.netlify.app/)

---

## 🚀 Key Features

- **Browser Data Persistence:** Automatically saves all active tasks to `localStorage` using unique task keys so your list stays intact across page reloads.
- **Live Character Counter:** Displays a real-time character tracker (`0/100 Characters`) that turns red when the 100-character limit is reached.
- **Input Constraints & Validation:** Enforces a hard `maxlength="100"` limit on input and validates submissions to prevent empty task creation.
- **Strike-Through Completion:** Mark tasks as completed using interactive checkboxes styled with modern parent-state selectors.
- **Key-Bound Deletion:** Delete individual tasks accurately using closures and bound keys to update both the DOM and `localStorage`.
- **Clear All Shortcut:** Wipes all active tasks and resets internal storage counters instantly using a double-click shortcut on the **Clear** button.
- **Word-Break Protection:** Automatically wraps long continuous strings to keep task cards neatly contained on mobile devices.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic document layout and form attributes (`maxlength`, `autofocus`).
- **CSS3:** Flexbox positioning, custom theme variables (`:root`), word-wrapping rules, and modern `:has()` parent selectors.
- **JavaScript (ES6):** Dynamic DOM manipulation, closure scope key binding, real-time input event listeners, and `localStorage` API.
- **Font Awesome:** Minimalist vector icon graphics.

---

## 📖 How to Use

1. Type your task inside the auto-focused text input box (up to 100 characters).
2. Watch the live character counter track your input length in real time.
3. Press **+ Add** or hit **Enter** to add the task to your list.
4. Check the checkbox next to a task to toggle strike-through completion.
5. Click the **Trash Icon** on any item to delete that specific task.
6. **Double-click** the **Clear** button to wipe all saved tasks from storage and reset the character counter.

---

## 📁 Project Structure

```text
TaskX/
├── index.html     # Semantic HTML layout and container setup
├── style.css      # Theme variables, flexbox grid, and element styles
├── app.js         # DOM manipulation, event listeners, and localStorage logic
└── README.md      # Comprehensive project documentation
```
---

## 💻 How to Run Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/UzairSuriya/taskx.git](https://github.com/UzairSuriya/taskx.git)
   
2. **Open the Application:**
   - Simply double-click `index.html` to open it directly in any modern standard web browser.
