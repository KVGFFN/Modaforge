import { Region } from "./region.interface";

export interface User {
    id:       number;
    name:     string;
    verified: boolean;
    email:    string;
    picture:  string;
    regionId: number;
    region:   Region;
}

