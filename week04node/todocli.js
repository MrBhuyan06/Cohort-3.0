// Filesystem based todo list.

// Create a `cli` that lets a user

// 1. Add a todo
// 2. Delete a todo
// 3. Mark a todo as done

// Store all the data in files (todos.json)

const { Command } = require("commander"); // Command-line interface
const fs = require("fs"); // File system module
const { v4 } = require("uuid"); // Unique ID generator
const program = new Command(); // Initialize Command

program.name("Todo").description("A simple todo list").version("1.0.0"); // Define app description and version

// Initialize empty todo list (default structure if JSON is empty)
let todoList = {
  todos: [],
};

// ------------------ AddTodo Command ------------------
program
  .command("AddTodo")
  .description("Add a todo")
  .argument("<Todo> ", "Please pass the todo item") // Argument for the todo task
  .action((todo) => {
    // Step 1: Read the existing todo.json file
    fs.readFile("./todo.json", "utf8", (err, data) => {
      if (err && err.code === "ENOENT") {
        // If the file does not exist
        console.log("No such file is created");
      } else if (err) {
        // Handle any other errors during file reading
        console.log("Error in reading Todo");
        return;
      }

      // Step 2: Parse the existing file if valid
      else {
        if (data.trim()) {
          try {
            todoList = JSON.parse(data); // Parse JSON data into todoList
          } catch (error) {
            console.log("Invalid JSON format in todo.json");
            return;
          }
        }
      }

      // Step 3: Add the new todo item with a unique ID and default `completed` status
      todoList.todos.push({ task: todo, id: v4(), comppleted: false });

      // Step 4: Write the updated list back to todo.json
      fs.writeFile("./todo.json", JSON.stringify(todoList, null, 2), (err) => {
        if (err) {
          console.log("Error writing to todo.json");
        } else {
          console.log(`Added todo: ${todo}`);
        }
      });
    });
  });

// ------------------ DeleteTodo Command ------------------
program
  .command("DeleteTodo")
  .description("Delete a todo by ID")
  .argument("<TodoID> ", "Please pass the todo ID") // Argument for the todo ID
  .action((id) => {
    // Step 1: Read the existing todo.json file
    fs.readFile("./todo.json", "utf8", (err, data) => {
      if (err && err.code === "ENOENT") {
        // If the file does not exist
        console.log("No such file is created");
      } else if (err) {
        // Handle any other errors during file reading
        console.log("Error in reading Todo");
        return;
      }

      // Step 2: Parse the existing file if valid
      if (data.trim()) {
        try {
          todoList = JSON.parse(data); // Parse JSON data into todoList
        } catch (error) {
          console.log("Invalid JSON format in todo.json");
          return;
        }
      }

      // Step 3: Filter out the todo item by its ID
      todoList.todos = todoList.todos.filter((todo) => todo.id !== id);

      // Step 4: Write the updated list back to todo.json
      fs.writeFile("./todo.json", JSON.stringify(todoList, null, 2), (err) => {
        if (err) {
          console.log("Error writing to todo.json");
        } else {
          console.log(`Deleted todo successfully: ${id}`);
        }
      });
    });
  });

// ------------------ MarkDone Command ------------------
program
  .command("MarkDone")
  .description("Mark a todo as completed/uncompleted by ID")
  .argument("<TodoID> ", "Please pass the todo ID") // Argument for the todo ID
  .action((id) => {
    // Step 1: Read the existing todo.json file
    fs.readFile("./todo.json", "utf8", (err, data) => {
      if (err && err.code === "ENOENT") {
        // If the file does not exist
        console.log("No such file is created");
      } else if (err) {
        // Handle any other errors during file reading
        console.log("Error in reading Todo");
        return;
      }

      // Step 2: Parse the existing file if valid
      if (data.trim()) {
        try {
          todoList = JSON.parse(data); // Parse JSON data into todoList
        } catch (error) {
          console.log("Invalid JSON format in todo.json");
          return;
        }
      }

      // Step 3: Toggle the "completed" status of the todo item by its ID
      todoList.todos = todoList.todos.map((todo) =>
        todo.id === id ? { ...todo, comppleted: !todo.comppleted } : todo
      );

      // Step 4: Write the updated list back to todo.json
      fs.writeFile("./todo.json", JSON.stringify(todoList, null, 2), (err) => {
        if (err) {
          console.log("Error writing to todo.json");
        } else {
          console.log(`Updated todo status successfully: ${id}`);
        }
      });
    });
  });

// Parse the command-line arguments
program.parse();
