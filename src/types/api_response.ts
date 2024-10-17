import { NextResponse } from "next/server";

/**
 * Handles any error that occurs in the API flow
 */
export async function handleErrorResponse(error: any, status?: number ,  trx?: any) {
    if (error instanceof Error) {
      if(trx) trx.rollback()
      return NextResponse.json({ error: error.message , message: error }, { status: status || 500 });
    }
    
    if(trx) trx.rollback()
    return NextResponse.json({ error: error.message || error || 'Internal Server Error', message: error }, { status: status || 500 });
  }
  