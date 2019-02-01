import { Component, OnInit } from '@angular/core';
import { Tree, TreeService } from './../services/tree.service';


@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.page.html',
  styleUrls: ['./tree-list.page.scss'],
})
export class TreeListPage implements OnInit {

  trees: Tree[];
  urlHabito: string;

  constructor(private treeService: TreeService) { }

  ngOnInit() {
    this.treeService.getTrees().subscribe(res => {
      this.trees = res;
    });
  }

}
