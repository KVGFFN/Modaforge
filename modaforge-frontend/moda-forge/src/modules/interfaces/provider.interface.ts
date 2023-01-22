export interface Provider {
    id: number;
    name: string;
    services: string;
    userId: number;
    user: {
        id: number;
        name: string;
        verified: boolean;
        email: string;
        picture: string;
        regionId: number;
        region: {
            id: number;
            name: string;
            zipCode: number;
        };
    };
}
  