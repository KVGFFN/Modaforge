export interface User {
    id:       number;
    name:     string;
    verified: boolean;
    email:    string;
    regionId: number;
    region:   Region;
}

export interface Region {
    id:      number;
    name:    string;
    zipcode: number;
}
