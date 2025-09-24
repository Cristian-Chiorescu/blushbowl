import { create } from "zustand";

type ApiStatus = "live" | "mock";

type ApiStatusState = {
  status: ApiStatus;
  setStatus: (status: ApiStatus) => void;
};

export const useApiStatusStore = create<ApiStatusState>((set) => ({
  status: "live",
  setStatus: (status) => set({ status }),
}));
