export async function handler(event, context) {
  const GUILD_ID = "531684110268235778";
  const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

  if (!DISCORD_BOT_TOKEN) {
    return { statusCode: 500, body: JSON.stringify({ error: "DISCORD_BOT_TOKEN not set" }) };
  }

  try {
    const res = await fetch(
      `https://discord.com/api/v10/guilds/${GUILD_ID}/scheduled-events?with_user_count=true`,
      { headers: { Authorization: `Bot ${DISCORD_BOT_TOKEN}` } }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("Discord API error:", res.status, text);
      return { statusCode: 500, body: JSON.stringify({ error: "Failed to fetch Discord events" }) };
    }

    const events = await res.json();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json","Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(events)
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: "Internal server error" }) };
  }
}