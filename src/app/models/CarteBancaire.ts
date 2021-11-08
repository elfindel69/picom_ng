import {Client} from "./Client";

export class CarteBancaire{
  private _id: number | undefined;
  private _numeroCb: string;
  private _dateExpiration: string;
  private _codeCVV: string;
  private _client: Client;


  constructor( numeroCb: string, dateExpiration: string, codeCVV: string, client: Client,id?: number) {
    this._id = id;
    this._numeroCb = numeroCb;
    this._dateExpiration = dateExpiration;
    this._codeCVV = codeCVV;
    this._client = client;
  }


  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get numeroCb(): string {
    return this._numeroCb;
  }

  set numeroCb(value: string) {
    this._numeroCb = value;
  }

  get dateExpiration(): string {
    return this._dateExpiration;
  }

  set dateExpiration(value: string) {
    this._dateExpiration = value;
  }

  get codeCVV(): string {
    return this._codeCVV;
  }

  set codeCVV(value: string) {
    this._codeCVV = value;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  static fromJSON(data: any):CarteBancaire {
    return new CarteBancaire(
      data.numeroCb,
      data.dateExpiration,
      data.codeCVV,
      data.client,
      data.id
    )
  }

  toJSON():any{
    return {
      id: this.id,
      numeroCb: this.numeroCb,
      dateExpiration: this.dateExpiration,
      codeCVV: this.codeCVV,
      client: this.client.toJSON()
    }
  }
}
