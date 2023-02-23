Thank you for taking the time to work on our assignment.

## Introduction

The goal of this assignment is for us to get a better idea of your ability while not taking too much of your time.

## Requirements

We like programmers who are curious and comfortable with new technology. We'd love for you to use the new Next.js app directory. But if you feel more comfortable with the traditional pages structure then go for it! In case you do not have enough time feel free to skip parts of the assignment.

The criteria on which you are judged:

1. The simplicity and structure of your state
2. How well you use the Next.js features such as SSR
3. Readability of your code
4. Performance for the user
5. How well you use components
6. Selection of your libraries and frameworks

Bonus points for a beautiful application.

## Assignment

#### 1. Auth

Use the `/api/auth` endpoint to authenticate and show us how you keep the authentication state throughout the frontend. The correct username and password is admin/admin.

**Parameters**
| Name | Required| Type |
| --- | ------ |----------|
| username | Required | String |
| password | Required | String |

**Response**

```json
{
  "auth": true || false
}
```

#### 2. Create

Create a page with a form that is only accessible by authenticated users. Use the `/api/create` endpoint to create a new object with the following validated attributes:

1. Name, should have at least 2 characters and no more than 1000.
2. Password, should have at least a number, a special character, and be more than 8 characters long.
3. A valid vietnamese phone number
4. An email address

**Parameters**
| Name | Required| Type |
| --- | ------ |----------|
| name | Required | String |
| password | Required | String |
| phone | Required | String |
| email | Required | String |

**Response**

```json
{
  "success": true || false
}
```

#### 3. View

Create a page where only authenticated users can see a paginated table with the return data. Get the data from `/api/view`

**Parameters**
| Name | Required| Type |
| --- | ------ |----------|
| offset | Required | String |
| limit | Required | String |

**Response**

```json
{
  "total": 205,
  "limit": 2,
  "offset": 10,
  "data": [
    {
      "id": "63f2f7f75a9c799b30c04ce0",
      "name": "Lena Woodward",
      "email": "lenawoodward@earthwax.com",
      "phone": "+84 (968) 510-2748"
    },
    {
      "id": "63f2f7f77fc65f4eae54cbd0",
      "name": "Petersen Jacobson",
      "email": "petersenjacobson@earthwax.com",
      "phone": "+84 (812) 589-2242"
    }
  ]
}
```

### note

I like to discover new technologies and open source and this is a good chance to learn a new one,
so I try to use NextUI which I've never used before as a UI lib for this test.
Also, because the test includes some validations, I will use Formik to handle stuff relate to form.
All the things above are new for me, so its really a challenge to integrate them all and make it work well
I will use a little bit comments in this test to show you what do I think and do.

Well I have not approached Next13 yet so some new features like server component confuse me.
After implement the NextUI lib, I realize that its just beta. So its took me a bit time to research and combine it all
