enum Status
{
    pending = 0,
    accepted = 1,
    completed = 2,
    cancelled = 3
}
export interface Request
{
    id:             number;
    modeluid:       string;
    modelurl:       string;
    customerid:     number;
    providerid?:    number;
    title:          string;
    description:    string;
    daterequested:  Date;
    dateaccepted?:  Date;
    datecompleted?: Date;
    status:         Status;
}