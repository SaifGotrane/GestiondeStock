# GestionDeStockversion1articlesApi

All URIs are relative to *http://http://localhost:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findAllArticle**](GestionDeStockversion1articlesApi.md#findAllArticle) | **GET** /GestionDeStock/version1article/all | Renvoi la liste des articles


<a name="findAllArticle"></a>
# **findAllArticle**
> kotlin.collections.List&lt;ArticleDto&gt; findAllArticle()

Renvoi la liste des articles

Cette methode permet de chercher et renvoyer la liste des articles qui existent dans la BDD

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = GestionDeStockversion1articlesApi()
try {
    val result : kotlin.collections.List<ArticleDto> = apiInstance.findAllArticle()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling GestionDeStockversion1articlesApi#findAllArticle")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling GestionDeStockversion1articlesApi#findAllArticle")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.collections.List&lt;ArticleDto&gt;**](ArticleDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

