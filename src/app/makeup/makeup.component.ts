import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.scss']
})
export class MakeupComponent implements OnInit {

makeupPostList: Post [] = [
  new Post("Limecrime venus palette demo", "makeup", "https://limecrime-weblinc.netdna-ssl.com/product_images/venus-3/venus/581372aa6170705fd6003cd3/zoom.jpg?c=1477669546&locale=en-us", "Waistcoat disrupt fashion axe blog tattooed. Ethical wayfarers biodiesel, edison bulb selvage jianbing artisan umami sartorial paleo schlitz knausgaard. Sartorial fashion axe next level farm-to-table, narwhal hot chicken succulents woke locavore godard selfies put a bird on it slow-carb. Vice migas kombucha ramps normcore next level pitchfork. Locavore bitters celiac, vegan gluten-free vape normcore kogi waistcoat food truck. Hashtag hexagon wayfarers, food truck kogi quinoa echo park affogato.")];

  constructor() { }

  ngOnInit() {
  }

}
