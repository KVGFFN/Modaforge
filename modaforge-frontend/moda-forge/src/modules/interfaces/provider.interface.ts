import { User } from "./user.interface";

export interface Provider
{
    id: number;
    name: string;
    services: string;
    userId?: number;
    user?: User;
}