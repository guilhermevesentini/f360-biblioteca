import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {

    @Prop() text: string;
    @Prop() class: string

  render() {
    return <button class={this.class}>{this.text}</button>;
  }
}
