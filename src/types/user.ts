export interface User {
    orgID: string | null;
    name:string | null;
    email: string;
    password: string;
    role: string | null; 
    company_name: string | null;
    job_title: string | null;
    short_description: string | null;
}
// prmission to create and remove org to all admin and guest users 
// prmission to create member/manager user and modify ther role  

export interface org {
    name:string | null;
    contact:string | null;
    curruntPlan:string | null;
    members: {
        userId: string | null;
    },
    menagers: {
        userId: string | null;
    },
    adminId: string; 
    billingHistory: {};
    id: string;
    email: string;
    role: string | null; 
    company_name: string | null;
    job_title: string | null;
    short_description: string | null;

}

// only 

// glob