import { Client } from "./Client";
import { Zone } from "./Zone";
import {TrancheHoraire} from "./TrancheHoraire";
export class Annonce{
  private _id:number | undefined;
  private _titre:string;
  private _description: string;
  private _dateDeDebut: Date;
  private _dateDeFin: Date;
  private _dateDeCreation: Date;
  private _zones: Array<Zone>;
  private _trancheHoraires: Array<TrancheHoraire>;
  private _client: Client;


  constructor(titre: string, description: string, dateDeDebut: Date, dateDeFin: Date, dateDeCreation: Date, zones: Array<Zone>, trancheHoraires: Array<TrancheHoraire>, client: Client, id?: number) {
    this._id = id;
    this._titre = titre;
    this._description = description;
    this._dateDeDebut = dateDeDebut;
    this._dateDeFin = dateDeFin;
    this._dateDeCreation = dateDeCreation;
    this._zones = zones;
    this._trancheHoraires = trancheHoraires;
    this._client = client;
  }


  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get dateDeDebut(): Date {
    return this._dateDeDebut;
  }

  set dateDeDebut(value: Date) {
    this._dateDeDebut = value;
  }

  get dateDeFin(): Date {
    return this._dateDeFin;
  }

  set dateDeFin(value: Date) {
    this._dateDeFin = value;
  }

  get dateDeCreation(): Date {
    return this._dateDeCreation;
  }

  set dateDeCreation(value: Date) {
    this._dateDeCreation = value;
  }

  get zones(): Array<Zone> {
    return this._zones;
  }

  set zones(value: Array<Zone>) {
    this._zones = value;
  }

  get trancheHoraires(): Array<TrancheHoraire> {
    return this._trancheHoraires;
  }

  set trancheHoraires(value: Array<TrancheHoraire>) {
    this._trancheHoraires = value;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  static fromJSON(data: any):Annonce{
    return new Annonce(
      data.titre,
      data.description,
      data.dateDeDebut,
      data.dateDeFin,
      data.dateDeCreation,
      data.zones,
      data.trancheHoraires,
      data.client,
      data.id
    )
  }

  toJSON():any{
    return {
      id: this.id,
      description: this.description,
      dateDeDebut: this.dateDeDebut,
      dateDeFin: this.dateDeFin,
      dateDeCreation: this.dateDeCreation,
      zones: this.zones,
      annonces: this.trancheHoraires,
      client: this.client
    }
  }
}
