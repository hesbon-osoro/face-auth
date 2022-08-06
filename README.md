# Face-Auth

## Technologies
- React
- Vite
- [`FaceIO (fio.js)`](https://faceio.net/getting-started)

## Facial recognition authentication
Facial recognition is one of the latest authentication techniques, and many developers are adopting it these days. Facial recognition reduces the hassle of entering your email-password or any other user credentials to log in to a web application.

The most important thing is that this authentication system is fast and doesn't need any special hardware. You just need a webcam, which almost all devices have nowadays.

Facial recognition technology uses artificial intelligence to map out the unique facial details of a user and store them as a hash (some random numbers and text with no meaning) to reduce privacy-related issues.

Building and deploying an artificial intelligence-based face recognition model from scratch is not easy and can be very costly for indie developers and small startups. So you can use SaaS platforms to do all this heavy-lifting for you. FaceIO and AWS recognition are examples of these type of services you can use in your projects.

In this hands-on project, we are going to use FaceIO APIs to authenticate a user via facial recognition in a React web application. FaceIO gives you an easy way to integrate the authentication system with their fio.js JavaScript library.