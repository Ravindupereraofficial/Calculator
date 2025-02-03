## **Getting Started**

### **1. Opening the Application**  
- Open your preferred web browser (Chrome, Firefox, Edge, etc.).  
- Navigate to the calculator application’s webpage or open the HTML file locally.

### **2. Input Fields**  
- Locate the designated input fields for number entry.  
- Enter the first number in the **"Number 1"** input field.
- Enter the second number in the **"Number 2"** input field.
- Select an arithmetic operator from the dropdown menu (**+, -, *, /, %**).

### **3. Performing Calculations**  
- Click the **"Calculate"** button to execute the chosen operation.
- The calculated result will be displayed in the output section immediately.

---

## **How It Works**

### **1. Number Input Processing**  
- The application reads the values entered in the input fields.  
- The values are converted into numerical data types to ensure accurate calculations.

### **2. Operator Selection**  
- Users select an arithmetic operation (**+, -, *, /, %**) from a dropdown list.  
- This selection determines the mathematical computation performed.

### **3. Calculation Execution**  
- JavaScript processes the selected operator using a `switch` statement.
- The corresponding operation is applied to the entered numbers.
- The computed result is stored and displayed dynamically.

### **4. Result Display**  
- The final calculation result appears in the **"Answer"** section.
- The displayed result updates each time the user performs a new calculation.

---

## **Troubleshooting & Errors**

### **1. Handling Invalid Inputs**  
- Both input fields must contain valid numerical values to proceed.
- If either input field is empty or contains non-numeric values, an error message appears.
- The application prevents the use of non-numeric characters.

### **2. Division by Zero Prevention**  
- If a user attempts to divide a number by zero (`0`), the application returns `Infinity`.
- A warning message is displayed to notify users about invalid mathematical operations.

### **3. Operator Selection Issues**  
- If no operator is selected or an invalid operation is attempted, an error message appears.
- The console logs error details for debugging purposes.

---

## **Additional Features**

### **1. Console Logging for Debugging**  
- Each calculation logs essential details in the browser console, including:
  - Entered numbers
  - Selected operator
  - Computed result
- Developers can use this log to debug potential issues.

### **2. User-Friendly Output Display**  
- The result is formatted neatly under the **"Answer"** section.
- Visual indicators help users quickly identify calculation results.
- Error messages are styled distinctly to improve user experience.

---

Enjoy using the Calculator Application! 🚀

