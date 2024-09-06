import { ID } from "node-appwrite";
import { createAdminClient } from "@/server-actions/appwrite";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_KEY } from "@/helpers";  // Assuming SESSION_KEY is defined

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { email, password, name, confirmpassword }: any = await request.json();

    // Step 1: Validate input fields
    if (!email || !password || !name || !confirmpassword) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    if (password !== confirmpassword) {
      return NextResponse.json({ message: "Passwords do not match" }, { status: 400 });
    }

    // Step 2: Create a user in Appwrite
    const { account }: any = await createAdminClient();

    // Create a new user
    const user = await account.create(ID.unique(), email, password, name);

    // Step 3: Create a session for the user
    const userSession = await account.createEmailPasswordSession(email, password);

    // Step 4: Set session cookie
    cookies().set(SESSION_KEY, userSession.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true, // Ensure secure cookies for production
    });

    // Step 5: Return a successful response
    return NextResponse.json({
      message: "Signup successful",
      user: user,
      userSession: userSession,
    }, { status: 201 });

  } catch (error: any) {
    // Improved error handling
    console.error('Error in signup:', error);

    return NextResponse.json({
      error: error.message || "An unexpected error occurred",
    }, { status: error?.response?.statusCode || 500 });
  }
}
