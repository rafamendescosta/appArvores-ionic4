import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Tree, TreeService } from './../services/tree.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
declare var google: any;

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.page.html',
  styleUrls: ['./tree-view.page.scss'],
})
export class TreeViewPage implements OnInit {

  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
  // Meses
  month = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  floraInit: string;
  floraFina: string;
  frutiInit: string;
  frutiFina: string;
  treeId = null;
  tree: Tree;
  map;

  @ViewChild('treeMap') treeMap: ElementRef;
  constructor(private treeService: TreeService, private route: ActivatedRoute,
    private loagindController: LoadingController, private nav: NavController) { }

  ngOnInit() {
    this.DisplayMap();

    this.treeId = this.route.snapshot.params['id'];
    this.LoadTree();
  }

  // Carregar uma árvore
  async LoadTree() {
    const loading = await this.loagindController.create({
      message: 'Abrindo árvore..'
    });
    await loading.present();

    this.treeService.getTree(this.treeId).subscribe( res => {
        loading.dismiss();
        this.tree = res;

        // Floração
        this.floraInit = this.month[this.tree.floracao.inicio];
        this.floraFina = this.month[this.tree.floracao.final];

        // Frutficação
        this.frutiInit = this.month[this.tree.frutificacao.inicio];
        this.frutiFina = this.month[this.tree.frutificacao.final];

        console.log(this.tree);

        // Setting new markers
        for (let i = 0; i < this.tree.coordinates.length; i++) {
          var marker = new google.maps.Marker({
              position: this.tree.coordinates[i],
              map: this.map,
              title: this.tree.nomePopular
          });
        }
    });
  }


  // Configuração do google maps
  DisplayMap() {
    const location = new google.maps.LatLng('-22.349565', ' -49.031555');

    const options = {
      center: location,
      zoom: 15,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeControl: false,
      zoomControl: false,
      rotateControl: true
    };
    this.map = new google.maps.Map(this.treeMap.nativeElement, options);
  }
}
