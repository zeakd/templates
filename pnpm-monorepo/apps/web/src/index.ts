import { Button, Card } from '@repo/ui'
import { capitalize, formatDate, chunk } from '@repo/utils'

console.log('🚀 Web App Started')

// UI Components Demo
const button = new Button({
  label: capitalize('click me'),
  variant: 'primary',
})

const card = new Card({
  title: 'Welcome to Monorepo',
  content: 'This is an example web application using shared packages.',
  footer: `Generated on ${formatDate(new Date())}`,
})

console.log('\n📦 UI Components:')
console.log('Button:', button.render())
console.log('Card:', card.render())

// Utils Demo
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const chunks = chunk(data, 3)

console.log('\n🔧 Utils Demo:')
console.log('Original array:', data)
console.log('Chunked by 3:', chunks)