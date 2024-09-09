"use server"

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createAdminClient } from "@/server/appwrite";
import { OAuthProvider } from "node-appwrite";

export async function signUpWithGoogle() {
    const origin = headers().get("origin");
    const userAgent = headers().get("userAgent");
    const { account } = await createAdminClient(userAgent);

    


    const redirecturl = await account.createOAuth2Token(
        OAuthProvider.Google,
        `${origin}/api/oauth/success`,
        `${origin}/signup`,
    );
    return redirect(redirecturl);
}