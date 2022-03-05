import { Component, OnInit } from '@angular/core';

export interface IVerticalTimelineModel {
    id: string;
    time: Date;
    title: string;
    sub_title: string;
    image_thumbnail?: image_thumbnail[];
    badge_footer?: badge_footer[];
}

export interface image_thumbnail {
    image_id: string;
    image_url: string;
}

export interface badge_footer {
    badge_id: string;
    badge_class: string;
    badge_text: string;
}

@Component({
    selector: 'app-mol-vertical-timeline',
    templateUrl: './mol-vertical-timeline.component.html',
    styleUrls: ['./mol-vertical-timeline.component.css']
})
export class MolVerticalTimelineComponent implements OnInit {

    Timeline: IVerticalTimelineModel[];

    constructor() { }

    ngOnInit(): void {
        this.onGetTimeline();
    }

    onGetTimeline(): void {
        this.Timeline = [
            {
                id: '1',
                title: 'The Beginning',
                time: new Date("01-01-1982"),
                sub_title: 'Established under the Coal Contract of Work (CCOW) agreement with the Indonesian Government'
            },
            {
                id: '2',
                title: 'The Starting',
                time: new Date("01-01-1993"),
                sub_title: 'Begin commercial production at 3 million tons per year'
            },
            {
                id: '3',
                title: 'The Growing',
                time: new Date("01-01-2004"),
                sub_title: 'Diversification of all our share to Indonesian Partners'
            }
        ];
    }
}
