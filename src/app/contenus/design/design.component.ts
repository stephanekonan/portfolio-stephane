import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent {

  images = [
    "https://scontent.fabj2-1.fna.fbcdn.net/v/t39.30808-6/403758614_392806303334930_802617823494342163_n.jpg?stp=dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEYzoMQENvLANwNO69kli_LnMBkPFXGRjWcwGQ8VcZGNQRPV9nLrBA1I52h1iwnNbmo7dqfzsWYuL1fa_-pVXyK&_nc_ohc=aye94eb4vtYQ7kNvgHyA947&_nc_zt=23&_nc_ht=scontent.fabj2-1.fna&_nc_gid=AxmRm7Ekboz1mZvyt6bS6Qr&oh=00_AYB_XZT4l9S2ZySD09OVsShib9he_TE0ajTgxi7hne-PyA&oe=672C20A5",
    "https://scontent.fabj1-1.fna.fbcdn.net/v/t39.30808-6/403734753_392807633334797_2448521330515777146_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGt1fQnDrRcsjXqsgsWtvmFv-PGj3nzPAe_48aPefM8B5Z8kJxt9snHKgDChhFUcrM5UJCT1kfdEqF2UuFB3LcU&_nc_ohc=Ap8H4ctVUWwQ7kNvgHV2h58&_nc_zt=23&_nc_ht=scontent.fabj1-1.fna&_nc_gid=AEZbIrXbyB5Bzvu1n3la03Y&oh=00_AYCG-whSTE0bcVa9iYm3FGwFMKsfpSG_gYiBqLq6jUH5Wg&oe=672C1173",
    "https://scontent.fabj2-1.fna.fbcdn.net/v/t39.30808-6/279032819_134375529175083_7447587664642603982_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGdqGc6LMm3MA9ey6iq8DR7bmmnt9HaCjZuaae30doKNn0Tcbqn9RLhMukZzVhLusrM7iElGddOzSHgc-lavT9X&_nc_ohc=NDk8xcoPVk8Q7kNvgGIfzKI&_nc_zt=23&_nc_ht=scontent.fabj2-1.fna&_nc_gid=A-7qB8MqabE-9f83mV0M928&oh=00_AYBUC42-tXx_OxkV8vLjNktoiO2qjIDnsEMKDu9R5dN8hQ&oe=672C146C",
    "https://scontent.fabj1-1.fna.fbcdn.net/v/t39.30808-6/333578829_170228035794697_886961092044191968_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHWldYAGS1r7LDUoQEjJPKHcUjNAoFkpzZxSM0CgWSnNg1SVu0tzqCS4y1QLiayw1k8vxI9PkxONd5HhWCJK6lK&_nc_ohc=rdSh1hxESPYQ7kNvgEAMW4z&_nc_zt=23&_nc_ht=scontent.fabj1-1.fna&_nc_gid=AJOTJVwd0e69Law02BET5th&oh=00_AYBOuJF3T88lKhsGf_ePZhcdZ6Ezt0Rd8XYSl-G9OasAHg&oe=672C05D0",
    "https://scontent.fabj1-1.fna.fbcdn.net/v/t39.30808-6/403832695_392811793334381_4526815947791116574_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEDxaJTUay0CAd9I-1WRe9tXyn5EQzFJRNfKfkRDMUlEwaL0XQrAT33VktP2rsP7ScbRRPUQ6WfM1FzgePnaFO6&_nc_ohc=_NWAfcZv57cQ7kNvgFAVfLG&_nc_zt=23&_nc_ht=scontent.fabj1-1.fna&_nc_gid=AGmqUafOjB8GAWCGoEB7tXb&oh=00_AYDeg5k4qygxjIebtRaLbwJhzBrE6mXUiGQqe8R1aCQOUw&oe=672C0405",
    "https://scontent.fabj1-1.fna.fbcdn.net/v/t39.30808-6/332901616_217470367438824_1072999914826651297_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGNUFP1-OmmLVuX_TQWqjUy17FiS4CVwrLXsWJLgJXCsuWw_FU4vs16HpesVsjbisBVshyLSM96zC4YjCUzf01M&_nc_ohc=Ix-y4te8yJ4Q7kNvgHk8YEw&_nc_zt=23&_nc_ht=scontent.fabj1-1.fna&_nc_gid=AaupJs4hsxoIxY841uEFVu9&oh=00_AYBN88DvD_GMhr15oDM2YMLGKh3JwNA5xQFG-56Yr5ZuTQ&oe=672C2B8C",
    "https://scontent.fabj1-1.fna.fbcdn.net/v/t39.30808-6/405064720_392817540000473_1609203238513377959_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_aid=0&_nc_eui2=AeHyWR-w-Z_VcWlc6JIm8ZrAjWF7VOkFotmNYXtU6QWi2TEKnv5NfKtnz4mUJi8yUuRPBmqiXvuXle7oTaETgoY9&_nc_ohc=Q3AuGrVh_wUQ7kNvgG56RQT&_nc_zt=23&_nc_ht=scontent.fabj1-1.fna&_nc_gid=Azpzco9hticVX3h-N-pi-l9&oh=00_AYD0kMYnsQT99YT1JfTWcSi5QYBmWdIvA2yf90Hm3KFQjw&oe=672C07E7",
    "https://scontent.fabj1-1.fna.fbcdn.net/v/t39.30808-6/405749185_392817706667123_4765651198243152674_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEaEzFOjZuln3gH1VDyPAn0kXIC0vXtorqRcgLS9e2iuj_xWTptE-aSkJdK_i8ZpujXskKh-qPCZqPsK8OXm57Q&_nc_ohc=J4-VPKhecjgQ7kNvgE-ealV&_nc_zt=23&_nc_ht=scontent.fabj1-1.fna&_nc_gid=A7mBI4mZk3a8BMRx3eQY1t8&oh=00_AYDwVJ1W-q3f1SVygbBuXYki1YXxH8tcOC0qP4CmGW9TMg&oe=672C324D"
  ]

}
