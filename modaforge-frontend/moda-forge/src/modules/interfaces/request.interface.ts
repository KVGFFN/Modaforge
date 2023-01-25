export interface Request
{
    title: string;
    description: string;
    requesterId: number;
    providerId?: number;
    modelId: number;
    creationDate?: Date;
    regionId: number;
    tags: string;
}
