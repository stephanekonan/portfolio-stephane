import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from '../services/flowbite.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { WebComponent } from './contenus/web/web.component';
import { DesignComponent } from './contenus/design/design.component';
import { MobileComponent } from './contenus/mobile/mobile.component';
import { VideoComponent } from './contenus/video/video.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, WebComponent, DesignComponent, MobileComponent, VideoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  @ViewChild('header') header: ElementRef | undefined;

  title = 'stephane-dev-profil';
  email = 'stephanekonan@gmail.com';
  isCopied = false;
  isButtonDisabled: boolean = true;

  images = [
    { img: 'img/angular_gradient.png' },
    { img: 'img/laravel.png' },
    { img: 'img/tailwindcss.svg' },
    { img: 'img/flowbite.png' },
    { img: 'img/nestjs.svg' },
    { img: 'img/kotlin.png' },
    { img: 'img/firebase.png' },
    { img: 'img/postgresql.png' },
    { img: 'img/github.png' },
    { img: 'img/git.png' },
    { img: 'img/figma.svg' },
    { img: 'img/ai.png' },
    { img: 'img/ae.png' }
  ];

  selectedCategory: string = 'mobile';

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  constructor(private flowbiteService: FlowbiteService) { }

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'docs/cv_konan_koffi_louis_stephane_fullstack_dev.pdf';
    link.download = 'cv_stephane_konan.pdf';
    link.click();
  }

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-right',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Email copié'
      })
      setTimeout(() => {
        this.isCopied = false;
      }, 3000);
    }).catch(err => {
      console.error('Erreur de copie : ', err);
    });
  }


}
