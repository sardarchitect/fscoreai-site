import { ID } from "node-appwrite";
import { createAdminClient } from "@/server-actions/appwrite";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try{   
    
    const {account} = await createAdminClient();
        const user = await account.create(ID.unique(), "test@gmail.com", 'test@123', 'Test');
        const userSession = await account.createEmailPasswordSession('testone@gm.co', 'testone@123')

    return NextResponse.json({
        message: "Signup successful",
        user: user,
        userSession: userSession
    }, {status:201} );
}
catch (error: any){
    return NextResponse.json({
        error:error
    }, {status:error?.code || 500} );
}

}