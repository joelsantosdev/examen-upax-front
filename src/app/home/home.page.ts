import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/components/services/loader.service';
import { LoaderConfig} from 'src/models/loader-config.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showLoader: boolean = false; // Variable para controlar la visibilidad del loader
  typeLoader:any;
  durationLoader = 0;

  constructor(private ld : LoaderService , readonly router: Router) { }

  ngOnInit() {
  }

  toggleLoader() {
    this.updateConfig();
    console.log("Click en loader");

    this.showLoader = !this.showLoader;
    if (this.showLoader) {
      setTimeout(() => {
        this.showLoader = false;
        this.router.navigateByUrl('detail');
      }, this.ld.getConfig().duration * 1000);
    }
  }

  updateConfig() {
    let newConfig : LoaderConfig  = {
      duration: this.durationLoader,
      type: this.typeLoader
    };

    this.ld.setConfig(newConfig);
  }

}
