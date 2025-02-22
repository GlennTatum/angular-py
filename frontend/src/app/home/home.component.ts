import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MathfieldElement, Mathfield } from 'mathlive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    let mfe = new MathfieldElement();

    // Set initial value and options
    mfe.value = "\\frac{\\sin(x)}{\\cos(x)}";

    // Options can be set either as an attribute (for simple options)...
    mfe.setAttribute('virtual-keyboard-layout', 'dvorak');

    // Attach the element to the DOM
    let mathLiveDiv = document.getElementById("mathLive");
    mathLiveDiv.appendChild(mfe);
  }

}
