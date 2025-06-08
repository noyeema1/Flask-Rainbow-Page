# Happy Pride Month! - Dynamic Rainbow Page

![Screenshot of the app](https://via.placeholder.com/600x400?text=Screenshot+of+Your+App)
*Replace this placeholder image link with an actual screenshot or GIF of your running application!*

## 🌈 Project Description

This is a simple yet vibrant Flask web application created to celebrate Pride Month! It features an interactive, dynamic web page that changes its entire background color to a random rainbow hue with a single click. The "Happy Pride Month" text intelligently adjusts its color to maintain optimal contrast against the changing background, ensuring readability and visual appeal. An "Exit" button is also provided to quickly reset the page to a clean white background.

## ✨ Features

* **Dynamic Full-Page Background:** Click the central button to instantly change the entire webpage's background to a random color from the rainbow spectrum.
* **Smart Text Color Contrast:** The "Happy Pride Month" text automatically switches between black and white to ensure it's always readable against the current background color.
* **Circular Interactive Button:** A large, visually appealing circular button for triggering the color change.
* **Reset Functionality:** An "Exit" button conveniently located in the bottom-right corner to revert the page background to white.
* **Responsive Design:** (Optional, but if your page looks good on mobile, add this) The layout adapts reasonably well to different screen sizes.

## 🚀 Technologies Used

* **Python:** The core language for the Flask backend.
* **Flask:** A lightweight web framework for the web server.
* **HTML5:** For structuring the web page content.
* **CSS3:** For styling and layout (button shape, positioning, text appearance).
* **JavaScript (ES6+):** For interactive elements, random color generation, and dynamic text color adjustment.

## 💻 Setup and Local Installation

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

* Python 3.x installed on your system.
* `pip` (Python package installer).

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/noyeeema1/Flask-Rainbow-Page.git](https://github.com/noyeeema1/Flask-Rainbow-Page.git)
    ```
    (Make sure to replace `noyeeema1` with your actual GitHub username if it's different in the future, although your current URL is correct.)

2.  **Navigate into the project directory:**
    ```bash
    cd Flask-Rainbow-Page
    ```

3.  **Create and activate a virtual environment:**
    It's good practice to use a virtual environment to manage project dependencies.
    ```bash
    python -m venv venv
    ```
    * **On Windows:**
        ```bash
        .\venv\Scripts\activate
        ```
    * **On macOS/Linux:**
        ```bash
        source venv/bin/activate
        ```

4.  **Install the required dependencies:**
    ```bash
    pip install Flask
    ```
    *(Optional: You can also create a `requirements.txt` file by running `pip freeze > requirements.txt` and then use `pip install -r requirements.txt`)*

5.  **Run the Flask application:**
    ```bash
    python app.py
    ```

## 🌐 Usage

Once the Flask application is running, open your web browser and navigate to:

`http://127.0.0.1:5000/`

* Click the **"Click Me"** button in the center to change the page's background color.
* Click the **"Exit"** button in the bottom-right corner to reset the background to white.

## 📸 Screenshot

*(You can replace the placeholder image link at the top with a real screenshot. To take a screenshot on Windows, use the Snipping Tool or `Windows Key + Shift + S`. On Mac, use `Command + Shift + 4`.)*

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---