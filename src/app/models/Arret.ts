import {Zone} from "./Zone";

export class Arret{
  private _id:number | undefined;
  private _nom: string;
  private _adresseIP: string;
  private _gps: string;
  private _zone: Zone


  constructor( nom: string, adresseIP: string, gps: string, zone: Zone, id?: number) {
    this._id = id;
    this._nom = nom;
    this._adresseIP = adresseIP;
    this._gps = gps;
    this._zone = zone;
  }


  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get adresseIP(): string {
    return this._adresseIP;
  }

  set adresseIP(value: string) {
    this._adresseIP = value;
  }

  get gps(): string {
    return this._gps;
  }

  set gps(value: string) {
    this._gps = value;
  }

  get zone(): Zone {
    return this._zone;
  }

  set zone(value: Zone) {
    this._zone = value;
  }

  static fromJSON(data: any):Arret{
    return new Arret(
      data.nom,
      data.adresseIP,
      data.gps,
      data.zone,
      data.id
      )
  }

  toJSON(): any{
    return {
      id: this.id,
      nom: this.nom,
      adresseIP: this.adresseIP,
      gps: this.gps,
      zone: this.zone.toJSON()

    }
  }
}
