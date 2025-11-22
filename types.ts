
export interface Competency {
  id: string;
  name: string;
  highwayCode?: string;
  description?: string;
}

export interface CompetencyGroup {
  category: string;
  items: Competency[];
  noTitle?: boolean; // For groups that don't show a header in the UI
}

export interface FaultState {
  minor: number;
  serious: boolean;
  dangerous: boolean;
}

export type TestData = Record<string, FaultState>;

export enum TestStatus {
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  FINISHED = 'FINISHED',
}

export interface ManoeuvreState {
  reverseRight: boolean;
  reverseParkRoad: boolean;
  reverseParkCarpark: boolean;
  forwardPark: boolean;
}

export interface EtaState {
  physical: boolean;
  verbal: boolean;
}

export interface EcoState {
  control: boolean;
  planning: boolean;
}

export interface CandidateDetails {
  name: string;
  category: string;
  appRef: string;
  date: string;
  driverNo: string;
  time: string;
  instructorReg: string;
  vehicleReg: string;
}
