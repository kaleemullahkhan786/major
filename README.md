# Major Automation Bot

This project automates various interactions on the **Major platform**, including daily check-ins, roulette spins, coin holding, and swiping, as well as Durov puzzle solving. It supports multiple accounts and automatically processes each account’s tasks based on the data provided.

## Project Features

- **Automated Authentication**: Logs into the Major platform using user data.
- **Daily Check-ins**: Automatically checks in each account.
- **Roulette Spins**: Spins the roulette to win stars.
- **Coin Holding**: Holds a random amount of coins to earn more.
- **Coin Swiping**: Swipes coins to increase account balance.
- **Durov Puzzle Solving**: Automatically solves the Durov puzzle with user-provided inputs.
- **Multi-Account Support**: Process multiple accounts listed in `data.txt`.

## Project Structure

Here is an overview of the main project files:

- **`major.js`**: The main script that runs the bot and automates all tasks.
- **`config.js`**: Configuration file that stores various settings for the bot.
- **`durov.json`**: Stores the Durov puzzle choices for each day.
- **`data.txt`**: Contains account login information.
- **`summary.json`**: A summary of the total accounts processed and their balances.
- **`bot.js`**: Optional bot feature for extended functionalities.
- **`package.json`**: Contains metadata about the project and its dependencies.

## Prerequisites

Before running the script, ensure that you have the following installed:

- **Node.js**: Make sure you have Node.js (v12.x or higher) installed.
- **npm**: Node Package Manager for managing dependencies.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/kaleemullahkhan786/major-automation-bot.git
    cd major-automation-bot
    ```

2. **Install dependencies**:
    Run the following command in the project root directory to install required packages:
    ```bash
    npm install
    ```

3. **Set up account data**:
    Add your Major account authentication data into `data.txt`, one per line:
    ```
    account_data_1
    account_data_2
    ```

4. **Set up Durov choices** (Optional):
    If you have Durov puzzle data, add it manually to `durov.json` or enter it during runtime.

## Usage

To start the bot, run the following command in the project root directory:

```bash
node major.js

You will be presented with a menu of options:

1: Add today's Durov puzzle choices.

2: Reset all saved Durov puzzle choices.

3: Start processing accounts listed in data.txt.

4: Exit the script.


Example Commands

Here’s an example flow for adding Durov puzzle choices and starting the bot:

node major.js

Follow the prompts to add your Durov puzzle choices in the format choice1,choice2,choice3,choice4.

How It Works

The bot processes each account and performs the following tasks in sequence:

1. Authentication: Logs into the Major platform using the data provided in data.txt.


2. Daily Check-ins: Automatically checks in each account for the day.


3. Roulette Spins: Spins the roulette to gain stars.


4. Coin Holding & Swiping: Holds and swipes coins to increase balance.


5. Durov Puzzle: Solves the Durov puzzle based on user input.



Contributions

Feel free to submit issues or pull requests to improve the project. Contributions are welcome!

License

This project is licensed under the MIT License. See the LICENSE file for more details.

### How to Use:

1. **Customize the `README.md`** if necessary by adding more details specific to your usage or personal preferences.
2. **Push your project** to GitHub along with this `README.md` file.
