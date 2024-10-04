export interface User {
    name:string | null;
    email: string;
    password: string;
    role: string | null;
    company_name: string | null;
    job_title: string | null;
    short_description: string | null;
}