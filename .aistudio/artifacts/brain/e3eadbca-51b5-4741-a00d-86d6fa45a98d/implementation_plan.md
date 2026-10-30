# Vezzitech Implementation Plan

## Overview
This plan outlines the steps to resolve pending frontend issues, modernize SEO metadata, and implement a secure CMS for Vezzitech using Firebase.

## Phase 1: Frontend Refinements
1. **Card Alignment**: Normalize height and alignment of the "4 Unidades de Inteligência" section cards to ensure a consistent, professional grid layout using CSS grid/flexbox.
2. **Card Removal**: Remove the "Boi na Brasa" testimonial/card.

## Phase 2: SEO Optimization
1. **Metadata Update**: Update `index.html` (and/or Next.js layout) with dynamic, optimized `<title>`, `<meta name="description">`, and `og:` meta tags for better search discovery.
2. **Structured Data**: Implement JSON-LD schema markup for the main website and organizational data.

## Phase 3: CMS & Admin Dashboard Development
1. **Infrastructure**:
   - Initialize `firebase-blueprint.json` to define the CMS database schema (Posts, Testimonials, Portfolio items).
   - Configure Firebase Authentication for admin access (`suporte@vezzitech.com.br`).
2. **Admin Dashboard**:
   - Build a secure, responsive admin panel adhering to "Dark High-Tech Luxury" (Glassmorphism, specific color tokens).
   - Implement authentication guardrails (Private routes).
3. **CRUD Functionality**:
   - Develop secure CRUD forms with advanced media upload (Firebase Storage integration).
   - Ensure all database interactions are server-side or enforced via secure `firestore.rules`.
4. **Security Hardening**:
   - Audit `firestore.rules` for RBAC (Role-Based Access Control).
   - Ensure admin credentials are not exposed in frontend bundles.

## Security Constraints
- All CMS content is managed via secure authenticated sessions.
- No frontend exposure of database/auth credentials.
- Strict adherence to Vezzitech design system components (glassmorphism cards, performance blue accents).
