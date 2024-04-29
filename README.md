# Site Web E-commerce avec Okta, Spring Boot et Angular

Ce projet est un site web e-commerce permettant aux utilisateurs de parcourir et d'acheter des produits en ligne. Il utilise les technologies suivantes :

- Angular pour le développement du frontend.
- Spring Boot pour le développement du backend.
- Okta pour la gestion de l'authentification et de l'autorisation.

## Fonctionnalités

- **Authentification sécurisée** : Les utilisateurs doivent s'authentifier via Okta pour accéder au site web et effectuer des achats.
- **Parcours des produits** : Les utilisateurs peuvent parcourir les produits disponibles à l'achat.
- **Ajout au panier** : Les utilisateurs peuvent ajouter des produits à leur panier.
- **Passer une commande** : Les utilisateurs peuvent passer une commande en vérifiant les produits dans leur panier.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- Node.js
- Angular CLI
- Java Development Kit (JDK)
- Maven
- Un compte Okta (pour la configuration de l'authentification)

## Installation et exécution

1. **Cloner le repository**


2. **Backend (Spring Boot)** :
- Accédez au dossier backend.
- Configurez les informations d'authentification Okta dans `src/main/resources/application.properties`.
- Exécutez le backend en utilisant Maven :

  ```
  cd backend
  mvn spring-boot:run
  ```

3. **Frontend (Angular)** :
- Accédez au dossier frontend.
- Configurez le fichier `src/app/auth/auth-config.ts` avec les informations d'authentification Okta.
- Exécutez le frontend en utilisant Angular CLI :

  ```
  cd frontend
  ng serve
  ```

4. **Accès au site web** :
- Ouvrez votre navigateur web et accédez à l'URL `http://localhost:4200` pour utiliser le site web e-commerce.

## Configuration Okta

- Créez une application Okta pour l'authentification OIDC.
- Notez les paramètres d'authentification (client ID, client secret, etc.) et configurez-les dans les fichiers appropriés du projet (backend et frontend).

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez ouvrir une issue ou soumettre une demande d'extraction avec vos modifications.


