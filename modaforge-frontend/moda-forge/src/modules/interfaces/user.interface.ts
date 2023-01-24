import { Region } from "./region.interface";

export interface User {
    Id:             number;
    Name:           string;
    Verified:       boolean;
    Email:          string;
    Description:    string;
    Picture:        string;
    ProviderRole:   boolean;
}

