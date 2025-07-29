// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    return new Response(JSON.stringify({ error: 'Server misconfigured' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  try {

    const { emailSubject, emailAddress, contactName, emailMessage } = await request.json();


    const message = `
      ## ${emailSubject}
      > ${emailAddress}
      ### ${contactName}
      ${emailMessage}
    `

    // Use native fetch instead of discord-webhook-node package
    const discordResponse = await fetch(webhookUrl, {
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