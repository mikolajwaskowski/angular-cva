import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { TooltipContentComponent } from 'src/app/components/tooltip-content/tooltip-content.component';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnInit {
  private overlayRef: OverlayRef | undefined;
  private tooltipRef: ComponentRef<TooltipContentComponent> | undefined;

  @Input('appTooltip') text = '';

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef,
    private overlayPositionBuilder: OverlayPositionBuilder
  ) {}

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
        },
      ]);
    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter') show() {
    this.attachTooltip(this.text);
  }

  @HostListener('mouseout') hide() {
    this.detachTooltip();
  }

  private attachTooltip(text: string): void {
    if (
      !this.overlayRef ||
      (this.overlayRef && this.overlayRef.hasAttached())
    ) {
      return;
    }
    const tooltipPortal = new ComponentPortal(TooltipContentComponent);
    this.tooltipRef = this.overlayRef.attach(tooltipPortal);
    this.tooltipRef.instance.text = text;
  }

  private detachTooltip(): void {
    if (!this.overlayRef) {
      return;
    }
    setTimeout(() => {
      this.overlayRef!.detach();
    }, 100);
  }
}
