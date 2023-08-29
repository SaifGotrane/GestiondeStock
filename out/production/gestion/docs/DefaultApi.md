# DefaultApi

All URIs are relative to *http://http://localhost:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changerMotDePasseUser**](DefaultApi.md#changerMotDePasseUser) | **POST** /GestionDeStock/version1/utilisateurs/update/password | 
[**deleteArticle**](DefaultApi.md#deleteArticle) | **DELETE** /GestionDeStock/version1article/delete/{idArticle} | Supprimer un article
[**deleteDepot**](DefaultApi.md#deleteDepot) | **DELETE** /GestionDeStock/version1/categories/delete/{idCategory} | 
[**deleteUser**](DefaultApi.md#deleteUser) | **DELETE** /GestionDeStock/version1/utilisateurs/delete/{idUtilisateur} | 
[**findAllCat**](DefaultApi.md#findAllCat) | **GET** /GestionDeStock/version1/categories/all | 
[**findAllDepot**](DefaultApi.md#findAllDepot) | **GET** /GestionDeStock/version1/Depots/all | 
[**findAllUser**](DefaultApi.md#findAllUser) | **GET** /GestionDeStock/version1/utilisateurs/all | 
[**findByCodeArticle**](DefaultApi.md#findByCodeArticle) | **GET** /GestionDeStock/version1article/{CodeArticle} | Rechercher un article par CODE
[**findByCodeCat**](DefaultApi.md#findByCodeCat) | **GET** /GestionDeStock/version1/categories/filter/{codeCategory} | 
[**findByCodeDepot**](DefaultApi.md#findByCodeDepot) | **GET** /GestionDeStock/version1/Depots/filter/{NomDepot} | 
[**findByEmailUser**](DefaultApi.md#findByEmailUser) | **GET** /GestionDeStock/version1/utilisateurs/find/{email} | 
[**findByIdArticle**](DefaultApi.md#findByIdArticle) | **GET** /GestionDeStock/version1article/{idArticle} | Rechercher un article par ID
[**findByIdCat**](DefaultApi.md#findByIdCat) | **GET** /GestionDeStock/version1/categories/{idCategory} | 
[**findByIdDepot**](DefaultApi.md#findByIdDepot) | **GET** /GestionDeStock/version1/Depots/{idDepot} | 
[**findByIdUser**](DefaultApi.md#findByIdUser) | **GET** /GestionDeStock/version1/utilisateurs/{idUtilisateur} | 
[**home**](DefaultApi.md#home) | **GET** / | 
[**saveArticle**](DefaultApi.md#saveArticle) | **POST** /GestionDeStock/version1/article/creat | Enregistrer un article
[**saveCat**](DefaultApi.md#saveCat) | **POST** /GestionDeStock/version1/categories/create | 
[**saveDepot**](DefaultApi.md#saveDepot) | **POST** /GestionDeStock/version1/Depots/create | 
[**saveUser**](DefaultApi.md#saveUser) | **POST** /GestionDeStock/version1/utilisateurs/create | 
[**secured**](DefaultApi.md#secured) | **GET** /secured | 
[**updateCat**](DefaultApi.md#updateCat) | **PUT** /GestionDeStock/version1/categories/update/{id} | 


<a name="changerMotDePasseUser"></a>
# **changerMotDePasseUser**
> UtilisateurDto changerMotDePasseUser()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
try {
    val result : UtilisateurDto = apiInstance.changerMotDePasseUser()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#changerMotDePasseUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#changerMotDePasseUser")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UtilisateurDto**](UtilisateurDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteArticle"></a>
# **deleteArticle**
> deleteArticle(idArticle)

Supprimer un article

Cette methode permet de supprimer un article par ID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val idArticle : kotlin.Int = 56 // kotlin.Int | 
try {
    apiInstance.deleteArticle(idArticle)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#deleteArticle")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#deleteArticle")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idArticle** | **kotlin.Int**|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteDepot"></a>
# **deleteDepot**
> deleteDepot(idCategory)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val idCategory : kotlin.Int = 56 // kotlin.Int | 
try {
    apiInstance.deleteDepot(idCategory)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#deleteDepot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#deleteDepot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idCategory** | **kotlin.Int**|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(idUtilisateur)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val idUtilisateur : kotlin.Int = 56 // kotlin.Int | 
try {
    apiInstance.deleteUser(idUtilisateur)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#deleteUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#deleteUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idUtilisateur** | **kotlin.Int**|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="findAllCat"></a>
# **findAllCat**
> kotlin.collections.List&lt;CategoryDto&gt; findAllCat()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
try {
    val result : kotlin.collections.List<CategoryDto> = apiInstance.findAllCat()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#findAllCat")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#findAllCat")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;CategoryDto&gt;**](CategoryDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findAllDepot"></a>
# **findAllDepot**
> kotlin.collections.List&lt;DepotDto&gt; findAllDepot()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
try {
    val result : kotlin.collections.List<DepotDto> = apiInstance.findAllDepot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#findAllDepot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#findAllDepot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;DepotDto&gt;**](DepotDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findAllUser"></a>
# **findAllUser**
> kotlin.collections.List&lt;UtilisateurDto&gt; findAllUser()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
try {
    val result : kotlin.collections.List<UtilisateurDto> = apiInstance.findAllUser()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#findAllUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#findAllUser")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;UtilisateurDto&gt;**](UtilisateurDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="findByCodeArticle"></a>
# **findByCodeArticle**
> ArticleDto findByCodeArticle(codeArticle)

Rechercher un article par CODE

Cette methode permet de chercher un article par son CODE

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val codeArticle : kotlin.String = codeArticle_example // kotlin.String | 
try {
    val result : ArticleDto = apiInstance.findByCodeArticle(codeArticle)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#findByCodeArticle")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#findByCodeArticle")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeArticle** | **kotlin.String**|  |

### Return type

[**ArticleDto**](ArticleDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findByCodeCat"></a>
# **findByCodeCat**
> CategoryDto findByCodeCat(codeCategory)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val codeCategory : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : CategoryDto = apiInstance.findByCodeCat(codeCategory)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#findByCodeCat")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#findByCodeCat")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codeCategory** | **kotlin.Int**|  |

### Return type

[**CategoryDto**](CategoryDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findByCodeDepot"></a>
# **findByCodeDepot**
> DepotDto findByCodeDepot(nomDepot)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val nomDepot : kotlin.String = nomDepot_example // kotlin.String | 
try {
    val result : DepotDto = apiInstance.findByCodeDepot(nomDepot)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#findByCodeDepot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#findByCodeDepot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nomDepot** | **kotlin.String**|  |

### Return type

[**DepotDto**](DepotDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findByEmailUser"></a>
# **findByEmailUser**
> UtilisateurDto findByEmailUser(email)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val email : kotlin.String = email_example // kotlin.String | 
try {
    val result : UtilisateurDto = apiInstance.findByEmailUser(email)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#findByEmailUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#findByEmailUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **kotlin.String**|  |

### Return type

[**UtilisateurDto**](UtilisateurDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="findByIdArticle"></a>
# **findByIdArticle**
> ArticleDto findByIdArticle(idArticle)

Rechercher un article par ID

Cette methode permet de chercher un article par son ID

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val idArticle : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : ArticleDto = apiInstance.findByIdArticle(idArticle)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#findByIdArticle")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#findByIdArticle")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idArticle** | **kotlin.Int**|  |

### Return type

[**ArticleDto**](ArticleDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findByIdCat"></a>
# **findByIdCat**
> CategoryDto findByIdCat(idCategory)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val idCategory : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : CategoryDto = apiInstance.findByIdCat(idCategory)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#findByIdCat")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#findByIdCat")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idCategory** | **kotlin.Int**|  |

### Return type

[**CategoryDto**](CategoryDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findByIdDepot"></a>
# **findByIdDepot**
> DepotDto findByIdDepot(idDepot)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val idDepot : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : DepotDto = apiInstance.findByIdDepot(idDepot)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#findByIdDepot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#findByIdDepot")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idDepot** | **kotlin.Int**|  |

### Return type

[**DepotDto**](DepotDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="findByIdUser"></a>
# **findByIdUser**
> UtilisateurDto findByIdUser(idUtilisateur)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val idUtilisateur : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : UtilisateurDto = apiInstance.findByIdUser(idUtilisateur)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#findByIdUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#findByIdUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idUtilisateur** | **kotlin.Int**|  |

### Return type

[**UtilisateurDto**](UtilisateurDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="home"></a>
# **home**
> kotlin.String home()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
try {
    val result : kotlin.String = apiInstance.home()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#home")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#home")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="saveArticle"></a>
# **saveArticle**
> ArticleDto saveArticle()

Enregistrer un article

Cette methode permet d&#39;enregistrer ou modifier un article

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
try {
    val result : ArticleDto = apiInstance.saveArticle()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#saveArticle")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#saveArticle")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ArticleDto**](ArticleDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="saveCat"></a>
# **saveCat**
> CategoryDto saveCat()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
try {
    val result : CategoryDto = apiInstance.saveCat()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#saveCat")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#saveCat")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CategoryDto**](CategoryDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="saveDepot"></a>
# **saveDepot**
> DepotDto saveDepot()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
try {
    val result : DepotDto = apiInstance.saveDepot()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#saveDepot")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#saveDepot")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DepotDto**](DepotDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="saveUser"></a>
# **saveUser**
> kotlin.String saveUser()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
try {
    val result : kotlin.String = apiInstance.saveUser()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#saveUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#saveUser")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="secured"></a>
# **secured**
> kotlin.String secured()



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
try {
    val result : kotlin.String = apiInstance.secured()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#secured")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#secured")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**kotlin.String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateCat"></a>
# **updateCat**
> CategoryDto updateCat(id)



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = DefaultApi()
val id : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : CategoryDto = apiInstance.updateCat(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling DefaultApi#updateCat")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling DefaultApi#updateCat")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.Int**|  |

### Return type

[**CategoryDto**](CategoryDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

