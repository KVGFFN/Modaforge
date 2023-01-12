import { Model } from "./model.interface";
import { Region } from "./region.interface";
import { Requester } from "./requester.interface";
import { Provider } from "./provider.interface";


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

    requester?: Requester;
    provider?: Provider;
    model?: Model;
    region?: Region;

}
