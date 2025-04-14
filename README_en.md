
# SECGPT - Securities Document Intelligent Analysis Platform

## Project Introduction

SECGPT is a platform specifically designed for intelligent analysis of listed company securities documents. Our system can process various SEC files, including 10-K annual reports, 10-Q quarterly reports, 8-K significant event announcements, etc., providing investors, analysts, and researchers with efficient document processing and analysis tools.

## Key Features

- **Intelligent Document Classification**: Automatically identifies and categorizes various types of documents submitted by listed companies according to SEC standards
- **Deep Analysis Capabilities**: Utilizes advanced AI technology to parse document content and extract key information
- **Dual Acquisition Methods**: Supports both direct API retrieval and local document upload processing
- **Multilingual Support**: Full support for both Chinese and English interfaces to meet different user needs

## Technical Architecture

This project is built using modern frontend technologies:

- Vite - High-performance frontend build tool
- TypeScript - Enhanced JavaScript development experience
- React - User interface building library
- Tailwind CSS - Utility-first CSS framework
- shadcn/ui - High-quality UI component library

## How to Use

1. Visit our online platform
2. Select the document type you wish to analyze
3. Retrieve through the SEC API or upload a local document
4. The system will automatically analyze and display the results

## Development Guide

### Environment Preparation

Before development, ensure you have installed the following tools:
- Node.js (latest LTS version recommended)
- npm or pnpm

### Local Development Steps

```bash
# Clone the repository
git clone <Project Git URL>

# Enter the project directory
cd secgpt

# Install dependencies
npm install
# or
pnpm install

# Start the development server
npm run dev
# or
pnpm run dev
```

After starting the development server, visit http://localhost:5173 to view the application.

## Deployment

This project is deployed using the Lovable platform. Visit the [project page](https://lovable.dev/projects/dcf3b57d-3062-4591-8925-df38906d2c74) and click "Share -> Publish" to complete the deployment.

## Custom Domain

You can connect your own domain to this project:

1. Access project settings
2. Navigate to the "Domains" settings page
3. Follow the guide to add your custom domain

## License

Copyright © 2024 SECGPT. All rights reserved.
