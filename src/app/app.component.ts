import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { DarkModeService } from 'angular-dark-mode';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-blog';
  markdown: string | undefined = undefined;
  navbarHeading = "Rhitik's notepad";

  turnOnLight = false;
  ctrl = new FormControl(true);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.ctrl.valueChanges.subscribe(
    //   (value) => {
    //     if (value) {
    //       this.darkModeService.enable();
    //     } else {
    //       this.darkModeService.disable();
    //     }
    //   }
    // )
  }

  // constructor(private darkModeService: DarkModeService) {}

}
