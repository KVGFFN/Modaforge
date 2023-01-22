export interface Request
{
    title: string;
    description: string;
    requesterId: number;
    providerId?: number;
    modelId: number;
    regionId: number;
    tags: string;
}
