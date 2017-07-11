import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  animalsPostList: Post [] = [
    new Post("Deadly hippo attack", "animals", "https://i.ytimg.com/vi/cvoEj1_yOrU/maxresdefault.jpg", "Pitchfork ramps put a bird on it lumbersexual artisan snackwave health goth thundercats organic squid street art fingerstache air plant whatever fam. Stumptown hammock godard bushwick irony kogi food truck cloud bread vape synth kitsch blog. Enamel pin la croix flexitarian banh mi truffaut waistcoat af lumbersexual. Ramps semiotics vegan chia. Everyday carry fanny pack kogi scenester, tumeric tofu disrupt. Forage thundercats cray, readymade chartreuse unicorn franzen succulents mumblecore whatever green juice bitters before they sold out pok pok. IPhone small batch meggings tote bag letterpress kitsch kale chips celiac narwhal street art sriracha lumbersexual.")
  ];

  constructor() { }

  ngOnInit() {
  }

}
