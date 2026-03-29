# Simple Backend API

Mashruucan waa backend yar oo lagu dhisay `Express.js`. Waxa uu leeyahay 3 qaybood oo waaweyn:

- `User`
- `Post`
- `Comment`

Qayb kasta waxay leedahay 3 endpoint oo kala ah:

- `Add`
- `Edit`
- `Delete`

Mashruucan wuxuu ku habboon yahay assignment ama practice fudud, sababtoo ah code-ku waa sahlan yahay oo si toos ah ayaa loo fahmi karaa.

## Teknolojiyada la isticmaalay

- `Node.js`
- `Express.js`
- `Nodemon`

## Sida loo rakibo loona ordo

Marka hore dependencies-ka waa in ay ku rakiban yihiin. Kadib waxaad ku ordi kartaa:

```bash
npm start
```

Haddii aad rabto development mode:

```bash
npm run dev
```

Server-ku wuxuu ku shaqaynayaa:

```bash
http://localhost:3000
```

Markaad furto route-ka `/` waxaad heli doontaa fariintan:

```text
Simple API is running
```

## Qaabka xogta

Mashruucan database ma isticmaalayo. Xogta waxaa lagu hayaa xasuusta server-ka dhexdiisa:

- `users`
- `posts`
- `comments`

Taasi waxay ka dhigan tahay haddii server-ka la damiyo ama dib loo shido, xogtii hore way tirmaysaa.

## Endpoints-ka User

### 1. Add User

- `POST /users`

Body:

```json
{
  "name": "Ali",
  "email": "ali@gmail.com"
}
```

Shaqadiisa:
User cusub ayuu abuuraa, kadibna wuxuu siinayaa `id`.

### 2. Edit User

- `PUT /users/:id`

Tusaale:

```json
{
  "name": "Ali Hassan",
  "email": "alihassan@gmail.com"
}
```

Shaqadiisa:
Wuxuu update-gareeyaa user-ka id-ga lagu siiyay.

### 3. Delete User

- `DELETE /users/:id`

Shaqadiisa:
Wuxuu tirtiraa user-ka la doonayo haddii la helo.

## Endpoints-ka Post

### 1. Add Post

- `POST /posts`

Body:

```json
{
  "title": "Post-kayga",
  "content": "Tani waa content-ka post-ka"
}
```

Shaqadiisa:
Wuxuu abuuraa post cusub oo leh `id`, `title`, iyo `content`.

### 2. Edit Post

- `PUT /posts/:id`

Tusaale:

```json
{
  "title": "Post cusub",
  "content": "Content-ka waa la badalay"
}
```

Shaqadiisa:
Wuxuu beddelaa post-ka la helay.

### 3. Delete Post

- `DELETE /posts/:id`

Shaqadiisa:
Wuxuu tirtiraa post-kaas haddii uu jiro.

## Endpoints-ka Comment

### 1. Add Comment

- `POST /comments`

Body:

```json
{
  "postId": 1,
  "text": "Waa comment fiican"
}
```

Shaqadiisa:
Wuxuu abuuraa comment cusub oo ku xiran `postId`.

### 2. Edit Comment

- `PUT /comments/:id`

Tusaale:

```json
{
  "postId": 1,
  "text": "Comment-ka waa la update-gareeyay"
}
```

Shaqadiisa:
Wuxuu wax ka beddelaa comment-ka id-ga lagu siiyay.

### 3. Delete Comment

- `DELETE /comments/:id`

Shaqadiisa:
Wuxuu tirtiraa comment-ka haddii la helo.

## Response-yada muhiimka ah

Haddii xog sax ah la diro:

- `201 Created` marka wax cusub la daro
- `200 OK` marka wax la update-gareeyo ama la delete-gareeyo

Haddii xog maqan tahay:

- `400 Bad Request`

Haddii `id` la diray aan la helin:

- `404 Not Found`

## Fikrad guud oo ku saabsan code-ka

Code-ku wuxuu sameynayaa waxyaabahan:

- Wuxuu sameeyaa server `Express`
- Wuxuu adeegsadaa `express.json()` si uu u akhriyo JSON body
- Wuxuu sameeyaa 3 arrays oo lagu kaydiyo `users`, `posts`, iyo `comments`
- Wuxuu isticmaalaa `id` kor u kacaya si item kasta loo kala saaro
- Wuxuu leeyahay routes fudud oo lagu daro, lagu beddelo, laguna tirtiro xogta

## Gunaanad

Mashruucani waa backend simple ah oo si sahlan loo fahmi karo. Haddii aad rabto inaad sii hormariso, waxaad ku dari kartaa:

- `GET` endpoints
- database sida `MongoDB` ama `MySQL`
- `validation` dheeraad ah
- kala saarid routes iyo controllers
