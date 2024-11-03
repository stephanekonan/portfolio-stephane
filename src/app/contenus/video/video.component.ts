import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {

  videos = [
    "https://web.facebook.com/watch/?v=1118331272213227",
    "https://web.facebook.com/herrourci/videos/265146159261009/?_rdc=1&_rdr",
    "https://web.facebook.com/inflouis/videos/496415405570286",
    "https://web.facebook.com/inflouis/videos/3342779869304861",
    "https://web.facebook.com/inflouis/videos/2455295587956363",
    "https://web.facebook.com/vaguedigitaleci/videos/1234064457216953/?_rdc=1&_rdr#"
  ];

  constructor(private sanitizer: DomSanitizer) { }

  getVideoUrl(video: string): SafeResourceUrl {
    const url = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video)}&show_text=0&width=500`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
