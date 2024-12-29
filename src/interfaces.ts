export interface IInterview {
  id: string
  company: string
  vacancyLink: string
  hrName: string
  contactTelegram?: string
  contactPhone?: string
  contactWhatsApp?: string
  createdAt: Date
  salaryFrom?: number
  salaryTo?: number
  stages: IStage[]
  result?: 'Refusal' | 'Offer'
}

export interface IStage {
  name: string
  date: null | Date
  description: string
}
