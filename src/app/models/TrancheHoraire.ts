import {Time} from "@angular/common";

export class TrancheHoraire {
  private _id: number | undefined;
  private _heureDebut: Time;
  private _heureFin: Time;
  private _prix: number;


  constructor(heureDebut: Time, heureFin: Time, prix: number, id?: number) {
    this._id = id;
    this._heureDebut = heureDebut;
    this._heureFin = heureFin;
    this._prix = prix;
  }


  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get heureDebut(): Time {
    return this._heureDebut;
  }

  set heureDebut(value: Time) {
    this._heureDebut = value;
  }

  get heureFin(): Time {
    return this._heureFin;
  }

  set heureFin(value: Time) {
    this._heureFin = value;
  }

  get prix(): number {
    return this._prix;
  }

  set prix(value: number) {
    this._prix = value;
  }

  static fromJSON(data: any):TrancheHoraire{
    return new TrancheHoraire(
      data.heureDebut,
      data.heureFin,
      data.prix,
      data.id
    )
  }

  toJSON():any{
    return {
      id: this.id,
      heureDebut: this.heureDebut,
      heureFin: this.heureFin,
      prix: this.prix
    }
  }
}
