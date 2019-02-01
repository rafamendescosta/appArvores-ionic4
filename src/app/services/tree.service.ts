import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tree {
    nomePopular: string;
    nomeCientifico: string;
    familia: string;
    habito: string;
    dispersao: string;
    redlist: string;
    descricao: string;
    fotos: [string];
    floracao: {
      inicio: string;
      final: string;
    };
    frutificacao: {
      inicio: string;
      final: string;
    };
    coordinates: [{
      lat: number;
      lng: number;
    }];
}

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  private treeCollection: AngularFirestoreCollection<Tree>;

  private trees: Observable<Tree[]>;

  constructor(db: AngularFirestore) {
    this.treeCollection = db.collection<Tree>('trees');

    this.trees = this.treeCollection.snapshotChanges().pipe(
      map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return{ id, ...data };
          });
      })
    );
   }

   getTrees(){
      return this.trees;
   }

   getTree(id){
      return this.treeCollection.doc<Tree>(id).valueChanges();
   }
}
