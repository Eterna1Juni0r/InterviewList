import Calendar from '@primevue/calemdar'

declare module 'vue' {
  export interface GlobalComponents {
    'app-calendar': typeof Calendar
  }
}
