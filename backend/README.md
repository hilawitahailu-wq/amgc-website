# AMGC Backend CMS API

This folder contains the Express + MongoDB backend for the AMGC admin dashboard.

## Setup

1. `cd backend`
2. `npm install`
3. Copy `.env.example` to `.env`
4. Update `.env` with your MongoDB URI and JWT secret

## Run in development

`npm run dev`

## Available endpoints

- `POST /api/auth/login`
- `POST /api/auth/forgot-password`
- `GET /api/admin/me`
- `GET /api/admin/news`
- `POST /api/admin/news`
- `PUT /api/admin/news/:id`
- `DELETE /api/admin/news/:id`
- Similar CRUD endpoints exist for `projects`, `leadership`, `divisions`, `offices`, `statistics`, `partners`, `downloads`, `careers`, `languages`, `users`, `settings`, `seo`
- `POST /api/admin/upload`

## Notes

- Auth-protected routes require `Authorization: Bearer <token>`
- File uploads store files in `backend/uploads`
- Use `http://localhost:4000` as the API base URL from the frontend
