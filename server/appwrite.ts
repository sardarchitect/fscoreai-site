"use server"
    import { cookies } from "next/headers";
    import { Client, Account } from "node-appwrite";

    export async function createSessionClient() {
        const client = new Client()
            .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
            .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!);

        const session =  cookies().get("next-session");
        if (!session || !session.value){
            throw new Error("No Session");
        }
        client.setSession(session.value);

        return {
            get account() {
                return new Account(client);
            },
        };
    }


    export async function createAdminClient(userAgent: string | null){
        const adminClient = new Client()
            .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
            .setProject(process.env.NEXT_PUBLIC_PROJECT_ID!)
            .setKey(process.env.APPWRITE_API_KEY!);

        if(userAgent) adminClient.setForwardedUserAgent(userAgent);
        console.log(userAgent);
        
        return {
            get account() {
                return new Account(adminClient);
            },
        };
    }
