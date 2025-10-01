# ToolsHub - Online Tools Platform

## Overview

ToolsHub is a web-based platform providing free online utility tools for finance and development tasks. The application features an EMI/Loan Calculator and a JSON Formatter/Validator, built with a modern React frontend and Express backend. The architecture emphasizes SEO optimization, mobile responsiveness, and user-friendly interfaces with a clean, professional design system.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### October 1, 2025 - Email Integration & Legal Pages
- **Email Functionality**: Implemented Nodemailer for contact form email sending
  - Uses Gmail SMTP with app password authentication
  - Environment variables: `EMAIL_USER` and `EMAIL_APP_PASSWORD`
  - Contact form now sends emails to husnainofficial0314@gmail.com
  - Backend endpoint: `/api/contact` with validation using Zod
- **New Pages Added**:
  - About Us (`/about`) - Company information and mission
  - Contact (`/contact`) - Contact form with email integration
  - Privacy Policy (`/privacy-policy`) - Comprehensive privacy policy
  - Terms of Service (`/terms-of-service`) - Legal terms and conditions
- **Footer Updated**: Added navigation links to all legal pages
- **Note**: User declined Resend integration in favor of direct Gmail SMTP

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component System**
- **Shadcn/ui** components built on top of Radix UI primitives
- **Tailwind CSS** for utility-first styling with CSS variables for theming
- Dark/light theme support with localStorage persistence
- Responsive design with mobile-first approach

**State Management**
- Local component state with React hooks
- Theme state managed via localStorage
- No global state management library (Redux/Zustand) - keeping it simple

**Key Features**
- EMI Calculator with Chart.js visualizations (doughnut charts)
- JSON Formatter with Prism.js syntax highlighting
- SEO utilities for dynamic meta tag management
- Toast notifications for user feedback
- Ad placeholder components for future monetization

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for the REST API
- **Node.js** ESM modules (type: "module" in package.json)
- Middleware for JSON parsing and request logging

**Development Setup**
- Custom Vite integration for SSR-style development
- Middleware mode for seamless frontend/backend integration during development
- Production build uses esbuild for backend bundling

**Storage Interface**
- Abstracted storage interface (`IStorage`) for CRUD operations
- In-memory storage implementation (`MemStorage`) as default
- Designed for easy migration to database-backed storage

**API Structure**
- Routes registered via `registerRoutes` function
- All API routes prefixed with `/api`
- Request/response logging middleware with JSON capture
- HTTP server creation wrapped around Express app

### Data Storage Solutions

**Database ORM**
- **Drizzle ORM** configured for PostgreSQL
- **@neondatabase/serverless** for Neon Postgres serverless connections
- Schema defined in `shared/schema.ts` for type sharing between frontend/backend

**Current Schema**
- Users table with UUID primary keys (generated via `gen_random_uuid()`)
- Username and password fields (authentication-ready structure)
- Zod validation schemas generated from Drizzle schemas

**Migration Strategy**
- Drizzle Kit for schema migrations
- Migration files output to `./migrations`
- Push-based deployment via `db:push` script

**Current State**
- Application uses in-memory storage by default
- Database schema defined but not actively used
- Easy toggle between MemStorage and database-backed storage

### External Dependencies

**Database & Storage**
- Neon Postgres (serverless PostgreSQL) - configured but not actively used
- Session storage prepared with `connect-pg-simple` for PostgreSQL sessions

**UI Component Libraries**
- Radix UI primitives (30+ component packages for accessible UI)
- Lucide React for iconography
- Chart.js for data visualization
- Prism.js for code syntax highlighting

**Styling & Theming**
- Tailwind CSS with custom configuration
- PostCSS for CSS processing
- Class Variance Authority (CVA) for component variants
- clsx and tailwind-merge for className utilities

**Form Handling**
- React Hook Form for form state management
- @hookform/resolvers for validation schema integration
- Zod for runtime type validation

**Development Tools**
- Replit-specific plugins for development (cartographer, dev-banner, runtime-error-modal)
- TypeScript for type safety across the stack
- ESLint implicit via tooling

**Utilities**
- date-fns for date manipulation
- nanoid for unique ID generation
- cmdk for command palette functionality
- vaul for drawer components

**Build & Deployment**
- Separate build processes for frontend (Vite) and backend (esbuild)
- Frontend outputs to `dist/public`
- Backend bundles to `dist/index.js`
- Static file serving in production mode