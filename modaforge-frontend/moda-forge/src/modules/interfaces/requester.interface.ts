import { User } from "./user.interface";

export interface Requester
{
    id: number;
    userId: number;
    name: string;
    user?: User;
}