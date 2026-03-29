# API Status Codes

File-kan wuxuu si gaar ah u sharxayaa `status` iyo `statusCode` ee ku jira response-yada API-ga.

## Qaabka response-ka

Marka request guuleysto, backend-ku wuxuu soo celiyaa:

```json
{
  "status": "success",
  "statusCode": 200,
  "message": "..."
}
```

Haddii qalad jiro, backend-ku wuxuu soo celiyaa:

```json
{
  "status": "error",
  "statusCode": 400,
  "message": "..."
}
```

## Status codes-ka la isticmaalay

### 200 OK

Waxaa la isticmaalaa marka:

- route-ka `/` la furo
- update uu guuleysto
- delete uu guuleysto

Tusaale:

```json
{
  "status": "success",
  "statusCode": 200,
  "message": "User updated successfully"
}
```

### 201 Created

Waxaa la isticmaalaa marka xog cusub lagu daro:

- user cusub
- post cusub
- comment cusub

Tusaale:

```json
{
  "status": "success",
  "statusCode": 201,
  "message": "Post added successfully"
}
```

### 400 Bad Request

Waxaa la isticmaalaa marka body-ga request-ka uu ka maqan yahay xog muhiim ah.

Tusaale:

```json
{
  "status": "error",
  "statusCode": 400,
  "message": "name and email are required"
}
```

### 404 Not Found

Waxaa la isticmaalaa marka `id` la diray aan lagu helin item-ka la raadinayo.

Tusaale:

```json
{
  "status": "error",
  "statusCode": 404,
  "message": "Comment not found"
}
```

## Gunaanad

API-gani wuxuu adeegsadaa status codes fudud oo caadi ah, si response-yadu u noqdaan kuwo sahlan oo la fahmi karo.
