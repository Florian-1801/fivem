import { Component, Input } from '@angular/core';
import { GameService } from '../game.service';
import { Tweet } from './tweet.service';

@Component({
    moduleId: module.id,
    selector: 'app-home-tweet',
    templateUrl: 'home-tweet.component.html',
    styleUrls: ['./home-tweet.component.scss']
})

export class HomeTweetComponent {
    @Input()
    public tweet: Tweet;

    constructor(private gameService: GameService) {

    }

    openTweet(id) {
        this.gameService.openUrl('https://twitter.com/_FiveM/status/' + id);
    }

    clickContent(event: MouseEvent) {
        if (event.srcElement.localName === 'a') {
            this.gameService.openUrl(event.srcElement.getAttribute('href'));

            event.preventDefault();
        }
    }
}
