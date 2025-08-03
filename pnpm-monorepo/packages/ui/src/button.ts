export interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export class Button {
  constructor(private props: ButtonProps) {}

  render() {
    return `<button class="btn btn-${this.props.variant || 'primary'}" ${this.props.disabled ? 'disabled' : ''}>${this.props.label}</button>`
  }
}