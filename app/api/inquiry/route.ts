export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, spaceType, budget, message } = body;

    // For MVP, log to console. Replace with Resend or another email service later.
    console.log("--- New Inquiry ---");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Space Type: ${spaceType}`);
    console.log(`Budget: ${budget}`);
    console.log(`Message: ${message || "N/A"}`);
    console.log("-------------------");

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
