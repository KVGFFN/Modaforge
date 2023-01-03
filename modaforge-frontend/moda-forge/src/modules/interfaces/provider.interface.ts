import { User } from "./user.interface";

export interface Provider
{
    id: number;
    userId: number;
    name: string;
    user?: User;
}