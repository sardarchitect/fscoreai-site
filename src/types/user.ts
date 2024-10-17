export interface User {
    orgID: string | null;
    name: string | null;
    email: string;
    password: string;
    role: string | null;
    company_name: string | null;
    job_title: string | null;
    short_description: string | null;
}
export interface Managers {
    id: string ;
    email: string ;
    name?: string;
}

export interface Members {
    id: string ;
    email: string;
    name?: string;
}
// prmission to create and remove org to all admin and guest users 
// prmission to create member/manager user and modify ther role  

export interface organization {
    trx?: any;
    orgId?: string
    adminUserId: string;
  contact: Record<string, any>;
    name?: string;
    email: string;
    currentPlan?: string;
    shortDescription?: string;
    members: Members[];
    managers: Managers[];
    billingHistory?: Record<string, any>;
}


// glob