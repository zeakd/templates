export interface CardProps {
  title: string
  content: string
  footer?: string
}

export class Card {
  constructor(private props: CardProps) {}

  render() {
    return `
      <div class="card">
        <h3 class="card-title">${this.props.title}</h3>
        <div class="card-content">${this.props.content}</div>
        ${this.props.footer ? `<div class="card-footer">${this.props.footer}</div>` : ''}
      </div>
    `
  }
}