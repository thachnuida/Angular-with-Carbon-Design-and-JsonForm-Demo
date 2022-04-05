import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MeterChartOptions } from '@carbon/charts/interfaces';
import  * as CarbonColors  from '@carbon/colors';

@Component({
  selector: 'status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit, OnChanges {

  @Input() cardTitle = '';
  @Input() stats = '';
  @Input() statsDescription = '';
  @Input() tooltip = '';
  @Input() progress?: ProgressItemInterface[];

  chartOptions: MeterChartOptions = {
    height: "16px",
    toolbar: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    meter: {
      showLabels: false,
      proportional: {
        total: 100,
        unit: '%'
      }
    },
    color: {
      scale: {}
    }
  }

  chartData: any = [];

  colors = [CarbonColors.red60, CarbonColors.yellow, CarbonColors.green60];

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.progress) {
      this.chartData = [];
      let sum = 0;
      this.progress?.forEach(item => sum += item.value);
      (this.chartOptions?.color as any).scale = {};

      this.progress?.forEach((item, index) => {
        this.chartData.push({
          value: Math.round(item.value / sum * 100 * 100) / 100,
          group: item.tooltip
        });
        (this.chartOptions?.color as any).scale[item.tooltip] = this.colors[index];
      })
    }
  }
}

interface ProgressItemInterface {
  value: number;
  tooltip: string;
}