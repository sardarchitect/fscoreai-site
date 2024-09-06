"use server"

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createAdminClient } from "@/server-actions/appwrite";
import { OAuthProvider } from "node-appwrite";

export async function signUpWuthGoogle() {
    const { account } = await createAdminClient();

const origin = headers().get("origin");


    const redirecturl = await account.createOAuth2Token(
        OAuthProvider.Google,
        `${origin}/oauth`,
        `${origin}/signup`,
    );
    return redirect(redirecturl);
}