# Utilisez une image de base Node.js
FROM node:18 AS build

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json (ou yarn.lock) dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste du code dans le conteneur
COPY . .

# Construisez le projet
RUN npm run build

# Utilisez une image de base Nginx pour servir les fichiers statiques
FROM nginx:alpine

# Copiez les fichiers construits depuis l'étape de build
COPY --from=build /app/dist /usr/share/nginx/html

# Exposez le port sur lequel Nginx sera en écoute
EXPOSE 80

# Commande pour démarrer Nginx en mode avant-garde
CMD ["nginx", "-g", "daemon off;"]
