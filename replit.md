# Energy Monitoring Dashboard

## Overview

This is a responsive web application for monitoring electrical renewable energy systems. The dashboard provides real-time monitoring of solar power generation, battery storage, grid efficiency, and safety systems. It includes weather integration, GPS tracking for fault detection, and emergency alert capabilities. The system is designed for official personnel to monitor and manage renewable energy infrastructure.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript and Vite for fast development
- **UI Components**: Shadcn/UI component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system and CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Charts**: Recharts for data visualization and real-time monitoring displays

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API**: RESTful endpoints with WebSocket support for real-time updates
- **Session Management**: Express sessions with PostgreSQL storage
- **Error Handling**: Centralized middleware with proper HTTP status codes

### Authentication & Authorization
- **Provider**: Replit Auth with OpenID Connect integration
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **Access Control**: Role-based authentication (officials only)
- **Security**: HTTP-only cookies, CSRF protection, and secure session handling

### Database Design
- **Primary Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Tables**: Users, energy data, safety alerts, power lines, poles, weather data, and system settings
- **Real-time Data**: Structured for time-series energy monitoring data

### Real-time Features
- **WebSocket Integration**: Real-time energy data updates, safety alerts, and emergency notifications
- **Live Monitoring**: Continuous updates for solar generation, battery status, and grid efficiency
- **Alert System**: Immediate notifications for safety issues and emergency situations

### Safety & Monitoring Systems
- **Power Line Tracking**: GPS-enabled monitoring of power lines and poles
- **Alert Management**: Categorized alerts (normal, warning, critical) with resolution tracking
- **Emergency Systems**: SOS functionality with location tracking and immediate notifications
- **Status Monitoring**: Real-time status updates for grid infrastructure components

## External Dependencies

### Core Services
- **Database**: Neon PostgreSQL for serverless database hosting
- **Authentication**: Replit Auth for secure user authentication
- **Deployment**: Replit hosting environment with development tooling

### Frontend Libraries
- **UI Framework**: React 18 with TypeScript support
- **Component System**: Radix UI primitives with Shadcn/UI design system
- **Styling**: Tailwind CSS with PostCSS processing
- **Data Fetching**: TanStack Query for server state management
- **Charts**: Recharts for data visualization
- **Form Handling**: React Hook Form with Zod validation

### Backend Dependencies
- **Web Framework**: Express.js with TypeScript
- **Database Client**: Drizzle ORM with Neon serverless adapter
- **Session Management**: Express sessions with PostgreSQL storage
- **WebSocket**: ws library for real-time communication
- **Authentication**: OpenID Connect client for Replit Auth integration

### Development Tools
- **Build Tool**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript with strict configuration
- **Development**: Hot module replacement and error overlay
- **Database Management**: Drizzle Kit for schema migrations

### Planned Integrations
- **Weather API**: External weather service for live conditions and alerts
- **GPS Services**: Location tracking for infrastructure monitoring
- **IoT Integration**: Sensor data collection from renewable energy equipment