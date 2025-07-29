// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // // Verify the webhook URL is set
    // if (!process.env.DISCORD_WEBHOOK_URL) {
    //   throw new Error('Discord webhook URL not configured');
    // }

    const { emailSubject, emailAddress, contactName, emailMessage } = await request.json();
    
    // // Simple validation
    // if (!message || typeof message !== 'string') {
    //   return NextResponse.json(
    //     { error: 'Valid message is required' },
    //     { status: 400 }
    //   );
    // }

    const message = `
      ## ${emailSubject}
      > ${emailAddress}
      ### ${contactName}
      ${emailMessage}
    `

    // Use native fetch instead of discord-webhook-node package
    const discordResponse = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: message
      }),
    });

    if (!discordResponse.ok) {
      throw new Error(`Discord API responded with ${discordResponse.status}`);
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
    
  } catch (error: unknown) {
    console.error("Full error:", error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: message 
      },
      { status: 500 }
    );
  }
}