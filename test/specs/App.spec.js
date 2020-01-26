import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import App from '@/App'

// mount our App component
// and verify that it has the “.center-content” class
test('App has a .center-content class', () => {
  const vue = createLocalVue()
  const app = mount(App, {
    vue
  })
  expect(app.classes()).toContain('center-content')
})