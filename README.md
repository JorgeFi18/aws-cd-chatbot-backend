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
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
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
    └── utils.js
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [bedrockAgent.js](https://github.com/JorgeFi18/aws-cd-chatbot-backend/blob/main/bedrockAgent.js) | Enables invoking Bedrock agent with specified parameters for AI response retrieval, handling errors appropriately. Key features include client initialization, agent command execution, and response processing. Interacts with AWS SDK and relevant configurations. |
| [config.js](https://github.com/JorgeFi18/aws-cd-chatbot-backend/blob/main/config.js) | Port, origin, AWS region, access keys, and Bedrock agent details like alias ID, max tokens, and temperature. Handles environment variables for flexible deployment and customization. |
| [server.js](https://github.com/JorgeFi18/aws-cd-chatbot-backend/blob/main/server.js) | Enables real-time chat interactions with AWS Bedrock via sockets. Handles user messages, invokes chatbot responses, and notifies on disconnect. Configurations from `config.js` are used for server setup. |
| [utils.js](https://github.com/JorgeFi18/aws-cd-chatbot-backend/blob/main/utils.js) | Combines chatbot response chunks for message processing, ensuring coherent communication flow in the AWS CD Chatbot Backend. Handles various data formats to decode and unify incoming responses for seamless integration with other modules. |
| [package.json](https://github.com/JorgeFi18/aws-cd-chatbot-backend/blob/main/package.json) | Enables seamless deployment of an AWS chatbot backend. Facilitates running, monitoring, and managing the chatbot server script. Manages necessary dependencies and provides development tools for efficient coding and testing. |
| [package-lock.json](https://github.com/JorgeFi18/aws-cd-chatbot-backend/blob/main/package-lock.json) | This `package-lock.json` file in the `aws-cd-chatbot-backend` repository serves a vital role in managing dependencies and ensuring consistent installations across environments. It maintains a record of all necessary packages and their versions to facilitate seamless collaboration and deployment of the chatbot backend application. |

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
❯ node run dev
```