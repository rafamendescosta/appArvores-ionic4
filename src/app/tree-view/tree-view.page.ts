import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.page.html',
  styleUrls: ['./tree-view.page.scss'],
})
export class TreeViewPage implements OnInit {

  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
