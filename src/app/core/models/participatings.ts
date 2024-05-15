

export interface ParticipatingDetails {
  id: string,
  name: string,
  englishName: string,
  entityTypeName: string,
  countryName: string
}
export interface EntityTypeList {

  entityTypeList: [
    {
      id:string,
      name: string
    }
  ]
}
export interface CountriesList {

  countriesList: [
    {
      id:string,
      name: string
    }
  ]
}
export interface postEntity {
  name:string
  englishName:string
  entityTypeId:string,
  countryId:string
}
export interface IEntityResponse {
  model: any;
  success: boolean;
  message: string;
  errors: any;
}
