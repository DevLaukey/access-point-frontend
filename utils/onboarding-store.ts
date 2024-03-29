import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { pages } from "./onboarding-routing";

export type OnboardingStore = {
  name: string,
  email: string,
  phoneNumber: string,
  income: string,
  currentPageIndex: number,
  firstOnboardingPage: string,
  nextOnboardingPage: string,
  nameValid: boolean,
  emailValid: boolean,
  phoneNumberValid: boolean,
  incomeValid: boolean,
  reset: () => void,

  setName: (name: string) => void,
  setEmail: (email: string) => void,
  setPhoneNumber: (phoneNumber: string) => void,
  setIncome: (income: string) => void,
  setCurrentPageIndex: (page: number) => void,
  setNameValid: (valid: boolean) => void,
  setEmailValid: (valid: boolean) => void,
  setPhoneNumberValid: (valid: boolean) => void,
  setIncomeValid: (valid: boolean) => void,
};

type OnboardingStoreState = {
  $$storeMutators?: Array<[(state: OnboardingStore) => void, string]>,
} & OnboardingStore;

export const useOnboardingStore = create(
  persist <
    OnboardingStoreState >
    ((set) => ({
      name: "",
      email: "",
      phoneNumber: "",
      income: "",
      currentPageIndex: 0,
      firstOnboardingPage: pages[0],
      nextOnboardingPage: pages[1],
      nameValid: false,
      emailValid: false,
      phoneNumberValid: false,
      incomeValid: false,

      setName: (name) => set({ name }),
      setEmail: (email) => set({ email }),
      setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
      setIncome: (income) => set({ income }),
      setCurrentPageIndex: (currentPageIndex) => {
        set({ currentPageIndex });
        set({ nextOnboardingPage: pages[currentPageIndex + 1] });
      },
      setNameValid: (nameValid) => set({ nameValid }),
      setEmailValid: (emailValid) => set({ emailValid }),
      setPhoneNumberValid: (phoneNumberValid) => set({ phoneNumberValid }),
      setIncomeValid: (incomeValid) => set({ incomeValid }),
      reset: () => {
        set({
          name: "",
          email: "",
          phoneNumber: "",
          income: "",
          currentPageIndex: 0,
          firstOnboardingPage: pages[0],
          nextOnboardingPage: pages[1],
          nameValid: false,
          emailValid: false,
          phoneNumberValid: false,
          incomeValid: false,
        });
      },
    }),
    {
      name: "onboarding-storage",
      storage: createJSONStorage(() => sessionStorage),
    })
);
