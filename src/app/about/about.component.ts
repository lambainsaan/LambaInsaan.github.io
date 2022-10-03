import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { StreamState } from 'src/app/interfaces/stream-state';
import { AudioService } from 'src/app/services/audio.service';
import { CloudService } from 'src/app/services/cloud.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  files: Array<any> = [];
  state: StreamState | undefined;
  currentFile: any = {};


  constructor(
    public audioService: AudioService,
    public cloudService: CloudService,
  ) {
    // get media files
    cloudService.getFiles().subscribe(files => {
      this.files = files;
    });

    // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }
  ngOnInit(): void {
    // @ts-ignore
    let twttr: any = window["twttr"];

    setTimeout(
      () => {
        twttr.widgets.createTweetEmbed('1040835897111920642', document.getElementById('lambainsaan-meaning-tweet'), {
          theme: 'light'
        })
      }
    )
  }

  playStream(url: string) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file: { url: string; }, index: any) {
    // this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.openFile({
      url: 'https://onedrive.live.com/download?cid=39643EE1C00039E0&resid=39643ee1c00039e0%21120397&authkey=ADa3x13177Ph9EM'
    }, 0)
    // this.openFile()
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  get playing () {
    return this.state?.playing;
  }


  // next() {
  //   const index = this.currentFile.index + 1;
  //   const file = this.files[index];
  //   this.openFile(file, index);
  // }


  // previous() {
  //   const index = this.currentFile.index - 1;
  //   const file = this.files[index];
  //   this.openFile(file, index);
  // }

  // isFirstPlaying() {
  //   return this.currentFile.index === 0;
  // }

  // isLastPlaying() {
  //   return this.currentFile.index === this.files.length - 1;
  // }


  onSliderChangeEnd(change: { value: number; }) {
    this.audioService.seekTo(change.value);
  }

}
