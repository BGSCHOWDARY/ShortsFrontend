import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
// ...existing code...
import { ShortsService } from '../../services/shorts.service';

@Component({
  selector: 'app-shorts-list',
  templateUrl: './shorts-list.component.html',
  styleUrls: ['./shorts-list.component.css'],
  standalone: true,
  imports: [CommonModule, SafeUrlPipe]
})
export class ShortsListComponent implements OnInit {
  shorts: any[] = [];
  currentSongUrl = '';

  constructor(private shortsService: ShortsService) {}

  ngOnInit(): void {
    this.shortsService.getShorts().subscribe(data => this.shorts = data);
  }

  playSong(url: string): void {
    this.currentSongUrl = url;
  }
}
