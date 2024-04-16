import { Component, OnInit, Input } from '@angular/core';
import { LoaderConfig } from 'src/models/loader-config.model';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-custom-loader',
  templateUrl: './custom-loader.component.html',
  styleUrls: ['./custom-loader.component.scss'],
})
export class CustomLoaderComponent implements OnInit {
  config!: LoaderConfig;
  loaderImages!: { src: string; alt: string }[];
  currentImageIndex: number = 0;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.config = this.loaderService.getConfig();

    const defaultPath = 'assets/loader-img';
    this.loaderImages = [
      { src: `${defaultPath}/image-1.png`, alt: 'Loading...' },
      { src: `${defaultPath}/image-2.png`, alt: 'Loading...' },
      { src: `${defaultPath}/image-3.png`, alt: 'Loading...' },
      { src: `${defaultPath}/image-4.png`, alt: 'Loading...' },
    ];

    setInterval(() => {
      this.changeImage();
    }, 1000);

    setTimeout(() => {
      this.changeImage();
    }, this.config.duration * 1000);
  }

  changeImage() {
    this.currentImageIndex = Math.floor(
      Math.random() * this.loaderImages.length
    );
  }
}
