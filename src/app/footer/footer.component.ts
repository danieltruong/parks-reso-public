import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../shared/services/config.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterModule],
  standalone: true
})
export class FooterComponent implements OnInit {
  public hashVersion: string;
  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
    this.hashVersion = this.configService.config.hashVersion;
  }
}
