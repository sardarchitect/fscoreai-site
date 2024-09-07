"use server"
    import { config } from "@/appwrite/config" ;
    import { SESSION_KEY } from "@/utils/helpers";
    import { cookies } from "next/headers";
    import { Client, Account } from "node-appwrite";

    export async function createSessionClient() {
        const client = new Client()
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        const session =  cookies().get(SESSION_KEY);
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
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
            .setKey(process.env.APPWRITE_API_KEY!);

        if(userAgent) adminClient.setForwardedUserAgent(userAgent);
            
        return {
            get account() {
                return new Account(adminClient);
            },
        };
    }
