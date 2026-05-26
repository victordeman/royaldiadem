# RoyalDiadem Research & Laboratory

Official website for the authorized agent and representative of ORTEC/AMETEK, Inc.

## Project Goal
To provide a professional platform for RoyalDiadem Research & Laboratory, showcasing their services and partnership with ORTEC/AMETEK, Inc., featuring a high-performance, modern web experience with integrated AI capabilities (Phase 5).

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Theme:** next-themes (Dark/Light mode)
- **Database/Vector Store:** Supabase (pgvector) - *Planned for Phase 5*
- **Deployment:** Vercel

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/victordeman/royaldiadem.git
   cd royaldiadem
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Supabase credentials

### Running the Project
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 7-Phase Development Plan
1. **Phase 1: Project Initialization & Foundation** (Complete)
   - Next.js 15, TypeScript, Tailwind setup.
   - shadcn/ui integration.
   - Core layout (Navbar, Footer) and Dark Mode.
   - Vercel & Supabase configuration.
2. **Phase 2: UI/UX Design & Brand Identity**
3. **Phase 3: Core Pages & Content**
4. **Phase 4: Backend Integration & Services**
5. **Phase 5: RAG Agent & AI Integration**
   - Implementing Supabase pgvector for vector storage.
   - RAG agent for platform-wide assistance.
6. **Phase 6: Testing & Optimization**
7. **Phase 7: Launch & Maintenance**

## Environment Variables
See `.env.example` for the required environment variables. Key ones include:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key.
- `DATABASE_URL`: Connection string for PostgreSQL (Supabase).

## Deployment
This project is configured for easy deployment on Vercel. Simply connect your GitHub repository to Vercel, and it will automatically handle the build and deployment process.
