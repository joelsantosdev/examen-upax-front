// loader.service.ts
import { Injectable } from '@angular/core';
import { LoaderConfig } from 'src/models/loader-config.model';


@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  // default
  private defaultConfig: LoaderConfig = {
    duration: 9,
    type: 'image'
  };

  constructor() { }

  // Método para obtener la configuración del loader
  getConfig(config?: Partial<LoaderConfig>): LoaderConfig {
    return { ...this.defaultConfig, ...config };
  }

  setConfig(newConfig: LoaderConfig) {
    this.defaultConfig = newConfig;
  }
}
