# Application CRUD Librairie
# Réalisation : Moustapha ABDI ALI

## Technologies utilisées
- Backend: Node.js, Express, MongoDB
- Frontend: React, Vite, Bootstrap
- Docker pour la conteneurisation

## Installation

### 1️⃣ Démarrer MongoDB avec Docker
```sh
docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
