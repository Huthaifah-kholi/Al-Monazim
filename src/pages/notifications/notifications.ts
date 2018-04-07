import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LockScreenProvider } from '../../providers/lock-screen/lock-screen';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { YoutubePipe } from '../../pipes/youtube/youtube';
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {

  video_id: any;
  vedios: any[] =[
    {
      title: 'كرتون التعاون',
      vedio: 'https://www.youtube.com/embed/j92hFcXDDNc'
    },
    {
      title: 'اهمية الوقت',
      vedio: 'https://www.youtube.com/embed/Vc7C1tIQEaU'
    },
    {
      title: 'كرتون جميل ',
      vedio: 'https://www.youtube.com/embed/P_F7jjEg5vg'
    }
  ]
  constructor() {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoSinglePage');
  }


}
