import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return new Response('Prompt is required', { status: 400 });
    }

    const systemPrompt = `You are an expert Tailwind CSS and React component developer. Generate clean, modern, and production-ready React components using Tailwind CSS.

IMPORTANT RULES:
1. Generate ONLY the component code - no explanations, no markdown formatting, no backticks
2. Use functional React components with TypeScript
3. Use Tailwind CSS for all styling
4. Make components responsive and accessible
5. Include any necessary imports (React, lucide-react icons if needed)
6. The component should be a default export
7. Use modern React patterns (hooks, functional components)
8. Make the design beautiful and professional

Return ONLY the raw JSX/TSX code that can be directly rendered.`;

    const result = await streamText({
      model: anthropic('claude-3-5-sonnet-20241022'),
      system: systemPrompt,
      prompt: prompt,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Error in generate API:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
