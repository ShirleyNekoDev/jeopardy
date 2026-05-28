import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'game-main.page.html',
})
export class GameMainPage {
}
