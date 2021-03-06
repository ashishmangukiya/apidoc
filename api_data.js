define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/market/create",
    "title": "Create product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>productName of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productDescription",
            "description": "<p>description of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productPrice",
            "description": "<p>price of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"product Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"productName\": \"String\",\n            \t\t\t\"productPrice\": \"Number\",\n            \t\t\t\"productReviews\":object(type=array),\n            \t\t\t\"productRatings\": \"Number\",\n            \t\t\t\"productFeatures\":object(type=array),\n            \t\t\t\"extraDiscount\": \"Number\",\n            \t\t\t\"productDimentions\": \"String\",\n            \t\t\t\"productServices\":object(type=array),\n            \t\t\t\"productBrand\": \"String\",\n            \t\t\t\"offers\":object(type=array),\n            \t\t\t\"productColors\":object(type=array),\n            \t\t\t\"productDescription\": \"String\",\n            \t\t\t\"productWarranty\": \"String\",\n            \t\t\t\"addToCart\": \"Number\",\n            \t\t\t\"productHighlights\":object(type=array),\n            \t\t\t\"productId\": \"String\",\n            \t\t\t\"addedTime\": \"date\"\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routeMarket.js",
    "groupTitle": "create",
    "name": "PostApiV1MarketCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/market/delete/:productId",
    "title": "Delete product by productId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"product Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routeMarket.js",
    "groupTitle": "delete",
    "name": "PostApiV1MarketDeleteProductid"
  },
  {
    "type": "put",
    "url": "/api/v1/market/edit/:productId",
    "title": "Edit product by productId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"product Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"productName\": \"String\",\n            \t\t\t\"productPrice\": \"Number\",\n            \t\t\t\"productReviews\":object(type=array),\n            \t\t\t\"productRatings\": \"Number\",\n            \t\t\t\"productFeatures\":object(type=array),\n            \t\t\t\"extraDiscount\": \"Number\",\n            \t\t\t\"productDimentions\": \"String\",\n            \t\t\t\"productServices\":object(type=array),\n            \t\t\t\"productBrand\": \"String\",\n            \t\t\t\"offers\":object(type=array),\n            \t\t\t\"productColors\":object(type=array),\n            \t\t\t\"productDescription\": \"String\",\n            \t\t\t\"productWarranty\": \"String\",\n            \t\t\t\"addToCart\": \"Number\",\n            \t\t\t\"productHighlights\":object(type=array),\n            \t\t\t\"productId\": \"String\",\n            \t\t\t\"addedTime\": \"date\"\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routeMarket.js",
    "groupTitle": "edit",
    "name": "PutApiV1MarketEditProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/market/view/all",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All products Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"productName\": \"String\",\n            \t\t\t\"productPrice\": \"Number\",\n            \t\t\t\"productReviews\":object(type=array),\n            \t\t\t\"productRatings\": \"Number\",\n            \t\t\t\"productFeatures\":object(type=array),\n            \t\t\t\"extraDiscount\": \"Number\",\n            \t\t\t\"productDimentions\": \"String\",\n            \t\t\t\"productServices\":object(type=array),\n            \t\t\t\"productBrand\": \"String\",\n            \t\t\t\"offers\":object(type=array),\n            \t\t\t\"productColors\":object(type=array),\n            \t\t\t\"productDescription\": \"String\",\n            \t\t\t\"productWarranty\": \"String\",\n            \t\t\t\"addToCart\": \"Number\",\n            \t\t\t\"productHighlights\":object(type=array),\n            \t\t\t\"productId\": \"String\",\n            \t\t\t\"addedTime\": \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routeMarket.js",
    "groupTitle": "read",
    "name": "GetApiV1MarketViewAll"
  },
  {
    "type": "get",
    "url": "/api/v1/market/view/:productId",
    "title": "Get a single product",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"product Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\t_id: \"string\",\n\t\t\t\t\t__v: \"number\",\n\t\t\t\t\t\"productName\": \"String\",\n            \t\t\"productPrice\": \"Number\",\n            \t\t\"productReviews\":object(type=array),\n            \t\t\"productRatings\": \"Number\",\n        \t\t\t\"productFeatures\":object(type=array),\n        \t\t\t\"extraDiscount\": \"Number\",\n        \t\t\t\"productDimentions\": \"String\",\n            \t\t\"productServices\":object(type=array),\n            \t\t\"productBrand\": \"String\",\n        \t\t\t\"offers\":object(type=array),\n        \t\t\t\"productColors\":object(type=array),\n           \t\t\t\"productDescription\": \"String\",\n           \t\t\t\"productWarranty\": \"String\",\n           \t\t\t\"addToCart\": \"Number\",\n           \t\t\t\"productHighlights\":object(type=array),\n\t\t\t\t\t\"productId\": \"String\",\n           \t\t\t\"addedTime\": \"date\"\n\t\t\t\t\t\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routeMarket.js",
    "groupTitle": "read",
    "name": "GetApiV1MarketViewProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/market/addToCart/:productId",
    "title": "add product into cart",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"product Updated Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"productName\": \"String\",\n            \t\t\t\"productPrice\": \"Number\",\n            \t\t\t\"productReviews\":object(type=array),\n            \t\t\t\"productRatings\": \"Number\",\n            \t\t\t\"productFeatures\":object(type=array),\n            \t\t\t\"extraDiscount\": \"Number\",\n            \t\t\t\"productDimentions\": \"String\",\n            \t\t\t\"productServices\":object(type=array),\n            \t\t\t\"productBrand\": \"String\",\n            \t\t\t\"offers\":object(type=array),\n            \t\t\t\"productColors\":object(type=array),\n            \t\t\t\"productDescription\": \"String\",\n            \t\t\t\"productWarranty\": \"String\",\n            \t\t\t\"addToCart\": \"Number\",\n            \t\t\t\"productHighlights\":object(type=array),\n            \t\t\t\"productId\": \"String\",\n            \t\t\t\"addedTime\": \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routeMarket.js",
    "groupTitle": "update",
    "name": "GetApiV1MarketAddtocartProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/market/deleteFromCart/:productId",
    "title": "remove product from cart",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"product Updated Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"productName\": \"String\",\n            \t\t\t\"productPrice\": \"Number\",\n            \t\t\t\"productReviews\":object(type=array),\n            \t\t\t\"productRatings\": \"Number\",\n            \t\t\t\"productFeatures\":object(type=array),\n            \t\t\t\"extraDiscount\": \"Number\",\n            \t\t\t\"productDimentions\": \"String\",\n            \t\t\t\"productServices\":object(type=array),\n            \t\t\t\"productBrand\": \"String\",\n            \t\t\t\"offers\":object(type=array),\n            \t\t\t\"productColors\":object(type=array),\n            \t\t\t\"productDescription\": \"String\",\n            \t\t\t\"productWarranty\": \"String\",\n            \t\t\t\"addToCart\": \"Number\",\n            \t\t\t\"productHighlights\":object(type=array),\n            \t\t\t\"productId\": \"String\",\n            \t\t\t\"addedTime\": \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routeMarket.js",
    "groupTitle": "update",
    "name": "GetApiV1MarketDeletefromcartProductid"
  }
] });
