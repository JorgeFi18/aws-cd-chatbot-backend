<p align="center">
    <h1 align="center">AWS-CD-CHATBOT-BACKEND</h1>
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/Socket.io-010101.svg?style=flat&logo=socketdotio&logoColor=white" alt="Socket.io">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
</p>

<br>

##### 🔗 Table of Contents

- [📂 Repository Structure](#-repository-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
    - [🔖 Prerequisites](#-prerequisites)
    - [📦 Installation](#-installation)
    - [🤖 Usage](#-usage)

---


## 📂 Repository Structure

```sh
└── aws-cd-chatbot-backend/
    ├── README.md
    ├── bedrockAgent.js
    ├── config.js
    ├── package-lock.json
    ├── package.json
    ├── server.js
    ├── socket.js
    └── utils.js
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [bedrockAgent.js](https://github.com/JorgeFi18/aws-cd-chatbot-backend/blob/main/bedrockAgent.js) | Enables invoking Bedrock Agent for AI chatbot interactions by sending commands and processing responses. Key features include setting parameters and handling errors during agent invocation. |
| [config.js](https://github.com/JorgeFi18/aws-cd-chatbot-backend/blob/main/config.js) | Defines default settings for the backend server, including ports, AWS credentials, and AI agent parameters. Enables easy configuration for AWS services and AI features within the chatbot application. |
| [socket.js](https://github.com/JorgeFi18/aws-cd-chatbot-backend/blob/main/socket.js) | Handles real-time chat communication between the user and the chatbot. Manages message creation and delivery based on session ID. Logs user and chatbot interactions, triggers appropriate responses, and handles disconnect events. |
| [server.js](https://github.com/JorgeFi18/aws-cd-chatbot-backend/blob/main/server.js) | Initializes an Express server with Socket.io integration, connecting clients to handle a chatbot feature. Implements CORS policies and serves a welcome message. |
| [utils.js](https://github.com/JorgeFi18/aws-cd-chatbot-backend/blob/main/utils.js) | Extracts message chunks and formats responses for chatbot interaction, ensuring a seamless message stream handling within the backend architecture. Complements with a function to create structured chatbot messages. |
| [package.json](https://github.com/JorgeFi18/aws-cd-chatbot-backend/blob/main/package.json) | Enables AWS chatbot backend functionality. Defines dependencies and scripts for server management. Key features include socket communication support, AWS SDK integration, and environment variable management. Essential for running backend server operations seamlessly within the repository architecture. |
| [package-lock.json](https://github.com/JorgeFi18/aws-cd-chatbot-backend/blob/main/package-lock.json) | The `package-lock.json` file in the `aws-cd-chatbot-backend` repository serves as a crucial component for managing dependencies and ensuring consistent builds. It locks down the specific versions of dependencies required for the project, preventing potential inconsistencies between builds. This file plays a vital role in guaranteeing the stability and reproducibility of the projects development environment by recording the exact dependency tree at the time of installation. |

</details>

---

## 🚀 Getting Started

### 🔖 Prerequisites

**JavaScript**: `version 18+`

### 📦 Installation

Build the project from source:

1. Clone the aws-cd-chatbot-backend repository:
```sh
❯ git clone https://github.com/JorgeFi18/aws-cd-chatbot-backend
```

2. Navigate to the project directory:
```sh
❯ cd aws-cd-chatbot-backend
```

3. Install the required dependencies:
```sh
❯ npm install
```

### 🤖 Usage

To run the project, execute the following command:

```sh
❯ npm run dev
```