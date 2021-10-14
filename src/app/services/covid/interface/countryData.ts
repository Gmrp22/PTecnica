export interface CountryData {
  countryregion: string;
  lastupdate: string;
  location: Location;
  countrycode: Countrycode;
  timeseries: { [key: string]: Timesery };
}

export interface Countrycode {
  iso2: string;
  iso3: string;
}

export interface Location {
  lat: number;
  lng: number;
}

export interface Timesery {
  confirmed: number;
  deaths: number;
  recovered: number;
}
