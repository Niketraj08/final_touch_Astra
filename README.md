# AstraCognix Solutions Website

React + Tailwind single-page experience paired with an Express backend for inquiry handling and SQLite persistence.

## Project Structure
- `frontend/`: React (Vite), Tailwind CSS, react-router, Swiper carousel.
- `backend/`: Express API, SQLite storage, Nodemailer for admin alerts.

## Getting Started
1) Install dependencies  
```
cd "AstraCognix Solution Pvt. Ltd. (Website)/backend" && npm install
cd ../frontend && npm install
```

2) Configure environment  
- Copy `backend/env.example` to `backend/env` and adjust values (ports, SMTP, allowed origin, DB path).

3) Run locally  
- Backend: `cd backend && npm run dev` (default http://localhost:5000)  
- Frontend: `cd frontend && npm run dev` (default http://localhost:5173)  
Ensure `CLIENT_ORIGIN` in `env` matches the frontend URL.

## API
- `POST /api/contact`
  - Body: `{ name, email, phone?, company?, description }`
  - Persists to SQLite table `inquiries` and sends an email if SMTP is configured.
- `GET /api/health` for uptime checks.

## Content Updates
- Edit `frontend/src/data/siteContent.js` for services, stats, testimonials, portfolio items, and tech stack.
- Hero/sections: `frontend/src/components/*.jsx`.
- Branding assets: replace `frontend/public/logo.svg` and update colors in `frontend/tailwind.config.js`.

## Production Build
- Frontend: `cd frontend && npm run build` → outputs to `dist/`.
- Backend: `npm run start` (ensure `env` is set). Serve `frontend/dist` via a static host (e.g., Nginx) and proxy `/api` to the backend.

## Netlify Deployment (Frontend Only)

### Quick Deploy
1. **Connect to Netlify:**
   - Push your code to GitHub/GitLab
   - Connect your repository to Netlify
   - Netlify will automatically detect the build settings from `netlify.toml`

2. **Build Settings:**
   - **Build command:** `cd frontend && npm run build`
   - **Publish directory:** `frontend/dist`
   - **Node version:** 18 (configured in `netlify.toml`)

3. **Environment Variables:**
   - Set any required environment variables in Netlify dashboard
   - For production API calls, update the backend URL in your frontend code

4. **Custom Domain (Optional):**
   - Add your custom domain in Netlify Site settings
   - Configure DNS settings as instructed

### Configuration Files
- **`netlify.toml`:** Contains build settings, redirects, and security headers
- **`frontend/public/_redirects`:** Handles SPA routing for React Router
- The configuration includes:
  - SPA fallback redirects (`/*` → `/index.html`)
  - API proxy setup (update backend URL)
  - Security headers (XSS protection, frame options, etc.)
  - Asset caching optimization

### API Integration
- Update `frontend/src/data/siteContent.js` or your API endpoints to point to your deployed backend
- The `netlify.toml` includes a redirect rule for `/api/*` - replace `https://your-backend-url.com` with your actual backend URL

## Backend Deployment
- Deploy the backend separately (Railway, Render, Heroku, etc.)
- Ensure CORS is configured to allow your Netlify domain
- Update the API base URL in the frontend code

## Deployment Notes
- Set `NODE_ENV=production`.
- Configure SMTP credentials for notifications.
- Back up `backend/data/contact.db` if using the default SQLite path.
- Add HTTPS and WAF/rate-limiting at the edge; keep CORS restricted to your domain.

