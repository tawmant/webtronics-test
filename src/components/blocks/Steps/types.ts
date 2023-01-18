export interface IStep {
  id: number
  stepNumber: number
  title: string
  description: string
}

export type TSteps = IStep[]