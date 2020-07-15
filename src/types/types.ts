export interface IIdentifier {
    id?: string
    value: string,
    organization: string
}

export interface IFacility {
    identifierEntity: IIdentifier,
    identifierList: IIdentifier[]
}