# Project Name

Brief description or overview of your project.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Configuration](#configuration)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

List key features or functionalities of your project.

## Prerequisites

Specify any prerequisites or dependencies that need to be installed or configured before running the project.

- Node.js & NPM
- MongoDB
- Other dependencies...

## Installation

Provide step-by-step instructions on how to install and set up your project locally.

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/your_project.git
   cd your_project

2. Install Dependencies

  ```npm install

3. Set up environment variables
  ```Create a .env file in the root directory and add the following:

  PORT=5000
  MONGO_URI=mongodb://localhost:27017/your_database_name
  OTHER_ENV_VARIABLE=value

4. Usage
Explain how to start and use the application.

```npm start
The application will start on http://localhost:5000 by default.

5. Endpoints
Document the API endpoints and their functionalities. Provide examples if possible.

GET /api/users: Fetch all users.
POST /api/users: Create a new user.


6. Testing
Provide instructions on how to run tests, if applicable.

npm test

7. Deployment
Guidelines for deploying the application to a live system.

8. Contributing
Guidelines for contributing to the project. Include information on how to submit issues, pull requests, and code style conventions.

9. License
Specify the project's license (e.g., MIT License). Include any additional terms or copyright notices.

This Markdown template provides a structured and organized format for documenting your

# Mongo DB install 
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -      
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
# Mongo start
sudo systemctl start mongod   
# Mongo status                                                                                               
sudo systemctl status mongod
# Mongo Stop
sudo systemctl stop mongod                                                                                                 


# Data saving and retreiving
curl -X POST http://localhost:5000/api/trackings -H "Content-Type: application/json" -d '{"name": "INDOCHINE INTERNATIONAL TRADING CO.,LTD.", "maccNo": 278509066, "blNo": "238927551", "selectivelyNo": 2, "noOfPackages": 3, "place": "Yangon", "itemStatus": 0, "status": 0, "created_by": "khin", "created_date": "2024-05-12", "updated_by": "khin", "updated_date": "2024-05-12"  }'         
curl http://localhost:5000/api/trackings   

  name: { type: String, required: true },
  maccNo: { type: Number, required: true },
  blNo: { type: Number, required: true },
  selectivelyNo: { type: Number, required: true},
  noOfPackages: { type: Number, required: true},
  place: { type: String, required: true},
  itemStatus: { type: Number, required: true}, 
  status: { type: Number, required: true},
  created_by: { type: String, required: true},
  updated_date: { type: Date, required: true},
  updated_by: { type: String, required: true},
  updated_date: { type: Date, required: true}

# Docker compose up/down/build

docker-compose up --build
docker-compose down