import { Annonce } from "./Annonce"
import {TrancheHoraire} from "./TrancheHoraire";
import {Client} from "./Client";
import {Zone} from "./Zone";
export class AnnonceImage extends Annonce{


  constructor(titre: string, description: string, dateDeDebut: Date, dateDeFin: Date, dateDeCreation: Date, zones: Array<Zone>, trancheHoraires: Array<TrancheHoraire>, client: Client, id?: number) {
    super(titre, description, dateDeDebut, dateDeFin, dateDeCreation, zones, trancheHoraires, client, id);
  }

  static override fromJSON(data: any):AnnonceImage{
    return new AnnonceImage(
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
}
