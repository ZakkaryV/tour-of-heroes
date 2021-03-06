import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService }              from './hero.service';

@Component({
    selector: 'my-hero-detail',
    moduleId: module.id,
    templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    constructor(
        private heroService: HeroService,
        private route      : ActivatedRoute,
        private location   : Location
    ) { }

    goBack(): void { 
        this.location.back();
    }

    @Input()
    hero: Hero;
}