import { Model } from "./model.interface";


export interface Request
{
    id: number;
    title: string;
    description: string;
    status: number;
    creationDate: Date;
    acceptedDate?: Date;
    doneDate?: Date;

    requesterId?: number;
    providerId?: number;
    modelId?: number;
    regionId?: number;

    // requester?: Requester;
    // provider?: Provider;
    // model?: Model;
    // region?: Region;

}
