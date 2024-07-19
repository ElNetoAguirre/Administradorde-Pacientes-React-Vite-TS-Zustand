import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"
import { v4 as uuidv4 } from "uuid"
import { DraftPatient, Patient } from "../types"

type PatientState = {
  patients: Patient[]
  activeId: Patient["id"]
  addPatient:(data: DraftPatient) => void
  deletePatient: (id: Patient["id"]) => void
  getPatientById:(id: Patient["id"]) => void
  updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
  return {... patient, id: uuidv4()}
}

export const usePatientStore = create<PatientState>()<[["zustand/devtools", never], ["zustand/persist", unknown]]>(
  devtools(
    persist(
      (set) => ({
        patients: [],
        activeId: "",
        addPatient: (data) => {
          const newPatient = createPatient(data)
          set((state) => ({
            patients: [...state.patients, newPatient]
          }), false, {type: 'addPatient'})
        },

        deletePatient: (id) => {
          set((state) => ({
            patients: state.patients.filter(patient => patient.id !== id)
          }), false, {type: 'deletePatient'})
        },

        getPatientById: (id) => {
          set(() => ({
            activeId: id
          }), false, {type: 'getPatientById'})
        },

        updatePatient: (data) => {
          set((state) => ({
            patients: state.patients.map(patient => patient.id === state.activeId ? {id: state.activeId, ...data} : patient),
            activeId: ""
          }), false, {type: 'updatePatient'})
        }
      }), {
        name: "patient-storage",
        // SI quieres que la información sea guardada en la sesión
        // storage: createJSONStorage(() => sessionStorage)
      }
    )
  )
)