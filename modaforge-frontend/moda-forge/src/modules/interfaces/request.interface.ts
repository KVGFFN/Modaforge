import { Model } from "./model.interface";
import { Region } from "./region.interface";
import { Requester } from "./requester.interface";
import { Provider } from "./provider.interface";
import { User } from "./user.interface";


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

    requester?: User;
    provider?: User;
    model?: Model;
    region?: Region;

}
