# org.openapitools.client - Kotlin client library for Gestion de stock API

## Requires

* Kotlin 1.4.30
* Gradle 6.8.3

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in OpenAPI definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://http://localhost:8085*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**changerMotDePasseUser**](docs/DefaultApi.md#changermotdepasseuser) | **POST** /GestionDeStock/version1/utilisateurs/update/password | 
*DefaultApi* | [**deleteArticle**](docs/DefaultApi.md#deletearticle) | **DELETE** /GestionDeStock/version1article/delete/{idArticle} | Supprimer un article
*DefaultApi* | [**deleteDepot**](docs/DefaultApi.md#deletedepot) | **DELETE** /GestionDeStock/version1/categories/delete/{idCategory} | 
*DefaultApi* | [**deleteUser**](docs/DefaultApi.md#deleteuser) | **DELETE** /GestionDeStock/version1/utilisateurs/delete/{idUtilisateur} | 
*DefaultApi* | [**findAllCat**](docs/DefaultApi.md#findallcat) | **GET** /GestionDeStock/version1/categories/all | 
*DefaultApi* | [**findAllDepot**](docs/DefaultApi.md#findalldepot) | **GET** /GestionDeStock/version1/Depots/all | 
*DefaultApi* | [**findAllUser**](docs/DefaultApi.md#findalluser) | **GET** /GestionDeStock/version1/utilisateurs/all | 
*DefaultApi* | [**findByCodeArticle**](docs/DefaultApi.md#findbycodearticle) | **GET** /GestionDeStock/version1article/{CodeArticle} | Rechercher un article par CODE
*DefaultApi* | [**findByCodeCat**](docs/DefaultApi.md#findbycodecat) | **GET** /GestionDeStock/version1/categories/filter/{codeCategory} | 
*DefaultApi* | [**findByCodeDepot**](docs/DefaultApi.md#findbycodedepot) | **GET** /GestionDeStock/version1/Depots/filter/{NomDepot} | 
*DefaultApi* | [**findByEmailUser**](docs/DefaultApi.md#findbyemailuser) | **GET** /GestionDeStock/version1/utilisateurs/find/{email} | 
*DefaultApi* | [**findByIdArticle**](docs/DefaultApi.md#findbyidarticle) | **GET** /GestionDeStock/version1article/{idArticle} | Rechercher un article par ID
*DefaultApi* | [**findByIdCat**](docs/DefaultApi.md#findbyidcat) | **GET** /GestionDeStock/version1/categories/{idCategory} | 
*DefaultApi* | [**findByIdDepot**](docs/DefaultApi.md#findbyiddepot) | **GET** /GestionDeStock/version1/Depots/{idDepot} | 
*DefaultApi* | [**findByIdUser**](docs/DefaultApi.md#findbyiduser) | **GET** /GestionDeStock/version1/utilisateurs/{idUtilisateur} | 
*DefaultApi* | [**home**](docs/DefaultApi.md#home) | **GET** / | 
*DefaultApi* | [**saveArticle**](docs/DefaultApi.md#savearticle) | **POST** /GestionDeStock/version1/article/creat | Enregistrer un article
*DefaultApi* | [**saveCat**](docs/DefaultApi.md#savecat) | **POST** /GestionDeStock/version1/categories/create | 
*DefaultApi* | [**saveDepot**](docs/DefaultApi.md#savedepot) | **POST** /GestionDeStock/version1/Depots/create | 
*DefaultApi* | [**saveUser**](docs/DefaultApi.md#saveuser) | **POST** /GestionDeStock/version1/utilisateurs/create | 
*DefaultApi* | [**secured**](docs/DefaultApi.md#secured) | **GET** /secured | 
*DefaultApi* | [**updateCat**](docs/DefaultApi.md#updatecat) | **PUT** /GestionDeStock/version1/categories/update/{id} | 
*GestionDeStockversion1articlesApi* | [**findAllArticle**](docs/GestionDeStockversion1articlesApi.md#findallarticle) | **GET** /GestionDeStock/version1article/all | Renvoi la liste des articles


<a name="documentation-for-models"></a>
## Documentation for Models

 - [org.openapitools.client.models.AdresseDto](docs/AdresseDto.md)
 - [org.openapitools.client.models.ArticleDto](docs/ArticleDto.md)
 - [org.openapitools.client.models.CategoryDto](docs/CategoryDto.md)
 - [org.openapitools.client.models.DepotDto](docs/DepotDto.md)
 - [org.openapitools.client.models.RolesDto](docs/RolesDto.md)
 - [org.openapitools.client.models.UtilisateurDto](docs/UtilisateurDto.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
