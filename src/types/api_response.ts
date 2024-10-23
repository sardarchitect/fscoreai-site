import { NextResponse } from "next/server";

interface ApiError extends Error {
  code?: number;
  message: any;
}

export async function handleErrorResponse(error: ApiError | any, status?: number, trx?: any) {
  if (trx) trx.rollback();

  // Check if the error is an instance of Error, or if it has a 'message' and 'code' like structure
  const isApiError = (error: any): error is ApiError => {
    return typeof error.message === 'string' && (typeof error.code === 'number' || error.code === undefined);
  };

  // Handle Error or custom error objects
  if (isApiError(error)) {
    return NextResponse.json(
      { error: error.message, code: error.code || status || 500 },
      { status: error.code || status || 500 }
    );
  }

  // Fallback for non-Error objects
  return NextResponse.json(
    { error: error.message || 'Internal Server Error', code: status || 500 },
    { status: status || 500 }
  );
}



// import { NextResponse } from "next/server";

// /**
//  * Handles any error that occurs in the API flow
//  */
// export async function handleErrorResponse(error: any, status?: number ,  trx?: any) {
//     if (error instanceof Error) {
//       if(trx) trx.rollback()
//       return NextResponse.json({ error: error.message , message: error }, { status: status || 500 });
//     }
    
//     if(trx) trx.rollback()
//     return NextResponse.json({ error: error.message || error || 'Internal Server Error', message: error }, { status: status || 500 });
//   }
  