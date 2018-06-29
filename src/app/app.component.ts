import { Component } from '@angular/core';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SuperSaiyanComponent } from './super-saiyan/super-saiyan.component';
import { SuperSaiyanTwoComponent } from './super-saiyan-two/super-saiyan-two.component';
import { SuperSaiyanThreeComponent } from './super-saiyan-three/super-saiyan-three.component';
import { SuperSaiyanFourComponent } from './super-saiyan-four/super-saiyan-four.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  power = 1;
  
    types = [
  
      {'title': 'HumanComponent', 'power': 1},
      {'title': 'SaiyanComponent', 'power': 10},
      {'title': 'SuperSaiyanComponent', 'power': 90},
      {'title': 'SuperSaiyanTwoComponent', 'power': 150},
      {'title': 'SuperSaiyanThreeComponent', 'power': 250},
      {'title': 'SuperSaiyanFourComponent', 'power': 500}
    
    ]
  
}
