"use server"
import { Client, Account } from "node-appwrite";
import { config } from "@/appwrite/config";

export async function createAdminClient(){
    const client = new Client()
    .setEndpoint(config.appwriteUrl)
    .setProject(config.appwriteProjectId)
    .setKey(process.env.APPWRITE_API_KEY!)

    return{
        get account() {
            return new Account(client);
        },
    };
}