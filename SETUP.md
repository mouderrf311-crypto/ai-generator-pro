# AI Tailwind Component Generator - Setup Guide

A professional AI-powered Tailwind CSS component generator built with Next.js, Claude 3.5 Sonnet, and the Vercel AI SDK.

## Features

- **Split-screen layout**: Prompt input and code editor on the left, live preview on the right
- **Real-time streaming**: See your component being generated in real-time
- **Syntax highlighting**: Beautiful code display with line numbers
- **Live preview**: Instant rendering of generated components in an isolated iframe
- **Copy to clipboard**: One-click code copying
- **Responsive design**: Mobile and desktop view toggles
- **Modern UI**: Built with Tailwind CSS, shadcn/ui, and Framer Motion animations

## Setup Instructions

### 1. Install Dependencies

Dependencies are already installed, but if needed:

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Then add your Anthropic API key:

```
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

To get your API key:
1. Visit https://console.anthropic.com/
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy and paste it into your `.env.local` file

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## How to Use

1. **Enter a prompt**: Describe the component you want to create in the textarea (e.g., "Create a modern pricing card with three tiers")

2. **Generate**: Click the "Generate Component" button

3. **Watch it stream**: See the code being generated in real-time on the left panel

4. **Preview**: View the live rendered component on the right panel

5. **Toggle views**: Switch between desktop and mobile preview modes

6. **Copy code**: Click the "Copy" button to copy the generated code

## Example Prompts

- "Create a modern pricing card with three tiers, each with a gradient background"
- "Build a responsive navigation bar with a logo and menu items"
- "Design a feature section with icons and descriptions in a grid layout"
- "Create a hero section with a headline, subtext, and CTA button"
- "Build a contact form with validation states"

## Tech Stack

- **Next.js 13+**: React framework with App Router
- **Claude 3.5 Sonnet**: Anthropic's latest AI model
- **Vercel AI SDK**: For streaming AI responses
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Beautiful UI components
- **Framer Motion**: Smooth animations
- **React Syntax Highlighter**: Code syntax highlighting
- **Lucide React**: Modern icon library

## Project Structure

```
project/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts          # API endpoint for AI generation
│   ├── page.tsx                  # Main component generator page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   └── ui/                      # shadcn/ui components
├── .env.local.example           # Environment variable template
└── package.json                 # Dependencies
```

## Troubleshooting

### API Key Issues

If you get authentication errors:
- Verify your API key is correct in `.env.local`
- Ensure the file name is exactly `.env.local` (not `.env.local.txt`)
- Restart the development server after adding the key

### Build Errors

If you encounter build errors:
```bash
npm run build
```

Check the error messages and ensure all dependencies are installed.

### Preview Not Working

If the preview iframe doesn't render:
- Check the browser console for errors
- Ensure the generated code is valid React/JSX
- Try a simpler prompt first

## Support

For issues or questions:
- Check the Anthropic API documentation: https://docs.anthropic.com/
- Check the Vercel AI SDK docs: https://sdk.vercel.ai/docs
- Review Next.js documentation: https://nextjs.org/docs

Enjoy building beautiful components with AI!
