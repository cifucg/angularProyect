import { Component, AfterViewInit } from '@angular/core';
import { HttpService } from '../shared/config/http.service';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
declare var require: any;

const data: any = require('./data.json');

export interface Chart {
	type: ChartType;
	data: Chartist.IChartistData;
	options?: any;
	responsiveOptions?: any;
	events?: ChartEvent;
}

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

	constructor(
		private http: HttpService
	){}
	ngAfterViewInit() {}

	// Barchart
	barChart1: Chart = {
		type: 'Bar',
		data: data['Bar'],
		options: {
			seriesBarDistance: 10,
			high: 10,
			horizontalBars: true,
			axisX: {
				showGrid: true,
				offset: 20
			},
			axisY: {
				showGrid: false,
				offset: 100
			},
			height: 360
		},

		responsiveOptions: [
			[
				'screen and (min-width: 640px)',
				{
					axisX: {
						labelInterpolationFnc: function(
							value: number,
							index: number
						): string {
							return index % 1 === 0 ? `${value}` : null;
						}
					}
				}
			]
		]
	};

	// This is for the donute chart
	donuteChart1: Chart = {
		type: 'Pie',
		data: data['Pie'],
		options: {
			donut: true,
			height: 250,
			showLabel: false,
			donutWidth: 20
		}
	};

	ngOnInit(){
		this.http.get('prueba', {"username": "Manu"}).subscribe(
			result => {
				console.log(result);
			}
		)

	}

	public onFollow(){
		window.open("https://www.linkedin.com/in/cristian-cifuentes-34496914a", "_blank");
	}

	public goToArticle(){
		window.open("https://link.springer.com/chapter/10.1007/978-3-030-36150-1_55");
	}

	public goToCajamar(){
		window.open("https://www.cajamardatalab.com/datathon-cajamar-universityhack-2020/");
	}
}
